const {Router} = require('express')
const {handleUserLogin, handleUserSignup} = require('../controllers/userController')

const router = Router()

router.post('/login', handleUserLogin)
router.post('/signup', handleUserSignup)
router.get('/logout', (req, res) => {
    res.clearCookie("token").send("Logged out successfully")
})
module.exports = router