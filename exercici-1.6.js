'use strict'

/* 1. forEach */
;(() => {
    const names = ['Anna', 'Bernat', 'Clara']
    names.forEach((name) => console.log(name))
})()

/* 2. For of */
;(() => {
    const names = ['Anna', 'Bernat', 'Clara']
    for (let name of names) {
        console.log(name)
    }
})()

/* 3. Filter */
;(() => {
    const numbers = [1, 2, 3, 4, 5, 6]
    const evenNumbers = numbers.filter((number) => number % 2 == 0)
    console.log(evenNumbers)
})()

/* 4. For in */
;(() => {
    const object = { nom: 'Ona', edat: 25, ciutat: 'Barcelona' }
    for (let property in object) {
        console.log(`Key : ${property} | Value : ${object[property]}`)
    }
})()

/* 5. For of with break */
;(() => {
    const numbers = [1, 2, 3, 4, 5, 6]
    for (let number of numbers) {
        if (number == 5) break
        console.log(number)
    }
})()

/* 6. For of with index */
;(() => {
    const names = ['Anna', 'Bernat', 'Clara']
    for (let name of names) {
        console.log(`${name}`)
    }
})()
