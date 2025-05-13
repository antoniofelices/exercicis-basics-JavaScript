'use strict'

/* 1. Creació d'una Promesa */
const sayHello = new Promise((resolve, reject) => {
    setTimeout(() => {
        const validation = true
        if (validation) {
            resolve('Hello World')
        } else {
            reject('Error')
        }
    }, 2000)
})

/* 2. Utilització d'una Promesa */
sayHello
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log(error)
    })

/* 3. Promesa amb reject */
const validateGreets = new Promise((resolve, reject) => {
    const validation = 'Hola'
    setTimeout(() => {
        if (validation == 'Hola') {
            resolve('Validation ok')
        } else {
            reject('Validation error')
        }
    }, 2000)
})
validateGreets
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log(error)
    })

/* 4. Ús de async/await */
async function displayHello() {
    const message = await sayHello
    console.log(message)
}
displayHello()

/* 5. Gestió d'errors amb async/await */
async function displayHelloWithErrors() {
    try {
        const message = await sayHello
        console.log(message)
    } catch (error) {
        console.log(error)
    }
}
displayHelloWithErrors()

/* 6. Promise.all */
const userPersonalData = new Promise((resolve) => {
    setTimeout(() => resolve('User personal data ok'), 2000)
})
const userMetaData = new Promise((resolve) => {
    setTimeout(() => resolve('User meta data ok'), 1000)
})

async function getUserData() {
    try {
        const allData = await Promise.all([userPersonalData, userMetaData])
        console.log(allData)
    } catch (error) {
        console.log(error)
    }
}
getUserData()
