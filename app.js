const express = require('express')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

// Index page
const index = require('./app/index')
// Shopping Cart
const shoppingCart = require('./app/shopping-cart/routes')
// React Inbox
const messages = require('./app/react-inbox/messages-routes')
// Reddit Clone
const posts = require('./app/reddit-clone/posts-routes')
const comments = require('./app/reddit-clone/comments-routes')
// Camera Shop
const cameras = require('./app/camera-shop/cameras-routes')
// Bookstore
const books = require('./app/bookstore/books-routes')
// Misc
const movies = require('./app/misc/movies-routes')
const todos = require('./app/misc/todos-routes')
const users = require('./app/misc/users-routes')
// Sosh
const soshStatuses = require('./app/sosh/statuses-routes')
const soshComments = require('./app/sosh/comments-routes')
const soshFriendReqs = require('./app/sosh/friend-request-routes')
const soshMessages = require('./app/sosh/messages-routes')
// Galva Bank
const galvaBankAccounts = require('./app/galva-bank/accounts-routes')
const galvaBankTransactions = require('./app/galva-bank/transactions-routes')
const galvaBankCompanies = require('./app/galva-bank/companies-routes')
// Stealership
const stealershipCars = require('./app/stealership/cars-routes')
const stealershipLocations = require('./app/stealership/locations-routes')

const app = express()

if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'))
}
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.set('view engine', 'ejs')

app.use((req, res, next) => {
  if (req.query.delay) return setTimeout(next, parseInt(req.query.delay, 10))
  next()
})
app.use('/api', index)
app.use('/api', messages)
app.use('/api', shoppingCart)
app.use('/api', users)
app.use('/api', posts)
app.use('/api', comments)
app.use('/api', cameras)
app.use('/api', books)
app.use('/api', movies)
app.use('/api', todos)
app.use('/api', soshStatuses)
app.use('/api', soshComments)
app.use('/api', soshFriendReqs)
app.use('/api', soshMessages)
app.use('/api', galvaBankAccounts)
app.use('/api', galvaBankTransactions)
app.use('/api', galvaBankCompanies)
app.use('/api', stealershipCars)
app.use('/api', stealershipLocations)
app.get('/', (req, res, next) => res.redirect('/api'))

app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function(err, req, res, next) {
  // NOTE: because this app is intended for educational purposes we print the error details in all environments.
  // In a real app you wouldn't give stack traces in production.
  res.status(err.status || 500)

  if (err.status !== 404 && process.env.NODE_ENV === 'test') {
    console.log(err)
  }
  res.json({
    error: err.toString(),
    stack: err.stack
      .split('\n')
      .slice(1)
      .map(line => line.trim())
  })
})

module.exports = app
