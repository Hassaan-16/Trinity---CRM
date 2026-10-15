from dj_rest_auth.registration.serializers import (
    RegisterSerializer as DJRestAuthRegisterSerializer,
)
from dj_rest_auth.serializers import (
    UserDetailsSerializer as DJRestAuthUserDetailsSerializer,
)
from rest_framework import serializers

from project.users.models import User, UserRole


class RegisterSerializer(DJRestAuthRegisterSerializer):
    username = serializers.CharField(required=False, allow_blank=True)
    full_name = serializers.CharField(max_length=255, required=True)
    phone = serializers.CharField(max_length=30, required=False, allow_blank=True, default="")
    place_of_birth_country = serializers.CharField(max_length=100, required=False, allow_blank=True, default="")

    def to_internal_value(self, data):
        # Normalize payload to allow 'password' as an alternative to 'password1'/'password2'
        data = data.copy() if hasattr(data, "copy") else dict(data)
        if "password" in data and "password1" not in data:
            data["password1"] = data["password"]
        if "password1" in data and "password2" not in data:
            data["password2"] = data["password1"]
        return super().to_internal_value(data)

    def validate_email(self, email):
        email = super().validate_email(email)
        if User.objects.filter(email__iexact=email).exists():
            raise serializers.ValidationError("A user with this email address already exists.")
        return email

    def get_cleaned_data(self):
        data = super().get_cleaned_data()
        data["full_name"] = self.validated_data.get("full_name", "")
        data["phone"] = self.validated_data.get("phone", "")
        data["place_of_birth_country"] = self.validated_data.get("place_of_birth_country", "")
        return data

    def custom_signup(self, request, user):
        user.full_name = self.cleaned_data.get("full_name", "")
        user.phone = self.cleaned_data.get("phone", "")
        user.place_of_birth_country = self.cleaned_data.get("place_of_birth_country", "")
        user.role = UserRole.STUDENT
        user.save()


class UserDetailsSerializer(DJRestAuthUserDetailsSerializer):
    class Meta(DJRestAuthUserDetailsSerializer.Meta):
        model = User
        fields = (
            "id",
            "email",
            "full_name",
            "phone",
            "place_of_birth_country",
            "role",
            "is_staff",
            "is_superuser",
        )
        read_only_fields = ("id", "email", "role", "is_staff", "is_superuser")


class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("full_name", "phone", "place_of_birth_country")
