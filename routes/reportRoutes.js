const express = require('express');
const router = express.Router();
const { Order } = require('../models');

router.get('/periodic', async (req, res) => {
  try {
    // Logika untuk mendapatkan laporan periodik
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
