const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');


router.get('/', (req, res) =>{
    res.render('./views/register');
});



router.post('/', userController.createUser);



  
module.exports = router;