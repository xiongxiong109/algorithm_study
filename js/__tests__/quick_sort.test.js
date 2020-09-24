// 快排测试
const quickSort = require('../algorithm/quick_sort')

function createRandomList(len = 100) {
    const list = [];
    for (let i = 0 ; i < len; i++) {
        list.push(Math.floor(Math.random() * len))
    }
    return list
}

// js 内部的sort排序，使用了优化的快速排序算法，速度极快
// 小于十个元素时，使用插入排序，大于十个用快排
// https://github.com/v8/v8/blob/ad82a40509c5b5b4680d4299c8f08d6c6d31af3c/src/js/array.js
test('QuickSort', () => {
    const list = createRandomList(100)
    const sortedList = quickSort(list)
    // js里的sort，可能是按字母顺序排列的，所以需要给一个回调函数
    expect(sortedList).toEqual(list.sort((a, b) => a - b))
})
