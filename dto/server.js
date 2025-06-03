const express = require('express')
const fs = require('fs')
const app = express()

app.use(express.json())

app.get('/api', (req, res) => {
  const data = JSON.parse(fs.readFileSync('db.json', 'utf-8'))
  res.json(data)
})

app.get('/api/users', (req, res) => {
  const data = JSON.parse(fs.readFileSync('db.json', 'utf-8'))
  res.json(data.users)
})
app.get('/api/cars', (req, res) => {
  const data = JSON.parse(fs.readFileSync('db.json', 'utf-8'))
  res.json(data.cars)
}
)
app.get('/api/rentals', (req, res) => {
  const data = JSON.parse(fs.readFileSync('db.json', 'utf-8'))
  res.json(data.rentals)
}
)
app.get('/api/reviews', (req, res) => {
  const data = JSON.parse(fs.readFileSync('db.json', 'utf-8'))
  res.json(data.reviews)
}
)
app.get('/api/contacts', (req, res) => {
  const data = JSON.parse(fs.readFileSync('db.json', 'utf-8'))
  res.json(data.contacts)
}
)


app.listen(3000, () => {
  console.log('Custom JSON server is running on http://localhost:3000/api')
})
