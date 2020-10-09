const { fibonacci, dynamicFibonacci } = require('../algorithm/dynamic_pro')

describe('test dynamic', () => {
    it('test not dynamic fibonacci', () => {
        const fib1 = fibonacci(1)
        expect(fib1).toEqual(1)
        const fib6 = fibonacci(6)
        expect(fib6).toEqual(8)
    })
    it('test dynamic fibo', () => {
        const fib1 = dynamicFibonacci(1)
        expect(fib1).toEqual(1)
        const fib6 = dynamicFibonacci(6)
        expect(fib6).toEqual(8)
    })
})
