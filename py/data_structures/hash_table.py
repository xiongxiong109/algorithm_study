

# 哈希散列
class HashTable:
    HASH_KEY = 137

    def __init__(self):
        self.table = ['' for item in range(self.HASH_KEY)]

    def hash(self, data=''):
        total = 0
        for char in data:
            total += ord(char)
        return total % self.HASH_KEY

    def put(self, data=''):
        hash_key = self.hash(data)
        self.table[hash_key] = data
        return hash_key
