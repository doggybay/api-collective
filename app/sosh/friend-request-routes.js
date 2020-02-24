const express = require('express')
const router = express.Router()
const db = require('../../lib/db')

router.get('/sosh/friend-requests', (req, res) => {
  const friendReqs = db.friendReqs.findAll()
  res.json(friendReqs)
})

router.get('/sosh/friend-requests/:id', (req, res) => {
  const friendReq = db.friendReqs.find(req.params.id)
  res.json(friendReq)
})

router.post('/sosh/friend-requests', (req, res) => {
  const newfriendReq = db.friendReqs.insert({
    requestorId: req.body.requestorId,
    requesteeId: req.body.requesteeId,
    accepted: false
  })
  res.json(newfriendReq)
})

// TODO: Add route to be able to accept/remove requests

router.delete('/sosh/friend-requests/:id', (req, res) => {
  const friendReq = db.friendReqs.find(req.params.id)
  if (friendReq) {
    db.friendReqs.delete(req.params.id)
  }

  res.friendReq(200)
  res.end()
})

module.exports = router
