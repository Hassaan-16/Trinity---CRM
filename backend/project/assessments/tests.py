from django.test import TestCase
from rest_framework.test import APIClient


class AssessmentsScaffoldTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_assessments_root_endpoint(self):
        response = self.client.get("/api/v1/assessments/")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["module"], "assessments")
        self.assertEqual(response.json()["status"], "scaffolded")
