const { RG_API_URL, API_ENDPOINTS, REGIONS } = require('../../util/constants')

const getSummonerByName = async (name = '', region = REGIONS.EUW1) => {
    const uri = `${API_ENDPOINTS.SUMMONER_URI}/by-name/${name}`
    const url = RG_API_URL(region, uri)
}

const getSummonerByAccountId = async (accountId = '', region = REGIONS.EUW1) => {
    const uri = `${API_ENDPOINTS.SUMMONER_URI}/by-account/${accountId}`
    const url = RG_API_URL(region, uri)
}

const getSummonerByPUUID = async (puuid = '', region = REGIONS.EUW1) => {
    const uri = `${API_ENDPOINTS.SUMMONER_URI}/by-puuid/${puuid}`
    const url = RG_API_URL(region, uri)
}

const getSummonerBySummonerId = async (summonerId = '', region = REGIONS.EUW1) => {
    const uri = `${API_ENDPOINTS.SUMMONER_URI}/${summonerId}`
    const url = RG_API_URL(region, uri)
}