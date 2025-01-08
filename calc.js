const display = document.querySelector('.display'); 
const controlButtons = document.querySelector('.control').children; 
const allSymbols = ['+', '-', 'X', '÷', '=', '%', '(', ')', 'C' ];

let firstValue = '';
let secondValue = '';
let symbol = '';

const calculate = () =>{
    firstValue = parseFloat(firstValue);
}

for (let button of controlButtons) {
    button.addEventListener('click', () => {
        const {innerText: btnValue} = button;
        const btnValueIsSymbol = allSymbols.includes(btnValue);

        if(firstValue && btnValueIsSymbol){
            symbol = btnValue;
        }
        else if (!symbol) firstValue += btnValue;
        else if (symbol)secondValue += btnValue;

        if (btnValue != '=' && btnValue != 'C') display.innerText += btnValue; 
    });
}
