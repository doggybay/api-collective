const express = require('express')
const router = express.Router()
const db = require('../../lib/db')

router.get('/stealership/cars', (req, res) => {
  const cars = db.cars.findAll()
  res.json(cars)
})

router.get('/stealership/cars/:id', (req, res) => {
  const car = db.cars.find(req.params.id)
  car.location = db.locations.find(car.location_id)
  delete car.location_id
  res.json(car)
})

router.post('/stealership/cars', (req, res) => {
  const newcar = db.cars.insert({
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    vin: req.body.vin,
    color: req.body.color,
    miles: req.body.miles,
    price: req.body.price,
    is_sold: false,
    sold_date: null,
    location_id: req.body.location_id
  })
  res.json(newcar)
})

router.patch('/stealership/cars/:id', (req, res) => {
  db.cars.findByIdAndUpdate(req.params.id, req.body)
  let updatedCar = db.cars.find(req.params.id)
  res.json(updatedCar)
})

router.delete('/stealership/cars/:id', (req, res) => {
  const car = db.cars.find(req.params.id)
  if (car) {
    db.cars.delete(req.params.id)
  }
  res.status(200)
  res.end()
})

module.exports = router
