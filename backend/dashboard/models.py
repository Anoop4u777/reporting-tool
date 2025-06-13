from django.db import models
from layouts.models import BaseModel


class AccountSummary(BaseModel):
    account_type = models.CharField(max_length=50)
    balance = models.DecimalField(max_digits=12, decimal_places=2)
    currency = models.CharField(max_length=5, default='$')
    change_percent = models.FloatField()
    trend_data = models.JSONField()

    def __str__(self):
        return f"{self.account_type} - {self.balance} {self.currency}"


class Cashflow(BaseModel):
    total = models.DecimalField(max_digits=12, decimal_places=2)
    money_in = models.DecimalField(max_digits=12, decimal_places=2)
    money_in_percent = models.FloatField()
    money_out = models.DecimalField(max_digits=12, decimal_places=2)
    money_out_percent = models.FloatField()
    currency = models.CharField(max_length=5, default='$')

    def __str__(self):
        return f"Cashflow - {self.total} {self.currency}"


class SpendActivity(BaseModel):
    date = models.DateField()
    revenue = models.DecimalField(max_digits=12, decimal_places=2)
    spend = models.DecimalField(max_digits=12, decimal_places=2)
    currency = models.CharField(max_length=5, default='$')

    def __str__(self):
        return f"Spend Activity - {self.date}"


class Transaction(BaseModel):
    date_time = models.DateTimeField()
    merchant_name = models.CharField(max_length=100)
    card_last_digits = models.CharField(max_length=4)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    status = models.CharField(max_length=50)
    currency = models.CharField(max_length=5, default='$')

    def __str__(self):
        return f"Transaction - {self.merchant_name} - {self.amount} {self.currency}"


class SavingsGoal(BaseModel):
    title = models.CharField(max_length=100)
    amount_saved = models.DecimalField(max_digits=12, decimal_places=2)
    goal_description = models.CharField(max_length=255)
    achieved_status = models.BooleanField()
    currency = models.CharField(max_length=5, default='$')

    def __str__(self):
        return f"Savings Goal - {self.title}"


class BalanceSummary(BaseModel):
    total_balance = models.DecimalField(max_digits=12, decimal_places=2)
    change_amount = models.DecimalField(max_digits=12, decimal_places=2)
    change_type = models.CharField(max_length=10)
    currency = models.CharField(max_length=5, default='$')

    def __str__(self):
        return f"Balance Summary - {self.total_balance} {self.currency}"