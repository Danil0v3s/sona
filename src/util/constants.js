const path = require('path');

// import .env variables
require('dotenv').config()

const RG_API_KEY = process.env.RG_API_KEY
const RG_TOKEN_KEY = 'X-Riot-Token'

const RANKED = {
    QUEUE: {
        'SOLO_SR': 'RANKED_SOLO_5x5',
        'FLEX_SR': 'RANKED_FLEX_SR',
        'FLEX_TT': 'RANKED_FLEX_TT'
    },
    TIER: {
        DIAMOND: 'DIAMOND', PLATINUM: 'PLATINUM', GOLD: 'GOLD', SILVER: 'SILVER', BRONZE: 'BRONZE', IRON: 'IRON'
    },
    DIVISION: {
        I: 'I',
        II: 'II',
        III: 'III',
        IV: 'IV'
    }
}

const REGIONS = {
    RU: 'RU',
    KR: 'KR',
    BR1: 'BR1',
    OC1: 'OC1',
    JP1: 'JP1',
    NA1: 'NA1',
    EUN1: 'EUN1',
    EUW1: 'EUW1',
    TR1: 'TR1',
    LA1: 'LA1',
    LA2: 'LA2'
}

const RG_API_URL = (region, uri) => `https://${region}.api.riotgames.com/lol/${uri}`

const API_ENDPOINTS = {
    SUMMONER_URI: 'summoner/v4/summoners',
    LEAGUE_URI: 'league/v4',
    MATCH_URI: 'match/v4'
}

module.exports = {
    RANKED, REGIONS, RG_API_URL, API_ENDPOINTS, RG_API_KEY, RG_TOKEN_KEY
}