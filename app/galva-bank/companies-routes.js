const express = require('express')
const router = express.Router()
const db = require('../../lib/db')

router.get('/galva-bank/companies', (req, res) => {
  const companies = db.companies.findAll()
  res.json(companies)
})

router.get('/galva-bank/companies/:id', (req, res) => {
  const company = db.companies.find(req.params.id)
  res.json(company)
})

router.post('/galva-bank/companies', (req, res) => {
  const newCompany = db.companies.insert({
    content: req.body.content,
    status_id: req.body.post_id
  })
  res.json(newCompany)
})

router.delete('/galva-bank/companies/:id', (req, res) => {
  const company = db.companies.find(req.params.id)
  if (company) {
    db.companies.delete(req.params.id)
  }

  res.status(200)
  res.end()
})

module.exports = router
