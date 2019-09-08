const express = require('express')
const bodyParser = require('body-parser')
const multipart = require('connect-multiparty')
const config = require('./mock.config.js')
const Mock = require('mockjs')
const app = express()

// 解决跨域问题
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

// body-parser 负责解析请求体, 可屏蔽掉不同请求不同编码格式及代码的边界异常的复杂处理过程,会将解析出来的内容挂在req.body对象上
// connect-multiparty: 处理文件上传的模块. 会在服务器上创建临时文件夹,但会不删除临时文件夹,需主动删除
const multipartMiddleware = multipart()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// 定义mock接口
const mock = (data, params) => {
    if(Object.prototype.toString.call(data) === '[object Object]') {
        return Mock.mock(data)
    }
    else if (typeof data === 'function') {
        return Mock.mock(data(params))
    }
    else {
        return 'error: data should be an Oject or a function'
    }
}
config.forEach(({method, url, data}) => {
    if(method === 'get') {
        app.get(url, (req,res) => {
            res.json(mock(data,req.query))
        })
    }
    else if(method === 'post') {
        app.post(url, multipartMiddleware, (req,res) => {
            res.json(mock(data,req.body))
        })
    }
    else if(method === 'jsonp') {
        app.get(url, (req, res) => {
            const query = req.query
            const mockData = JSON.stringify(mock(data, req.query))
            const callback = `typeof ${query.callback} === 'function' && ${query.callback}(${mockData})`
            res.send(callback)
        })
    }
})

// 支持自定义接口
let port = 8081
process.argv.forEach((arg, index, arr) => {
    if(arg === '--port') {
        port = arr[index +1] || 8081
        return false
    }
})

module.exports = app.listen(port, ()=> {
    console.log('Mock Server: http://localhost:' + port)
})