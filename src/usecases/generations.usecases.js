const createError = require('http-errors')
const Generations = require('../models/generations.model')

async function create(generationData) {
  const generationFound = await Koders.findOne({ generation: generationData.generation })

  if (generationFound) {
    // throw new Error('Generation already exists')
    throw createError(409, 'Email already in use')
  }

  const newGeneration = await Generations.create(generationData)
  return newGeneration
}

async function getAll() {
  const allGenerations = await Generations.find()
  return allGenerations
}

async function getById(id) {
  const generation = await Generations.findById(id)
  return generation
}

async function deleteById(id) {
  const generationDeleted = await Generations.findByIdAndDelete(id)
  return generationDeleted
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
}