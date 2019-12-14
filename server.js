const express = require('express')
const next = require('next')
const routes = require('./routes')

const proxy = require('express-http-proxy');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handler = routes.getRequestHandler(app, ({req, res, route, query}) => {
    app.render(req, res, route.page, query)
})

app.prepare()
    .then(() => {
        const server = express()
        server.use('/shop', proxy('https://api.mediaverse-dev.nl'));

        server.get('*', (req, res) => {
            return handler(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })

