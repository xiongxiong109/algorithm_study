# 贪婪算法测试
import unittest
from algorithm.greedy import (
    greedy_price
)


class TestGreedy(unittest.TestCase):
    def test_price(self):
        rst = greedy_price(36)
        self.assertEqual(rst[10], 3)
        self.assertEqual(rst[5], 1)
        self.assertEqual(rst[1], 1)
