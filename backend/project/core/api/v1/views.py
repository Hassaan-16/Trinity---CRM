import json
import logging
from typing import ClassVar

from django.http import JsonResponse
from health_check.views import MainView
from rest_framework import status
from rest_framework.views import APIView


logger = logging.getLogger("project")


class HealthAPIView(MainView, APIView):
    authentication_classes: ClassVar[list] = []
    permission_classes: ClassVar[list] = []

    def get(self, _request, *_args, **_kwargs):
        status_code = status.HTTP_500_INTERNAL_SERVER_ERROR if self.errors else status.HTTP_200_OK
        response = self.render_to_response_json(self.plugins, status_code)
        if status_code == status.HTTP_500_INTERNAL_SERVER_ERROR:
            logger.info(f"Django health check response: {response.content}")

        try:
            data = json.loads(response.content.decode("utf-8"))
        except Exception:
            data = {"status": "ok" if status_code == 200 else "error"}
        return JsonResponse(data, status=status_code)
