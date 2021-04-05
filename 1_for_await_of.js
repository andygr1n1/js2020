const emulation = (id, ms) => new Promise(resolve => {
    setTimeout(() => resolve(id), ms)
})

const promises = [
    emulation(1, 250),
    emulation(2, 500),
    emulation(3, 750),
    emulation(4, 5000),
]

//*//*//*//*//*//*//*//*//*
async function old() {
    for(const p of await Promise.all(promises)) {
        console.log('old', p)
    }
}

// old()

//*//*//*//*//*//*//*//*//*

async function now() {
    for await (const promise of promises) {
        console.log('now', promise)
    }
}

now()

