import fetch from 'isomorphic-fetch'

export function getProduct (id) {
    return fetch(`http://localhost:3000/shop/api/v1/products/${id}`)
}