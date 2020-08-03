// 约瑟夫问题算法测试
const josephus = require('../algorithm/josephus')

describe('约瑟夫环问题', () => {
    it('case1', () => {
        const safeArr = josephus()
        expect(safeArr).toEqual([1])
    })
    it('case2', () => {
        const safeArr = josephus({
            total: 41,
            step: 3,
            stayNum: 2
        })
        // 找到安全的两个位置
        expect(safeArr).toEqual([16, 31]);
    })
})
