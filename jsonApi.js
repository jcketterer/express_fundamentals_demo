const express = require('express')
const app = express()

app.use(express.json())

//Sub out for DB
const CANDIES = [
  { name: 'snickers', qty: 32, price: 1.5 },
  { name: 'skittles', qty: 15, price: 0.99 },
]

app.get('/candies', (req, res) => {
  res.json(CANDIES)
})

app.post('/candies', (req, res) => {
  if (req.body.name.toLowerCase() === 'circus peanuts') {
    res.status(403).json({ msg: 'HORRIBLE CHOICE. CIRCUS PEANUTS FORBIDDEN!' })
  }
  CANDIES.push(req.body)
  res.status(201).json(CANDIES)
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
