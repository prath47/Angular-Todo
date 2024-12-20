const {Router} = require('express')
const {handleToDoCreate, handleToDoGet, deleteToDo} = require('../controllers/todoControllers')

const router = Router()

router.get('/', handleToDoGet)
router.post('/create', handleToDoCreate)
router.post('/delete', deleteToDo)


module.exports = router