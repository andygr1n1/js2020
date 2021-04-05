const person = {
    name: 'Andre',
    age: '18'
}

console.log(Object.entries(person))
console.log(Object.fromEntries([['name', 'Andre'], ['age', '18']]))
console.log(Object.fromEntries(Object.entries(person)))

console.log(Object.entries(['A', 'G']))

for (const [key, value] of Object.entries(person)) {
    console.log(key, value)
    console.log(`${JSON.stringify(key)} : ${JSON.stringify(value)}`)
}

console.log(Object.values(person))
console.log(Object.keys(person))