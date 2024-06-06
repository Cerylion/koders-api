require('dotenv').config()

const server = require('./src/server')
const db = require('./src/lib/db')
const port = process.env.PORT || 8080

db.connect()
  .then(() => {
    console.log('DB Connected')
    server.listen(port, () => {
      console.log(`listening to ALL your secrets on port ${port}`)
    })
  })
  .catch((error) => {
    console.error('DB connection error:', error)
  })