# python 中的set 集合类型也是无序，唯一的类型
# python里的set自带子交并补集等方法


# 求并集
def union(*args):
    set_arr = set()
    for item in args:
        set_arr = set_arr.union(item)
    return [item for item in set_arr]

