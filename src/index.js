Promise = require('bluebird')
const { port, env } = require('./config/vars')
const app = require('./config/express')
const mongoose = require('./config/mongoose')

const { getChallengerLeague } = require('./lib/league')
const { getSummonerBySummonerId } = require('./lib/summoner')
const { getMatchesByAccount, getMatchById } = require('./lib/match')

mongoose.connect()

app.listen(port, async () => {
    console.info(`Server has started on port ${port} (${env})`)

    const { entries } = await getChallengerLeague()
    entries.sort((a, b) => b.leaguePoints - a.leaguePoints).slice(0, 2).forEach(({ summonerId }) => {
        getSummonerBySummonerId(summonerId).then(({ accountId }) => {
            getMatchesByAccount(accountId).then(matches => {
                console.log(matches)
            }).catch(err => console.error('Could not find matches for given summoner'))
        }).catch(err => console.error('Could not find summoner with given id'))
    })

})

/**
* Exports express
* @public
*/
module.exports = app;