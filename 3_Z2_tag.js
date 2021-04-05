function tag(strings, name, age) {
    console.log(strings)
    console.log(name, age)

    const [s1, s2, s3] = strings
    const ageStr = age >= 30 ? `black` : `white`
    return `${s1}${name}${s2}${ageStr}${s3}`
}

const person = {
    name: 'Andy',
    age: 30
}

const output = tag`My name is ${person.name} and I am ${person.age}`

console.log(output)