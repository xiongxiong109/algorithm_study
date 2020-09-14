# 测试冒泡排序
import unittest
from algorithm.sort import bubble_sort, selection_sort


class TestSort(unittest.TestCase):
    def test_bubble(self):
        test_list = [1, 3, 5, 6, 2, 0, 8]
        sorted_list = bubble_sort(test_list)
        self.assertEqual(sorted_list, [0, 1, 2, 3, 5, 6, 8])

    def test_selection(self):
        test_list = [1, 3, 5, 6, 2, 0, 8]
        sorted_list = selection_sort(test_list)
        self.assertEqual(sorted_list, [0, 1, 2, 3, 5, 6, 8])
