const express = require('express')
const router = express.Router()
const db = require('../../lib/db')

router.get('/sosh/statuses', (req, res) => {
  const statuses = db.statuses.findAll()
  res.json(statuses)
})

router.get('/sosh/user/:user_id/statuses', (req, res) => {
  const statuses = db.statuses.findAll()
  const byId = statuses.filter(status => status.user_id == req.params.user_id)
  res.json(byId)
})

router.get('/sosh/statuses/:id', (req, res) => {
  const status = db.statuses.find(req.params.id)
  res.json(status)
})

router.post('/sosh/statuses', (req, res) => {
  const newstatus = db.statuses.insert({
    user_id: req.body.user_id || 1,
    content: req.body.content,
    createdAt: new Date()
  })
  res.json(newstatus)
})

router.delete('/sosh/statuses/:id', (req, res) => {
  const status = db.statuses.find(req.params.id)
  if (status) {
    db.statuses.delete(req.params.id)
  }

  res.status(200)
  res.end()
})

module.exports = router
