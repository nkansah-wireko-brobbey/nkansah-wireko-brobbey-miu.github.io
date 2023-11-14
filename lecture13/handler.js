const path = require('path')


const loginHandler = (req,res, next)=>{

    res.sendFile(path.join(__dirname,'pages','login.html'))

}
const postHandler = (req,res,next)=>{

}


module.exports = {loginHandler}