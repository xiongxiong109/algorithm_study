# 冒泡排序
def bubble_sort(sort_list):
    for idx in range(len(sort_list) - 1):
        for inner in range(len(sort_list) - 1 - idx):
            next_id = inner + 1
            if sort_list[inner] and sort_list[inner] > sort_list[next_id]:
                # 交换两个元素
                swap(sort_list, inner, next_id)
    return sort_list


def swap(sort_list, from_id, to_id):
    temp = sort_list[from_id]
    sort_list[from_id] = sort_list[to_id]
    sort_list[to_id] = temp
