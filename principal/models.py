from django.db import models
import datetime

# Create your models here.
class Categoria(models.Model):
    id_categoria = models.AutoField(db_column='idCategoria',primary_key=True)
    nombre = models.CharField(max_length=50,null=False,blank=False)

    def __str__(self):
        return str(self.nombre)
    
class Producto(models.Model):
    id_producto = models.IntegerField(primary_key=True,null=False,blank=False)
    nombre = models.CharField(max_length=50,null=False,blank=False)
    descripcion = models.CharField(max_length=200,null=False,blank=False)
    imagen = models.ImageField(upload_to="productos",null=True,blank=True)
    precio = models.IntegerField()
    stock = models.IntegerField()
    id_categoria = models.ForeignKey('Categoria',on_delete=models.CASCADE,db_column='idCategoria')

    def __str__(self):
        return str(self.nombre)

class Boleta(models.Model):
    id_boleta=models.AutoField(primary_key=True)
    total=models.BigIntegerField()
    fechaCompra=models.DateTimeField(blank=False, null=False, default = datetime.datetime.now)
    
    def __str__(self):
        return str(self.id_boleta)

class detalle_boleta(models.Model):
    id_boleta = models.ForeignKey('Boleta', blank=True, on_delete=models.CASCADE)
    id_detalle_boleta = models.AutoField(primary_key=True)
    id_producto = models.ForeignKey('Producto', on_delete=models.CASCADE)
    cantidad = models.IntegerField()
    subtotal = models.BigIntegerField()

    def __str__(self):
        return str(self.id_detalle_boleta)