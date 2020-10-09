const User = require('../models/users');


exports.createUser = (req, res, next) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        pass1: req.body.pass1,
        pass2: req.body.pass2
    });

    user.save().then(
        () => {
            res.status(201).json({
                message: 'Bonjour a toi et a toute ta famille'
            })
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            })
        }
    )
}