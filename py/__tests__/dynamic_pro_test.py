import unittest
from algorithm.dynamic_pro import (
    fibonacci, dynamic_fibo,
    flat_arr, get_depth
)


class TestDynamicPro(unittest.TestCase):
    def test_fibonacci(self):
        fib1 = fibonacci(1)
        self.assertEqual(fib1, 1)
        fib4 = fibonacci(4)
        self.assertEqual(fib4, 3)

    def test_dynamic_fibo(self):
        fib1 = dynamic_fibo(1)
        self.assertEqual(fib1, 1)
        fib4 = dynamic_fibo(4)
        self.assertEqual(fib4, 3)

    def test_flat_arr(self):
        self.assertEqual(flat_arr([1, [2, [3, 4], [5, 6]]]), [1, 2, 3, 4, 5, 6])

    def test_get_depth(self):
        self.assertEqual(get_depth([1, [2, [3, [4]]], [5, 6], [7, 8], 9]), 4)
