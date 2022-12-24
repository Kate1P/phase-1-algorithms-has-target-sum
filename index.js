const fibArrayExpansion = (() => {
const fibNumbers = [1,1];
return function fib (max) {
  while (fibNumbers[fibNumbers.length-1] < max) {
    fibNumbers.push(fibNumbers[fibNumbers.length-1] + fibNumbers[fibNumbers.length-2])
  }
  return fibNumbers
}
}) ();


function hasTargetSum(array, target) {
  // Write your algorithm here
return array.find((a, inxA) => {
  return array.find ((b, inxB) => {
    if (inxA === inxB) {
      return false;
    }
    return a+b === target
  })
}) !==undefined
}
function hasTargetSumForFib(target){
  return hasTargetSum (target, hasTargetSumForFib(target))
}

/* (let i = 0; i <array.length; i++){
  for(let j=0; j < array.length; j++) {
if (array[i] + array[j] == target) {
  return true;
}
} 
}
}
for ( let i = 0; i <array.length; i++) {
  const j = array.length - 1 - i;
  let number = array[i] + array[j];
  if (number!== target) return false;
}
return true;
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  look through an array
  add one number + another number we should get the integer as a target
*/

/*

1. sum the first number and the next number until we find the turget number
2. iterate from the beggining by checkking the sum of 2 numbers
3. if the sum mathces to target number, return true
4. if the sum doesn't match to the turget number, return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
