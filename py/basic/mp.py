"""
多线程编程, 大多数后端语言都会有的机制
"""
from multiprocessing import (
    Process
)

import requests
from time import time, sleep
import re


# 读取url链接，下载到本地s
def download_file(url):

    # 记录单个任务耗时
    d_start = time()
    rst = requests.get(url)
    print('download url: {0}'.format(url))
    # print(rst.text)
    # 截取hostname作为文件名
    host_reg = r'^http[s]?://\w+\.(\w+)\.\w+$'
    matched = re.match(host_reg, url)
    # print(matched)
    # $1
    host_file_nm = matched.group(1)

    # mock delay
    sleep(3)
    # 写文件
    with open('./__temp/t_{0}.html'.format(host_file_nm), 'w', encoding='utf-8') as f:
        f.write(rst.text)

    d_end = time()

    d_dis_time = (d_end - d_start) * 1000

    print('单个任务耗时: %.2f ms' % d_dis_time)


if __name__ == '__main__':
    start = time()

    urls = [
        'https://www.baidu.com',
        'https://m.maoyan.com',
        'https://www.pinduoduo.com'
    ]

    # 三个download 依次等待下载 9000ms
    # for item in urls:
    #     download_file(item)

    # 开启多线程 三个任务并行执行 3000ms
    process_arr = []

    for item in urls:
        p = Process(target=download_file, args=[item])
        process_arr.append(p)
        p.start()
        # join会阻塞进程
        # https://docs.python.org/3/library/multiprocessing.html?highlight=multiprocessing#multiprocessing.Process.join
        # p.join()

    for pro in process_arr:
        pro.join()

    end = time()
    dis_time = (end - start) * 1000
    print('total: %.2f ms' % dis_time)
