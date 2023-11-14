const express = require('express')

const app = express()
const path = require('path')

const {postData,preview} = require('./handler')

//Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(80,()=>{
    console.log('The server has started port 80')
})

app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'pages','exam.html'))
})

app.post('/post',postData)
app.get('/preview',preview)

// app.post('/post',(req,res,next)=>{
//     console.log(req.body)
//     res.send({name:req.body.username, comment:req.body.comment})
// })