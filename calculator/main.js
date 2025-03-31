
const numbers = [2, 3, 'minus', 'plus', 'multiplication', 'division']


function calculator(firtsNumber, secondNumber, symbol) {
    for (let i = 0; i < numbers.length; i++) {
        if (symbol === 'minus') {
            return firtsNumber - secondNumber
        }
        } if (symbol === 'plus') {
        return firtsNumber + secondNumber
        } if (symbol==='multiplication'){
            return firtsNumber * secondNumber
        } if ( symbol === 'division'){
            return firtsNumber / secondNumber
        }
}
console.log(calculator(2, 3, 'minus'))
console.log(calculator(2, 3, 'plus'))
console.log(calculator(2, 3, 'multiplication'))
console.log(calculator(2, 3, 'division'))


console.log(numbers)







