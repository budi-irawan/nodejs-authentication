const bcrypt = require('../helper/bcrypt')
const jwt = require('../helper/jwt')
const user = require('../models/userModels')

class UserController {
    static async register(req, res) {
        const { username, password } = req.body 
        try {
            user.findAll({ where: { username }}).then((data) => {
                if (data.length) {
                    res.status(201).json({ status: 204, message: "Username already exist" })
                } else {
                    let userPassword = bcrypt.passwordHash(password)
                    user.create({
                        username: username,
                        password: userPassword
                    }).then((data) => {
                        res.status(200).json({ status: 200, message: "success", data: data })
                    }).catch((error) => {
                        res.status(500).json({ status: 500, message: "failed", data: error })
                    })
                }
            })
        } catch (error) {
            res.status(500).json({ status: 500, message: "failed", data: error })
        }
    }

    static login(req, res) {
		const { username, password } = req.body
		user.findAll({ where: { username } }).then((data1) => {
			if (data1.length) {
				let result = bcrypt.passwordCompare(password, data1[0].dataValues.password)
				if (result) {
					let dataToken = { id: data1[0].id, username: data1[0].username }

					res.status(200).json({ status: 200, message: "success", token: jwt.tokenGenerate(dataToken), username: data1[0].username, data: data1[0] })
				} else {
					res.status(201).json({ status: 204, message: "Password not match" })
				}
			} else {
				res.status(201).json({ status: 204, message: "Username not registered" })
			}
		}).catch((err) => {
			res.status(500).json({ status: 500, message: "failed", data: err })
		})
	}
}

module.exports = UserController