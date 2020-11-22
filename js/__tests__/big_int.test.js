const add = require('../algorithm_nuclear/big_int')

describe('Test BigInt', () => {
    it('test normal number', () => {
        const numStr = add('9976', '86')
        expect(numStr).toEqual('10062')
    })
    it('test bis number', () => {
        const numStr = add('9007199254740990', '1229007199254740993443');
        expect(numStr).toEqual('1229016206453995734433')
    })
})