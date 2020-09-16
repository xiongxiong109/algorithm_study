// 排序算法测试
const { bubbleSort } = require('../algorithm/sort')

describe('sort test', () => {
  it('test bubbleSort', () => {
      let list = [7, 5, 9, 3, 1]
      list = bubbleSort(list)
      expect(list).toEqual([1, 3, 5, 7, 9])
  })
})
