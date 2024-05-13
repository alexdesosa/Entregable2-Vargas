document.addEventListener("DOMContentLoaded", function () {
  let btnSi = document.getElementsByClassName("btn-si")[0];
  let btnNo = document.getElementsByClassName("btn-no")[0];
  let tituloInicio = document.getElementById("titulo-inicio");
  let preguntaInicio = document.getElementById("pregunta-inicio");

  btnNo.addEventListener('click',function(){
    tituloInicio.remove();
    preguntaInicio.remove();
    btnSi.remove();
    btnNo.remove();

    let contenedor = document.createElement("div");
    let parrafo = document.createElement("p");
    parrafo.textContent = "Yo tampoco quiero jugar con vos. ¡Nos vemos!";
    contenedor.appendChild(parrafo);
    document.body.appendChild(contenedor);
  })

  btnSi.addEventListener("click", function (event) {
    tituloInicio.remove();
    preguntaInicio.remove();
    btnSi.remove();
    btnNo.remove();

    let contenedor = document.createElement("div");
    let parrafo = document.createElement("p");
    parrafo.textContent = "Bienvenido a estas tierras. ¿Cómo es tu nombre?";
    contenedor.appendChild(parrafo);
    document.body.appendChild(contenedor);

    let contenedorPersonaje = document.createElement("div");
    let formulario = document.createElement("form");
    formulario.id = "formularioPersonaje";

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.id = "nombrePersonaje";
    inputNombre.placeholder = "Ingrese el nombre del personaje";
    inputNombre.required = true;

    let inputEdad = document.createElement("input");
    inputEdad.type = "text";
    inputEdad.id = "edadPersonaje";
    inputEdad.placeholder = "Ingresa la edad del personaje";
    inputEdad.required = true;

    let botonEnviar = document.createElement("button");
    botonEnviar.type = "submit";
    botonEnviar.textContent = "Enviar";

    formulario.appendChild(inputNombre);
    formulario.appendChild(inputEdad);
    formulario.appendChild(botonEnviar);

    contenedorPersonaje.appendChild(formulario);
    document.body.appendChild(contenedorPersonaje);

    formulario.addEventListener("submit", function (event) {
      event.preventDefault();
      let nombre = document.getElementById("nombrePersonaje").value;
      let edad = document.getElementById("edadPersonaje").value;
      mostrarNombreEdad(nombre, edad);

      contenedor.remove();
      contenedorPersonaje.remove();
    });

    function mostrarNombreEdad(nombre, edad) {
      let resultadoPersonaje = document.createElement("div");
      resultadoPersonaje.id = "resultadoPersonaje";
      resultadoPersonaje.textContent = `Hola ${nombre}, ah sido un largo viaje. Debes de venir de Arkadia, supongo que debes tener ${edad}. ¿Cierto?`;
      document.body.appendChild(resultadoPersonaje);
      setTimeout(function () {
        resultadoPersonaje.remove();
        continuarHistoria();
      }, 1500);
    }

    function continuarHistoria(event) {
      let contenedor = document.createElement("div");
      contenedor.id = "contenedor";
      let botonContinuar = document.createElement("button");
      botonContinuar.id = "btn-cont";
      botonContinuar.textContent = "Continuar";
      let pregunta = document.createElement("p");
      pregunta.textContent = "¿Qué camino elegirás héroe?";
      contenedor.appendChild(pregunta);
      contenedor.appendChild(botonContinuar);
      document.body.appendChild(contenedor);

      botonContinuar.addEventListener("click", function (event) {
        let contenedor = document.createElement("div");
        let parrafo = document.createElement("p");
        parrafo.textContent =
          "Así que encontraste una piedra. No sabía que ibas a lograrlo y menos que te la ibas a guardar";
        contenedor.appendChild(parrafo);
        document.body.appendChild(contenedor);

        class Inventario {
          constructor(objeto) {
            this.objeto = objeto;
          }
        }
        piedra1 = new Inventario("piedra");
        const datosJSON = JSON.stringify(piedra1);
        localStorage.setItem("piedra", datosJSON);

        setTimeout(function () {
          parrafo.textContent = "Se te están acercando bandidos, ¡Haz algo!";
        }, 2000);

        setTimeout(function () {
          let tomarPiedra = localStorage.getItem("piedra");
          let piedraObjeto = JSON.parse(tomarPiedra);
          localStorage.removeItem("piedra");
          parrafo.textContent =
            "¡Haz tirado la piedra! Lograste matar un bandido, los demás han escapado. Debes tomar todo de ellos";
          setTimeout(function () {
            parrafo.textContent = "";
          }, 3000);
        }, 4000);

        setTimeout(function () {
          parrafo.textContent =
            "Luego de que hayas saqueado al bandido, vas al mercado a hacer unas compras";
          setTimeout(function () {
            parrafo.textContent = "...En el mercado...";
            setTimeout(function () {
              parrafo.textContent = "";
              mercado();
            }, 3000);
          }, 4000);
        }, 5000);

        setTimeout(function () {
          if (botonContinuar) {
            pregunta.remove();
            botonContinuar.remove();
          }
        }, 1000);
      });
    }

    function mercado() {
      let contenedor = document.createElement("div");
      let parrafo = document.createElement("p");
      parrafo.textContent =
        "¡Bienvenidos al mercado! ¿Qué buscas querido aventurero? Tenemos traje de Imperial, Dragonico, Banal, Arcaico, Politoico, Enanal, Picaro, Arquero, Polizaico. ¡Desde pechera, escudo, casco, espadas, botas!";
      contenedor.appendChild(parrafo);
      document.body.appendChild(contenedor);

      class Objeto {
        constructor(casco, pechera, botas, escudo, espada) {
          (this.casco = casco),
            (this.pechera = pechera),
            (this.botas = botas),
            (this.escudo = escudo),
            (this.espada = espada);
        }
      }
      const trajesDisponibles = [
        (trajeImperial = new Objeto(
          "Casco Imperial",
          "Pechera Imperial",
          "Botas Imperales",
          "Escudo Imperial",
          "Espada Imperial"
        )),
        (trajeDragonico = new Objeto(
          "Casco Dragonico",
          "Pechera Dragonico",
          "Botas Dragonico",
          "Escudo Dragonico",
          "Espada Dragonico"
        )),
        (trajeBanal = new Objeto(
          "Casco Banal",
          "Pechera Banal",
          "Botas Banal",
          "Escudo Banal",
          "Espada Banal"
        )),
        (trajeArcaico = new Objeto(
          "Casco Arcaico",
          "Pechera Arcaico",
          "Botas Arcaico",
          "Escudo Arcaico",
          "Espada Arcaico"
        )),
        (trajePolitoico = new Objeto(
          "Casco Politoico",
          "Pechera Politoico",
          "Botas Politoico",
          "Escudo Politoico",
          "Espada Politoico"
        )),
        (trajeEnanal = new Objeto(
          "Casco Enanal",
          "Pechera Enanal",
          "Botas Enanal",
          "Escudo Enanal",
          "Espada Enanal"
        )),
        (trajePicaro = new Objeto(
          "Casco Picaro",
          "Pechera Picaro",
          "Botas Picaro",
          "Escudo Picaro",
          "Espada Picaro"
        )),
        (trajeArquero = new Objeto(
          "Casco Arquero",
          "Pechera Arquero",
          "Botas Arquero",
          "Escudo Arquero",
          "Espada Arquero"
        )),
        (trajePolizaico = new Objeto(
          "Casco Polizaico",
          "Pechera Polizaico",
          "Botas Polizaico",
          "Escudo Polizaico",
          "Espada Polizaico"
        )),
      ];

      let inputComprar = document.createElement("input");
      inputComprar.type = "text";
      inputComprar.id = "inputComprar";
      inputComprar.placeholder = "Compra";
      let botonComprar = document.createElement("button");
      botonComprar.textContent = "Comprar";

      contenedor.appendChild(inputComprar);
      contenedor.appendChild(botonComprar);
      document.body.appendChild(contenedor);

      botonComprar.addEventListener("click", function () {
        let compra = inputComprar.value;
        let trajeComprado = trajesDisponibles.find((traje) =>
          Object.values(traje).some(
            (valor) =>
              typeof valor === "string" &&
              valor.toLowerCase().includes(compra.toLowerCase())
          )
        );

        if (trajeComprado) {
          let trajesComprados =
            JSON.parse(localStorage.getItem("trajesComprados")) || [];
          trajesComprados.push(trajeComprado);
          localStorage.setItem(
            "trajesComprados",
            JSON.stringify(trajesComprados)
          );

          let mensaje = document.createElement("p");
          mensaje.textContent = `¡Compraste ${compra}!`;
          document.body.appendChild(mensaje);

          contenedor.remove();
          mostrarDespedida();
        } else {
          let mensaje = document.createElement("p");
          mensaje.textContent = "El traje buscado no se encuentra disponinble";
          document.body.appendChild(mensaje);
        }

        function mostrarDespedida() {
          let mensajeDespedida = document.createElement("p");
          mensajeDespedida.textContent = "¡Gracias por venir! ¡Hasta luego!";
          document.body.appendChild(mensajeDespedida);
        }
      });
    }
  });
});
