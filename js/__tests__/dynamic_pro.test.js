const { fibonacci } = require('../algorithm/dynamic_pro')

describe('test dynamic', () => {
    it('test not dynamic fibonacci', () => {
        const fib1 = fibonacci(1)
        expect(fib1).toEqual(1)
        const fib6 = fibonacci(6)
        expect(fib6).toEqual(8)
    })
})
