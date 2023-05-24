
function encriptar()
  {
      let texto = document.getElementById("textarea").value;
      let tituloMensaje = document.getElementById("titulo_mensaje");
      let parrafo = document.getElementById("parrafo");
      let imagen = document.getElementById("imagen");
      
      if(contarvocales(texto)!=0){
      let textocifrado=texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai") 
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");             
  
      if(texto.length != 0){
      document.getElementById("textarea").value = textocifrado;
      tituloMensaje.textContent = "Texto Encriptado con Éxito";
      parrafo.textContent="";
      imagen.src ="imagenes/encriptado.png";
      
    }else{
        imagen.src ="imagenes/noencriptado.png";
        tituloMensaje.textContent="Ningun mensaje fue Encontrado";
        parrafo.textContent="Ingresa el texto que deseas Encriptar o Desencriptar";
        swal("ERROR","Debes Ingresar un Texto", "error");
    }}else{
      swal("NO ES POSIBLE ENCRIPTAR","", "error");
    }
  }

function desencriptar()
{
    let texto = document.getElementById("textarea").value;
    let tituloMensaje = document.getElementById("titulo_mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");


  if(contarvocales(texto)!=0){

    let textocifrado=texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a") 
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
     
      
      if(texto.length != 0){

        if(desencripta(texto)!=true){
        document.getElementById("textarea").value = textocifrado;
        tituloMensaje.textContent = "Texto Desencriptado con Éxito";
        parrafo.textContent="";
        imagen.src ="imagenes/desencriptar.png";
        }else{
          swal("ERROR","NO ES POSIBLE DESENCRIPTAR", "info");
          imagen.src ="imagenes/desencriptar.png";
        }
      
      }else{
          imagen.src ="imagenes/noencriptado.png";
          tituloMensaje.textContent="Ningun mensaje fue encontrado";
          parrafo.textContent="Ingresa el texto que deseas Encriptar o Desencriptar";
        
          swal("ERROR","Debes Ingresar un Texto", "error");
      }
      {

      }
    }else{

      swal("NO ES POSIBLE DESENCRIPTAR","", "error");
    }
}
 
function copiar()
{
  var texto=document.getElementById("textarea").value;

  if(texto.length != 0)
  {
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
    swal("TEXTO COPIADO","", "success")
  }else
  {
    swal("ERROR", "Debes Ingresar un texto para copiar","error");
    imagen.src ="imagenes/noencriptado.png";
  }


}


function analizar()
{
  let texto=document.getElementById("textarea").value;
  let tituloMensaje = document.getElementById("titulo_mensaje");
  let parrafo = document.getElementById("parrafo");
  let imagen = document.getElementById("imagen");


  
  if(texto.length != 0)
  {
    if(contarvocales(texto) != 0){
    if(desencripta(texto)==true)
    {
      tituloMensaje.textContent = "El Texto debe Encriptarse";
      parrafo.textContent="";
      imagen.src ="imagenes/analizar.png";
    }else
    {
      tituloMensaje.textContent = "El Texto debe Desencriptarse";
      parrafo.textContent="";
      imagen.src ="imagenes/analizar.png";
    }
    
  }else
  {
    swal("NO ES POSIBLE ANALIZAR","", "error");
    
  }}else{

    swal("ERROR", "Debes Ingresar un texto para Analizar","error");
  }

}


function desencripta(texto)
{
  var respuesta=false;
  let textocifrado=texto
  .replace(/enter/gi, "e")
  .replace(/imes/gi, "i")
  .replace(/ai/gi, "a") 
  .replace(/ober/gi, "o")
  .replace(/ufat/gi, "u");

if(textocifrado==texto)
{
  respuesta=true;
}

  return respuesta;
}




function contarvocales(texto)
{
  const vocales = "aeiou";
  let cantidadVocales = 0;

  for(const letra of texto)
  {
    if(vocales.includes(letra.toLowerCase()))
    {
      cantidadVocales++;
    }  
  }
  return cantidadVocales;
}
