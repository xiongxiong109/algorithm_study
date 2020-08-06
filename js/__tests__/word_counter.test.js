const wordCounter = require('../algorithm/word_counter')

describe('wordCounter', () => {
    it('case 1', () => {
        const dict = wordCounter('stay hungry, stay foolish')
        // 浅比较， 不是深比较, 对象这一块会好一些
        expect(dict).toEqual({
            'stay': 2,
            'hungry': 1,
            'foolish': 1
        })
    })
})
