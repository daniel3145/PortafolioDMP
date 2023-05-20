
function encriptar()
  {
      var texto = document.getElementById("textarea").value;
       
      let textocifrado=texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai") 
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");             
  
      document.getElementById("decifrado").value = textocifrado;
  }

function desencriptar()
{
    var texto = document.getElementById("tex").value;
    let textocifrado=texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a") 
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
      console.log(textocifrado);
      document.getElementById("decifrado").value = textocifrado;
}
 

