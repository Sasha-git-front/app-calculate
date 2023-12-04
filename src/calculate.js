function calculate({ number1, number2, sign }) {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
        return "no data";
    }
    switch (sign) {
        case "*": return num1 * num2
        case "/": return num1 / num2
        case "+": return num1 + num2
        case "-": return num1 - num2
        default:
            return "no data"
    }
}
export { calculate }