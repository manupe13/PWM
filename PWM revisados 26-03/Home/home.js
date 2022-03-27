
var script = document.createElement('script');
script.src = '../jquery-3.6.0.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


function fillPage() {
    


    // RELLENAR ISLAS
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/islas",
        success: function (response) {
            
            var islas = response;
            var sectionIslas = document.getElementsByClassName("islas")[0];

            for (var i = 0; i < islas.length; i++) {
                
                var isla = islas[i];
                
                var div = document.createElement("div");
                var foto = document.createElement("img");
                var h3 = document.createElement("h3");

                div.setAttribute("class", "cuadroIsla");
                div.setAttribute("id", i);

                foto.setAttribute("src", isla.img);
                foto.setAttribute("class", "fotoIsla");
                h3.innerHTML = "&nbsp" + isla.name;
                
                div.appendChild(foto);
                div.appendChild(h3);

                sectionIslas.appendChild(div);

            
        }


        }
    });




    // RELLENAR APARTAMENTOS
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/apartamentos",
        success: function (response) {
            
            var apartamentos = response;
            var seccionApartementos = document.getElementsByClassName("apartamentos")[0];
            
            var apartamento = apartamentos[0]; // Solo hay un apartamento, por lo tanto, cargamos 6 veces el mismo
            for (var i = 0; i < 6; i++) {
                
                
                
                var div1 = document.createElement("div");
                div1.setAttribute("class", "CuadroApartAB");
                div1.setAttribute("id", i);


                var html = "<img class= FotoCuadroApartAB src=" + apartamento.img + "-main.jpeg>" + 
                "\n <div class = recuadroDatosAB>" +
                "\n <div class= FondoValApartAB>" + "<p class= ValApartAB>" + apartamento.value +"</p>" +
                "\n </div>" +
                "\n <p class= NombreApartAB> &nbsp" + apartamento.name +"</p>" +
                "\n <p class= DirApartAB> &nbsp" + apartamento.shortLocation +"</p>" +
                "\n <div class= derechaPrecioAB>" + 
                "\n <p class= PrecioApartAB>" + apartamento.price +"</p>" +
                "\n <p class= DesdeApartAB> Desde </p>" +
                "\n </div> \n </div> \n </div> ";
                
                div1.innerHTML = html;

                seccionApartementos.appendChild(div1);
            
        }


        }
    });


}