'use strict'

let animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
 
function findArrayIndex(array, item) {
    for (let i = 0; i < array.length; i++) {
        const animalPosition = array[i];
        if (animalPosition === item) {
            return i;
        }
    }
}

console.log (findArrayIndex(animals, 'Ajolote'));