const deepClone = require('../algorithm_nuclear/deepClone')

describe('Test DeepClone', () => {
    it('test', () => {
        var a = {
            b: 'c',
            d: {
                e: 'erer'
            },
            f: [1, 2, 3]
        }
        var b = deepClone(a);
        b.d.e = 'asasa'
        expect(a.d.e).toEqual('erer')
        b.f[0] = 5;
        expect(a.f[0]).toEqual(1)
    })
})