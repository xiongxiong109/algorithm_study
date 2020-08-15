// set测试
const PolySet = require('../data_structures/set')
const { union, intersect } = require('../algorithm/set_util')

describe('PolySet Test', () => {
    it('数组去重', () => {
        const uniqArr = new PolySet([1, 34, 2, 1, 2, 5, 6])
        expect(uniqArr.list).toEqual([1, 34, 2, 5, 6])
        expect(uniqArr.size).toEqual(5)
    })
    it('set empty', () => {
        const arr = new PolySet()
        expect(arr.list).toEqual([])
    })
    it('delete', () => {
        const arr = new PolySet([1, 2, 3])
        const isOK = arr.delete(2)
        expect(arr.list).toEqual([1, 3])
        expect(isOK).toBeTruthy()
    })
    it('delete not found', () => {
        const arr = new PolySet([1, 2, 3])
        const isOK = arr.delete(4)
        expect(arr.list).toEqual([1, 2, 3])
        expect(isOK).not.toBeTruthy()
    })
    it('has', () => {
        const arr = new PolySet([1, 2, 3])
        expect(arr.has(2)).toBeTruthy()
        expect(arr.has(5)).not.toBeTruthy()
    })
    it('clear', () => {
        const arr = new PolySet([1, 2, 3])
        arr.clear()
        expect(arr.list).toEqual([])
    })
})

describe('Set Utils', () => {

    it('测试并集方法', () => {
        const unionArr = union([1, 2, 3], [2, 5], [3, 4, 5], [1, '1', '2'])
        expect(unionArr).toEqual([1, 2, 3, 5, 4, '1', '2'])
    })

    it('测试交集方法', () => {
        const intersectArr = intersect([1, 2, 3], [2, 3, 4], [3, 4, 5])
        expect(intersectArr).toEqual([3])
    })

})
