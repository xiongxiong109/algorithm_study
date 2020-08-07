const wordCounter = require('../algorithm/word_counter')

describe('wordCounter', () => {
    it('case 1', () => {
        const dict = wordCounter('stay hungry, stay foolish')
        // 浅比较， 不是深比较, 对象h
        expect(dict).toEqual({
            'stay': 2,
            'hungry': 1,
            'foolish': 1
        })
    })
    it('case empty', () => {
        const dict = wordCounter()
        expect(Object.keys(dict).length).toEqual(0)
    })
})
