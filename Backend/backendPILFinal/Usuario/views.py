#Django RestFramework
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

#Models imports
from Usuario.models import Usuario

#Serializer Imports
from Usuario.serializer import UsuarioSerial

#Helpers
from Usuario.helpers.usuarioError import hayUsuario

# Create your views here.
class UsuarioApiVIew(APIView):

    #Retorna una lista con todos los usuarios almacenados.
    def get(self,request):
        #Base de datos, recibe todos los usuarios de la base de datos.
        Usuarios = Usuario.objects.all()
        
        UsuariosSerial= UsuarioSerial(Usuarios, many =True) #Hace la conversion de un objeto a Json.

        return Response(
            data = UsuariosSerial.data,
            status=status.HTTP_200_OK
        )
   


class CreateApiView(APIView):
   def post(self,request):
        #Crea un nuevo registro /usuario
        print("ESTAMOS EN UN METODO POST")
        


        serialazer = UsuarioSerial(data=request.data) #Many permite crear varios usuario al mismo tiempo
        print(serialazer)


        if(serialazer.is_valid()):
            serialazer.save()

            data = {
                    'menssage' : 'el usuario fue creado con exito'
                }
            return Response(
                data=data,
                status = status.HTTP_201_CREATED
            )
            
        return Response(
            data = serialazer.errors,
            status = status.HTTP_400_BAD_REQUEST
        )







class UsuarioDetailsAPIView(APIView):
    
    def get(self,request,pk):


        try:
            Usuarios= Usuario.objects.get(idUsuario=pk)

            UsuarioSerialize= UsuarioSerial(Usuarios) 

            return Response(
                data = UsuarioSerialize.data,
                status = status.HTTP_200_OK
            )
        except:
           data = {
                'menssage' : 'Usuario no encontrado'
            } 

        return Response(
            data = data,
            status = status.HTTP_400_BAD_REQUEST
        )

    def put(self,request,pk):
        Usuario= hayUsuario(pk)
        if(Usuario[0]):
            UsuarioSerialize= UsuarioSerial(Usuario[1], data=request.data) 

            if(UsuarioSerialize.is_valid()):
                UsuarioSerialize.save()
            
            data = {
                    'menssage' : 'el usuario fue modificado con exito'
                } 

            return Response(
                data = UsuarioSerialize.data,
                status = status.HTTP_200_OK
            )
        return Response(
            data = UsuarioSerialize.errors,
            status = status.HTTP_400_BAD_REQUEST
        ) 

    def delete(self,request,pk):
        usuarios= Usuario.objects.get(idUsuario=pk)
        
        usuarios.delete()

        data = {
                'menssage' : 'el usuario fue eliminado de forma correcta'
            } 
        
        return Response(
            data = data,
            status = status.HTTP_200_OK
        )