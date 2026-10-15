from django.urls import include, path
from rest_framework_simplejwt.views import TokenRefreshView

from .views import DeleteAccountAPIView, GoogleSocialLoginView


urlpatterns = [
    path("registration/google/", GoogleSocialLoginView.as_view(), name="google_login"),
    path("registration/", include("dj_rest_auth.registration.urls")),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("delete-account/", DeleteAccountAPIView.as_view(), name="delete_account"),
    path("", include("dj_rest_auth.urls")),
]
