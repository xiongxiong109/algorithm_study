const radixSort = require('../algorithm/radix_sort');

describe('基数排序算法测试', () => {
    test('测试两位数数组排序结果 1', () => {
        const arr = [12, 32, 21, 44, 15];
        const sortedArr = radixSort(arr);
        expect(sortedArr).toEqual([12, 15, 21, 32, 44])
    })
    test('测试两位数数组排序结果 2', () => {
        const arr = [1, 88, 34, 12, 33, 77];
        const sortedArr = radixSort(arr);
        expect(sortedArr).toEqual([1, 12, 33, 34, 77, 88])
    })
    test('测试两位数数组排序结果 3', () => {
        const arr = [66, 33, 22, 23, 13];
        const sortedArr = radixSort(arr);
        expect(sortedArr).toEqual([13, 22, 23, 33, 66])
    })
    test('测试两位数数组排序结果 4', () => {
        const arr = [90, 9];
        const sortedArr = radixSort(arr);
        expect(sortedArr).toEqual([9, 90])
    })
})