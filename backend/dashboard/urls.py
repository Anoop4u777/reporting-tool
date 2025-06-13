from rest_framework.routers import DefaultRouter
from .views import (
    AccountSummaryViewSet, CashflowViewSet, SpendActivityViewSet,
    TransactionViewSet, SavingsGoalViewSet, BalanceSummaryViewSet,
    CombinedDashboardViewSet
)

router = DefaultRouter()
router.register(r'account-summaries', AccountSummaryViewSet)
router.register(r'cashflows', CashflowViewSet)
router.register(r'spend-activities', SpendActivityViewSet)
router.register(r'transactions', TransactionViewSet)
router.register(r'savings-goals', SavingsGoalViewSet)
router.register(r'balance-summaries', BalanceSummaryViewSet)
router.register(r'dashboard', CombinedDashboardViewSet, basename='dashboard')

urlpatterns = router.urls