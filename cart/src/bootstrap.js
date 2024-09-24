import faker from "faker";

const cartItems = `<div>Your total cart items is ${faker.random.number()}</div>`

// context #1
// render in remote
export const mountCart = (el) => {
    el.innerHTML = cartItems
}


// context #2
// render in isolation
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart')

    if (el) {
        mountCart(el)
    }
}