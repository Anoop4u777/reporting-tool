from rest_framework import serializers
from .models import ReportLayout


class ReportLayoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReportLayout
        fields = '__all__'
