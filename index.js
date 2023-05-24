//Esta funcion sirve para encriptar el mensaje ingresado inicialmente se hace la declaracion de las variables despues hay un si que busca
//primero valida si el texto esta vacio si no es asi entonces entra a validar si hay vocales en el texto ingresado y si hay vocales entonces entra a realizar
//la sustiion de las letras  con el .replace por la palabra que lograr hacer la encriptacion al poco tiempo lo que hace es enviar el nuevo contenido
//al text area y mostrar los mensajes y cambia la imagen
function encriptar() {
  let texto = document.getElementById("textarea").value;
  let tituloMensaje = document.getElementById("titulo_mensaje");
  let parrafo = document.getElementById("parrafo");
  let imagen = document.getElementById("imagen");

  if (texto.length != 0) {
    if (contarvocales(texto) != 0) {
      let textocifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
      document.getElementById("textarea").value = textocifrado;
      tituloMensaje.textContent = "Texto Encriptado con Éxito";
      parrafo.textContent = "";
      imagen.src = "imagenes/encriptado.png";
    } else {
      swal(
        "NO ES POSIBLE ENCRIPTAR ",
        "PORQUE SOLO HAY LETRAS CONSONANTES",
        "error"
      );
    }
  } else {
    imagen.src = "imagenes/noencriptado.png";
    tituloMensaje.textContent = "Ningun mensaje fue Encontrado";
    parrafo.textContent =
      "Ingresa el texto que deseas Encriptar o Desencriptar";
    swal("ERROR", "Debes Ingresar un Texto", "error");
  }
}

//Esta funcion sirve para desencriptar el mensaje ingresado inicialmente se hace la declaracion de las variables despues hay un si que busca
//primero valida si el texto esta vacio si no es asi entonces entra a validar si hay vocales en el texto ingresado y si hay vocales entonces entra a realizar
//la sustiion de las letras  con el .replace por la palabra que lograr hacer la encriptacion al poco tiempo lo que hace es enviar el nuevo contenido
//al text area y mostrar los mensajes y cambia la imagen. usa el metodo contarvocales() para revisar el numero de vocales que tiene el texto y tambien
//usa el metodo desencripta dado que sirve para para revisar si es lo maximo que una palabra puede desencriptarse y alo mostrar una alerta al usuario
function desencriptar() {
  let texto = document.getElementById("textarea").value;
  let tituloMensaje = document.getElementById("titulo_mensaje");
  let parrafo = document.getElementById("parrafo");
  let imagen = document.getElementById("imagen");

  if (texto.length != 0) {
    if (contarvocales(texto) != 0) {
      if (desencripta(texto) != true) {
        let textocifrado = texto
          .replace(/enter/gi, "e")
          .replace(/imes/gi, "i")
          .replace(/ai/gi, "a")
          .replace(/ober/gi, "o")
          .replace(/ufat/gi, "u");
        document.getElementById("textarea").value = textocifrado;
        tituloMensaje.textContent = "Texto Desencriptado con Éxito";
        parrafo.textContent = "";
        imagen.src = "imagenes/desencriptar.png";
      } else {
        swal("NO PUEDE DESENCRIPTARSE", "Porque ya fue desencriptado en su totalidad", "info");
        imagen.src = "imagenes/desencriptar.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent =
          "Ingresa el texto que deseas Encriptar o Desencriptar";
      }
    } else {
      swal(
        "NO ES POSIBLE DESENCRIPTAR",
        "PORQUE SOLO HAY LETRAS CONSONANTES",
        "error"
      );
    }
  } else {
    imagen.src = "imagenes/noencriptado.png";
    tituloMensaje.textContent = "Ningun mensaje fue encontrado";
    parrafo.textContent =
      "Ingresa el texto que deseas Encriptar o Desencriptar";
    swal("ERROR", "Debes Ingresar un Texto", "error");
  }
}

//este metodo lo que hace es copiar el texto en el portapapeles y despues elimina lo que hay en el texto area dejandolo vacio
function copiar() {
  var texto = document.getElementById("textarea").value;

  if (texto.length != 0) {
    var aux = document.createElement("textarea");
    aux.value = texto;
    aux.setAttribute("readonly", "");
    aux.style.position = "absolute";
    aux.style.left = "-9999px";
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    document.getElementById("textarea").value = "";
    swal("TEXTO COPIADO", "", "success");
  } else {
    swal("ERROR", "Debes Ingresar un texto para copiar", "error");
    imagen.src = "imagenes/noencriptado.png";
  }
}

//este metodo sirve para analizar si es posible encriptar o desencriptar invocacando el metodo desencripta
function analizar() {
  let texto = document.getElementById("textarea").value;
  let tituloMensaje = document.getElementById("titulo_mensaje");
  let parrafo = document.getElementById("parrafo");
  let imagen = document.getElementById("imagen");

  if (texto.length != 0) {
    if (contarvocales(texto) != 0) {
      if (desencripta(texto) == true) {
        tituloMensaje.textContent = "El Texto puede Encriptarse";
        parrafo.textContent = "";
        imagen.src = "imagenes/analizar.png";
      } else {
        tituloMensaje.textContent = "El Texto puede Desencriptarse";
        parrafo.textContent = "";
        imagen.src = "imagenes/analizar.png";
      }
    } else {
      swal(
        "NO ES POSIBLE ANALIZAR",
        "PORQUE SOLO HAY LETRAS CONSONANTES",
        "error"
      );
    }
  } else {
    swal("ERROR", "Debes Ingresar un texto para Analizar", "error");
  }
}

//esta funcion sirve para mirar si el texto esta desencriptado en su totalidad para poder limitarlo en los programas
function desencripta(texto) {
  var respuesta = false;
  let textocifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (textocifrado == texto) {
    respuesta = true;
  }

  return respuesta;
}

//Este metodo sirve para contar la cantidad de vocales ingresadas para ser usado en los otros metodos y se lograria validar que no hay vocales
//no es necesario encriptar dado que no se puede hacer los reemplazos necesarios
function contarvocales(texto) {
  const vocales = "aeiou";
  let cantidadVocales = 0;

  for (const letra of texto) {
    if (vocales.includes(letra.toLowerCase())) {
      cantidadVocales++;
    }
  }
  return cantidadVocales;
}
