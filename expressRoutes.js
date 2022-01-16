const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('HOME PAGE')
})

app.get('/dogs', (req, res) => {
  console.log('you asked for /dogs')
  //This will print HTML to the webpage
  res.send('<h1>I AM DOG WOOF WOOF!!</h1>')
  //This will print JSON
  // res.send([1, 2, 3])
})

app.get('/cats', (req, res) => {
  console.log('you asked for /cats')
  //This will print HTML to the webpage
  res.send('<h1>MEOW MEOW MEOW</h1>')
})

app.post('/chickens', function createChicken(req, res) {
  res.send('You Created a new chicken but not...POST REQ')
})

app.get('/chickens', (req, res) => {
  res.send('BOCK! BOCK! GET REQ')
})

const greetings = {
  en: 'Hello',
  fr: 'Bonjour',
  ic: 'hallo',
  js: 'konnichiwa',
}

app.get('/greet/:language', (req, res) => {
  const lang = req.params.language
  const greeting = greetings[lang]
  res.send(greeting)
})

app.get('/search', (req, res) => {
  const { term = 'piggies', sort = 'top' } = req.query
  return res.send(`SEARCH PAGE! Term is: ${term}, Sort is: ${sort}`)
})

app.get('/show-me-headers', (req, res) => {
  console.log(req.rawHeaders)
  console.log(req.headers)
  res.send(req.headers)
})

app.get('/show-language', (req, res) => {
  const lang = req.headers['accept-language']
  res.send(`Your lang preferance is: ${lang}`)
})

app.post('/register', (req, res) => {
  res.send(`Welcome, ${req.body.username}!!!`)
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
