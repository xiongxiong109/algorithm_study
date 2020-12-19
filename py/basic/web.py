"""
网络编程
天行api, key存在本地，不上传github
"""
import requests
from threading import Thread
import re

# 图片正则
ext = r'.*\.(jpe?g)$'
ext_reg = re.compile(ext)


# 下载图片的方法
def download_img(src='', nm=''):
    # 图片名字添加格式后缀
    print(src)
    pic_nm = ext_reg.match(src)
    pic_ext = ''
    # 截取文件名后缀
    if pic_nm is not None:
        pic_ext = pic_nm.group(1)

    file_nm = '{0}.{1}'.format(nm, pic_ext)

    print('download %s start' % file_nm)
    # wb -> binary => 写入二进制文件
    pic = requests.get(src)

    with open('./__temp/img_{0}'.format(file_nm), 'wb') as file:
        file.write(pic.content)

    print('download %s complete' % file_nm)


# 下载图片的线程类
class DownloadThread(Thread):
    def __init__(self, **kwargs):
        super().__init__()
        self._src = kwargs['src']
        # 图片名
        self._nm = kwargs['nm']

    def run(self):
        download_img(self._src, self._nm)


def download_list(data_list):
    for item in data_list:
        # 启用多个线程分发下载图片
        t = DownloadThread(
            nm=item['title'],
            src=item['picUrl']
        )
        t.start()


# fetchApi
class FetchApi(object):
    def __init__(self):
        # api token key
        self._key = ''
        self.baseUrl = 'http://api.tianapi.com/meinv/index'
        self.init_key()

    # 初始化key
    def init_key(self):
        try:
            with open('./__temp/key', 'r', encoding='utf-8') as f:
                self._key = f.read().strip()
        except FileNotFoundError:
            print('key file is not found')

    def fetch(self):
        rst = requests.post(self.baseUrl, data={
            'key': self._key,
            'num': 10,
            'rand': 3
        })

        data = rst.json()

        if data and len(data.get('newslist')):
            download_list(data['newslist'])


if __name__ == '__main__':
    fetcher = FetchApi()
    fetcher.fetch()
