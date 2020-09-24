# quick sort
def quick_sort(sort_list):
    if len(sort_list) == 0:
        return []
    base_item = sort_list[0]
    lesser = []
    getter = []
    for idx in range(1, len(sort_list)):
        cur_item = sort_list[idx]
        if cur_item < base_item:
            lesser.append(cur_item)
        else:
            getter.append(cur_item)
    # python中，数组之间使用加号，即可将两个数组拼接成一个
    return quick_sort(lesser) + [base_item] + quick_sort(getter)
