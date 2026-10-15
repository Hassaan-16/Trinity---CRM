from .base import *  # noqa


DEBUG = True
ENABLE_DEBUG_TOOLBAR = False
EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"

# Exclude external service health checks in local dev when services may not be running
INSTALLED_APPS = [
    app
    for app in INSTALLED_APPS
    if app
    not in [
        "health_check.contrib.celery",
        "health_check.contrib.celery_ping",
        "health_check.contrib.redis",
    ]
]

if ENABLE_DEBUG_TOOLBAR:
    INSTALLED_APPS += [  # noqa
        "debug_toolbar",
        "silk",
    ]

    MIDDLEWARE += [  # noqa
        "debug_toolbar.middleware.DebugToolbarMiddleware",
        "silk.middleware.SilkyMiddleware",
    ]

    INTERNAL_IPS = [
        "127.0.0.1",
    ]

    DEBUG_TOOLBAR_CONFIG = {"SHOW_TOOLBAR_CALLBACK": lambda _request: ENABLE_DEBUG_TOOLBAR}
