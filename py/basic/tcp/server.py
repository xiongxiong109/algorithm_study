"""
python socekt实现tcp连接
socket server
"""

from socket import socket, SOCK_STREAM, AF_INET
from datetime import datetime


def run():
    server = socket(
        # tcp
        type=SOCK_STREAM,
        # ipv4
        family=AF_INET
    )

    # 绑定ip和端口
    server.bind((
        '192.168.1.3',
        8080
    ))

    # 监听端口
    server.listen(888)

    print('server start...')

    # 使用死循环，保持服务的持续性
    while True:
        # 处理数据接收
        client, addr = server.accept()
        print('{0} connected'.format(str(addr)))
        # 发送消息给客户端
        client.send(str(datetime.now()).encode('utf-8'))
        client.close()


if __name__ == '__main__':
    run()
