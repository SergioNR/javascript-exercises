const sumAll = (num1, num2) => {
    if (num1 < 0 || num2 < 0) {
        return `ERROR`
    }

    if (typeof num1 != `number` || typeof num2 != `number`) {
        return `ERROR`
    } 

    let numbersInBetween = [];
    
    if (num1 < num2) {
        lowerNumber = num1;
        higherNumber = num2;
    }
    else {
        lowerNumber = num2;
        higherNumber = num1;
    }

    for (i = lowerNumber; higherNumber >= i ; i++) {
        console.log(`i is equal to ${i}`);
        numbersInBetween.push(i)
    }

    let totalSum = 0;

    for (i = 0; i < numbersInBetween.length + 1; i++) {
        totalSum = totalSum + i;
    }

    return totalSum;
}


// meter en un array los números que hay entre el num1 y el num2
// identificar cual es el numero1 y el numero2 y cual es más grande
// Sumar los números que están en el array

// Do not edit below this line
module.exports = sumAll;
