const createError = require('http-errors')
const koderUsecase = require('../usecases/koders.usecase')
const jwt = require('../lib/jwt')

async function auth(request, response, next) {
  try {
    const token = request.headers.authorization

    if (!token) {
      throw createError(401, 'JWT authorization required, got it?')
    }
    const payload = jwt.verify(token)
    const user = await koderUsecase.getById(payload.id)

    request.user = user

    next()
  } catch (error) {
    response.status(401)
    response.json({
      succes: false,
      error: error.message
    })
  }
}

module.exports = auth