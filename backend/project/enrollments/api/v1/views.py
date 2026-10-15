from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView


class EnrollmentsRootView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response({
            "module": "enrollments",
            "status": "scaffolded",
            "version": "v1",
            "description": "Student Course & Module Enrollments and Progress domain",
        })
