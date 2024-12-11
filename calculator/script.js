const display = document.getElementById('display');
function Number(number) {
    display.value += number;
}
function Operator(operator) {
    display.value += operator;
}
function Display() {
    display.value = '';
}
function deleteOxiri() {
    display.value = display.value.slice(0, -1);
}
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert('Xato!');
        clearDisplay();
    }
}