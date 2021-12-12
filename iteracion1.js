// Iteración #1 - Busca el máximo
// Completa la función que tomando dos números como argumento devuelva el más alto.

var num1 = parseInt(prompt("Introduce un número", 0));
var num2 = parseInt(prompt("Introduce otro número", 0));
alert("Te vamos a decir cuál de los dos números es el mayor");

function sum(numberOne , numberTwo) {
    
    if(numberOne > numberTwo){
        console.log("Este es el resultado de la Iteración #1: El número " + numberOne + " es el mayor.");

    } else if(numberTwo > numberOne){
        console.log("Este es el resultado de la Iteración #1: El número " + numberTwo + " es el mayor.");
    }
}
sum(num1, num2);