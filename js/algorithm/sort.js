// 排序算法

/**
 * 冒泡排序
 * 与下一个相邻元素比较, 比之大的话, 互换位置
 */
function bubbleSort(list) {
    for (let outter = 0; outter < list.length - 1; outter++) {
        for (let inner = 0; inner < list.length - outter - 1; inner++) {
            if (list[inner + 1] < list[inner]) {
                swap(list, inner, inner + 1)
            }
        }
    }
    return list
}

/**
 * 选择排序
 * 在未排序的数据中找到最小的元素， 放到起始位置
 * 然后从剩余元素中继续找到最小的元素
 * 比较这个最小元素与当前缓存的最小值，如果比缓存值小，则交换两者位置
 */
function selectionSort(list) {
    let minItem = null;
    let minIdx = -1;
    for (let outter = 0; outter < list.length; outter++) {

        // 缓存最小值
        minItem = list[outter]
        minIdx = outter

        for (let inner = outter; inner < list.length - 1; inner++) {
            // 内层循环， 找到最小值
            if (list[inner + 1] < minItem) {
                minItem = list[inner + 1]
                minIdx = inner + 1
                // 交换当前最小值的位置
                swap(list, outter, minIdx)
            }
        }
    }
    return list
}

// 交换列表中两个元素的位置的方法
function swap(list, fromId, toId) {
    let temp = list[fromId]
    list[fromId] = list[toId]
    list[toId] = temp
}

module.exports = {
    bubbleSort,
    selectionSort
}