const { check, validationResult } = require("express-validator");



    exports.registerValidation = ()=> [
        check('name','this field is required').notEmpty(),
        check('email','this field is required').notEmpty().isEmail(),
        check('password','this field is required').notEmpty().isLength({min:6}),
        check('age','this field is required').notEmpty()
    ]

    exports.validator= (req,res,next)=>{
        const errors = validationResult(req);
        errors.isEmpty()?next():res.status(400).send(errors.array())
    }