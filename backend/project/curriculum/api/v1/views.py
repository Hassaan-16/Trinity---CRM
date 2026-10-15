from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView


class CurriculumRootView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response({
            "module": "curriculum",
            "status": "scaffolded",
            "version": "v1",
            "description": "EASA Part-66 Modules & Part-145 Courses domain",
        })
