# 使用字典，处理一段文本中出现的单词数量统计, 相同单词只出现一次，但是统计每个单词出现的总次数


# 参数如果给入默认值的话，可以自动推断出参数类型，后续操作中会出现对应的语法提示
def word_counter(word_str=''):
    # 逗号拆分
    str_arr = word_str.split(' ')
    str_dict = {}
    for item in str_arr:
        item = item.replace(',', '')
        # 为啥一定要用get方法获取?
        # print(str_dict[item]) 如果直接访问这个不存在的key, 会抛KeyError的错，而不是等于None
        if str_dict.get(item) is None:
            str_dict[item] = 1
        else:
            str_dict[item] += 1
    return str_dict
