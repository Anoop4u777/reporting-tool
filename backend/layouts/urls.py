from rest_framework.routers import DefaultRouter

from .views import ReportLayoutViewSet

router = DefaultRouter()
router.register(r'', ReportLayoutViewSet)

urlpatterns = router.urls