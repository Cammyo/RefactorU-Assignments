var express = require('express'),
    app = express();

app.use( express.static('public') )


app.get('/' && '/seville', (req, res)=>{
  res.sendFile('seville.html', {root:'./public/html'})
})

app.get('/canary-islands', (req,res)=>{
  res.sendFile('canary-islands.html', {root:'./public/html'})
})

app.get('/cape-verde', (req,res)=>{
  res.sendFile('cape-verde.html', {root:'./public/html'})
})

app.get('/strait-of-magellan', (req,res)=>{
  res.sendFile('strait-of-magellan.html', {root:'./public/html'})
})

app.get('/guam', (req,res)=>{
  res.sendFile('guam.html', {root:'./public/html'})
})

app.get('/philippines', (req,res)=>{
  res.sendFile('philippines.html', {root:'./public/html'})
})

app.get('/seville-info', (req, res)=>{
  res.sendFile('seville-info.html', {root:'./public/info'})
})

app.get('/canary-info', (req, res)=>{
  res.sendFile('canary-info.html', {root:'./public/info'})
})

app.get('/cape-info', (req, res)=>{
  res.sendFile('cape-info.html', {root:'./public/info'})
})

app.get('/guam-info', (req, res)=>{
  res.sendFile('guam-info.html', {root:'./public/info'})
})

app.get('/philippines-info', (req, res)=>{
  res.sendFile('philippines-info.html', {root:'./public/info'})
})

app.get('/strait-info', (req, res)=>{
  res.sendFile('strait-info.html', {root:'./public/info'})
})


app.listen(8080, ()=> {
  console.log("server running")
})