// 建立一个tcp服务器
const net = require('net')
const PORT = 9876

const server = net.createServer(handleSocket)

function handleSocket(socket) {
    console.log('client connected')
    // console.log(socket)
    // 传输数据
    socket.write('hello, world')
    socket.on('end', () => {
        console.log('client disconnect')
    })
}

server.listen(PORT, () => {
    console.log(`node tcp server is running at ${PORT}`)
})