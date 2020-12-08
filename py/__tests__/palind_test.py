import unittest
from basic.palind import is_palind


class TestPalind(unittest.TestCase):
    # 测试回文字符串
    def test_palind_str(self):
        self.assertEqual(is_palind('hello world'), False)
        # 奇数
        self.assertEqual(is_palind('gooog'), True)
        # 偶数
        self.assertEqual(is_palind('asddsa'), True)

    # 测试回文数字
    def test_palind_int(self):
        self.assertEqual(is_palind(2345), False)
        self.assertEqual(is_palind(12345654321), True)
        self.assertEqual(is_palind(456654), True)
