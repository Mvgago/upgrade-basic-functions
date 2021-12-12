// Iteración #5: Calcular promedio de strings
// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
    let total = 0;
  for(var i = 0; i < param.length; i++){
      if(typeof param[i] === "number"){
          total += param[i];
        } else {
            total += param[i].length;
        }
    }
    return total;
}

var result = averageWord(mixedElements);
console.log("Este es el resultado de la Iteración #5: " + result);