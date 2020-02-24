const express = require('express')
const router = express.Router()
const db = require('../../lib/db')

router.get('/todos', (req, res) => {
  const todos = db.todos.findAll().slice(0).sort((a, b) => a.name > b.name ? 1 : 0)
  res.json(todos)
})

router.get('/todos/:id', (req, res) => {
  const todo = db.todos.find(req.params.id)
  res.json(todo)
})

router.post('/todos', (req, res) => {
  const newtodo = db.todos.insert({
    "title": req.body.title,
    "completed": false
  })
  res.json(newtodo)
})

router.put('/todos/:id', (req, res) => {
  const updatedtodo = db.todos.findByIdAndUpdate(req.params.id, {
    "title": req.body.title
  })
  res.json(updatedtodo)
})

router.patch('/todos/:id/completed', function (req, res) {
  const todo = db.todos.find(req.params.id)
  todo.completed = true
  res.json(todo)
})

router.delete('/todos/:id', (req, res) => {
  let selectedtodo = db.todos.find(req.params.id)
  db.todos.delete(req.params.id)
  res.json(selectedtodo)

})

module.exports = router
