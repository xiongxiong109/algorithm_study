# 测试排序算法
import unittest
from random import randint
from algorithm.sort import (
    bubble_sort, selection_sort,
    insertion_sort, shell_sort, merge_sort
)
from algorithm.quick_sort import quick_sort


# 创建随机数数组的函数
# 根据长度创建一个数组, 返回该数组与排序好的数组
def create_random_list(list_len=100):
    test_list = []
    # 需要排序的数组
    for item in range(list_len):
        test_list.append(randint(0, list_len))
    # 创建一个新的数组实例, 并排好序，等待验证结果
    sorted_list = list(test_list)
    sorted_list.sort()

    return (
        test_list,
        sorted_list
    )


class TestSort(unittest.TestCase):
    def test_bubble(self):
        # 解构赋值
        test_list, sorted_list = create_random_list(100)
        bubble_sort(test_list)
        self.assertEqual(test_list, sorted_list)

    def test_selection(self):
        test_list, sorted_list = create_random_list(100)
        selection_sort(test_list)
        self.assertEqual(test_list, sorted_list)

    def test_insertion(self):
        test_list, sorted_list = create_random_list(100)
        insertion_sort(test_list)
        self.assertEqual(sorted_list, test_list)

    def test_shell_sort(self):
        test_list, sorted_list = create_random_list(100)
        # 使用希尔排序
        shell_sort(test_list)
        self.assertEqual(test_list, sorted_list)

    def test_merge_sort(self):
        test_list, sorted_list = create_random_list(100)
        rst = merge_sort(test_list)
        # print(rst)
        self.assertEqual(rst, sorted_list)

    def test_quick_sort(self):
        test_list, sorted_list = create_random_list(100)
        rst = quick_sort(test_list)
        # print(rst)
        self.assertEqual(rst, sorted_list)
