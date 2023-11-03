// for (var a = 10; a > 0; a--) {
//   console.log(a);
// }
// let a = 2;

// while (a <= 20) {
//   console.log((a += 2));
// }

// function findFactorial(number) {
//   if (number < 0) {
//     return "Factorial is not defined for negative numbers.";
//   } else if (number === 0 || number === 1) {
//     return 1;
//   } else {
//     let factorial = 1;
//     let i = 1;
//     while (i <= number) {
//       factorial *= i;
//       i++;
//     }
//     return factorial;
//   }
// }

// const inputNumber = 5; // You can change this to any positive integer
// const factorialResult = findFactorial(inputNumber);

// console.log(`The factorial of ${inputNumber} is: ${factorialResult}`);

// function result(value_given) {
//   let a = 5;

//   while (a == Number) {
//     let *= a;
//   }

let nana = () => {
  var a = 1;
  while (a <= 10) {
    a *= 1; // This line is not necessary and doesn't change 'a'
    a++; // Increment 'a' in each iteration to avoid an infinite loop
  }

  return a;
};

console.log(nana());
