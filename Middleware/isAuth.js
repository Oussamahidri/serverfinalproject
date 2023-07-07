const jwt = require('jsonwebtoken')
const user = require ('../models/user')

const isAuth = async (req, res,next) => {
    try {
        const token = req.headers ["autherisation"]
        if (!token){
            res.status(400).send("Not authorized")}
        const decoded = jwt.verify(token,process.env.SECRET_KEY)
        const foundUser= await user.findOne({_id: decoded.id})
        if (!foundUser){
            res.status(400).send("Not authorized")}
        req.user = foundUser
        next()
    } catch (error) {
        res.status(400).send(error)
    }
}
module.exports = isAuth