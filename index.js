// const jsonServer = require('json-server')
// const server = jsonServer.create();
// const middlewares = jsonServer.defaults()
const port = process.env.PORT || 4000


// // ==========================================
// const router = jsonServer.router('db.json')
// server.use(router)
// server.use(middlewares)

// // This part is what I am looking for
// const customRouter = jsonServer.customRouter('routes.json')
// server.use(customRouter)

// server.listen(port, () => {
//     console.log('JSON Server is running on ' + port)
// })

// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
// const customRouter = jsonServer.customRouter('routes.json')

server.use(middlewares)
server.use(router)
// server.use(customRouter);
server.listen(port, () => {
  console.log('JSON Server is running')
})