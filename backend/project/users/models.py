import uuid
from typing import ClassVar

from django.contrib.auth.models import AbstractUser
from django.db import models

from .fields import EmailField
from .managers import UserManager


class UserRole(models.TextChoices):
    ADMIN = "ADMIN", "Administrator / Registrar"
    STUDENT = "STUDENT", "Aviation Student / Candidate"


class User(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = EmailField(unique=True, verbose_name="Email Address")
    full_name = models.CharField(max_length=255, verbose_name="Full Name")
    phone = models.CharField(max_length=30, blank=True, default="", verbose_name="Phone Number")
    place_of_birth_country = models.CharField(
        max_length=100,
        blank=True,
        default="",
        verbose_name="Place of Birth (Country)",
    )
    role = models.CharField(
        max_length=20,
        choices=UserRole.choices,
        default=UserRole.STUDENT,
        verbose_name="User Role",
    )

    username = None
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS: ClassVar[list[str]] = ["full_name"]

    objects = UserManager()

    @property
    def is_admin_role(self) -> bool:
        return self.role == UserRole.ADMIN or self.is_superuser

    @property
    def is_student_role(self) -> bool:
        return self.role == UserRole.STUDENT

    def save(self, *args, **kwargs):
        if self.full_name:
            if not self.first_name and not self.last_name:
                parts = self.full_name.strip().split(" ", 1)
                self.first_name = parts[0]
                self.last_name = parts[1] if len(parts) > 1 else ""
        elif self.first_name or self.last_name:
            self.full_name = f"{self.first_name} {self.last_name}".strip()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.email} ({self.get_role_display()})"
