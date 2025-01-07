const display = document.querySelector('.display'); 
const controlButtons = document.querySelector('.control').children; 

for (let button of controlButtons) {
    button.addEventListener('click', () => {
        display.innerText = button.innerText; 
    });
}
