const display = document.querySelector('.display'); 
const controlButtons = document.querySelector('.control').children; 
const allSymbols = ['+', '-', 'X', '÷', '=', '%', '(', ')', 'C' ];

let firstValue = '';
let secondValue = '';
let symbol = '';
let result = '';

const calculate = () =>{
  
    firstValue = firstValue ? parseFloat(firstValue) : 0;
    secondValue = secondValue ? parseFloat(secondValue) : 0;

    try {
        let expression = display.innerText.replace('X', '*').replace('÷', '/');
        
        if (isParenthesesBalanced(expression)) {
            
            result = eval(expression);

            display.innerText = result; 
        } else {
            display.innerText = 'Error'; 
        }
    } catch (e) {
        display.innerText = 'Error'; 
    }

        if (symbol == '+') result = firstValue + secondValue;
        if (symbol == '-') result = firstValue - secondValue;
        if (symbol == 'X') result = firstValue * secondValue;
        if (symbol == '÷') result = firstValue / secondValue;
        if (symbol == '%') result = firstValue % secondValue;
        if (symbol == '(') {

        }
    
    display.innerText = result;
    firstValue = result.toString();
    secondValue = '';
    symbol = '';
};

const isParenthesesBalanced = (expression) => {
    let openCount = 0;
    for (let char of expression) {
        if (char === '(') openCount++;
        if (char === ')') openCount--;
    }
    return openCount === 0; // If openCount is 0, parentheses are balanced
};

const ClearCalculator = () =>{
    firstValue = '';
    secondValue = '';
    symbol = '';
    result = '';
    display.innerText = '';
};


for (let button of controlButtons) {
    button.addEventListener('click', () => {
        const { innerText: btnValue } = button;
        const btnValueIsSymbol = allSymbols.includes(btnValue);

        if (!secondValue && btnValue == '='){
            return null;
        }

        if (btnValue === 'C') {
            ClearCalculator();
            return;
        } 
        
        if(firstValue && btnValueIsSymbol){
            if (secondValue){
                secondValue && calculate();
            }
            symbol = btnValue;
        }
        else if (!symbol) firstValue += btnValue;
        else if (symbol)secondValue += btnValue;
        
        if (btnValue != '=' && btnValue != 'C') display.innerText += btnValue;  
    });
}
