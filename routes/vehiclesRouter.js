const { Router } = require('express');
const { deleteUser } = require('../controllers/userController');
const { getVehicles, getVehicleById, createVehicles, updateVehicles } = require('../controllers/vehicleController');

const router = Router();

router.get('/', getVehicles);
router.get('/:id', getVehicleById);
router.post('/', createVehicles);
router.put('/:id', updateVehicles)
router.delete('/:id', deleteUser)

module.exports = router;