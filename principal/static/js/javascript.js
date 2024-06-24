$(document).ready(function() {
    var nombre;
    var apellido;
    var email;
    var emailCorrecto;
    var motivoContacto;
    var whyContacto;
    var formato;
    var dns;
    var id_producto;
    var nombreProd;
    var descripcion;
    var precio;
    var stock;
    var categoria;
    



    /* Validaciones individuales */

    $("#nombre").blur(function(){
        nombre = $("#nombre").val().trim();
        if (nombre.length >=3 && nombre.length <= 20) {
            $("#error1").html("");
            console.log('nombre validado correctamente.');
        } else {
            $("#error1").html("<p>El nombre debe tener entre 3 y 20 caracteres.</p>");
            return;
        }
    });


    $("#apellido").blur(function(){
        apellido = $("#apellido").val().trim();
        if (apellido.length >=3 && apellido.length <= 20) {
            $("#error2").html("");
            console.log('apellido validado correctamente.')
        } else {
            $("#error2").html("<p>El apellido debe tener entre 3 y 20 caracteres.</p>");
            return;
        }
    });


    $("#email").blur(function(){
        emailCorrecto=false;
        email = $("#email").val();
        if(email.length > 0){
            $.get("https://www.disify.com/api/email/" + email,
                function(data){
                    formato = data.format;
                    dns = data.dns;
                    if(formato==true){
                        if (dns==true) {
                            $("#error3").html("");
                            console.log('email validado correctamente.')
                            emailCorrecto=true;
                        } else {
                            $("#error3").html('<p>El email no tiene un dominio valido.</p>');
                            $("#email").focus();
                            emailCorrecto=false;
                            return;
                        }
                    } else {
                        $("#error3").html('<p>El email no tiene un formato valido.</p>');
                        $("#email").focus();
                        emailCorrecto=false;
                        return;
                    }                    
                });
        } else{
            $("#error3").html('<p>Debe rellenar este campo.</p>');
            $("#email").focus();
            return;
        }
        console.log("email: "+emailCorrecto)

    })
    

    $("#motivo-contacto").click(function(){
        motivoContacto = $("#motivo-contacto").val();
        if (motivoContacto!="defoption") {
            $("#error4").html("");
            console.log('Motivo validado correctamente.')
        } else {
            $("#error4").html("<p>Debe seleccionar un motivo.</p>");
            return;
        }
    });


    $("#why-contacto").blur(function(){
        whyContacto = $("#why-contacto").val().trim();
        if (whyContacto.length >=10 && whyContacto.length <= 200) {
            $("#error5").html("");
            console.log('Mensaje contacto validado correctamente.')
        } else {
            $("#error5").html("<p>El mensaje debe contener entre 10 y 200 caracteres.</p>");
            return;
        }
    });


    $("#edad").blur(function(){
        edad = $("#edad").val();
        if (edad >= 18) {
            $("#error2").html("");
            console.log('Edad validada correctamente.')
        } else {
            $("#error2").html("<p>La edad debe ser mayor o igual a 18.</p>");
            return;
        }
    });


    $("#genero").click(function(){
        genero = $("#genero").val();
        if (genero!="defoption") {
            $("#error4").html("");
            console.log('Genero validado correctamente.')
        } else {
            $("#error4").html("<p>Debe seleccionar un genero.</p>");
            return;
        }
    });


    $("#telefono").blur(function(){
        telefonoCorrecto=false;
        telefono = $("#telefono").val();
        if(telefono.length == 11){
            $.get("https://phonevalidation.abstractapi.com/v1/?api_key=ab52e8a5f07d4fc99631b5703a03ca11&phone="+telefono,
                function(data){
                    esValido = data.valid;
                    if(esValido==true){
                        $("#error5").html("");
                        console.log('telefono validado correctamente.')
                        telefonoCorrecto=true;
                    } else {
                        $("#error5").html('<p>El numero de telefono no es valido.</p>');
                        $("#telefono").focus();
                        telefonoCorrecto=false;
                        return;
                    }                    
                });
        } else{
            $("#error5").html('<p>El numero de telefono debe tener 11 caracteres. e.g.: 56912345678.</p>');
            $("#telefono").focus();
            return;
        }
        console.log("telefono: "+telefonoCorrecto)

    })

    /* Validaciones del formulario añadir producto */
    
    $("#id_producto").blur(function(){
        id_producto = $("#id_producto").val();
        if (id_producto > 0) {
            $("#error1").html("");
            console.log('id producto validado correctamente.')
        } else {
            $("#error1").html("<p>El id del producto debe ser mayor a 0.</p>");
            $("#id_producto").focus();
            return;
        }
    });

    $("#nombreProd").blur(function(){
        nombreProd = $("#nombreProd").val().trim();
        if (nombreProd.length >=3 && nombreProd.length <= 20) {
            $("#error2").html("");
            console.log('nombre de producto validado correctamente.')
        } else {
            $("#error2").html("<p>El nombre del producto debe tener entre 3 y 20 caracteres.</p>");
            $("#nombreProd").focus();
            return;
        }
    });

    $("#descripcion").blur(function(){
        descripcion = $("#descripcion").val().trim();
        if (descripcion.length >=3 && descripcion.length <= 50) {
            $("#error3").html("");
            console.log('descripcion validada correctamente.')
        } else {
            $("#error3").html("<p>La descripcion del producto debe tener entre 3 y 50 caracteres.</p>");
            $("#descripcion").focus();
            return;
        }
    });

    $("#precio").blur(function(){
        precio = $("#precio").val();
        if (precio > 0) {
            $("#error4").html("");
            console.log('precio validado correctamente.')
        } else {
            $("#error4").html("<p>El precio debe ser mayor a 0.</p>");
            $("#precio").focus();
            return;
        }
    });

    $("#stock").blur(function(){
        stock = $("#stock").val();
        if (stock > 0) {
            $("#error5").html("");
            console.log('stock validado correctamente.')
        } else {
            $("#error5").html("<p>El stock debe ser mayor a 0.</p>");
            $("#stock").focus();
            return;
        }
    });

    /* Validaciones al enviar formulario */
    $("#formulario-contacto").submit(function(event){
        /*declarar variables*/
        nombre = $("#nombre").val().trim();
        apellido = $("#apellido").val().trim();
        email = $("#email").val();
        motivoContacto = $("#motivo-contacto").val();
        whyContacto = $("#why-contacto").val().trim();

        /*Validaciones*/
        if (nombre.length >=3 && nombre.length <= 20) {
            $("#error1").html("");
            console.log('nombre validado correctamente.')
        } else {
            $("#error1").html("<p>El nombre debe tener entre 3 y 20 caracteres.</p>");
            $("#nombre").focus();
            event.preventDefault();
            return;
        }


        if (apellido.length >=3 && apellido.length <= 20) {
            $("#error2").html("");
            console.log('apellido validado correctamente.')
        } else {
            $("#error2").html("<p>El apellido debe tener entre 3 y 20 caracteres.</p>");
            $("#apellido").focus();
            event.preventDefault();
            return;
        }
    


        
        if(emailCorrecto == true) {
            console.log('email validado correctamente.')
        } else {
            $("#error3").html('<p>Validando email...</p>');
            event.preventDefault();
            return;
        }
        



        if (motivoContacto!="defoption") {
            $("#error4").html("");
            console.log('Motivo validado correctamente.')
        } else {
            $("#error4").html("<p>Debe seleccionar un motivo.</p>");
            $("#motivo-contacto").focus();
            event.preventDefault();
            return;
        }


        if (whyContacto.length >=10 && whyContacto.length <= 200) {
            $("#error5").html("");
            console.log('Mensaje contacto validado correctamente.')
        } else {
            $("#error5").html("<p>El mensaje debe contener entre 10 y 200 caracteres.</p>");
            $("#why-contacto").focus();
            event.preventDefault();
            return;
        }

        alert("¡Se ha enviado tu mensaje correctamente!");
    });





$("#formulario-suscripcion").submit(function(event) {
    /*declarar variables*/
    var nombre = $("#nombre").val().trim();
    var email = $("#email").val();
    var edad = $("#edad").val();
    var genero = $("#genero").val();


    /*Validaciones*/
    if (nombre.length >=3 && nombre.length <= 20) {
        $("#error1").html("");
        console.log('Nombre validado correctamente.')
    } else {
        $("#error1").html("<p>El nombre debe tener entre 3 y 20 caracteres.</p>");
        $("#nombre").focus();
        event.preventDefault();
        return;
    }


    if(emailCorrecto == true) {
        console.log('email validado correctamente.')
    } else {
        $("#error3").html('<p>Validando email...</p>');
        event.preventDefault();
        return;
    }


    if (edad >= 18) {
        $("#error2").html("");
        console.log('Edad validada correctamente.')
    } else {
        $("#error2").html("<p>La edad debe ser mayor o igual a 18.</p>");
        $("#edad").focus();
        event.preventDefault();
        return;
    }


    if (genero!="defoption") {
        $("#error4").html("");
        console.log('Genero validado correctamente.')
    } else {
        $("#error4").html("<p>Debe seleccionar un genero.</p>");
        $("#genero").focus();
        event.preventDefault();
        return;
    }

    alert("¡Usted se ha suscrito exitosamente.!");
});
    });
    