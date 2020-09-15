# 冒泡排序, 两层循环，依次比较相邻元素
def bubble_sort(sort_list):
    for idx in range(len(sort_list) - 1):
        for inner in range(len(sort_list) - 1 - idx):
            next_id = inner + 1
            if sort_list[inner] and sort_list[inner] > sort_list[next_id]:
                # 交换两个元素
                swap(sort_list, inner, next_id)
    return sort_list


# 选择排序
# 两层循环, 每次都与最小值进行比较
def selection_sort(sort_list):
    for idx in range(len(sort_list) - 2):
        min_idx = idx
        for inner in range(idx + 1, len(sort_list) - 1):
            if sort_list[inner] < sort_list[min_idx]:
                min_idx = inner
            swap(sort_list, idx, min_idx)
    return sort_list


# 插入排序
# 两层循环, 比当前待比较值小的元素，放在前面，后面的元素依次往后移动
def insertion_sort(sort_list):
    for outter in range(1, len(sort_list)):
        temp = sort_list[outter]
        inner = outter
        while inner > 0 and sort_list[inner - 1] >= temp:
            # 比当前小的元素依次往前移动
            sort_list[inner] = sort_list[inner - 1]
            inner -= 1
        sort_list[inner] = temp
    return sort_list


# 工具方法，交换元素位置
def swap(sort_list, from_id, to_id):
    temp = sort_list[from_id]
    sort_list[from_id] = sort_list[to_id]
    sort_list[to_id] = temp
