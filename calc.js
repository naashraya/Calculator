const display = document.querySelector('.display'); 
const controlButtons = document.querySelector('.control').children; 
const allSymbols = ['+', '-', 'X', '÷', '=', '%', '(', ')', 'C' ];

let firstValue = '';
let secondValue = '';
let symbol = '';
let result = '';

const calculate = () =>{
    // firstValue = parseFloat(firstValue);
    // secondValue = parseFloat(secondValue);
//new line of code
    firstValue = firstValue ? parseFloat(firstValue) : 0;
    secondValue = secondValue ? parseFloat(secondValue) : 0;

        if (symbol == '+') result = firstValue + secondValue;
        if (symbol == '-') result = firstValue - secondValue;
        if (symbol == 'X') result = firstValue * secondValue;
        if (symbol == '÷') result = firstValue / secondValue;
        if (symbol == '%') result = firstValue % secondValue;
    
    display.innerText = result;
    firstValue = result.toString();
    secondValue = '';
    symbol = '';
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
