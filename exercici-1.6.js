'use strict'

/* 1. forEach */
function getNames() {
    const names = ['Anna', 'Bernat', 'Clara']
    names.forEach((name) => name)
}
getNames()

/* 2. For of */
function getNamesWithForOf() {
    const names = ['Anna', 'Bernat', 'Clara']
    for (let name of names) {
        return name
    }
}
getNamesWithForOf()

/* 3. Filter */
function filterArray() {
    const numbers = [1, 2, 3, 4, 5, 6]
    const evenNumbers = numbers.filter((number) => number % 2 == 0)
    return evenNumbers
}
filterArray()

/* 4. For in */
function printDataFromObject() {
    const object = { nom: 'Ona', edat: 25, ciutat: 'Barcelona' }
    for (let property in object) {
        console.log(`Key : ${property} | Value : ${object[property]}`)
    }
}
printDataFromObject()

/* 5. For of with break */
function doForOfWithBreak() {
    const numbers = [1, 2, 3, 4, 5, 6]
    for (let number of numbers) {
        if (number == 5) break
        return number
    }
}
doForOfWithBreak()

/* 6. For of with index */
function getNamesWithForOf() {
    const names = ['Anna', 'Bernat', 'Clara']
    for (let name of names) {
        return name
    }
}
getNamesWithForOf()
