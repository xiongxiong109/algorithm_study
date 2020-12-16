import unittest
from basic.regs import format_str


class TestRegs(unittest.TestCase):
    def test_format_str(self):
        
        origin_str = 'hello, {language}, I am {name}, I {favior} {language}'

        data = {
            "language": "python and JavaScript",
            "name": "jqxiong",
            "favior": "love"
        }

        formatted = format_str(origin_str, data)

        self.assertEqual(formatted, 'hello, {0}, I am {1}, I {2} {0}'.format(
            data['language'],
            data['name'],
            data['favior']
        ))
