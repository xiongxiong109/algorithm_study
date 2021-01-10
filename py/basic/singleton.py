"""
1. 用装饰器来实现单例模式
2. 线程安全的单例模式
"""
from functools import wraps


def singleton(cls):
    # 存储类的实列
    instances = {}

    @wraps(cls)
    def wrapper(*args, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*args,  **kwargs)
        return instances[cls]
    return wrapper


# 使用单例装饰器包裹的class
@singleton
class Foo:
    def __init__(self):
        pass


