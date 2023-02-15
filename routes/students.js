const router = require('express').Router()
const studentsCtrl = require('../controllers/students.js')

router.post('/', studentsCtrl.create)
router.get('/', studentsCtrl.index)

module.exports = router