const house = require('../models/house')

exports.createHouse = async (req,res)=>{
    try {
        const {Name, location,price, description,phone, rating, availability} = req.body
        const newHouse = new house ({...req.body})
        await newHouse.save()
        res.status(200).send({msg: 'house crearted successfully', newHouse})
    } catch (error) {
        res.status(500).send({msg:'failed to create a new house', error})
    }
};

exports.getAllHouses = async (req, res) => {
    try {
        const Houses = await house.find();
        res.status(200).send({msg:'houses found successfully',Houses})
    } 
    catch (error) {
        res.status(500).send({ msg: 'Failed to find houses',error });
    }
};

exports.updateHouse = async (req, res) => {
    try {
        const {_id} = req.params;
        const newHouse = req.body
        const updatedHouse = await house.findByIdAndUpdate({_id}, { $set: newHouse });
    res.status(200).send({ msg: 'House updated successfully', updatedHouse });
    } catch (error) {
        res.status(400).send({ msg: 'Failed to update the house',error });
    }
};

exports.deleteHouse = async (req,res) =>{
    try {
        const {_id} = req.params
        await house.findByIdAndDelete ({_id})
            res.status(200).send({msg: 'house deleted successfully'})
    } catch (error) {
        res.status(400).send({msg: 'error while deleting', error})
    }
};

exports.getHousebyId = async (req, res) =>{
    try {
        const {_id} = req.params
        const findhouse = await house.findOne({_id})
        res.status(200).send({msg: 'the house found successfully',findhouse })
    } catch (error) {
        res.status(500).send({ msg: 'Failed to find the house',error });
        
    }
}
