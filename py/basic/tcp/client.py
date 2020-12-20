"""
tcp客户端
使用Node实现一个tcp服务端, client.py尝试连接NodeServer
"""
from socket import socket


def run():
    client = socket()
    client.connect((
        'localhost',
        9876
    ))

    # 最大接收1024字节
    # binary
    data = client.recv(1024)

    print(data.decode('utf-8'))

    client.close()


if __name__ == '__main__':
    run()
