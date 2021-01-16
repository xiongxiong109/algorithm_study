"""
1. 用装饰器来实现单例模式
2. 线程安全的单例模式
"""
from functools import wraps
from random import randint
# 线程不安全example
from threading import Thread, RLock


def singleton(cls):
    # 存储类的实列
    instances = {}
    locker = RLock()

    @wraps(cls)
    def wrapper(*args, **kwargs):
        if cls not in instances:
            with locker:
                if cls not in instances:
                    instances[cls] = cls(*args,  **kwargs)
        return instances[cls]
    return wrapper


# 使用单例装饰器包裹的class
@singleton
class Foo:
    def __init__(self):
        self.key_nm = randint(3, 10)


# 创建foo实例的函数
def create_foo():
    foo = Foo()
    print(foo.key_nm)


if __name__ == '__main__':
    for i in range(4):
        t = Thread(target=create_foo)
        t.start()
        t.join()

