"""
回文判断函数练习
1. 函数重载(支持不同类型传参)
2. 字符串双指针/数字整除
"""


def is_palind(obj):
    # 处理字符串判断
    if isinstance(obj, str):
        return _check_str(obj)
    if isinstance(obj, int):
        return _check_int(obj)


# 字符串回文检查
def _check_str(obj):
    # 双指针
    obj_len = len(obj)
    mid = obj_len // 2
    end = mid
    # 奇数跟start 同位， 偶数减一位
    # python竟然没有三元运算符...
    start = mid if obj_len % 2 != 0 else mid - 1

    while start >= 0 and end <= len(obj):
        if obj[start] != obj[end]:
            return False
        start -= 1
        end += 1
    return True


# 整数类型回文检查
def _check_int(num):
    reverse_num = 0
    origin_num = num
    # print(num)
    while origin_num > 0:
        reverse_num = reverse_num * 10 + origin_num % 10
        origin_num //= 10
    return reverse_num == num
