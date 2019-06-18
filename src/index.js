Promise = require('bluebird')
const { port, env } = require('./config/vars')
const app = require('./config/express')
const mongoose = require('./config/mongoose')

mongoose.connect()

app.listen(port, () => console.info(`Server has started on port ${port} (${env})`))

/**
* Exports express
* @public
*/
module.exports = app;