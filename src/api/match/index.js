const { RG_API_URL, API_ENDPOINTS, REGIONS } = require('../../util/constants')

const getMatchById = async (matchId = '', region = REGIONS.EUW1) => {
    const uri = `${API_ENDPOINTS.MATCH_URI}/matches/${matchId}`
    const url = RG_API_URL(region, uri)
}

const getMatchesByAccount = async (accountId = '', region = REGIONS.EUW1, params = {}) => {
    const uri = `${API_ENDPOINTS.MATCH_URI}/matchlists/by-account/${accountId}`
    const url = RG_API_URL(region, uri)
}