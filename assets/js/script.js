$(document).ready(function(){

    $("#botonOcultar").click(function(){

        $("#aparrafo").hide("slow");
    })

    $("#botonMostrar").click(function(){

        $("#aparrafo").show("slow");
    });

    $("#botonCambiarTexto").click(function(){

        var parrafo1 = $("aparrafo");
        $("#aparrafo").empty();
        $("#aparrafo").append("Estos productos se basan en tus gustos");
    });

    $("#botonCambiarDiseno").click(function(){
       
        $("#aparrafo").addClass("parrafo1");
})
})