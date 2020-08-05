# python 自带字典数据结构， 类似js的对象object

# 字面量方式创建
# nm_dir = {
#     'nm': 'xiong',
#     'age': 27
# }

# print(nm_dir)


# 对象实例方式创建

nm_dir = dict(nm='xiong', age=27)
# print(len(nm_dir.keys()))
# print(nm_dir.values())
# 对字典key进行排序后输出
for item in sorted(nm_dir.keys()):
    print(nm_dir[item])
