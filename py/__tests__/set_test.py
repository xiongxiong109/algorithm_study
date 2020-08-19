from algorithm.set_util import union
import unittest


# 集合数据结构测试
class TestSet(unittest.TestCase):
    def test_union(self):
        union_arr = union([1, 2, 4], [3, 2, 4, 5])
        self.assertEqual(union_arr, [1, 2, 3, 4, 5])
