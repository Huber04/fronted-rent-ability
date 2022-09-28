const { Router } = require('express');
const { getUsers, createUSer, deleteUser, updateUser } = require('../controllers/userController');

const router = Router();

router.get('/', getUsers);
router.post('/', createUSer);
router.delete('/:id',deleteUser);
router.put('/:id', updateUser);

module.exports = router;
