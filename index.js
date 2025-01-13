require('dotenv').config()
const express = require('express')
const app = express()

const port = 3000;

const githubData = {
  "name": "Saurbhmoynak",
  "port":"3000"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Hii, Welcome to twitter')
})

app.get('/heading', (req, res) => {
  res.send('<h1>This is server</h1>')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})

// only for localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// only for env port
// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${port}`)
// })



//Now you can deploy