# 华氏温度转换为摄氏温度
# $C=(F - 32) \ 1.8


# 可以使用input获取用户输入, float转换数据类型
# try except捕获特定类型的报错
def trans_degree(num):
    try:
        c_degree = (float(num) - 32) / 1.8
        return c_degree
    # float可能会报错
    except ValueError:
        return '请输入正常数字类型'


if __name__ == "__main__":
    rst = input("请输入华氏温度:\n")
    degree = trans_degree(rst)
    print(degree)
