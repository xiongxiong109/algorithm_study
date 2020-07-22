# 使用queue队列模块
from queue import Queue

# 可以通过设置masSize来判断是否已经full

que = Queue(maxsize = 3)

que.put('hello')
que.put('world')
que.put('world')
# 队列已满
if que.full():
    # 出队
    que.get() # hello 已经出去了
    que.put('xxx')

print(que.get())
print(que.qsize())
print(que.get())
print(que.get())