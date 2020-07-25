# 链表数据结构实现
# 一种元素之间有节点关联的数据结构，可以顺着节点往下索引，但不一定是数组
# 这种实现可以没有任何地方存储原始数据，完全存入内存

# 单向链表
class Linklist():
    def __init__(self):
        # 创建一个头节点
        self.head = ListNode()
    # 在指定的item后面插入item
    def insert(self, newItem, item = 'head'):
        # 找到目标元素
        pre_item = self.find(item)
        # 创建新的节点，并且目标元素的指针指向新的节点
        next_item = ListNode(newItem)
        next_item.next = pre_item.next
        pre_item.next = next_item
    # 查找指定节点
    def find(self, item):
        # 从头部开始遍历
        cur_item = self.head
        while cur_item.item != item:
            cur_item = cur_item.next
        return cur_item
    # 删除节点(pre_item.next => target_item.next)
    def remove(self, item):
        prev_item = self.find_prev(item)
        # prev_item.next = item.next item只是目标元素，不是节点
        prev_item.next = prev_item.next.next
    # 找到当前目标节点的上一个界限
    def find_prev(self, item):
        cur_item = self.head
        while cur_item.next.item != item:
            cur_item = cur_item.next
        return cur_item
        
    # 遍历展示链表里的元素
    def toArr(self):
        node = self.head
        arr = []
        while(node.next != None):
            arr.append(node.next.item)
            # 指针后移
            node = node.next
        return arr

# 每一个节点拥有next的指针
class ListNode(object):
    def __init__(self, item = 'head'):
        self.item = item
        self.next = None