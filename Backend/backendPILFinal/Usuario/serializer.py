#Rest 
from dataclasses import field
from rest_framework import serializers

# Models
from Usuario.models import Usuario

#Serializers
class UsuarioSerial(serializers.ModelSerializer):

    class Meta:
        model = Usuario
        fields = '__all__'