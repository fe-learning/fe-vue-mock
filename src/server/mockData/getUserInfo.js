module.exports = {
    code:0,
    message: 'success',
    data: {
        name: '@cname',
        mobile: /^1[358]\d{9}$/,
        'age|15-30': 1 ,
        'orders|5-10':[
            {
                id: '@id',
                from: '@county(true)',
                fo: '@county(true)'
            }
        ]
    }
}