import unittest
from algorithm.dynamic_pro import (
    fibonacci, dynamic_fibo
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
