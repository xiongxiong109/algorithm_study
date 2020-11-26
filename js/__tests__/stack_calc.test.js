const calc = require('../algorithm/stack_calc')

describe('Test Calc', () => {
  it('个位数运算计算正确', () => {
      expect(calc("(2*(1+4/(1+1))-5)")).toEqual(1)
      expect(calc("(1+((2+3)*(4*5))")).toEqual(101)
  })
  it('可以兼容无初始（）', () => {
    expect(calc("(2*(1+4/(1+1))-5)")).toEqual(calc("2*(1+4/(1+1))-5"))
  })
})
