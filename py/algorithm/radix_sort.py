#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 定义一个模块需要上面的声明， 这样才可以被其他模块执行

# 使用队列实现基数排序 py

from queue import Queue
from math import floor

def radix(args = []):
    # 创建10个队列 bin0 - bin10
    binArr = []
    dataArr = []
    for i in range(10):
        binItem = {
            'id': 'bin%s' % i,
            'queue': Queue()
        }
        binArr.append(binItem)
    # 对数组中对个位数进行一次入队排序
    for item in args:
        curItem = item % 10 # 取余数
        curArr = binArr[curItem] # bin0, bin1
        curArr['queue'].put(item)
    # 第一次排序后依次出队，得到第一次排序的结果
    dataArr = _popArr(binArr)

    # 对数组对十位数再进行一次入队排序
    for item in dataArr:
        curItem = floor(item / 10) # 取十位数
        curArr = binArr[curItem] # bin0, bin1
        curArr['queue'].put(item)
    
    dataArr = _popArr(binArr)

    return dataArr

def _popArr(binArr = []):
    singleArr = []
    for bin_x in binArr:
        while bin_x['queue'].qsize():
            singleArr.append(bin_x['queue'].get())
    return singleArr