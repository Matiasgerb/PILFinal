from Usuario.models import Usuario

def hayUsuario(pk):

    try:
        usuario = Usuario.objects.get(pk=pk)

        return [True,usuario]
    except:
        return [False]
