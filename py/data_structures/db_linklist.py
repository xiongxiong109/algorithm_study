# 双向链表
# 即使是在同级目录下，也应该使用相对目录的import
from data_structures.linklist import LinkList


class DBLinkList(LinkList):
    def __init__(self):
        super().__init__(node=Node)

    # 修改插入方法
    # head -> cur_node -> next_node
    # head -> cur_node -> new_node -> next_node
    def insert(self, new_item, item='head'):
        cur_node = self.find(item)
        new_node = self.ListNode(new_item)
        new_node.next = cur_node.next
        new_node.prev = cur_node
        cur_node.next = new_node

    # 删除节点
    # head -> cur_node -> next_node
    # head -> next_node
    def remove(self, item):
        target_node = self.find(item)
        target_node.prev.next = target_node.next
        target_node.next.prev = target_node.prev
        target_node.next = None
        target_node.prev = None


# 双向节点
class Node(object):
    def __init__(self, item='head'):
        self.item = item
        self.prev = None
        self.next = None
