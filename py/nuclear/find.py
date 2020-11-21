# 查找函数的实现(递归版本)
# def find(data, city_id):
#     cur_nm = ''
#     has_found = False
#
#     def _find(_data, _cid):
#
#         # 闭包需要显式声明变量作用域
#         nonlocal has_found
#         nonlocal cur_nm
#
#         if has_found is True:
#             return cur_nm
#         # 这里是Tuple解构了Tuple[Int, Any]
#         for idx, item in enumerate(_data):
#             # 这里可以看出来，是一个深度优先的遍历
#             # print(item['nm'])
#             if item["id"] == _cid:
#                 has_found = True
#                 cur_nm = item["nm"]
#                 break
#             # 使用item.get, 因为children字段可能不存在，会报错
#             if not has_found and item.get('children') is not None and len(item["children"]):
#                 _find(item["children"], _cid)
#
#     # python没有函数提升?
#     _find(data, city_id)
#
#     return cur_nm

# 查找函数实现, 非递归(实际是用栈实现)
def find(data, city_id):
    # 初始化循环堆栈
    data_stack = []
    # cur_data = data[0]
    # 循环体入栈
    # data_stack.append(cur_data)
    for idx in range(len(data)):
        cur_data = data[idx]
        data_stack.append(cur_data)
        while len(data_stack):
            cur = data_stack[0]
            data_stack = data_stack[1:]
            if cur['id'] == city_id:
                return cur['nm']
            # 这里的遍历顺序，可以看出来是一个横向的, 即广度优先的遍历
            # print(cur['nm'])
            if cur.get('children'):
                for (_, item) in enumerate(cur["children"]):
                    data_stack.append(item)


if __name__ == "__main__":
    source_data = [
        {
            "id": 1,
            "nm": '上海',
            "children": [
                {
                    "id": 11,
                    "nm": '浦东新区',
                    "children": [
                        {
                            "id": 111,
                            "nm": '川沙'
                        }
                    ]
                },
                {
                    "id": 12,
                    "nm": '徐汇区'
                }
            ]
        },
        {
            "id": 2,
            "nm": '广东',
            "children": [
                {
                    "id": 22,
                    "nm": '广州'
                }
            ]
        }
    ]
    print(find(source_data, 111))
