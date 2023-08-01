const fibonacci = function(desiredPosition) {
    if (desiredPosition < 0) {
        return `OOPS`
    }

        /* crear la fibonacci sequence
        para crearla necesito los 2 numeros anteriores
        seria 1,1,2,3,5,6,7
    sacar la posicion deseada */ 

    let numberBefore = 0; // numero anterior a la posicion que estamos calculando 
    let numberBeforeBefore = 1; // numero anterior x2 a la posicion que estamos calculando
    let currentNumber = 0;

    for (let i = 0 ;i< desiredPosition; i++) { // creamos el loop para hacer funcionar la secuencia
        console.log(`the iteration is ${i} and BEFORE THE LOOP the value of currentNumber is ${currentNumber}, 
        the value of numberBefore is now ${numberBefore} and
        the value of numberBeforeBefore is  ${numberBeforeBefore} `) // indicador de iteracion

        currentNumber = numberBefore + numberBeforeBefore; // genera el numero actual sumando los 2 anteriores
        // para el siguiente loop, tengo que actualizar los inputs, entonces
        numberBeforeBefore = numberBefore
        numberBefore = currentNumber;
        console.log(`the value AFTER THE LOOP of currentNumber is ${currentNumber}, 
        the value of numberBefore is now ${numberBefore} and
        the value of numberBeforeBefore is now ${numberBeforeBefore}`)
    }
    return currentNumber
}
    


// Do not edit below this line
module.exports = fibonacci;
