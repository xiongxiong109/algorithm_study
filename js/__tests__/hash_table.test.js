// 散列

const HashTable = require('../data_structures/hash_table')

describe('HashTable', () => {

    it('put', () => {
        const hashTable = new HashTable()
        hashTable.put('hello')
        // console.log(hashTable.table)
        expect(hashTable.table).toContain('hello')
        expect(hashTable.table[121]).toEqual('hello')
    })

    it('get', () => {
        const hashTable = new HashTable();
        const worldKey = hashTable.put('world');
        expect(hashTable.get(worldKey)).toEqual('world')
    })

    it('conflict', () => {
        // 散列需要处理碰撞问题
        const hashTable = new HashTable();
        const helloKey = hashTable.put('hello')
        const noHaKey = hashTable.put('lloeh')
        expect(helloKey).toEqual(noHaKey)
        expect(hashTable.table).not.toContain('hello')
        expect(hashTable.table).toContain('lloeh')
    })

})