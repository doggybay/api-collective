const express = require('express')
const router = express.Router()
const db = require('../../lib/db')

router.get('/stealership/locations', (req, res) => {
  const locations = db.locations.findAll()
  res.json(locations)
})

router.get('/stealership/locations/:id', (req, res) => {
  const location = db.locations.find(req.params.id)
  res.json(location)
})

router.get('/stealership/locations/:location_id/cars', (req, res) => {
  const locations = db.locations.findAll()
  const cars = db.cars.findAll()

  let filteredCars = []

  // Write your code below here

  filteredCars = cars.filter(car => car.location_id == req.params.location_id)

  // Write your code above here

  res.json(filteredCars)
})

router.post('/stealership/locations', (req, res) => {
  const newlocation = db.locations.insert({
    name: req.body.name,
    phone: req.body.phone,
    address: req.body.address
  })
  res.json(newlocation)
})

router.patch('/stealership/locations/:id', (req, res) => {
  db.locations.findByIdAndUpdate(req.params.id, req.body)
  let updatedLocation = db.locations.find(req.params.id)
  res.json(updatedLocation)
})

router.delete('/stealership/locations/:id', (req, res) => {
  const location = db.locations.find(req.params.id)
  if (location) {
    db.locations.delete(req.params.id)
  }
  res.status(200)
  res.end()
})

module.exports = router
