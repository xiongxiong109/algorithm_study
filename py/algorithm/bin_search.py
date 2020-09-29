# 二分法查找
from math import floor


# 只适合有序的数组
def bin_search(search_list, target):
    upper = len(search_list) - 1
    lowwer = 0
    # search_list.sort()
    while lowwer <= upper:
        mid_len = floor((upper + lowwer) / 2)
        cur_item = search_list[mid_len]
        # print(mid_len)

        if cur_item < target:
            lowwer = mid_len + 1
        elif cur_item > target:
            upper = mid_len - 1
        else:
            return mid_len
    return -1
