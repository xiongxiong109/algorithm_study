import unittest, queue
# python -m unittest que_test

# 队列模块单元测试
class TestQueue(unittest.TestCase):
    # 测试队列的FIFO
    def test_FIFO(self):
        que = queue.Queue()
        que.put(1)
        que.put(2)
        que.put(3)
        self.assertEqual(que.get(), 1)

# if __name__ == '__main__':
#     unittest.main()