
// Iteración #4: Calcular el promedio
// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
const allNumbers2 = [12, 21, 38, 5, 45, 37, 6];
var suma5 = 0;

function average(param) {
    for(var i = 0; i < param.length; i++){
        suma5 += param[i];
        var division = suma5 / param.length;
    }
    return division;
}

var resultado = average(allNumbers2);
console.log("Este es el resultado de la Iteración #4: " + resultado);