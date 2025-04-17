'use strict'

/* 1. Map */
function getSquareNumbers() {
    const numbers = [1, 2, 3, 4]
    const squareNumbers = numbers.map((number) => number * number)
    return squareNumbers
}
console.log(getSquareNumbers())

/* 2. Filter */
function getEvenNumbers() {
    const numbers = [1, 2, 3, 4]
    const evenNumbers = numbers.filter((number) => number % 2 == 0)
    return evenNumbers
}
console.log(getEvenNumbers())

/* 3. Find */
function findNumber() {
    const numbers = [1, 10, 8, 11]
    const found = numbers.find((numero) => numero > 10)
    return found
}
console.log(findNumber())

/* 4. Reduce */
function addNumbers() {
    const numbers = [13, 7, 8, 21]
    const total = numbers.reduce(
        (acumulator, currentValue) => acumulator + currentValue
    )
    return total
}
console.log(addNumbers())

/* 5. Filter + Operation */
function allInOne() {
    const numbers = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9]
    return numbers
        .filter((number) => number >= 10)
        .map((number) => number * 2)
        .reduce((acumulator, currentValue) => acumulator + currentValue)
}

console.log(allInOne())

/* 6. Every / Some */
function getOverTen() {
    const numbers = [11, 12, 13, 14]
    const some = numbers.some((number) => number > 10)
    const every = numbers.every((number) => number > 10)
    let result = `Any number are greater than ten`
    if (some) result = `Some numbers are greater than ten`
    if (every) result = `All numbers are greater than ten`
    return result
}
console.log(getOverTen())
