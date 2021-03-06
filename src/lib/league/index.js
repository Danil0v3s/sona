const { RG_API_URL, API_ENDPOINTS, REGIONS, RANKED } = require('../../config/constants')
const axios = require('axios')

const getLeaguesBySummonerId = async (summonerId = '', region = REGIONS.EUW1) => {
    const uri = `${API_ENDPOINTS.LEAGUE_URI}/entries/by-summoner/${summonerId}`
    const url = RG_API_URL(region, uri)

    const { data } = await axios.get(url)
    return data
}

const getLeagues = async (queue = RANKED.QUEUE.SOLO_SR, tier = '', division = '', region = REGIONS.EUW1) => {
    const uri = `${API_ENDPOINTS.LEAGUE_URI}/entries/${queue}/${tier}/${division}`
    const url = RG_API_URL(region, uri)

    const { data } = await axios.get(url)
    return data
}

const getMasterLeague = async (queue = RANKED.QUEUE.SOLO_SR, region = REGIONS.EUW1) => {
    const uri = `${API_ENDPOINTS.LEAGUE_URI}/masterleagues/by-queue/${queue}`
    const url = RG_API_URL(region, uri)

    const { data } = await axios.get(url)
    return data
}

const getGrandMasterLeague = async (queue = RANKED.QUEUE.SOLO_SR, region = REGIONS.EUW1) => {
    const uri = `${API_ENDPOINTS.LEAGUE_URI}/grandmasterleagues/by-queue/${queue}`
    const url = RG_API_URL(region, uri)

    const { data } = await axios.get(url)
    return data
}

const getChallengerLeague = async ({ queue = RANKED.QUEUE.SOLO_SR, region = REGIONS.EUW1 }) => {
    const uri = `${API_ENDPOINTS.LEAGUE_URI}/challengerleagues/by-queue/${queue}`
    const url = RG_API_URL(region, uri)

    const { data } = await axios.get(url)
    return data
}

module.exports = {
    getLeaguesBySummonerId, getLeagues, getMasterLeague, getGrandMasterLeague, getChallengerLeague
}