from django.test import TestCase
from rest_framework.test import APIClient


class EnrollmentsScaffoldTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_enrollments_root_endpoint(self):
        response = self.client.get("/api/v1/enrollments/")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["module"], "enrollments")
        self.assertEqual(response.json()["status"], "scaffolded")
