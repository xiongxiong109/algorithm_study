import unittest

from algorithm.radix_sort import radix

class TestRadix(unittest.TestCase):
    def test_sort_1(self):
        arr = [12, 32, 21, 44, 15]
        sortedArr = radix(arr)
        self.assertEqual(sortedArr, [12, 15, 21, 32, 44])
    def test_sort_2(self):
        arr = [1, 88, 34, 12, 33, 77]
        sortedArr = radix(arr)
        self.assertEqual(sortedArr, [1, 12, 33, 34, 77, 88])
    def test_sort_3(self):
        arr = [66, 33, 22, 23, 13]
        sortedArr = radix(arr)
        self.assertEqual(sortedArr, [13, 22, 23, 33, 66])