const express = require('express')
const router = express.Router()
const db = require('../../lib/db')

router.get('/galva-bank/accounts', (req, res) => {
  const accounts = db.accounts.findAll()
  res.json(accounts)
})

router.get('/galva-bank/accounts/:id', (req, res) => {
  const account = db.accounts.find(req.params.id)
  res.json(account)
})

router.get('/galva-bank/accounts/:id/transactions', (req, res) => {
  const transactions = db.transactions
    .findAll()
    .filter(transaction => transaction.account_id == req.params.id)

  res.json(transactions)
})

router.post('/galva-bank/accounts', (req, res) => {
  const newAccount = db.accounts.insert({
    content: req.body.content,
    status_id: req.body.post_id
  })
  res.json(newAccount)
})

router.delete('/galva-bank/accounts/:id', (req, res) => {
  const account = db.accounts.find(req.params.id)
  if (account) {
    db.accounts.delete(req.params.id)
  }

  res.status(200)
  res.end()
})

module.exports = router
