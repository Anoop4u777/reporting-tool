from rest_framework import serializers
from .models import (
    AccountSummary, Cashflow, SpendActivity, Transaction, SavingsGoal, BalanceSummary
)

class AccountSummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = AccountSummary
        fields = '__all__'

class CashflowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cashflow
        fields = '__all__'

class SpendActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = SpendActivity
        fields = '__all__'

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'

class SavingsGoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = SavingsGoal
        fields = '__all__'

class BalanceSummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = BalanceSummary
        fields = '__all__'