const express = require('express');
const router = express.Router();

const orderRoutes = require('./orderRoutes');
const approvalRoutes = require('./approvalRoutes');
const reportRoutes = require('./reportRoutes');
const userRoutes = require('./userRoutes');
const vehicleRoutes = require('./vehicleRoutes');

router.use('/orders', orderRoutes);
router.use('/approvals', approvalRoutes);
router.use('/reports', reportRoutes);
router.use('/users', userRoutes);
router.use('/vehicles', vehicleRoutes);

module.exports = router;
