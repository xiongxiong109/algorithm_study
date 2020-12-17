"""
Thread 的常规用法与Process用法类似,
另外可以通过继承实现自定义的线程类
多线程可以共享进程的内存空间
"""
from threading import Thread
import requests
from time import time
import re


# 记录函数执行时间的logger, decorator
def logger(func):
    def wrapper_funcs(*kwargs):
        log_start = time()
        func(*kwargs)
        log_end = time()
        dis_time = (log_start - log_end) * 1000
        print('task takes %.2f ms' % dis_time)

    return wrapper_funcs


# start, join, etc
class DownloadTask(Thread):
    def __init__(self, url):
        super().__init__()
        self.url = url
        self.host_reg = r'^http[s]?://\w+\.(\w+)\.\w+'

    # 重写Tread类的run方法
    @logger
    def run(self):
        print('download url: {0}'.format(self.url))
        rst = requests.get(self.url)
        matched = re.match(self.host_reg, self.url)
        print(self.url)
        # $1
        host_file_nm = matched.group(1)

        with open('./__temp/t_{0}.html'.format(host_file_nm), 'w', encoding='utf-8') as f:
            f.write(rst.text)


# 使用多线程比开启多个进程要快多了呢
if __name__ == '__main__':

    start = time()

    urls = [
        'https://www.babeljs.cn/',
        'https://www.baidu.com/',
        'https://cn.vuejs.org/v2/api/#props'
    ]

    # 单线程执行 500ms
    # for url in urls:
    #     t = DownloadTask(url)
    #     t.run()

    # 多线程执行, 取决于耗时最长的那一次请求 300ms
    thread_arr = []

    for url in urls:
        t = DownloadTask(url)
        thread_arr.append(t)
        t.start()

    for t in thread_arr:
        t.join()

    end = time()

    print('total: %.2f s' % (end - start))
