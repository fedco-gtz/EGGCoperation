function invertirPalabras(string) {
    var palabras = string.split(" ");
    var resultado = "";
    
    for (var i = palabras.length - 1; i >= 0; i--) {
      var palabraInvertida = "";
      for (var j = palabras[i].length - 1; j >= 0; j--) {
        palabraInvertida += palabras[i][j];
      }
      resultado += palabraInvertida + " ";
    }
    
    return resultado.trim();
  }
  
  var palabra1 = prompt("Ingresa una frase")
  console.log(invertirPalabras(palabra1));
  