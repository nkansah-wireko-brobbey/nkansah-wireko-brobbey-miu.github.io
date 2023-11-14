const loginCredentials = require('./database')

const isAuthenticated = (username, password)=>{

    const response = loginCredentials.filter((val)=> val.password==password && val.username==username)

    return response.length > 0 ? true:false
}

module.exports = isAuthenticated