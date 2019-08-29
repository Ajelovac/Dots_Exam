window.onload = function () {
    //primero creo el contenedor
    var contenedor = document.createElement("div");
    document.body.appendChild(contenedor);
    contenedor.classList.add("contenedor");

    //selectores de color para ayudarme en las funciones
    var scolor1 = document.querySelector('#color1');
    var scolor2 = document.querySelector('#color2');
    var scolor3 = document.querySelector('#color3');
    var scolor4 = document.querySelector('#color4');

    //para seleccionar los colores
    document.querySelector('#color1').addEventListener("click", primercolor, false);
    document.querySelector('#color2').addEventListener("click", segundocolor, false);
    document.querySelector('#color3').addEventListener("click", tercercolor, false);
    document.querySelector('#color4').addEventListener("click", cuartocolor, false);

    //funciones que seleccionan el color
    function primercolor() {
        console.log("color1 seleccionado");
        scolor2.style.boxShadow = "0px 0px";
        scolor3.style.boxShadow = "0px 0px";
        scolor4.style.boxShadow = "0px 0px";
        scolor1.style.boxShadow = "2px 2px";
        color = "red";
        console.log(color);
    }

    function segundocolor() {
        console.log("color2 seleccionado");
        scolor1.style.boxShadow = "0px 0px";
        scolor3.style.boxShadow = "0px 0px";
        scolor4.style.boxShadow = "0px 0px";
        scolor2.style.boxShadow = "2px 2px";
        color = "green";
        console.log(color);
    }

    function tercercolor() {
        console.log("color3 seleccionado");
        scolor2.style.boxShadow = "0px 0px";
        scolor1.style.boxShadow = "0px 0px";
        scolor4.style.boxShadow = "0px 0px";
        scolor3.style.boxShadow = "2px 2px";
        color = "blue";
        console.log(color);
    }

    function cuartocolor() {
        console.log("color4 seleccionado");
        scolor2.style.boxShadow = "0px 0px";
        scolor3.style.boxShadow = "0px 0px";
        scolor1.style.boxShadow = "0px 0px";
        scolor4.style.boxShadow = "2px 2px";
        color = "yellow";
        console.log(color);
    }


    //para iniciar el juego
    document.querySelector('#boton').addEventListener("click", inicio, false);

    function inicio() {
        var numero = document.querySelector('#numero').value;

        //para eliminar lo que pueda haber anteriormente
        while (contenedor.lastChild) {
            contenedor.removeChild(contenedor.lastChild)
        }
        console.log("Borrado");
        var boto = document.querySelector('#selector');

        //primero compruebo si el numero es correcto y muestro un mensaje
        if (numero > 6 || numero < 2) {
            console.log("mal numero")
            var aviso = document.createElement("h3");
            boto.appendChild(aviso);
            aviso.id = "aviso";
            aviso.innerHTML = "El valor es invalido."
        } else {
            //ahora que el numero es correcto elimino los avisos si los hay y procedo a la crecion de las fichas
            if (document.contains(document.getElementById("aviso"))) {

                while (document.getElementById("aviso")) {
                    document.getElementById("aviso").remove();
                }
                console.log("caso1");
                for (var index = 1; index <= numero; index++) {
                    let laFila = document.createElement("div");
                    laFila.style.display = "table-row";
                    laFila.classList.add("lafila");
                    contenedor.appendChild(laFila);
                    console.log("Bucle1");
                    for (let ind2 = 1; ind2 <= index; ind2++) {
                        console.log("Bucle2");
                        console.log(index);
                        let laFicha = document.createElement("div");
                        laFicha.style.height = "70px";
                        laFicha.classList.add("ficha");
                        laFicha.style.display = "table-cell";
                        var aux = document.createElement("div");
                        aux.classList.add("auxiliar");
                        aux.id = "auxiliar";
                        laFila.appendChild(laFicha);
                        laFicha.appendChild(aux);
                        aux.addEventListener("click", pintaFicha, false);
                    }

                }
            } else {
                console.log("caso2")
                for (var index = 1; index <= numero; index++) {
                    let laFila = document.createElement("div");
                    laFila.style.display = "table-row";
                    laFila.classList.add("lafila");
                    contenedor.appendChild(laFila);
                    console.log("Bucle1");
                    for (let ind2 = 1; ind2 <= index; ind2++) {
                        console.log("Bucle2");
                        console.log(index);
                        let laFicha = document.createElement("div");
                        laFicha.style.height = "70px";
                        laFicha.classList.add("ficha");
                        laFicha.style.display = "table-cell";
                        var aux = document.createElement("div");
                        aux.classList.add("auxiliar");
                        aux.id = "auxiliar";
                        laFila.appendChild(laFicha);
                        laFicha.appendChild(aux);
                        aux.addEventListener("click", pintaFicha, false);
                    }

                }
            }
            //para crear las fichas necesarias

        }
    }
    //para pintar y esconder llas fichas
    function pintaFicha() {
        console.log("Click");
        console.log(color);
        var actual = this.style.backgroundColor;
        var trans = "transparent";
        console.log(actual);
        if (color == null) {
            console.log("el color es nulo")
        } else {
            if (color == this.style.backgroundColor) {
                this.style.background = "transparent";
                this.style.border = "0px";

            } else {
                if (this.style.backgroundColor == trans) {
                    this.style.background = "transparent";
                    this.style.border = "0px";
                } else {
                    this.style.background = color;
                }
            }
        }


    }
}