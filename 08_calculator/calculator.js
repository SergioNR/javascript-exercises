const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
  let totalSum = 0;

  for (i = 0; i < array.length; i++) {
    // console.log(`the value of i is ${array[i]}`) // verification line
    totalSum = totalSum + array[i]
    // console.log(`the value of totalSum is ${totalSum}`) // verification line
  }

  return totalSum;
};

const multiply = function(...args) { // arguments se convierte en un array
  let multiplyResult = 1;

  for (i = 0; i < arguments.length; i++) {
    // console.log(`the value of is is ${arguments[i]}`) // verification line
    multiplyResult = multiplyResult * arguments[i]
    // console.log(`the current value of multiplyResult is ${multiplyResult}`) // verification line
  };

  return multiplyResult;
};

const power = function(num, power) {
  return num ** power;
};

const factorial = function(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
