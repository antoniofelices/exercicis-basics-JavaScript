'use strict'

/* 1. Operador Spread en Arrays */
const array1 = [4, 5, 6, 7]
const array2 = [90, 91, 92, 93]
const arrayFull = [...array1, ...array2]
console.log(arrayFull)

/* 2. Operador Rest en Funcions */
function add(...xNumbers) {
    return xNumbers.reduce((total, currentValue) => (total += currentValue))
}
console.log(add(3, 8, 15, 19))

/* 3. Copiant objectes amb Spread */
const object1 = {
    userName: 'Lorem',
    userSurname: 'Calar',
    age: '23',
}
const object2 = {
    ...object1,
    userName: 'Ipsum',
}
console.log(object2)

/* 4. Rest en Destructuring */
const array3 = ['Lorem', 'Ipsum', 'Calar', 'Cras', 'Turbis']
let [variable1, variable2, ...variable3] = array3
console.log(
    `Variable 1: ${variable1}, Variable 2: ${variable2}, Variable 3: ${variable3}`
)

/* 5. Spread en Funcions */
function getNumber(arg1, arg2, arg3) {
    return arg1 + arg2 + arg3
}
const numbers = [89, 34, 15]
console.log(getNumber(...numbers))

/* 6. Fusionant Objectes amb Spread */
const userData1 = {
    userName: 'Calar',
    userSurname: 'Turbis',
}
const userData2 = {
    userID: 8712,
    userAddress: 'Lorem Ipsum 45',
}
const user = {
    ...userData1,
    ...userData2,
}
console.log(user)
