const add = function(...numbers) {
  let initial = 0;
  for (let i = 0; i < numbers.length; i++){
    initial += numbers[i];
  }
	
  return initial;
};

const subtract = function(...numbers) {
  let initial = 0;
  for (let i = 0; i < numbers.length; i++){
    if (i === 0){
      initial = numbers[i];
      continue;
    }
    initial -= numbers[i];
  }
	
  return initial;
};

const sum = function(numberArray) {
	let total = 0;
  for (let i = 0; i < numberArray.length; i++){
    total += numberArray[i];
  }

  return total;
};

const multiply = function(numbers) {
  for (let i = 0; i < numbers.length; i++){
    if (i === 0){
      initial = numbers[i];
      continue;
    }
    initial *= numbers[i];
  }
  return initial;
};

const power = function(base,exponential) {
	return base ** exponential;
};

const factorial = function(number) {
	if (number === 0 || number === 1){
    return 1;
  }
  let result = number;
  while (number > 1){
    number--;
    result = result * number;
  }

  return result;
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
