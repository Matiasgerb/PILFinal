from Notas.models import Notas

def hayNota(pk):

    try:
        notas= Notas.objects.get(idNotas=pk)

        return [True,notas]
    except:
        return [False]
