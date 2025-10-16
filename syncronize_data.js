const { connection } = require('./config/connection')

let normalizedPath = require("path").join(__dirname, "./models")
require("fs").readdirSync(normalizedPath).forEach(function(file) {
    console.log(file);
    require("./models/" + file)
})

connection.sync({ alter: true }).then(() => {
    console.log("database sync successfull");
	process.exit(0)
}).catch(error => {
    console.log(error);
})

