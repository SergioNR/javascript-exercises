const palindromes = function(...args) { // aqui he usado args pero realmente es un unico string, esto me valdría si se utiliza más de un string function(string) {<la función>}

    for (let i=0 ; i<arguments.length ; ++i){
        let splitArray = arguments[i].split(); // me va a devolver un array
        let reversedWordArray = splitArray.reverse()
        console.log(reversedWordArray)
        let reversedWord = reversedWordArray.join() // junto el array
        console.log(`the word being evaluted is ${arguments[i]} - EXPECTED`)
        console.log(`the current word reversed is ${reversedWord}`)
        
        if (reversedWord = arguments[i]) {
            return true;
        }

        else {
            return false;
        }
    }
    /* 
    1- quiero darle la vuelta a la palabra
    2- quiero comprobar si la palabra al reves es igual que la original
    3- si es igual, devolver verdadero
    4- si es diference, devolver falso 
    */

};

// Do not edit below this line
module.exports = palindromes;
