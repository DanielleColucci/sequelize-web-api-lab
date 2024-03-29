const router = require('express').Router()
const studentsCtrl = require('../controllers/students.js')

router.post('/', studentsCtrl.create)
router.get('/', studentsCtrl.index)
router.put('/:id', studentsCtrl.update)
router.delete('/:id', studentsCtrl.delete)
router.post('/:id/assignments', studentsCtrl.addAssignment)

module.exports = router