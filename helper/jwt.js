const jwt = require('jsonwebtoken')

function tokenGenerate(payload) {
    return jwt.sign(payload, 'SECRET')
}

function tokenVerify(token) {
    return jwt.verify(token, 'SECRET')
}

module.exports = { tokenGenerate, tokenVerify }