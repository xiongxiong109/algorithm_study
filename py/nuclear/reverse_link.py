# 反转链表
# 可以用迭代 / 递归实现
# 链表最方便之处就是它只需要操作一些引用
# 最不便的地方就是对头/尾等临界值的情况需要小心谨慎地处理
from data_structures.linklist import LinkList


# Head -> A -> B -> C -> D -> None
# Head -> D -> C -> B -> A -> None
def reverse_link(link_list):
    cur_node = link_list.head
    prev = None

    while cur_node is not None:
        temp_node = cur_node.next
        cur_node.next = prev
        prev = cur_node
        # temp_node是为了可以走出while循环
        cur_node = temp_node

    # 此时cur_node是最后一个节点
    return prev


if __name__ == "__main__":
    test_link = LinkList()
    # 按next的顺序插入
    test_link.insert('A', 'head')
    test_link.insert('B', 'A')
    test_link.insert('C', 'B')
    test_link.insert('D', 'C')
    # arr = test_link.to_arr()
    node = reverse_link(test_link)

    while node.next is not None:
        print(node.item)
        node = node.next
