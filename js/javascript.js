$(document).ready(
    function() {

    }
);


$("#formulario").submit(
    function(event) {
        /*declarar variables*/
        var rut = $("#rut").val();
        var nombre = $("#nombre").val();
        var edad = $("#edad").val();
        var genero = $("#genero").val();



        /*Validaciones*/
        if (rut.length >= 9 && rut.length <= 10) {
            event.preventDefault();
            $("#error1").html("");
            console.log('rut validado correctamente.')
        } else {
            event.preventDefault();
            $("#error1").html("<p>El rut debe tener entre 9 y 10 caracteres.</p>");
            $("#rut").focus();
            return;
        }
        

        if (nombre.length >=3 && nombre.length <= 20) {
            event.preventDefault();
            $("#error2").html("");
            console.log('nombre validado correctamente.')
        } else {
            event.preventDefault();
            $("#error2").html("<p>El nombre debe tener entre 3 y 20 caracteres.</p>");
            $("#nombre").focus();
            return;
        }
    
    
        if (edad>=18 && edad<=35) {
            event.preventDefault();
            $("#error3").html("");
            console.log('edad validada correctamente.')
        } else {
            event.preventDefault();
            $("#error3").html("<p>La edad debe ser entre 18 a 35 años.</p>");
            $("#edad").focus();
            return;
        }
    

        if (genero!="defoption") {
            event.preventDefault();
            $("#error4").html("");
            console.log('genero validado correctamente.')
        } else {
            event.preventDefault();
            $("#error4").html("<p>Debe seleccionar un genero.</p>");
            $("#genero").focus();
            return;
        }

    
    }
);

