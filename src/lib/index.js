const axios = require('axios')
const { RG_TOKEN_KEY } = require('../config/constants')
const { RG_API_KEY } = require('../config/vars')

axios.defaults.headers.common[RG_TOKEN_KEY] = RG_API_KEY

module.exports = {
    axios
}