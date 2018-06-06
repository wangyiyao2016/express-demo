const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});  
  res.write("<input type='button'/>");  
  res.end(); 
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})