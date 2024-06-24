from django.shortcuts import render, redirect
from .models import *
from .forms import *
from django.contrib.auth.decorators import login_required,user_passes_test
from django.contrib.auth import authenticate,login
from django.urls import reverse_lazy
from django.views.generic import CreateView

# Create your views here.

def inicio(request):
    return render(request, 'index.html')

def quienesSomos(request):
    return render(request, 'quienes_somos.html')

def galeria(request):
    return render(request, 'galeria.html')

def productosVer(request):
    productos = Producto.objects.all()
    context={'productos':productos}
    return render(request, 'productos_ver.html',context)

@login_required
def perfil(request):
    if request.method == 'POST':
        form = ActualizarUserForm(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
            context={'form':form,'mensaje':"Datos actualizados correctamente!"}
            return render(request, 'perfil.html',context)
    else:
        form = ActualizarUserForm(instance=request.user)
        context={'form':form}
    return render(request, 'perfil.html',context)

#para el crud producto
def es_admin(user):
    return user.is_superuser

@user_passes_test(es_admin)
@login_required
def crud(request):
    productos = Producto.objects.all()
    context={'productos':productos}
    return render(request,'productos_list.html', context)

@user_passes_test(es_admin)
@login_required
def productosAdd(request):
    if request.method == "POST":
        id_categoria = request.POST['categoria']
        categoria = Categoria.objects.get(id_categoria=id_categoria)

        id_producto=request.POST['id_producto']
        nombre=request.POST['nombre']
        descripcion=request.POST['descripcion']
        imagen=request.FILES['imagen']
        precio=request.POST['precio']
        stock=request.POST['stock']

        Producto.objects.create(    id_producto=id_producto,
                                    nombre=nombre,
                                    descripcion=descripcion,
                                    imagen=imagen,
                                    precio=precio,
                                    stock=stock,
                                    id_categoria=categoria)
        mensaje="Producto añadido correctamente..."
        categorias=Categoria.objects.all()
        context={'categorias':categorias,'mensaje':mensaje}
        return render(request,'productos_add.html',context)
    categorias=Categoria.objects.all()
    context={'categorias':categorias}
    return render(request,'productos_add.html', context)

@user_passes_test(es_admin)
@login_required
def productos_del(request,pk):
    context={}
    try:
        producto=Producto.objects.get(id_producto=pk)
        producto.delete()
        mensaje="Bien, datos eliminados..."
        productos = Producto.objects.all()
        context={'productos':productos,'mensaje':mensaje}
        return render(request,'productos_list.html',context)
    except:
        mensaje="Error, ID no existe..."
        productos= Producto.objects.all()
        context={'productos':productos, 'mensaje':mensaje}
        return render(request,'productos_list.html',context)
        
@user_passes_test(es_admin)
@login_required
def productosUpdate(request,pk):
    producto=Producto.objects.get(id_producto=pk)
    if request.method == "POST":
        categoria=request.POST['categoria']
        objCategoria=Categoria.objects.get(id_categoria = categoria)

        producto.nombre=request.POST['nombre']
        producto.descripcion=request.POST['descripcion']
        if 'imagen' in request.FILES:
            producto.imagen=request.FILES['imagen']
        producto.precio=request.POST['precio']
        producto.stock=request.POST['stock']
        producto.id_categoria=objCategoria
        producto.save()
        categorias=Categoria.objects.all()
        context={'mensaje':"Ok, datos actualizados...",'categorias':categorias,'producto':producto}
        return render(request,'productos_edit.html',context)
    categorias=Categoria.objects.all()
    context={'producto':producto,'categorias':categorias}
    return render(request,'productos_edit.html',context)
#para la sesion
def registrar(request):
    data={                          #parámetro que llega al template
        'form': RegistroUserForm()
    }
    if request.method=="POST":
        formulario = RegistroUserForm(data=request.POST)
        if formulario.is_valid():
            formulario.save()       #crear un objeto en el backend
            user = authenticate(username=formulario.cleaned_data["username"], 
                    password=formulario.cleaned_data["password1"])
            login(request,user)
            return redirect('inicio')
        data["form"]=formulario           
    return render(request, 'registration/signup.html',data)


#class SignUpView(CreateView):
#    form_class = UserCreationForm
#    success_url = reverse_lazy("login")
#    template_name = "registration/signup.html"