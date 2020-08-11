import unittest
from data_structures.hash_table import HashTable


class TestHashTable(unittest.TestCase):
    def test_put(self):
        hash_table = HashTable()
        hash_key = hash_table.put('hello')
        self.assertEqual(hash_table.table[hash_key], 'hello')
