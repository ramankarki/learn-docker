const app = require('express')()

app.get('/', (req, res) => res.status(400).json({ message: 'check haneko v2' }))

const server = app.listen(2000, () =>
  console.log('server is running on port 2000')
)

process.on('SIGTERM', () => {
  console.log('SIGTERM RECEIVED. Shutting down gracefully.')
  server.close(() => {
    console.log('Process terminated !')
  })
})
