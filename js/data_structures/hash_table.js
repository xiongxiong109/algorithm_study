// 散列

/**
 * 是把任意长度的输入（又叫做预映射pre-image）通过散列算法变换成固定长度的输出，该输出就是散列值
 */
class HashTable {
    HASHKEY = 137 // 除留整数, 一个大质数, 对这个质数取余，减少碰撞的问题
    constructor() {
        // 出一个预算长度的数组, 讲数据均匀地填充到数组中
        this.table = new Array(this.HASHKEY);
        this.buildChains();
    }
    // 开链, 避免元素碰撞
    // (用队列的话是不是更好一点? 桶排序法)
    // 队列是FIFO，没有直接访问特定元素的方法
    buildChains() {
        // 将table变成一个多维数组, 数组的每一个索引对应一个数组, 将产生碰撞的元素都存入同一个散列值的数组中
        for (let i = 0; i < this.table.length; i++) {
            this.table[i] = [];
        }
    }
    // hash表中插入元素
    put(data) {
        const hashKey = this.hash(data)
        let idx = 0;
        if (!this.table[hashKey][idx]) {
            this.table[hashKey][idx] = data;
        } else {
            while(this.table[hashKey][idx]) {
                idx++;
            }
            this.table[hashKey][idx] = data;
        }
        // 将hashKey返回， 便于查找
        return hashKey
    }
    get(hashKey) {
        const hashPos = this.table[hashKey];
        return hashPos
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