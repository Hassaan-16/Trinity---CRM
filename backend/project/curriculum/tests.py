from django.test import TestCase
from rest_framework.test import APIClient


class CurriculumScaffoldTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_curriculum_root_endpoint(self):
        response = self.client.get("/api/v1/curriculum/")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["module"], "curriculum")
        self.assertEqual(response.json()["status"], "scaffolded")
