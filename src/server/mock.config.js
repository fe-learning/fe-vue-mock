const api = require('./api.js')
const getUserInfo = require('./mockData/getUserInfo.js') 

module.exports = [
    {
        method: 'get',
        url: api.getUserInfo,
        data: getUserInfo
    }
]