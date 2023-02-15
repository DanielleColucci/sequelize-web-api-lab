const { Student, Assignment } = require('../models')

const create = async (req, res) => {
  try {
    const student = await Student.create(req.body)
    res.status(200).json(student)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const students = await Student.findAll()
    res.status(200).json(students)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id)
    student.set(req.body)
    await student.save()
    res.status(200).json(student)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id)
    await student.destroy()
    res.status(200).json(student)
  } catch (error) {
    res.status(500).json(error)
  }
} 

const addAssignment = async (req, res) => {
  try {
    req.body.studentId = req.params.id
    const assignment = await Assignment.create(req.body)
    res.status(200).json(assignment)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteStudent,
  addAssignment,
}