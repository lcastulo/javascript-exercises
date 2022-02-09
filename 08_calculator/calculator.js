const add = function(numOne, numTwo) {
  const ans = numOne + numTwo;
  return ans;
};

const subtract = function(numOne, numTwo) {
  const ans = numOne + numTwo; 
  return ans;
};

const sum = function(arr) {
	let sum = 0;
  for(i=0; i<arr.length; i++){
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let ans = 1;
  for(i=0; i<arr.length; i++){
    ans = ans * arr[i];
  }
  return ans;
};

const power = function(num, power) {
  let ans = 0;
  ans = num ** power;
  return ans;
};

const factorial = function(num) {
	if(num === 0){
    return 1;
  }
  let numList = [];
  let factorialNums = 1;
  for(i=0; i<mum; i++){
    numList.push(factorialNums);
    factorialNums++;
  }
  var total = 1;
  for(i=0; i< numList.length; i++){
    total = numList[i] * total;
  }
  return total;
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
