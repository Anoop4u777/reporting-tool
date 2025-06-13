from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import (
    AccountSummary, Cashflow, SpendActivity, Transaction, SavingsGoal, BalanceSummary
)
from .serializers import (
    AccountSummarySerializer, CashflowSerializer, SpendActivitySerializer,
    TransactionSerializer, SavingsGoalSerializer, BalanceSummarySerializer
)

class AccountSummaryViewSet(viewsets.ModelViewSet):
    queryset = AccountSummary.objects.all()
    serializer_class = AccountSummarySerializer

class CashflowViewSet(viewsets.ModelViewSet):
    queryset = Cashflow.objects.all()
    serializer_class = CashflowSerializer

class SpendActivityViewSet(viewsets.ModelViewSet):
    queryset = SpendActivity.objects.all()
    serializer_class = SpendActivitySerializer

class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

class SavingsGoalViewSet(viewsets.ModelViewSet):
    queryset = SavingsGoal.objects.all()
    serializer_class = SavingsGoalSerializer

class BalanceSummaryViewSet(viewsets.ModelViewSet):
    queryset = BalanceSummary.objects.all()
    serializer_class = BalanceSummarySerializer

class CombinedDashboardViewSet(viewsets.ViewSet):
    @action(detail=False, methods=['get'])
    def get_all_data(self, request):
        account_summary = AccountSummary.objects.all()
        cashflow = Cashflow.objects.all()
        spend_activity = SpendActivity.objects.all()
        transactions = Transaction.objects.all()
        savings_goals = SavingsGoal.objects.all()
        balance_summary = BalanceSummary.objects.all()

        response_data = {
            'account_summary': AccountSummarySerializer(account_summary, many=True).data,
            'cashflow': CashflowSerializer(cashflow, many=True).data,
            'spend_activity': SpendActivitySerializer(spend_activity, many=True).data,
            'transactions': TransactionSerializer(transactions, many=True).data,
            'savings_goals': SavingsGoalSerializer(savings_goals, many=True).data,
            'balance_summary': BalanceSummarySerializer(balance_summary, many=True).data
        }

        return Response(response_data)
