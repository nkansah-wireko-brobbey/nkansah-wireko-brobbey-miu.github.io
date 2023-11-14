const express = require('express')
const app = express()

const {loginHandler} = require('./handler')

app.get('/login',loginHandler)

app.listen(80,()=>{
    console.log('Server started on port 80')
})

