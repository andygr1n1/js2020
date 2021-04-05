const person = {
    name: 'Andre',
    age: '18'
}

console.log(Object.getOwnPropertyDescriptor(person, 'age'))
console.log(Object.getOwnPropertyDescriptors(person))