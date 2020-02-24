const express = require('express')
const router = express.Router()
const db = require('../../lib/db')

router.get('/sosh/comments', (req, res) => {
  const statusComments = db.statusComments.findAll()
  res.json(statusComments)
})

router.get('/sosh/comments/:id', (req, res) => {
  const comment = db.statusComments.find(req.params.id)
  res.json(comment)
})

router.post('/sosh/comments', (req, res) => {
  const newComment = db.statusComments.insert({
    content: req.body.content,
    status_id: req.body.status_id,
    user_id: req.body.user_id
  })
  res.json(newComment)
})

router.delete('/sosh/comments/:id', (req, res) => {
  const comment = db.statusComments.find(req.params.id)
  if (comment) {
    db.statusComments.delete(req.params.id)
  }

  res.status(200)
  res.end()
})

module.exports = router
