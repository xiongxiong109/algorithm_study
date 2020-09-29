from algorithm.bin_search import bin_search
import unittest


class TestBinSearch(unittest.TestCase):
    def test_bin_search(self):
        search_list = [3, 2, 1, 4, 4, 2, 5]
        search_list.sort()
        # [1, 2, 2, 3, 4, 4, 5]
        self.assertEqual(bin_search(search_list, 2), 1)
        self.assertEqual(bin_search(search_list, 8), -1)
