var express = require('express');
var fs = require('fs')
var app = express();

app.get('/', (req, res)=>{
  res.send('<body style="background-color:DimGrey;"></body>');
})

app.use( express.static("public"));

app.listen(1337, ()=>{
  console.log("Server Running");
})