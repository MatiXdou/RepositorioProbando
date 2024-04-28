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
        var valid = false;


        /*Validaciones*/
        if (rut.length >= 9 && rut.length <= 10) {
            event.preventDefault();
            $("#error1").html("");
            console.log('rut validado correctamente.')
            valid=true;
        } else {
            event.preventDefault();
            $("#error1").html("<p>El rut debe tener entre 9 y 10 caracteres.</p>");
            $("#rut").focus();
            valid=false;
            return;
        }
        

        if (nombre.length >=3 && nombre.length <= 20) {
            event.preventDefault();
            $("#error2").html("");
            console.log('nombre validado correctamente.')
            valid=true;
        } else {
            event.preventDefault();
            $("#error2").html("<p>El nombre debe tener entre 3 y 20 caracteres.</p>");
            $("#nombre").focus();
            valid=false;
            return;
        }
    
    
        if (edad>=18 && edad<=35) {
            event.preventDefault();
            $("#error3").html("");
            console.log('edad validada correctamente.')
            valid=true;
        } else {
            event.preventDefault();
            $("#error3").html("<p>La edad debe ser entre 18 a 35 años.</p>");
            $("#edad").focus();
            valid=false;
            return;
        }
    

        if (genero!="defoption") {
            event.preventDefault();
            $("#error4").html("");
            console.log('genero validado correctamente.')
            valid=true;
        } else {
            event.preventDefault();
            $("#error4").html("<p>Debe seleccionar un genero.</p>");
            $("#genero").focus();
            valid=false;
            return;
        }

        if (valid==true) {
            window.location.href = "https://matixdou.github.io/Experiencia1_CastanedaNeira_001D/";
        } else {
            event.preventDefault();
            console.log("No se pudo iniciar sesion.")
        }
    }
);