import { mount } from 'products/productsIndex'
import { mountCart } from 'cart/cartShow'

mount(document.querySelector('#prod-products-list'))
mountCart(document.querySelector('#prod-cart-items'))

console.log('Container!')