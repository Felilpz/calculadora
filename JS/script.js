// calculadora javascript

let total = 0;
let buffer = "0";
let previousOperator;
let screen = document.querySelector('.screen')

function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    } else {
        handleSymbol(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            buffer = 0;
            total = 0;
            break;
        case '=':
            if (previousOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = total;
            total = 0;
            break;
        case "←":
            if (buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.toString(0, buffer.length - 1);
            };
            break;
        case '+':
        case '-':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }
}
