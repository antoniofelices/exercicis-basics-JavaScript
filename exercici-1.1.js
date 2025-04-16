import Person from '/classes/person.js'

/* 1. Conversió de funcions */
const addWithArrow = (number1, number2) => number1 + number2
console.log(addWithArrow(5, 6))

/* 2. Funció de fletxa sense paràmetres */
const arrowWithoutParameters = () => 'Hi'
console.log(arrowWithoutParameters())

/* 3. Ús de 'this' en les funcions de fletxa */
const person1 = new Person('lorem')
person1.greet()

/* 4. Funció de fletxa dins d'un loop */
const printNumbers = (numbers) => {
    let result = ''
    for (let i = 0, length = numbers.length; i <= length; i++) {
        result += `${numbers[i]} `
    }
    return result
}
const numbers = [4, 5, 6, 7, 8]
console.log(printNumbers(numbers))

/* 5. Funció de fletxa amb 'setTimeout' */
setTimeout(() => {
    console.log('After tree seconds')
}, '3000')
