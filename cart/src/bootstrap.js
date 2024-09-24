import faker from "faker";

const cartItems = `<div>Your total cart items is ${faker.random.number()}</div>`

document.querySelector('#dev-cart').innerHTML = cartItems