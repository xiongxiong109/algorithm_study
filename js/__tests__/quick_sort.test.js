// 快排测试
const quickSort = require('../algorithm/quick_sort')

function createRandomList(len = 100) {
    const list = [];
    for (let i = 0 ; i < len; i++) {
        list.push(Math.floor(Math.random() * len))
    }
    return list
}

test('QuickSort', () => {
    const list = createRandomList(100)
    const sortedList = quickSort(list)
    // js里的sort，可能是按字母顺序排列的，所以需要给一个回调函数
    expect(sortedList).toEqual(list.sort((a, b) => a - b))
})
