const Router = require('express')
const { loginPage, loginAction, logoutAction } = require('../controllers/AuthController')
const { guest } = require('../middleware/checkSession')

const router = Router()

router.get('/login', guest, loginPage)
router.post('/login', loginAction)
router.get('/logout', logoutAction)

module.exports = router