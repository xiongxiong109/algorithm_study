import unittest
from data_structures.hash_table import HashTable


class TestHashTable(unittest.TestCase):
    def test_put(self):
        hash_table = HashTable()
        hash_key = hash_table.put('hello')
        self.assertEqual(hash_table.table[hash_key], 'hello')

    def test_conflict(self):
        hash_table = HashTable()
        hello_key = hash_table.put('helloa')
        llohe_key = hash_table.put('llohae')
        self.assertEqual(hello_key + 1, llohe_key)
        # hellob 的hash_key 为 helloa + 1, 会与已经产生过碰撞的llohae再次冲突
        db_conf_key = hash_table.put('hellob')
        self.assertEqual(db_conf_key, hello_key + 2)
        self.assertEqual(db_conf_key, llohe_key + 1)
        self.assertEqual(hash_table.table[db_conf_key], 'hellob')
