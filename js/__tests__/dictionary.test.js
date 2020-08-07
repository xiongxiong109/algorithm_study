// 字典方法测试
const Dict = require('../data_structures/dictionary')

describe('test dict', () => {

    it('测试sort', () => {
        const dict = new Dict()
        dict.set('cc', 'bar')
        dict.set('bb', 'jqxiong')
        expect(dict.items()).toEqual(['bar', 'jqxiong'])
        expect(dict.items(true)).toEqual(['jqxiong', 'bar'])
    })
    it('测试remove', () => {
        const dict = new Dict()
        dict.set('aa', 'bear')
        dict.set('ff', 'c')
        dict.set('sasa', 'wewr')
        dict.set('bb', 'asa')
        dict.remove('ff')
        expect(dict.keys().sort()).toEqual(['aa', 'bb', 'sasa'])
    })
})
