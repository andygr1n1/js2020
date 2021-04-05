const bill1 = {
    bank: {
        name: 'My Bank',
        amount: {
            value: 1000,
            currency: 'RUB'
        }
    }
}

const bill2 = {
    bank: {}
}

function getBilLValueFrom(bill) {
    return bill?.bank?.amount?.value
}

console.log(getBilLValueFrom(bill1))
console.log(getBilLValueFrom(bill2))