const routes = module.exports = require('next-routes')()

routes
    //home pages
    .add({name: '/', pattern: '/home', page: 'index'})
    .add({name: 'home', pattern: '/', page: 'index'})
    //dynamic pages
    .add({name: 'categories', pattern: '/categorieen', page: 'categories'})
    .add({name: 'category', pattern: '/categorie/:id', page: 'category'})
    .add({name: 'product', pattern: '/product/:id', page: 'product'})
    //default pages
    .add({name: 'contact', pattern: '/klantenservice', page: 'contact'})
    .add({name: 'about', pattern: '/over-ons', page: 'about'})
    .add({name: 'cart', pattern: '/winkelwagen', page: 'cart'})
    .add({name: 'faq', pattern: '/faq', page: 'faq'})
    //auth pages
    .add({name: 'login', pattern: '/inloggen', page: 'login'})
    .add({name: 'register', pattern: '/registreren', page: 'register'})
    .add({name: 'auth.dashboard', pattern: '/auth/dashboard', page: 'auth/dashboard'})
