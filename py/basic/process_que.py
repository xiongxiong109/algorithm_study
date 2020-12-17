# 进程间通信
from multiprocessing import (
    Process, Queue
)
from time import sleep, time
from random import randint


# 模拟抢票场景
def fetch_ticket(q):
    # 模拟pending等待
    sleep(randint(1, 2))
    # 模拟抢票结果
    rst = randint(1, 10)
    # print(rst)
    # 已经抢到票
    q.put(rst)


def read_pro(q):
    while True:
        if q.get() >= 5:
            print('ok')
            break
        else:
            print('pending')


# 启动n个进程同时抢票
def run():

    pro_que = Queue()
    pro_arr = []

    process_read = Process(target=read_pro, args=(pro_que, ))

    process_read.start()

    for item in range(10):
        # 将queue以参数的形式传入, queue不能初始化在文件的全局中
        p = Process(target=fetch_ticket, args=(pro_que, ))
        pro_arr.append(p)
        p.start()

    for p in pro_arr:
        p.join()

    process_read.join()


if __name__ == '__main__':
    start = time()
    run()
    end = time()
    print('%.2f s' % (end - start))
