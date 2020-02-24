const express = require('express')
const router = express.Router()
const db = require('../../lib/db')

router.get('/galva-bank/transactions', (req, res) => {
  const transactions = db.transactions.findAll()
  res.json(transactions)
})

router.get('/galva-bank/transactions/:id', (req, res) => {
  const transaction = db.transactions.find(req.params.id)
  res.json(transaction)
})

router.post('/galva-bank/transactions', (req, res) => {
  const newTransaction = db.transactions.insert({
    location: req.body.location,
    amount: req.body.amount,
    account_id: req.body.account_id,
    date_occured: new Date()
  })
  res.json(newTransaction)
})

router.delete('/galva-bank/transactions/:id', (req, res) => {
  const transaction = db.transactions.find(req.params.id)
  if (transaction) {
    db.transactions.delete(req.params.id)
  }

  res.status(200)
  res.end()
})

module.exports = router
