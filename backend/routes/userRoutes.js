const {Router} = require('express')
const {handleUserLogin, handleUserSignup} = require('../controllers/userController')

const router = Router()

router.post('/login', handleUserLogin)
router.post('/signup', handleUserSignup)

module.exports = router