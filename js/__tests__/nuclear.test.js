const { checkArr } = require('../algorithm_nuclear/arr')

describe('test CheckArr', () => {
    it('数组自身存在大小类时，校验不通过', () => {
        expect(
            checkArr(
                [1122, 1123, 2200],
                [1234, 1345]
            )
        ).toBeFalsy()
    })
    it('两个数组之间存在大小类关系时， 校验不通过', () => {
        expect(
            checkArr(
                [3200,2200,1111],
                [4400,1211,3221]
            )
        ).toBeFalsy();
    })
    it('两种情况都有时，校验不通过', () => {
        expect(
            checkArr(
                [3200, 2200, 3211, 1111],
                [4400,1211,1200,3221,1100]
            )
        ).toBeFalsy();
    })
    it('自身数组无交集，两个数组对比也没有包含关系时，校验通过', () => {
        expect(
            checkArr(
                [3200, 1100, 1213],
                [1314, 4200, 3333, 2255, 2401]
            )
        ).toBeTruthy()
    })
})
