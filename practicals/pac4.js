let globalVar = "global variable";

function factorial_Recursive(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial_Recursive(n - 1);
  }
}

function outerFunction() {
  let outerVar = "variable in outer Function";

  function nestedFunction() {
    let nestedVar = "variable in nested Function";

    console.log("Accessing global variable:", globalVar);
    console.log("Accessing variable of outer Function:", outerVar);
    console.log("Accessing variable of nested Function:", nestedVar);
  }

  nestedFunction();
}

const num1 = 5;
const result = factorial_Recursive(num1);
console.log(`Factorial of ${num1} is:`, result);

outerFunction();