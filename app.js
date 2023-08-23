const express = require('express')

const router = require('./routes/resultRoute')

const app = express();

const PORT = 3002

app.use('/', router)

app.get('/hello', (req,res) =>{
    res.send('hello world')
})

app.listen (PORT, () =>{
    console.log('server listening on port', PORT)
})