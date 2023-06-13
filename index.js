const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/Home', function (req, res) {
    res.send('Thatishetty Aakash chandra')
  })
app.listen(3000,() =>{
    console.log('listening on port 3000');
})