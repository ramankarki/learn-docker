const express = require('express')
const app = express()

app.use(express.static(__dirname))

app.get('/', (req, res) =>
  res.status(400).json({ message: 'k ho aba ta chalxa hola' })
)

const server = app.listen(2000, () =>
  console.log('server is running on port 2000')
)

const handleExitProcess = () => {
  console.log('SIGTERM RECEIVED. Shutting down gracefully.')
  server.close(() => {
    console.log('Process terminated !')
  })
}

process.on('SIGTERM', handleExitProcess)
process.on('INIT', handleExitProcess)
