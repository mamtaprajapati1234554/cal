const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let firstNumber = '';
let secondNumber = '';
let operator = '';
let expression = '';
let justEvaluated = false;

function calculate(a, op, b) {
  a = Number(a);
  b = Number(b);
  if (op === '+') return a + b;
  if (op === '-') return a - b;
  if (op === '*') return a * b;
  if (op === '/') return b !== 0 ? a / b : 'Error';
}



buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    
    if (justEvaluated && ((value >= '0' && value <= '9') || value === '.')) {
      firstNumber = '';
      secondNumber = '';
      operator = '';
      expression = '';
      justEvaluated = false;
    }

    if ((value >= '0' && value <= '9') || value === '.') {
      if (operator === '') {
        if (value === '.' && firstNumber.includes('.')) return;
        firstNumber += value;
      } else {
        if (value === '.' && secondNumber.includes('.')) return;
        secondNumber += value;
      }
      expression += value;
      display.value = expression;
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      if (firstNumber !== '' && secondNumber !== '') {
        const result = calculate(firstNumber, operator, secondNumber);
        firstNumber = result.toString();
        secondNumber = '';
      }
      operator = value;
      expression += value;
      display.value = expression;
      justEvaluated = false;
    } else if (value === '=') {
      if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
        const result = calculate(firstNumber, operator, secondNumber);
        display.value = result;
        firstNumber = result.toString();
        secondNumber = '';
        operator = '';
        expression = '';
        justEvaluated = true;
      }
    }
    else if(value==='clear')
    {
        firstNumber = '';
        secondNumber = '';
        operator = '';
        expression='';
        display.value = '';
        justEvaluated = false;
    }
      });
    
});
    function press(value){
     if(value==='back')
    {
        // console.log({expression});
        if(expression.length === 0)
            return ;
       
        expression=expression.slice(0,-1);
        // if(operator === ''){
        //     firstNumber.slice(0,-1);
        // }
        // else if(secondNumber ===  ' ' && operator !=='')
        // {
        //     operator = '';
        // }
        // else
        // {
        //     secondNumber=secondNumber.slice(0,-1)
        // }
        display.value=expression;

    }
  }
  








    
