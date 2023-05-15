const Router = require('express')
const { index, saveDoc, deleteDoc } = require('../controllers/DocumentController')
const { auth } = require('../middleware/checkSession')
const { storage } = require('../utilities/uploadFile')
const multer = require('multer')

const router = Router()
const upload = multer({ storage: storage })

router.get('/documents', auth, index)
router.post('/documents', auth, upload.single('document'), saveDoc)
router.get('/documents/:id', auth, deleteDoc)

module.exports = router