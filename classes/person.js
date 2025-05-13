class Person {
    constructor(nameUser) {
        this._nameUser = nameUser
    }
    get nameUser() {
        return this._nameUser
    }
    set nameUser(newName) {
        this._nameUser = newName
    }
    greet() {
        console.log(`Hola, ${this.nameUser}`)
    }
    toString() {
        return `
            name: ${this.nameUser},
            greet: ${this.greet()}
        `
    }
}

export default Person
