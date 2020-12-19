"""
线程与锁
js是单线程语言，所以没有提供thread这种机制
ps: nodeJS 12.x 以上已经有了woker_thread 模块
"""
from threading import Thread, Lock
from time import sleep


# 无线程锁测试
class Account(object):

    def __init__(self):
        self._money = 0

    # 加钱方法
    def add_money(self, count):
        # 这个写法其实也有点问题，如果在pending之前访问并存储这个变量，就会有问题
        new_money = self._money + count
        # 模拟等待时间
        print('pending...')
        sleep(.2)
        # 这样写其实可以避免一些线程冲突的问题
        # self._money += count
        self._money = new_money
        print('money added')

    # 调用方通过这个property 安全地访问_money属性
    @property
    def money(self):
        return self._money


# 加锁Account类
class LockAccount(Account):
    def __init__(self):
        super().__init__()
        # 添加一个锁实例
        self._lock = Lock()

    # 重写父类的add_money方法
    def add_money(self, count):
        # 先获得锁，再执行代码
        self._lock.acquire()
        try:
            super().add_money(count)
        # 执行完后，释放锁
        finally:
            self._lock.release()


# 加钱线程类
class AddMoneyThread(Thread):

    def __init__(self, act, money):
        super().__init__()
        self._account = act
        self._money = money

    def run(self):
        self._account.add_money(self._money)


if __name__ == '__main__':

    # account = Account()
    account = LockAccount()
    # 开启多个线程同时处理
    # t1 = AddMoneyThread(account, 2)
    # t1.start()
    # t1.join()
    # print(account.money)
    threads = []

    for item in range(10):
        t = AddMoneyThread(account, 2)
        threads.append(t)
        t.start()

    for t in threads:
        t.join()

    print(account.money)
