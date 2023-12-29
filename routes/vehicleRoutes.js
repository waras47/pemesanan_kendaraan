const express = require('express');
const router = express.Router();
const { Vehicle } = require('../models');

router.get('/', async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll();
    res.json(vehicles);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

router.post('/create', async (req, res) => {
  try {
    const { type, plateNumber, fuelConsumption, serviceSchedule, location } = req.body;
    const vehicle = await Vehicle.create({
      type,
      plateNumber,
      fuelConsumption,
      serviceSchedule,
      location,
    });
    res.json(vehicle);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
