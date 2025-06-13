from django.contrib import admin
from .models import AccountSummary, Cashflow, SpendActivity, Transaction, SavingsGoal, BalanceSummary

# Register your models here.
admin.site.register(AccountSummary)
admin.site.register(Cashflow)
admin.site.register(SpendActivity)
admin.site.register(Transaction)
admin.site.register(SavingsGoal)
admin.site.register(BalanceSummary)
