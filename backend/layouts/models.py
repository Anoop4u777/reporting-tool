from django.db import models

# Custom Base modal to store created on Updated on fields.
class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


# Custom Report Layout is stored in this modal.
class ReportLayout(BaseModel):
    name = models.CharField(max_length=255)
    layout_schema = models.JSONField()
    
    def __str__(self):
        return self.name

