from django.urls import path

from .views import CurriculumRootView


urlpatterns = [
    path("", CurriculumRootView.as_view(), name="curriculum-root"),
]
