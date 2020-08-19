# python 中的set 集合类型也是无序，唯一的类型
# python里的set自带子交并补集等方法

from functools import reduce


# 求并集
def union(*args):
    set_arr = set()
    for item in args:
        set_arr = set_arr.union(item)
    return [item for item in set_arr]


# 求交集
def intersection(*args):
    inter_sets = reduce(_inter_one, args)
    return [item for item in inter_sets]


def _inter_one(arg_a=[], arg_b=[]):
    set_a = set(arg_a)
    set_b = set(arg_b)
    return set_a.intersection(set_b)

