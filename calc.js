const display = document.querySelector('.display'); 
const controlButtons = document.querySelector('.control').children; 
const allSymbols = ['+', '-', 'X', '÷', '=', '%', '(', ')', 'C' ];

let firstValue = '';
let secondValue = '';
let symbol = '';
let result = '';

const calculate = () =>{
    firstValue = parseFloat(firstValue);
    secondValue = parseFloat(secondValue);

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


for (let button of controlButtons) {
    button.addEventListener('click', () => {
        const { innerText: btnValue } = button;
        const btnValueIsSymbol = allSymbols.includes(btnValue);

        if (btnValue === 'C') {
            // Clear everything
            firstValue = '';
            secondValue = '';
            symbol = '';
            result = '';
            display.innerText = '';
        } else if (btnValue === '=') {
            // Perform calculation
            if (firstValue && secondValue && symbol) {
                calculate();
            }
        } else if (btnValueIsSymbol) {
            // Handle symbol input
            if (!symbol && firstValue) {
                symbol = btnValue;
                display.innerText += btnValue;
            }
        } else {
            // Handle number input
            if (!symbol) {
                firstValue += btnValue;
            } else {
                secondValue += btnValue;
            }
            display.innerText += btnValue;
        }
    });
}
