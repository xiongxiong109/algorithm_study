from algorithm.set_util import union, intersection, diff
import unittest


# 集合数据结构测试
class TestSet(unittest.TestCase):
    def test_union(self):
        union_arr = union([1, 2, 4], [3, 2, 4, 5])
        self.assertEqual(union_arr, [1, 2, 3, 4, 5])

    def test_inter(self):
        inter_arr = intersection([1, 2, 4], [2, 3, 4], [3, 4, 5, 2])
        self.assertEqual(inter_arr, [2, 4])

    def test_diff(self):
        diff_arr = diff(['a', 'b', 1], [1, 2, 3, 4])
        self.assertEqual(diff_arr, [])
        diff_arr = diff([1, 2], [3, 4, 5, 1, 2])
        self.assertEqual(diff_arr, [3, 4, 5])

    # 集合的对等差分
    def test_symmetric(self):
        set_a = set([3, 6, 1])
        set_b = set([1, 2, 3, 4])
        symmetric = [item for item in set_a.symmetric_difference(set_b)]
        self.assertEqual(symmetric, [2, 4, 6])
