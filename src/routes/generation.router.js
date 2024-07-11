const express = require('express')
const generationUsecase = require('../usecases/generations.usecases')
const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const generations = await generationUsecase.getAll()

    response.json({
      success: true,
      message: "All generations displayed here",
      data: { generations }
    })
  } catch (error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const generation = await generationUsecase.getById(id)
    response.json({
      success: true,
      data: { generation }
    })
  } catch (error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const generationCreated = await generationUsecase.create(request.body)
    response.json({
      success: true,
      data: { generation: generationCreated }
    })

  } catch (error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const generation = request.body
    const updateGen = await generationUsecase.updateById(id, generation)

    response.json({
      success: true,
      message: "Generation updated",
      data: {
        generation: updateGen
      }
    })
  } catch (error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const generationDeleted = await generationUsecase.deleteById(id)
    response.json({
      success: true,
      data: { generation: generationDeleted }
    })
  } catch (error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router