from rest_framework import viewsets
from .models import ReportLayout
from .serializers import ReportLayoutSerializer
from rest_framework.decorators import action
from rest_framework.response import Response


class ReportLayoutViewSet(viewsets.ModelViewSet):
    queryset = ReportLayout.objects.all()
    serializer_class = ReportLayoutSerializer

    @action(detail=False, methods=['post'])
    def create_sample_layouts(self, request):
        sample_layouts = [
            {
                'name': 'Layout 1',
                'layout_schema': {
                    'type': 'object',
                    'properties': {
                        'text': {'type': 'string'},
                        'image_url': {'type': 'string'},
                        'table_data': {'type': 'array', 'items': {'type': 'object'}},
                        'graph_data': {'type': 'object'}
                    }
                }
            },
            {
                'name': 'Layout 2',
                'layout_schema': {
                    'type': 'object',
                    'properties': {
                        'text': {'type': 'string'},
                        'image_url': {'type': 'string'},
                        'table_data': {'type': 'array', 'items': {'type': 'object'}},
                        'graph_data': {'type': 'object'}
                    }
                }
            },
            {
                'name': 'Layout 3',
                'layout_schema': {
                    'type': 'object',
                    'properties': {
                        'text': {'type': 'string'},
                        'image_url': {'type': 'string'},
                        'table_data': {'type': 'array', 'items': {'type': 'object'}},
                        'graph_data': {'type': 'object'}
                    }
                }
            }
        ]
        created_layouts = []
        for layout_data in sample_layouts:
            layout = ReportLayout.objects.create(**layout_data)
            created_layouts.append({
                'id': layout.id,
                'name': layout.name,
                'layout_schema': layout.layout_schema
            })
        return Response(created_layouts)