#Django import
from django.urls import path

# Views
from Usuario.views import UsuarioApiVIew,CreateAPIView,UsuarioDetailsAPIView

# Urls
urlpatterns = [
    path('usuario-list/',UsuarioApiVIew.as_view(), name="usuario-list"),
    path('usuario-create/',CreateAPIView.as_view(),name="create"),
    path('usuario-details/<int:pk>//',UsuarioDetailsAPIView.as_view(),name="details"),
]
