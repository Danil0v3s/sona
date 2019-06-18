const path = require('path');

// import .env variables
require('dotenv').config()

module.exports = {
    env: process.env.NODE_ENV,
    port: parseInt(process.env.PORT, 10),
    RG_API_KEY: process.env.RG_API_KEY,
    mongo: {
        uri: process.env.NODE_ENV === 'test'
            ? process.env.MONGO_URI_TESTS
            : process.env.MONGO_URI,
    },
    logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
}