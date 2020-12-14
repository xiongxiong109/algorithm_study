# 文件系统
# def open_file():
#     f = open('ui.py')
#     print(f.read())
#     # 需要手动调用close方法释放资源, 使用with语句的话，可以自动释放资源
#     f.close()
# import time


# def open_file():
#     file_nm = input('Please input filename:\n')
#
#     # 尝试添加文件类型后缀
#     if not file_nm.endswith('.py'):
#         file_nm += '.py'
#
#     try:
#         with open(file_nm, 'wr', encoding="utf-8") as f:
#             # print(f.read())
#             # 可以逐行输出文本
#             # for line in f:
#             #     print(line)
#             #     time.sleep(.1)
#             # 文本按行读取之后，就没有lines了, 读取会改动文本流
#             # lines = f.readlines()
#             # print(lines)
#             return f.read()
#     except FileNotFoundError:
#         print('file %s not found' % file_nm)

# import json


# 写入json文件
# def write_json():
#     data = {
#         "name": "jqxiong",
#         "age": 27,
#         "skills": ["JavaScript", "python"]
#     }
#     # 打开/创建文件
#     with open('data.json', 'w', encoding='utf-8') as f:
#         json.dump(data, f)

# 读json
# def read_json():
#     with open('data.json', 'r', encoding='utf-8') as fs:
#         data = json.load(fs)
#         print(data['name'])
#
#
# if __name__ == '__main__':
#     read_json()

"""
更贴近现实的操作
requests 请求资源加载解析
"""
import requests
import json


def fetch_data():
    # 百度jsonp
    url = 'https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&wd='
    # data = requests.get()
    kw = input('请输入关键字\n')
    url += kw
    data = requests.get(url)
    # json解析data.text
    model = json.loads(data.text)
    # print(model['g'])
    for item in model['g']:
        print(item['q'])

    fetch_data()


if __name__ == '__main__':
    fetch_data()
