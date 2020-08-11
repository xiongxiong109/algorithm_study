// 散列

const HashTable = require('../data_structures/hash_table')

describe('HashTable', () => {

    it('put', () => {
        const hashTable = new HashTable()
        hashTable.put('hello')
        // console.log(hashTable.table)
        // expect(hashTable.table).toContain('hello')
        expect(hashTable.table[121]).toContain('hello')
    })

    it('get', () => {
        const hashTable = new HashTable();
        const worldKey = hashTable.put('world');
        expect(hashTable.get(worldKey)).toContain('world')
    })

    it('conflict', () => {
        // 散列需要处理碰撞问题
        const hashTable = new HashTable();
        const helloKey = hashTable.put('hello')
        const noHaKey = hashTable.put('lloeh')
        const otherKey = hashTable.put('bear')
        expect(helloKey).toEqual(noHaKey)
        expect(hashTable.table[helloKey]).toContain('hello')
        expect(hashTable.table[helloKey]).toContain('lloeh')
        expect(hashTable.table[otherKey]).toContain('bear')
        // console.log(hashTable.table[helloKey])
        // console.log(hashTable.table[otherKey])
    })

})