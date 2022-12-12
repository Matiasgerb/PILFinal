#Rest Import
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

# Models
from Notas.models import Notas

#Serializers
from Notas.serializer import NotasSerial

#Helpers
from Notas.Helpers.notasError import hayNota

# Create your views here.
class NotasAPIView(APIView):
    def get(self, request):
        #Retorna todas las notas que existen en la base de datos.

        Nota = Notas.objects.all() #Recibe todas las notas de la base de datos.

        NotasSerializer = NotasSerial(Nota, many=True)

        return Response(
            data = NotasSerializer.data,
            status = status.HTTP_200_OK
        )


class CreateApiView(APIView):
   def post(self,request):
        #Crea un nuevo registro /Notas
        
        serialazer = NotasSerial(data=request.data, many=True) #Many permite crear varios usuario al mismo tiempo
        print(serialazer)


        if(serialazer.is_valid()):
            serialazer.save()

            data = {
                    'menssage' : 'Nota creada con exito'
                }
            return Response(
                data=data,
                status = status.HTTP_201_CREATED
            )
            
        return Response(
            data = serialazer.errors,
            status = status.HTTP_400_BAD_REQUEST
        )



class NotasDetailsAPIView(APIView):
    #Obtener nota.
    def get(self,request,pk):


        try:
            nota= Notas.objects.get(idNotas=pk)

            NotasSerialize= NotasSerial(nota) 

            return Response(
                data = NotasSerialize.data,
                status = status.HTTP_200_OK
            )
        except:
           data = {
                'menssage' : 'Nota no encontrada'
            } 

        return Response(
            data = data,
            status = status.HTTP_400_BAD_REQUEST
        )

    #Actualización Notas.
    def put(self,request,pk):
        Notas= hayNota(pk)
        if(Notas[0]):
            NotasSerialize= NotasSerial(Notas[1], data=request.data) 

            if(NotasSerialize.is_valid()):
                NotasSerialize.save()
            
            data = {
                    'menssage' : 'la nota fue modificada con exito'
                } 

            return Response(
                data = NotasSerialize.data,
                status = status.HTTP_200_OK
            )
        return Response(
            data = NotasSerialize.errors,
            status = status.HTTP_400_BAD_REQUEST
        ) 
    
    #Eliminar Nota.
    def delete(self,request,pk):
        notas= Notas.objects.get(idNotas=pk)
        
        notas.delete()

        data = {
                'menssage' : 'la nota fue eliminado de forma correcta'
            } 
        
        return Response(
            data = data,
            status = status.HTTP_200_OK
        )