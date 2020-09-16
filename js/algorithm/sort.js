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
 */
function selectionSort(list) {

}

// 交换列表中两个元素的位置的方法
function swap(list, fromId, toId) {
    let temp = list[fromId]
    list[fromId] = list[toId]
    list[toId] = temp
}

module.exports = {
    bubbleSort
}