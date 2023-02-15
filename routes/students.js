const router = require('express').Router()
const studentsCtrl = require('../controllers/students.js')

router.post('/', studentsCtrl.create)

module.exports = router