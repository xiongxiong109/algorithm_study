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
    // 递归的深度对js来说是巨大的, 使用递归的话，可能到50就已经算不动了
    it('两种算法计算时间比较', () => {
        const nDate = new Date().getTime()
        const fibn = fibonacci(40)
        const disN = new Date().getTime() - nDate
        const mDate = new Date().getTime();
        const fibm = dynamicFibonacci(40);
        const disM = new Date().getTime() - mDate
        expect(fibn).toEqual(fibm)
        expect(disM).toBeLessThan(disN)
    })
})
