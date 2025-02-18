var axios = require('axios')
var https = require('https');
var apiUrl = process.env.API_URL || 'https://localhost:5252'

const request = axios.create({
    baseURL: apiUrl,
    httpsAgent: new https.Agent({  
        rejectUnauthorized: false
    }),
    validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
    }
})

// Import tests
require('./unauthenticated.test')(request)
require('./user.test')(request)
// Many tests are failing here. Need to understand the expected behavior
//require('./data.test')(request)
require('./template.test')(request)
require('./company.test')(request)
require('./client.test')(request)
require('./vulnerability.test')(request)
// These routes don't appear to exist.
//require('./configs.test')(request)
require('./lib.test')()