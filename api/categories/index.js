import fetch from 'isomorphic-fetch'

export function getCategories () {
    return fetch(`http://localhost:3000/shop/api/v1/categories`)
}

export function getCategory (id, page) {
    return fetch(`http://localhost:3000/shop/api/v1/categories/${id}?page=${page}`)
}