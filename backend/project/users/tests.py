from django.contrib.auth import get_user_model
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from rest_framework.views import APIView
from rest_framework.response import Response

from project.users.models import UserRole
from project.users.permissions import IsAdminRole, IsStudentRole, IsSelfOrAdmin

User = get_user_model()


class MockAdminProtectedView(APIView):
    permission_classes = [IsAdminRole]

    def get(self, request):
        return Response({"status": "admin_granted"})


class MockStudentProtectedView(APIView):
    permission_classes = [IsStudentRole]

    def get(self, request):
        return Response({"status": "student_granted"})


class UserRegistrationAndAuthTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.registration_url = "/api/v1/users/registration/"
        self.login_url = "/api/v1/users/login/"
        self.logout_url = "/api/v1/users/logout/"
        self.profile_url = "/api/v1/users/user/"
        self.token_refresh_url = "/api/v1/users/token/refresh/"

    def test_user_registration_success(self):
        payload = {
            "email": "candidate@trinityaviation.com",
            "password": "StrongPassword123!",
            "full_name": "John Doe",
            "place_of_birth_country": "Germany",
            "phone": "+491234567890",
        }
        response = self.client.post(self.registration_url, payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        self.assertIn("access", response.data)

        # Verify DB persistence
        user = User.objects.get(email="candidate@trinityaviation.com")
        self.assertEqual(user.full_name, "John Doe")
        self.assertEqual(user.place_of_birth_country, "Germany")
        self.assertEqual(user.phone, "+491234567890")
        self.assertEqual(user.role, UserRole.STUDENT)
        self.assertTrue(user.is_student_role)
        self.assertFalse(user.is_admin_role)

    def test_user_registration_duplicate_email(self):
        User.objects.create_user(
            email="existing@trinityaviation.com",
            password="StrongPassword123!",
            full_name="Existing User",
        )
        payload = {
            "email": "existing@trinityaviation.com",
            "password": "AnotherPassword123!",
            "full_name": "Another User",
        }
        response = self.client.post(self.registration_url, payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_user_registration_missing_mandatory_fields(self):
        # Missing full_name
        payload = {
            "email": "noname@trinityaviation.com",
            "password": "StrongPassword123!",
        }
        response = self.client.post(self.registration_url, payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_user_login_and_token_refresh(self):
        user = User.objects.create_user(
            email="pilot@trinityaviation.com",
            password="AviationPassword123!",
            full_name="Jane Doe",
            place_of_birth_country="Austria",
            phone="+4312345678",
        )
        login_payload = {
            "email": "pilot@trinityaviation.com",
            "password": "AviationPassword123!",
        }
        response = self.client.post(self.login_url, login_payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertIn("access", response.data)
        self.assertIn("refresh", response.data)
        access_token = response.data["access"]
        refresh_token = response.data["refresh"]

        # Test profile retrieval with JWT
        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {access_token}")
        profile_res = self.client.get(self.profile_url)
        self.assertEqual(profile_res.status_code, status.HTTP_200_OK)
        self.assertEqual(profile_res.data["email"], "pilot@trinityaviation.com")
        self.assertEqual(profile_res.data["full_name"], "Jane Doe")
        self.assertEqual(profile_res.data["place_of_birth_country"], "Austria")
        self.assertEqual(profile_res.data["role"], UserRole.STUDENT)

        # Test token refresh
        self.client.credentials()  # Unset authorization header
        refresh_res = self.client.post(self.token_refresh_url, {"refresh": refresh_token}, format="json")
        self.assertEqual(refresh_res.status_code, status.HTTP_200_OK)
        self.assertIn("access", refresh_res.data)

    def test_user_login_invalid_credentials(self):
        User.objects.create_user(
            email="valid@trinityaviation.com",
            password="CorrectPassword123!",
            full_name="Valid Candidate",
        )
        bad_login = {
            "email": "valid@trinityaviation.com",
            "password": "WrongPassword!",
        }
        response = self.client.post(self.login_url, bad_login, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_unauthenticated_profile_access_denied(self):
        response = self.client.get(self.profile_url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)


class RolePermissionsTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.student_user = User.objects.create_user(
            email="student@trinityaviation.com",
            password="Password123!",
            full_name="Student One",
            role=UserRole.STUDENT,
        )
        self.admin_user = User.objects.create_superuser(
            email="admin@trinityaviation.com",
            password="AdminPassword123!",
            full_name="Admin Chief",
        )

    def test_role_properties(self):
        self.assertTrue(self.student_user.is_student_role)
        self.assertFalse(self.student_user.is_admin_role)

        self.assertTrue(self.admin_user.is_admin_role)
        self.assertFalse(self.admin_user.is_student_role)

    def test_permission_classes_evaluation(self):
        admin_perm = IsAdminRole()
        student_perm = IsStudentRole()

        class DummyRequest:
            def __init__(self, user):
                self.user = user

        student_req = DummyRequest(self.student_user)
        admin_req = DummyRequest(self.admin_user)

        self.assertTrue(student_perm.has_permission(student_req, None))
        self.assertFalse(student_perm.has_permission(admin_req, None))

        self.assertTrue(admin_perm.has_permission(admin_req, None))
        self.assertFalse(admin_perm.has_permission(student_req, None))

    def test_is_self_or_admin_permission(self):
        perm = IsSelfOrAdmin()
        other_student = User.objects.create_user(
            email="other@trinityaviation.com",
            password="Password123!",
            full_name="Other Student",
            role=UserRole.STUDENT,
        )

        class DummyRequest:
            def __init__(self, user):
                self.user = user

        student_req = DummyRequest(self.student_user)
        admin_req = DummyRequest(self.admin_user)

        # Student accessing themselves: Allowed
        self.assertTrue(perm.has_object_permission(student_req, None, self.student_user))
        # Student accessing another student: Denied
        self.assertFalse(perm.has_object_permission(student_req, None, other_student))
        # Admin accessing student: Allowed
        self.assertTrue(perm.has_object_permission(admin_req, None, self.student_user))
        self.assertTrue(perm.has_object_permission(admin_req, None, other_student))


class UserProfileUpdateAndSecurityTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.profile_url = "/api/v1/users/user/"
        self.user = User.objects.create_user(
            email="cadet@trinityaviation.com",
            password="CadetPassword123!",
            full_name="Cadet Alex",
            place_of_birth_country="France",
            phone="+3312345678",
            role=UserRole.STUDENT,
        )
        self.client.force_authenticate(user=self.user)

    def test_user_profile_partial_update(self):
        patch_payload = {
            "phone": "+3398765432",
            "place_of_birth_country": "Belgium",
            "full_name": "Alexander Cadet",
        }
        response = self.client.patch(self.profile_url, patch_payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.user.refresh_from_db()
        self.assertEqual(self.user.phone, "+3398765432")
        self.assertEqual(self.user.place_of_birth_country, "Belgium")
        self.assertEqual(self.user.full_name, "Alexander Cadet")

    def test_user_cannot_escalate_role_via_profile_patch(self):
        exploit_payload = {
            "role": "ADMIN",
            "is_staff": True,
            "is_superuser": True,
        }
        response = self.client.patch(self.profile_url, exploit_payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.user.refresh_from_db()
        # Role must remain STUDENT and staff/superuser must remain False
        self.assertEqual(self.user.role, UserRole.STUDENT)
        self.assertFalse(self.user.is_staff)
        self.assertFalse(self.user.is_superuser)

    def test_google_social_login_endpoint_active(self):
        from allauth.socialaccount.models import SocialApp
        from django.contrib.sites.models import Site

        site = Site.objects.get_current()
        app, _ = SocialApp.objects.get_or_create(
            provider="google",
            defaults={"name": "Google", "client_id": "google-dev-id", "secret": "google-dev-secret"},
        )
        app.sites.add(site)

        # Empty payload to Google OAuth exchange endpoint
        response = self.client.post("/api/v1/users/registration/google/", {}, format="json")
        # Should return 400 Bad Request indicating the endpoint is mounted and validating payload
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_cors_preflight_handshake(self):
        response = self.client.options(
            "/api/v1/users/login/",
            HTTP_ORIGIN="http://localhost:5173",
            HTTP_ACCESS_CONTROL_REQUEST_METHOD="POST",
        )
        self.assertIn(response.status_code, [status.HTTP_200_OK, status.HTTP_204_NO_CONTENT])
        self.assertEqual(response.get("Access-Control-Allow-Origin"), "http://localhost:5173")
