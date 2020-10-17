var buttons = document.querySelectorAll('.numInput');
var display = document.getElementById('CalcDisplay');

buttons.forEach((button) => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        var numberInput = event.target.value;

        if (display.value === '0') {
            display.value = '';
        }

        if (numberInput === 'AC') {
            display.value = 0;
        }

        if (display.value !== 0 && numberInput !== 'AC' && numberInput !== '=') {
            display.value += numberInput;
        }

        if (numberInput === '=') {
            display.value = eval(display.value)
        }
    });
})