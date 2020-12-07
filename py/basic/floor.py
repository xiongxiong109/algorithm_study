"""
找出所有的水仙花数
水仙花数也被称为超完全数字不变数、自恋数、自幂数、阿姆斯特朗数，它是一个3位数，
该数字每个位上数字的立方之和正好等于它本身，例如：$1^3 + 5^3+ 3^3=153$。
练习点：
整除/取余，反转
"""


def floor():
    # 三位数
    rst = []
    for num in range(100, 1000):
        # 求个十百位
        low = num % 10
        # // 可以做整除运算, 替代math.floor
        mid = num // 10 % 10
        high = num // 100 % 10
        # 可以用 ** 代替 pow(low, 3)
        if low ** 3 + mid ** 3 + high ** 3 == num:
            rst.append(num)
    return rst


# 反转正整数
def reverse_num(num):
    rst = 0
    while num > 0:
        temp_num = num % 10
        rst = rst * 10 + temp_num
        # 用于loop循环
        num //= 10
    return rst


if __name__ == "__main__":
    # print(floor())
    print(reverse_num(123456))
