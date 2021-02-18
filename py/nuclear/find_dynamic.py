"""
字段会变的find
如:
"""
source_data = {
    "name": "China",
    "province": [
        {
            "name": "上海",
            "city": [
                {
                    "name": "上海市",
                    "area": [
                        {
                            "name": "长宁区"
                        },
                        {
                            "name": "闵行区"
                        }
                    ]
                }
            ]
        },
        {
            "name": "北京",
            "city": [
                {
                    "name": "北京市",
                    "area": [
                        {
                            "name": "海淀区"
                        }
                    ]
                }
            ]
        }
    ]
}


# 递归
# def find_data(data):
#
#     result = {}
#
#     def _find_sub(sub_item):
#         for key in sub_item:
#             if isinstance(sub_item[key], list):
#                 # 初始化key数组
#                 if result.get(key) is None:
#                     result[key] = []
#
#                 for sub in sub_item[key]:
#                     result[key].append(sub['name'])
#                     _find_sub(sub)
#
#     _find_sub(data)
#     return result

# 非递归
def find_data(data):

    loop_stack = []
    result = {}

    # 解构体
    name, *args = data
    # 假设只有两个key, 一个是name, 一个是其他key
    cur_loop_key = args[0]
    # 循环入栈
    loop_stack += data[cur_loop_key]

    result[cur_loop_key] = []

    while len(loop_stack):
        cur_item = loop_stack.pop()
        print(cur_item)
        name, *args = cur_item

        if len(args):
            next_key = args[0]
            next_arr = cur_item.get(next_key)
            if next_arr is not None and isinstance(next_arr, list):
                loop_stack += next_arr
            # print(cur_item)
            # print(args)

    return result


if __name__ == '__main__':
    rst = find_data(source_data)
    # print(rst)
