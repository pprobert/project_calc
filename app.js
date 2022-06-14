// create storage for numbers and +-*/=
let operand1 = undefined;
let operand2 = undefined;
let operator = undefined;
let hasDecimal = false;
// function for operator
function setOperator(input){
    operator = input;
}

// make the funtction for adding, subtracting, multiplying, and dividing.
const add = function(p1, p2) {
    return p1 + p2;
  };

const subtract = function(p1, p2) {
    return p1 - p2;
  };

const multiply = function(p1, p2) {
    return p1 * p2;
  };

const divide = function(p1, p2) {
    return p1 / p2
};

// create a function called operate and have that function be the connecter for the buttons of add, subtract, multiply, divide, and have it return the results.
let operate = function(){
  if (operand1 === undefined || operand2 === undefined || operator === undefined){
    console.log("missing operand or operator")
    return; 
   }
   if (operator == divide && operand2 == 0) {
    alert('you dumb')
    return;
   }
   let result = operator(operand1, operand2);
   operand1 = result;
   operand2 = undefined;
   display(result);
};

// funtction for storing operators
/*function handleOperator(nextOperator) {
  // Destructure the properties on the calculator object
  const { firstOperand, displayValue, operator } = calculator
  // `parseFloat` converts the string contents of `displayValue`
  // to a floating-point number
  const inputValue = parseFloat(displayValue);

  // verify that `firstOperand` is null and that the `inputValue`
  // is not a `NaN` value
  if (firstOperand === null && !isNaN(inputValue)) {
    // Update the firstOperand property
    calculator.firstOperand = inputValue;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}*/

//  make the function for the numbers
 function count(input){
    let displayValue = input;
    if (hasDecimal) {
      input = '.'+input;
    }
    if (operator){
      if (operand2) {
        operand2 += input;
      }
      else {
        operand2 = input;
      }
      operand2 = parseFloat(operand2);
      displayValue = operand2;
    }
  else {
    if (operand1) {
      operand1 += input;
    }
    else {
      operand1 = input;
    }
    operand1 = parseFloat(operand1);
    displayValue = operand1;
  }
    display(displayValue);
    hasDecimal = false;
    }

// create a decimal function
    function inputDecimal(dot) {
      let displayValue = operand1;
      if (operator) {
        displayValue = operand2.toString();
      }
      else {
        displayValue = operand1.toString();
      }
      // If the `displayValue` property does not contain a decimal point
      if (!displayValue.includes(dot)) {
        // Append the decimal point
         displayValue += dot;
         hasDecimal = true;
      }
      display(displayValue);
    }

// creation funtion for display 
function display(input){
  let screen = document.querySelector('.text');
    screen.innerHTML = input;
}

// create a function to clear the info on the display
function clearContent(){
     operand1 = undefined;
     operand2 = undefined;
     operator = undefined;
    let screen = document.querySelector('.text');
    screen.innerHTML = "0";
    
}
