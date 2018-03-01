
function printGreatestCommonDivisor(firstNumber, secondNumber) {
    while (firstNumber !== secondNumber)
    {
        if (firstNumber > secondNumber) {
            firstNumber -= secondNumber;
        } else {
            secondNumber -= firstNumber;
        }
    }

    return firstNumber;
}

console.log(printGreatestCommonDivisor(105, 252));
console.log(printGreatestCommonDivisor(252, 105));