const { RG_API_URL, API_ENDPOINTS, REGIONS } = require('../../config/constants')
const { axios } = require('../')

const getMatchById = async (matchId = '', region = REGIONS.EUW1) => {
    const uri = `${API_ENDPOINTS.MATCH_URI}/matches/${matchId}`
    const url = RG_API_URL(region, uri)

    const { data } = await axios.get(url)
    return data
}

const getMatchesByAccount = async (accountId = '', region = REGIONS.EUW1, params = { queue: 420, season: 13 }) => {
    const uri = `${API_ENDPOINTS.MATCH_URI}/matchlists/by-account/${accountId}`
    const url = RG_API_URL(region, uri)

    const { data } = await axios.get(url, params)
    return data
}

module.exports = {
    getMatchById, getMatchesByAccount
}