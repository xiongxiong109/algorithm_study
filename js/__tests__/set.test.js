// set测试
const { PolySet } = require('../data_structures/set')

describe('Set Test', () => {
    it('数组去重', () => {
        const uniqArr = new PolySet([1, 34, 2, 1, 2, 5, 6])
        expect(uniqArr.list).toEqual([1, 34, 2, 5, 6])
        expect(uniqArr.size).toEqual(5)
    })
})
