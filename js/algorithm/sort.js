// 排序算法

// 冒泡排序
function bubbleSort(list = []) {
    for (let curId = 0; curId < list.length - 1; curId++) {
        for (let nextId = 0; nextId < list.length - 1 - curId; nextId++) {
            if (list[nextId + 1] < list[nextId]) {
                swap(list, nextId, nextId + 1)
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
    bubbleSort
}