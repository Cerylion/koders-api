const createError = require('http-errors')
const Generations = require('../models/generations.model')

async function create(generationData) {
  const generationFound = await Generations.findOne({ 
    generation: generationData.generation,
    program: generationData.program })

  if (generationFound) {
    // throw new Error('Generation already exists')
    throw createError(409, 'Generation already exists')
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