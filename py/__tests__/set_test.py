from algorithm.set_util import union, intersection
import unittest


# 集合数据结构测试
class TestSet(unittest.TestCase):
    def test_union(self):
        union_arr = union([1, 2, 4], [3, 2, 4, 5])
        self.assertEqual(union_arr, [1, 2, 3, 4, 5])

    def test_inter(self):
        inter_arr = intersection([1, 2, 4], [2, 3, 4], [3, 4, 5, 2])
        self.assertEqual(inter_arr, [2, 4])
