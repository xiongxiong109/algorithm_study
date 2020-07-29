#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 定义一个模块需要上面的声明， 这样才可以被其他模块执行

# 使用队列实现基数排序 py

from queue import Queue
from math import floor


def radix(args=[]):
    # 创建10个队列 bin0 - bin10
    bin_arr = []
    data_arr = []
    for i in range(10):
        bin_item = {
            'id': 'bin%s' % i,
            'queue': Queue()
        }
        bin_arr.append(bin_item)
    # 对数组中对个位数进行一次入队排序
    for item in args:
        cur_item = item % 10 # 取余数
        cur_arr = bin_arr[cur_item] # bin0, bin1
        cur_arr['queue'].put(item)
    # 第一次排序后依次出队，得到第一次排序的结果
    data_arr = pop_arr(bin_arr)

    # 对数组对十位数再进行一次入队排序
    for item in data_arr:
        cur_item = floor(item / 10) # 取十位数
        cur_arr = bin_arr[cur_item] # bin0, bin1
        cur_arr['queue'].put(item)
    
    data_arr = pop_arr(bin_arr)

    return data_arr


def pop_arr(bin_arr=[]):
    single_arr = []
    for bin_x in bin_arr:
        while bin_x['queue'].qsize():
            single_arr.append(bin_x['queue'].get())
    return single_arr
