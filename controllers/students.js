const { Student } = require('../models')

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

module.exports = {
  create,
  index,
}