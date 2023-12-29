const express = require('express');
const router = express.Router();
const { Approval } = require('../models');

router.post('/create', async (req, res) => {
  try {
    const { approvedBy, orderId } = req.body;
    const approval = await Approval.create({ approvedBy, orderId });
    res.json(approval);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
