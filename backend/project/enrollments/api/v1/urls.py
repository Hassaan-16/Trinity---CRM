from django.urls import path

from .views import EnrollmentsRootView


urlpatterns = [
    path("", EnrollmentsRootView.as_view(), name="enrollments-root"),
]
