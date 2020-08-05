import unittest
from algorithm.word_counter import word_counter


class TestWordCounter(unittest.TestCase):
    def test_counter(self):
        str_dir = word_counter('stay angry, stay foolish')
        # self.assertEqual(str_dir['stay'], 2)
        # self.assertEqual(str_dir['angry'], 1)
        # self.assertEqual(str_dir['foolish'], 1)
        self.assertDictEqual(str_dir, {'stay': 2, 'angry': 1, 'foolish': 1})
