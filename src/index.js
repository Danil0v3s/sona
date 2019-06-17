const { getSummonerByName } = require('./api/summoner')


getSummonerByName('Danilov3s').then(data => {
    console.log(data)
})