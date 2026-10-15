from rest_framework.permissions import BasePermission
from project.users.models import UserRole


class IsAdminRole(BasePermission):
    """
    Grants access only to users with the ADMIN role or superuser/staff status.
    """

    def has_permission(self, request, view):
        return bool(
            request.user
            and request.user.is_authenticated
            and (
                request.user.role == UserRole.ADMIN
                or request.user.is_superuser
                or request.user.is_staff
            )
        )


class IsStudentRole(BasePermission):
    """
    Grants access only to users with the STUDENT role.
    """

    def has_permission(self, request, view):
        return bool(
            request.user
            and request.user.is_authenticated
            and request.user.role == UserRole.STUDENT
        )


class IsSelfOrAdmin(BasePermission):
    """
    Grants access to the user themselves, or any admin user.
    """

    def has_object_permission(self, request, view, obj):
        if not request.user or not request.user.is_authenticated:
            return False

        if request.user.role == UserRole.ADMIN or request.user.is_superuser:
            return True

        target_user = obj if hasattr(obj, "role") else getattr(obj, "user", None)
        return target_user == request.user


# Convenience aliases matching various nomenclature conventions
IsAdminUserRole = IsAdminRole
IsStudentUserRole = IsStudentRole
