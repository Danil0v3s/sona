const axios = require('axios')
const { RG_TOKEN_KEY, REGIONS } = require('../config/constants')
const { RG_API_KEY } = require('../config/vars')
const Summoner = require('../model/summoner.model')

const { getChallengerLeague } = require('./league')
const { getSummonerBySummonerId } = require('./summoner')
const { getMatchesByAccount, getMatchById } = require('./match')

axios.defaults.headers.common[RG_TOKEN_KEY] = RG_API_KEY

const fetchChallengers = async () => {

    for (const regionKey of Object.keys(REGIONS)) {
        const region = REGIONS[regionKey]
        const { entries } = await getChallengerLeague({ region })

        for (const entry of entries) {
            try {
                const summonerData = await getSummonerBySummonerId(entry.summonerId, region)
                (new Summoner(summonerData)).save()
            } catch (error) {
                console.error('Could not find summoner with given id')
            }
        }
    }
}

module.exports = {
    axios,
    fetchChallengers
}