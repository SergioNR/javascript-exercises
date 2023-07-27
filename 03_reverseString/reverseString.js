const reverseString = (string) => {
    let splitString = string.split(``); // creates an array of the letters
    let reversedString = splitString.reverse(); // reverses the order of the array
    let rejoinedString = reversedString.join(``); // rejoins the array into a single string
    
    return rejoinedString;
}
/* Necesito: 
1- Coger el string
2- darle la vuelta
3- returnearlo dado la vuelta  */


// Do not edit below this line
module.exports = reverseString;

