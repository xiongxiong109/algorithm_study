# 约瑟夫环问题
from data_structures.loop_linklist import LoopLinkList


# total: 总人数
# step: 步进
# stay_num: 最后留下的人数
def josephus(total=6, step=5, stay_num=1):
    li = LoopLinkList()
    for i in range(total):
        # cur_node = li.find(i)
        # li.insert(i, cur_node.item)
        # 用move方法，避免li.find, find已经在js中实现
        li.insert(i + 1, li.cur_node.item)
        # 总是在cur_node后面插入, 每插入一次, move一次
        li.move(1)
    # 插入元素完成后，回到head
    li.move_to_head()
    while len(li.to_arr()) > stay_num:
        li.move(step)
        li.remove(li.cur_node.item)
    return li.to_arr()
