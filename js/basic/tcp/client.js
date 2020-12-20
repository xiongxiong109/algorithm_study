/**
 * 使用node模块建立一个tcp客户端, 尝试连接python启动的server服务
 */
const net = require('net')

// 创建客户端连接
const socket = net.createConnection(9876, 'localhost')

socket.on('connect', () => {
    console.log('connected')
})

socket.on('data', data => {
    // 接收到数据
    console.log(data.toString())
})

socket.on('error', err => {
    console.log('error')
    console.log(err)
})