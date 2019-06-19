const mongoose = require('mongoose')

const summonerSchema = new mongoose.Schema({}, { strict: false })

module.exports = mongoose.model('Summoner', summonerSchema);
