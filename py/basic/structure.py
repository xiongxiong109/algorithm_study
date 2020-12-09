"""
尝试字符串操作
\"\"\" 是换行字符串，好像并不是真正的注释呢...
strip
isdigit
isalpha
isalnum
startsWith
endsWith
find
index
[1:3]
% format 格式化
f''
"""


# 短横线命名转驼峰
def x2camel(val_nm=''):
    # 数组切割方法
    val_nm = val_nm.rsplit('-')
    val_str = ''
    for item in val_nm:
        # title可以直接返回一个首字母大写的字符串
        val_str += item.title()
    return val_str
