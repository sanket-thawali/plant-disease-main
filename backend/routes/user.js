const express = require('express')


// controller functions:
const { signupUser, loginUser} = require('../controllers/userController')

const router = express.Router()

router.post('/farmer/login', loginUser);
router.post('/volunteer/login', loginUser);


// signup routes:
router.post('/farmer/signup', signupUser);
router.post('/volunteer/signup', signupUser);


module.exports = router
