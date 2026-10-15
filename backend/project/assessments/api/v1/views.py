from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView


class AssessmentsRootView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response({
            "module": "assessments",
            "status": "scaffolded",
            "version": "v1",
            "description": "Examination & Question Bank domain",
        })
