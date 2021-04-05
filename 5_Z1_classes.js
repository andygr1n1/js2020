class Person {
    static type = 'HUMAN'
    static #area = 'EARTH'
    name = 'unknown'
    #year = '2021'

    constructor(name) {
        this.name = name
    }

    static printArea() {
        return Person.#area === 'EARTH' ? 'humanoid' : 'robot'
    }

    get age() {
        return this.#year
    }

    set age(age) {
        if (age > 0) {
            this.#year = age
        }
    }
}

const person = new Person('Andre')

console.log(person.name)
console.log(person.age)
person.age = 222

console.log(person.age)

console.log(Person.type)
console.log(Person.printArea())