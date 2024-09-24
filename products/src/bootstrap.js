import faker from "faker";

const mount = (el) => {
    let products = ''

    for (let i = 0; i < 10; i++) {
        const name = faker.commerce.productName()
        products += `<div>${name}</div>`
    }

    el.innerHTML = products
}

// context #1
// render in isolation
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#products-list')

    if (el) {
        mount(el)
    }
}

// context #2
// render in remote
export { mount }