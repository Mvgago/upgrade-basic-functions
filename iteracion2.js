// Iteración #2 - Buscar la palabra más larga
// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero. Puedes usar este array para probar tu función:

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
    var longestWord = param[0];

    for(var i = 0; i < param.length; i++){
        if(param[i].length > longestWord.length){
            longestWord = param[i];
        }
    }
    return (longestWord);
}

let solution = findLongestWord(avengers);
console.log("Este es el resultado de la Iteración #2: " + solution);