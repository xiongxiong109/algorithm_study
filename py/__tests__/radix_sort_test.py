import unittest

from algorithm.radix_sort import radix


class TestRadix(unittest.TestCase):
    def test_sort_1(self):
        arr = [12, 32, 21, 44, 15]
        sorted_arr = radix(arr)
        self.assertEqual(sorted_arr, [12, 15, 21, 32, 44])

    def test_sort_2(self):
        arr = [1, 88, 34, 12, 33, 77]
        sorted_arr = radix(arr)
        self.assertEqual(sorted_arr, [1, 12, 33, 34, 77, 88])

    def test_sort_3(self):
        arr = [66, 33, 22, 23, 13]
        sorted_arr = radix(arr)
        self.assertEqual(sorted_arr, [13, 22, 23, 33, 66])