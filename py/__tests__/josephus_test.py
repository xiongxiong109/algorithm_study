import unittest
from algorithm.josephus import josephus


class TestJosephus(unittest.TestCase):
    def test_case_1(self):
        stay_arr = josephus()
        self.assertEqual(stay_arr, [1])

    def test_case_2(self):
        stay_arr = josephus(total=41, step=3, stay_num=2)
        self.assertEqual(stay_arr, [16, 31])
