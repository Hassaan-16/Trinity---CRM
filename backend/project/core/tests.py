from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from project.core.models import BaseModel
from project.core.paginations import StandardResultsSetPagination


class CoreBaseModelAndHealthTests(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_health_check_endpoint(self):
        response = self.client.get("/api/v1/core/health/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_standard_pagination_attributes(self):
        paginator = StandardResultsSetPagination()
        self.assertEqual(paginator.page_size, 20)
        self.assertEqual(paginator.max_page_size, 100)
        self.assertEqual(paginator.page_size_query_param, "page_size")

    def test_base_model_fields(self):
        self.assertTrue(BaseModel._meta.abstract)
        field_names = [f.name for f in BaseModel._meta.fields]
        self.assertIn("id", field_names)
        self.assertIn("created_at", field_names)
        self.assertIn("updated_at", field_names)
