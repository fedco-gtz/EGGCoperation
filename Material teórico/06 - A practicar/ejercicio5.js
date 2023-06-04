function operacionesMatematicas(num1, num2) {
    var resultado = {};
  
    resultado.suma = num1 + num2;
    resultado.resta = num1 - num2;
    resultado.multiplicacion = num1 * num2;
    resultado.division = num1 / num2;
  
    console.log(resultado);
  
    return resultado;
  }

  var num1 = parseInt(prompt("Ingresa un numero"))
  var num2 = parseInt(prompt("Ingresa otro numero"))
  operacionesMatematicas(num1, num2)
