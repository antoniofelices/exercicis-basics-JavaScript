'use strict'

/* 1. Callback bàsic */
function processing(number, callback) {
    return callback(number)
}
console.log(processing(4, (result) => result))

/* 2. Callbacks amb operacions matemàtiques */
function calculate(number1, number2, callback) {
    return callback(number1, number2)
}
console.log(calculate(5, 8, (number1, number2) => number1 + number2))

/* 3. Ús de callbacks en funcions asíncrones */
function waitingToSayHi(callback, userName = 'John Doe') {
    setTimeout(() => {
        callback(userName)
    }, 2000)
}

waitingToSayHi((result) => {
    console.log(`Hi ${result} after two seconds`)
})

/* 4. Callbacks amb arrays */
function processItems(array, callback) {
    array.forEach((element) => {
        callback(element)
    })
}
const arrayStrings = ['lorem', 'calar', 'ipsum']
processItems(arrayStrings, (result) => console.log(`Element: ${result}`))

/* 5. Escriu una funció processarCadena */
function processString(string, callback) {
    return callback(string.toUpperCase())
}
console.log(processString('lorem', (result) => result))
