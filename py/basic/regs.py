# python对正则的支持
import re

# 邮箱检测
# def check_email(email=''):
#     # jqxiong521@qq.com;
#     # 原始字符串的正则写法
#     email_reg = r'^\w+@(-|\w)+\.[a-zA-Z]{2,3}$'
#     # 编译好正则函数
#     reg = re.compile(email_reg)
#     # print(reg.findall(email))
#     # 使用迭代器处理
#     # for temp in reg.finditer(email):
#     #     print(temp.group())
#     rst = reg.match(email)
#
#     rst and print(rst.group())


"""
(?=exp) 可以匹配 exp之前的字符串
(?<=exp) 可以匹配exp之后的字符串
(?!exp)
(?<!exp)
"""


# def check_valid():
#     reg = r'\w+(?=ing)'
#     rst = re.match(reg, 'dancing balabala')
#     print(rst)

# 跟js的 str.replace一样，第二个参数可以传递函数, 通过返回对应参数实现模板替换
def handle_reg(rst, data):
    # group, 类似 js的 $1
    # print(rst.group())
    key = rst.group(1)
    return data[key] or ''


# 实现模板字符串替换
def format_str(origin_str='', data=None):
    reg = r'\{(\w+)\}'
    # 使用sub进行替换
    after_str = re.sub(reg, lambda rst: handle_reg(rst, data), origin_str, flags=re.I | re.M)

    return after_str


if __name__ == '__main__':
    format_str('hello, {language}, I am {nm}', {
        'language': 'python',
        'nm': 'bear xiong'
    })
