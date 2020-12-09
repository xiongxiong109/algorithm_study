import unittest
from basic.structure import (
    x2camel
)


class TestStructure(unittest.TestCase):
    # 驼峰转换测试
    def test_camel(self):
        self.assertEqual(x2camel('hello-world'), 'HelloWorld')
