'use strict'

/* 1. Operador ternari bàsic */
function minimumDrivingAges(age) {
    return age > 17 ? 'Allow Driving' : 'Disallow Driving'
}
console.log(minimumDrivingAges(13))
console.log(minimumDrivingAges(23))

/* 2. Ús amb operadors de comparació */
function compareNumbers(number1, number2) {
    if (number1 == number2) return 'Numbers are equal'
    return number1 > number2
        ? 'Number1 is the biggest'
        : 'Number2 is the biggest'
}
console.log(compareNumbers(6, 6))
console.log(compareNumbers(62341, 54546))

/* 3.1 Ús enllaçat d'operadors ternaris */
function typeOfNumber(number) {
    return number <= 0
        ? number == 0
            ? 'Zero'
            : 'Negative number'
        : 'Positive number'
}
console.log(typeOfNumber(0))
console.log(typeOfNumber(-10))
console.log(typeOfNumber(10))

/* 3.2 Operador ternari amb funcions */
function findBiggestNumber(number1, number2, number3) {
    return number2 > number1 && number2 > number3
        ? number2
        : number3 > number1 && number3 > number2
        ? number3
        : number1
}
console.log(`The biggest number: ${findBiggestNumber(6, 3, 9)}`)

/* 4. Operador ternari dins un bucle */
function oddEvenNumber(numbers) {
    let result = ''
    for (let i = 0, length = numbers.length; i < length; i++) {
        result +=
            numbers[i] % 2 == 0
                ? `${numbers[i]} is a even number `
                : `${numbers[i]} is a odd number `
    }
    return result
}
const numbers = [4, 5, 6, 7, 8]
console.log(oddEvenNumber(numbers))
