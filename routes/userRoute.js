const express = require('express');

// Controller functions
const { editUser, deleteUser,  createUser, loginUser } = require('../controllers/userController');
const { registerValidation, validator } = require('../Middleware/validator');
const isAuth = require('../Middleware/isAuth');

const router = express.Router();

//create user
router.post('/createUser', registerValidation(),validator,createUser)

//login user
router.post('/loginUser', loginUser) 

//editUser
router.put('/editUser/:_id', editUser)

//deleteUser
router.delete('/deleteUser/:_id', deleteUser) 

router.get('/current',isAuth,(req,res) => {res.send(req.user)})

module.exports = router