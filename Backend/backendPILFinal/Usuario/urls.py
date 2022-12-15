#Django import
from django.urls import path

# Views
from Usuario.views import UsuarioApiVIew,CreateApiView,UsuarioDetailsAPIView,delAPIView

# Urls
urlpatterns = [
    path('usuario-list/',UsuarioApiVIew.as_view(), name="usuario-list"),
    path('usuario-create/',CreateApiView.as_view(), name="usuario-create"),
    path('usuario-details/<int:pk>/',UsuarioDetailsAPIView.as_view(),name="usuario-details"),
    path('usuario-delete/<int:pk>/',delAPIView.as_view(),name="usuario-delete"),
]
