Promise = require('bluebird')
const { port, env } = require('./config/vars')
const app = require('./config/express')
const mongoose = require('./config/mongoose')

const { fetchChallengers } = require('./lib')

mongoose.connect()

app.listen(port, async () => {
    console.info(`Server has started on port ${port} (${env})`)
    fetchChallengers()
})

/**
* Exports express
* @public
*/
module.exports = app;