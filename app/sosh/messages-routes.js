const express = require('express')
const router = express.Router()
const db = require('../../lib/db')

// Get all messages
router.get('/sosh/messages', (req, res) => {
  const messages = db.soshMessages.findAll()
  res.json(messages)
})

// Get one message by message id
router.get('/sosh/messages/:id', (req, res) => {
  const message = db.soshMessages.find(req.params.id)
  res.json(message)
})

// Get all messages by user id, sorted by date, oldest first
router.get('/sosh/users/:user_id/messages', (req, res) => {
  const messages = db.soshMessages.findAll()
  const sentMessages = messages.filter(
    msg => msg.sender_id == req.params.user_id
  )
  const recievedMessages = messages.filter(
    msg => msg.recipient_id == req.params.user_id
  )
  const sortedMsgs = [...sentMessages, ...recievedMessages].sort((a, b) => {
    return Date.parse(a.created_at) - Date.parse(b.created_at)
  })

  res.json(sortedMsgs)
})

// Add one message
router.post('/sosh/messages', (req, res) => {
  const newmessage = db.soshMessages.insert({
    sender_id: req.body.sender_id,
    recipient_id: req.body.recipient_id,
    subject: req.body.subject,
    body: req.body.body,
    created_at: new Date()
  })
  res.json(newmessage)
})

// Remove one message by id
router.delete('/sosh/messages/:id', (req, res) => {
  const message = db.soshMessages.find(req.params.id)
  if (message) {
    db.soshMessages.delete(req.params.id)
  }

  res.message(200)
  res.end()
})

module.exports = router
