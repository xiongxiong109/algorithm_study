

# 哈希散列
class HashTable:
    HASH_KEY = 137

    def __init__(self):
        self.table = [None for item in range(self.HASH_KEY)]

    def hash(self, data=None):
        total = 0
        for char in data:
            total += ord(char)
        return total % self.HASH_KEY

    # 使用线性探测法解决碰撞问题(开链法在js中实现)
    # 线性探测法基于一个事实，就是在散列表中，会存在很多的空位
    # 当插入遇到碰撞的时候，往下一个增量的空位排一下就好了
    # 当散列表的容量足够大(大于待存储数量的2倍以上)时，更适合使用线性探测
    # 当存储容量在1.5倍之间时，使用开链法扩容
    def put(self, data=''):
        hash_key = self.hash(data)
        final_hash_key = hash_key
        if self.table[hash_key] is None:
            self.table[hash_key] = data
        else:
            while self.table[final_hash_key] is not None:
                final_hash_key += 1
            self.table[final_hash_key] = data
        return final_hash_key
