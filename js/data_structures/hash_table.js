// 散列

/**
 * 是把任意长度的输入（又叫做预映射pre-image）通过散列算法变换成固定长度的输出，该输出就是散列值
 */
class HashTable {
    HASHKEY = 137 // 除留整数, 一个大质数, 对这个质数取余，减少碰撞的问题
    constructor() {
        // 出一个预算长度的数组, 讲数据均匀地填充到数组中
        this.table = new Array(this.HASHKEY);
    }
    // hash表中插入元素
    put(data) {
        const hashKey = this.hash(data)
        // 为什么要用数组来存储?
        // 这里如果不同的数据计算出相同的hashKey, 会产生碰撞
        this.table[hashKey] = data;
    }
    /**
     * 需要有一个hash算法, 可以计算出输入值对应的一个hash值
     * 实用场景: [name]:[hash:8].js
     * 计算文件内容hash
     */
    hash(data) {
        // 根据data的每一个code进行加持(会产生碰撞)
        let total = 0;
        for (const code of data) {
            total += code.charCodeAt(0)
        }
        return total % this.HASHKEY
    }
}

module.exports= HashTable