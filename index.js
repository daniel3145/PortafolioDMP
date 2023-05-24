
function encriptar()
  {
      let texto = document.getElementById("textarea").value;
      let tituloMensaje = document.getElementById("titulo_mensaje");
      let parrafo = document.getElementById("parrafo");
      let imagen = document.getElementById("imagen");
      var conte;
      let textocifrado=texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai") 
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");             
  
      if(texto.length != 0){
      document.getElementById("textarea").value = textocifrado;
      tituloMensaje.textContent = "Texto Encriptado con Exito";
      parrafo.textContent="";
      imagen.src ="/imagenes/encriptado.png";
      
    }else{
        imagen.src ="/imagenes/noencriptado.png";
        tituloMensaje.textContent="Ningun mensaje fue encontrado";
        parrafo.textContent="Ingresa el texto que deseas encriptar o desencriptar";
        swal("ERROR","Debes Ingresar un Texto", "error");
    }
  }

function desencriptar()
{
    let texto = document.getElementById("textarea").value;
    let tituloMensaje = document.getElementById("titulo_mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");
    let textocifrado=texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a") 
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
     
      if(texto.length != 0){
        document.getElementById("textarea").value = textocifrado;
        tituloMensaje.textContent = "Texto desencriptado con exito";
        parrafo.textContent="";
        imagen.src ="/imagenes/desencriptar.png";
      
      }else{
          imagen.src ="/imagenes/noencriptado.png";
          tituloMensaje.textContent="Ningun mensaje fue encontrado";
          parrafo.textContent="Ingresa el texto que deseas encriptar o desencriptar";
        
          swal("ERROR","Debes Ingresar un Texto", "error");
      }
}
 
function eliminar()
{
  var aux = document.createElement("textarea");
  aux.value = document.getElementById("textarea").value;
  aux.setAttribute("readonly", "");
  aux.style.position = "absolute";
  aux.style.left = "-9999px";
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  document.getElementById("textarea").value = "";
console.log("se apreto el boton mi papa");
alert("si que se apreto");
}

const copyToClipboard = str => {
  // PASO 1
  const el = document.createElement("textarea");
  // PASO 2
  el.value = str;
  el.setAttribute("readonly", "");
  // PASO 3
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  // PASO 4
  el.select();
  // PASO 5
  document.execCommand("copy");
  // PASO 6
  document.body.removeChild(el);
};
