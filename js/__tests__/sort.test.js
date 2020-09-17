// 排序算法测试
const { 
  bubbleSort, selectionSort,
  insertionSort, shellSort
} = require('../algorithm/sort')

describe('sort test', () => {

  it('test bubbleSort', () => {
      let list = [7, 5, 9, 3, 1]
      list = bubbleSort(list)
      expect(list).toEqual([1, 3, 5, 7, 9])
  })

  it('test selectionSort', () => {
    let list = [7, 5, 9, 3, 1]
    list = selectionSort(list)
    expect(list).toEqual([1, 3, 5, 7, 9])
  })

  it('test insertionSort', () => {
    let list = [7, 5, 9, 3, 1]
    list = insertionSort(list)
    // console.log(list)
    expect(list).toEqual([1, 3, 5, 7, 9])
  })

  it('test shellSort', () => {
    let list = [7, 5, 9, 3, 1]
    list = shellSort(list)
    // console.log(list)
    expect(list).toEqual([1, 3, 5, 7, 9])
  })

})
