#Rest 
from dataclasses import field
from rest_framework import serializers

# Models
from Notas.models import Notas

#Serializers
class NotasSerial(serializers.ModelSerializer):

    class Meta:
        model = Notas
        fields = '__all__'