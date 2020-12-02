// 利用reduce求最值
const reduce = require('../algorithm_nuclear/reduce')

describe('Test Reduce', () => {
    it('max', () => {
        const arr = [1,3,6,4,2,7];
        const max = Math.max(...arr)
        // 目前这个reduce方法会修改arr, 所以max先放前面搞一下
        const maxRst = reduce(arr, (max, next) => {
            return max > next ? max : next
        })
        expect(maxRst).toEqual(7)
        expect(maxRst).toEqual(max)
    })
})
