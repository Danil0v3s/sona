const { RG_API_URL, API_ENDPOINTS, REGIONS, RANKED } = require('../../util/constants')
const { axios } = require('../')

const getLeaguesBySummonerId = async (summonerId = '', region = REGIONS.EUW1) => {
    const uri = `${API_ENDPOINTS.LEAGUE_URI}/entries/by-summoner/${summonerId}`
    const url = RG_API_URL(region, uri)

    const { data } = await axios.get(url)
}

const getLeagues = async (queue = RANKED.QUEUE.SOLO_SR, tier = '', division = '', region = REGIONS.EUW1) => {
    const uri = `${API_ENDPOINTS.LEAGUE_URI}/entries/${queue}/${tier}/${division}`
    const url = RG_API_URL(region, uri)

    const { data } = await axios.get(url)
}

const getMasterLeague = async (queue = RANKED.QUEUE.SOLO_SR, region = REGIONS.EUW1) => {
    const uri = `${API_ENDPOINTS.LEAGUE_URI}/masterleagues/by-queue/${queue}`
    const url = RG_API_URL(region, uri)

    const { data } = await axios.get(url)
}

const getGrandMasterLeague = async (queue = RANKED.QUEUE.SOLO_SR, region = REGIONS.EUW1) => {
    const uri = `${API_ENDPOINTS.LEAGUE_URI}/grandmasterleagues/by-queue/${queue}`
    const url = RG_API_URL(region, uri)

    const { data } = await axios.get(url)
}

const getChallengerLeague = async (queue = RANKED.QUEUE.SOLO_SR, region = REGIONS.EUW1) => {
    const uri = `${API_ENDPOINTS.LEAGUE_URI}/challengerleagues/by-queue/${queue}`
    const url = RG_API_URL(region, uri)

    const { data } = await axios.get(url)
}

module.exports = {
    getLeaguesBySummonerId, getLeagues, getMasterLeague, getGrandMasterLeague, getChallengerLeague
}