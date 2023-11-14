const dataFn = require('./data')

const postData = (req,res,next)=>{
    console.log(req.body)

    dataFn.setData({username: req.body.username, comment: req.body.comment})

    res.redirect('/preview')
}
const preview = (req,res,next)=>{
   

    res.send(`
        <div>
            <h3>${dataFn.getData().username}</h3>
            <p>${dataFn.getData().comment}</p>
        </div>
    `)
}

module.exports = {postData, preview}