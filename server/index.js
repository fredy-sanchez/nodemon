const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World! como estan hay que programar'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))   

app.get('/about', function (req,res){
    res.send('about');
});

app.route('/book')
  .get(function (req, res) {
    res.jsonp({ user: 'tobi' })
})
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })