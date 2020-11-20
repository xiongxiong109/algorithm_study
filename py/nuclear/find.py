# 查找函数的实现(递归版本)
def find(data, city_id):
    cur_nm = ''
    has_found = False

    def _find(_data, _cid):

        # print(_data)
        # 闭包需要显式声明变量作用域
        nonlocal has_found
        nonlocal cur_nm

        if has_found is True:
            return cur_nm
        # 这里是Tuple解构了Tuple[Int, Any]
        for idx, item in enumerate(_data):
            if item["id"] == _cid:
                has_found = True
                cur_nm = item["nm"]
                break
            # 使用item.get, 因为children字段可能不存在，会报错
            if not has_found and item.get('children') is not None and len(item["children"]):
                _find(item["children"], _cid)

    # python没有函数提升?
    _find(data, city_id)

    return cur_nm


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
