const express = require('express');
const router = express.Router();
const { Order } = require('../models');

router.post('/create', async (req, res) => {
  try {
    const { userId, vehicleId, driverId, approvalLevel } = req.body;
    const order = await Order.create({
      userId,
      vehicleId,
      driverId,
      approvalLevel,
    });
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
