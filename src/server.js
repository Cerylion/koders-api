const express = require('express')

const kodersRouter = require('./routes/koders.router')
const generationRouter = require('./routes/generation.router')
const authRouter = require('./routes/auth.router')

const app = express()

app.use(express.json())
app.use('/koders', kodersRouter)
app.use('/auth', authRouter)
app.use('/generation', generationRouter)

app.get('/', (request, response) => {
  response.json({
    message: 'Koders APIv1',
  })
})

module.exports = app
