
function encriptar()
  {
      let texto = document.getElementById("textarea").value;
      let tituloMensaje = document.getElementById("titulo_mensaje");
      let parrafo = document.getElementById("parrafo");
      let imagen = document.getElementById("imagen");
       
      let textocifrado=texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai") 
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");             
  


      if(texto.length != 0){
      document.getElementById("textarea").value = textocifrado;
      tituloMensaje.textContent = "Texto encriptado con exito";
      parrafo.textContent="";
      imagen.src ="./armstrong - copia.png";
      
    }else{
        imagen.src ="./armstrong - copia.png";
        tituloMensaje.textContent="Ningun mensaje fue encontrado";
        parrafo.textContent="Ingresa el texto que deseas encriptar o desencriptar";
        swal("oppps","debes ingrear un texto", "warning");
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
        imagen.src ="./armstrong - copia.png";
        
      }else{
          imagen.src ="/cpu_103435.png";
          tituloMensaje.textContent="Ningun mensaje fue encontrado";
          parrafo.textContent="Ingresa el texto que deseas encriptar o desencriptar";
        
          swal("oppps","debes ingrear un texto", "warning");
      }
}
 

