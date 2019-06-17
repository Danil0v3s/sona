const axios = require('axios')
const { RG_API_KEY, RG_TOKEN_KEY } = require('../util/constants')

axios.defaults.headers.common[RG_TOKEN_KEY] = RG_API_KEY

module.exports = {
    axios
}