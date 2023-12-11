
var usuario = "";
var temporizador;
window.onload = function(){

    //OCULTO CHAT 
    document.getElementById("chat").style.display="none"

    document.getElementById("enviausuario").onclick = function(){
        usuario = document.getElementById("usuario").value;
        console.log("Tu usuario es: " + usuario);

        //OCULTO LOGIN Y MUESTRO CHAT
        document.getElementById("chat").style.display="block";
        document.getElementById("inicio").style.display="none";

        //CREO TEMPORIZADOR QUE LLAMA A BUCLE
        temporizador = setTimeout("bucle()",1000)
    }

    //CUANDO PULSE UNA TECLA SOBRE EL MENSAJE
    document.getElementById("mensaje").onkeyup = function(e){
        //SI ES ENTER
        if(e.keyCode == "13"){
            let mensaje = this.value;
            console.log("El mensaje que voy a mandar es: " + mensaje);
            this.value = "";

            //ENVIO MENSAJE MEDIANTE AJAX
            fetch("servidor.php?mensaje=" + encodeURI(mensaje) + "&usuario=" + encodeURI(usuario));
        }
    }
}

    function bucle(){
        let fecha = new Date();

        fetch("mensajes.json?fecha=" + fecha.getUTCSeconds())

        .then(function(response){
            return response.json();
        })
        .then(function(datos){    
            
            cadena = "";

            for(let i=0;i<datos.length;i++){
                cadena += `
                <div class="mensaje">
                    <div class="usuario">` + datos[i].usuario+ `</div>
                    <br>
                    <div class="fecha">`+ datos[i].fecha+`</div>
                    <div class="texto">`+ datos[i].mensaje+`</div>
                </div>`
            }

            document.getElementById("contienemensajes").innerHTML = cadena;
            document.getElementById("contienemensajes").scrollTop = 10000000;
        })

        //EL BUCLE SE LLAMA A SI MISMO CADA SEGUNDO
        clearTimeout(temporizador);
        temporizador = setTimeout("bucle()",1000);
    }
    
    