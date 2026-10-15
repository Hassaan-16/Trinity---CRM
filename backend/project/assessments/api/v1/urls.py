from django.urls import path

from .views import AssessmentsRootView


urlpatterns = [
    path("", AssessmentsRootView.as_view(), name="assessments-root"),
]
