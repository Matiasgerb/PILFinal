#Django import
from django.urls import path

# Views
from Notas.views import NotasAPIView,CreateApiView,NotasDetailsAPIView


urlpatterns = [
    path('notas-list/',NotasAPIView.as_view(), name="notas-list"),
    path('notas-create/',CreateApiView.as_view(), name="notas-create"),
    path('notas-details/<int:pk>/',NotasDetailsAPIView.as_view(), name="notas-details"),
]