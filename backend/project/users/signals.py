from allauth.account.signals import user_signed_up
from django.dispatch import receiver
from project.users.models import UserRole


@receiver(user_signed_up)
def populate_social_profile(request, user, **kwargs):
    if not user.role:
        user.role = UserRole.STUDENT
    sociallogin = kwargs.get("sociallogin")
    if sociallogin and sociallogin.account:
        extra_data = sociallogin.account.extra_data or {}
        if not user.full_name:
            name = (
                extra_data.get("name")
                or f"{extra_data.get('given_name', '')} {extra_data.get('family_name', '')}".strip()
            )
            if name:
                user.full_name = name
    user.save()
