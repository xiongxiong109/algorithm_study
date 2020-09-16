// 排序算法测试
const { bubbleSort } = require('../algorithm/sort')

describe('sort test', () => {
  it('test bubbleSort', () => {
      let list = [1, 3, 9, 5, 7]
      list = bubbleSort(list)
      expect(list).toEqual([1, 3, 5, 7, 9])
  })
})
