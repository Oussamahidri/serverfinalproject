const user = require ('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt= require('bcrypt')
//create a new user
exports.createUser = async (req,res) => {
    try {
        const {name, email, password,age } = req.body
        const foundUser = await user.findOne({email})
    if (foundUser) {res.status(400).send({msg:'Email already exists'})}
    const salt = 10
    const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new user ({
            ...req.body
        })
        newUser.password = hashedPassword
        await newUser.save()
        const token = jwt.sign({
            id: newUser._id
        },process.env.SECRET_KEY,{expiresIn: '3d'})
        res.status(200).send({msg: 'user created successfully',newUser,token})
    } catch (error) {
        res.status(500).send({msg:'User could not be created',error})
}
};


//login user
exports.loginUser = async (req,res) => {
    try {
    const {email,password} = req.body
    const foundUser = await user.findOne({email})
    if (!foundUser) {res.status(400).send({msg:'User not found'})}
    const checkpassword = await bcrypt.compare(password,foundUser.password)
    if (!checkpassword) {res.status(400).send({msg:'password incorrect'})}
    const token = jwt.sign({
        id: foundUser._id
    },process.env.SECRET_KEY,{expiresIn: '3d'})
        res.status(200).send({msg:'login successfully', foundUser,token})

    } catch (error) {
        res.status(500).send({msg:'can not login',error})
    }
}

//edit user
exports.editUser = async (req,res) => {
    try {
        const {_id} = req.params
        const User = req.body
        const Users = await user.updateOne({ _id}, {$set: User})
            res.status(200).send({msg: 'updated successfully',Users})
    }catch (error) {
        res.status(400).send({msg: 'error on editing ', error})
    }
};

//delete user
exports.deleteUser = async (req, res) => {
    try {
        const {_id} = req.params
        await user.deleteOne({_id})
        res.status(200).send({msg: 'removed successfully'})
    } catch (error) {
        res.status(400).send({msg: 'error on deleting ', error})
    }
}

