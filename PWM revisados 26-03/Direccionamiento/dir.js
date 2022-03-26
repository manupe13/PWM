
var script = document.createElement('script');
script.src = './jquery-3.6.0.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


function fillPage() {
    

    // RELLENAR APARTAMENTOS
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/apartamentos",
        success: function (response) {
            
            var apartamentos = response;
            var fotoPrincipal = document.getElementsByClassName("f1")[0];
            var fotos = document.getElementsByClassName("f2")[0];
            
            var apartamento = apartamentos[0]; // Solo hay un apartamento, por lo tanto, cargamos 6 veces el mismo
            
            document.getElementById("titulo").innerHTML = apartamento.name;
                

            var html = "<img class= fotoGrande src=" + apartamento.img + "-main.jpeg>";
            fotoPrincipal.innerHTML = html;  
            
            for (var i = 1; i <= 4; i++) {
                var foto = document.createElement("img");
                foto.setAttribute("class", "fotoPequeña");
                foto.setAttribute("id", i);
                var root = apartamento.img + "-img"+ i + ".jpeg\n";
                foto.setAttribute("src", root);
                console.log(foto);
                fotos.appendChild(foto);
            }


            document.getElementsByClassName("direc_text_titulo")[0].innerHTML = apartamento.title2 + "<br>" + apartamento.title3;

            document.getElementsByClassName("direc_text_cont")[0];
            document.getElementsByClassName("direc_text_cont")[1].innerHTML = apartamento.cont1;

            html = "";
            for(var i = 0; i < apartamento.feature.length; i++) {

                html += apartamento.feature[i] + " · ";

            }

            document.getElementById("resumen").innerHTML = html;


        }
    });


}