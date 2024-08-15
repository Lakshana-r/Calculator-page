document.addEventListener('DOMContentLoaded', () => {
    const calculator = document.querySelector('.calculator');
    const keys = calculator.querySelector('.calculator__keys');
    const display = calculator.querySelector('.calculator__output');
    let firstValue = '';
    let operator = '';
    let secondValue = '';
    let shouldResetDisplay = false;

    keys.addEventListener('click', e => 
        {
        if (e.target.matches('button')) 
            {
            const key = e.target;
            const action = key.textContent;
            const displayedNum = display.textContent;

            if (key.classList.contains('calculator__key--operator')) 
                {
                operator = action;
                firstValue = displayedNum;
                shouldResetDisplay = true;
            } else if (action === '=') 
                {
                secondValue = displayedNum;
                display.textContent = calculate(firstValue, operator, secondValue);
                operator = '';
            } else if (action === 'AC') 
                {
                display.textContent = '0';
                firstValue = '';
                secondValue = '';
                operator = '';
            } else 
            {
                if (displayedNum === '0' || shouldResetDisplay) 
                    {
                    display.textContent = action;
                    shouldResetDisplay = false;
                } else 
                {
                    display.textContent = displayedNum + action;
                }
            }
        }
    });

    function calculate(first, operator, second) 
    {
        const firstNum = parseFloat(first);
        const secondNum = parseFloat(second);
        if (operator === '+') return firstNum + secondNum;
        if (operator === '-') return firstNum - secondNum;
        if (operator === '×') return firstNum * secondNum;
        if (operator === '÷') return firstNum / secondNum;
        return second;
    }
});
