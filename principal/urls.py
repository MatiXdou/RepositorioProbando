from django.urls import path
from . import views
from .views import *

urlpatterns = [
    #de la pagina
    path('inicio', views.inicio, name="inicio"),
    path('quienes_somos', views.quienesSomos, name="quienes_somos"),
    path('galeria', views.galeria, name="galeria"),
    path('productos', views.productosVer, name="productos"),
    path('perfil', views.perfil, name="perfil"),
    #del crud
    path('crud',views.crud,name="crud"),
    path('productosAdd',views.productosAdd,name="productosAdd"),
    path('productos_del/<int:pk>',views.productos_del,name="productos_del"),
    path('productosUpdate/<int:pk>',views.productosUpdate,name="productosUpdate"),
    #de sesion
    path('signup/', registrar, name="signup"),
]