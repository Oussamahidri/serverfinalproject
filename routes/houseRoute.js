const express = require('express');


const { createHouse, getAllHouses, updateHouse, deleteHouse, getHousebyId } = require('../controllers/houseController');

const router = express.Router();

// create new house
router.post('/createHouse', createHouse)
// get all the houses
router.get('/getAllHouses', getAllHouses)
// edit house by id
router.put('/updateHouse/:_id', updateHouse)
// delete house by id
router.delete('/deleteHouse/:_id', deleteHouse)
// find one house by id
router.get('/getHousebyId/:_id', getHousebyId)

module.exports = router
