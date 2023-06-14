const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/home', function (req, res) {
    console.log(req.query);
    // let one = req.query.num;
    // let two = req.query.numtwo;

    res.send('Thatishetty Aakash Chandra')
  })
  



app.listen(3000,() =>{
    console.log('listening on port 3000');
})