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

})