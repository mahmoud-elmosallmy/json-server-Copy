const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router("routes.json")
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 4000

// const path = require('path')
// // const router = jsonServer.router(path.join(__dirname, 'db.json'))

server.use(middlewares)
// server.use(router)
// server.listen(port, () => {
//   console.log('JSON Server is running on ' + port)
// })
// ==========================================
const server = jsonServer.create();
const router = jsonServer.router('db.json')
server.use(router)

// This part is what I am looking for
const customRouter = jsonServer.customRouter('routes.json')
server.use(customRouter)

server.listen(port, () => {
  console.log('JSON Server is running')
})