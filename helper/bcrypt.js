const bcrypt = require('bcryptjs')

function passwordHash(password) {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

function passwordCompare(password, hashPassword) {
    return bcrypt.compareSync(password, hashPassword)
}

module.exports = { passwordHash, passwordCompare }