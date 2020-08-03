/**
 * 循环链表与约瑟夫环问题
 * n个人从1开始报数，报道第m的人出圈, 直到最后剩下k个人, 找出这k个人的位置
 */

const LoopLinkList = require('../data_structures/loop_link_list')

//  5, 4, 6, 2, 3
// keep = 1
function josephus(options = {
    total: 6, // 总人数
    step: 5, // 每个step个人出局
    stayNum: 1 // 最后剩下的人数
}) {
    const li = new LoopLinkList()
    for (let i = 1; i <= options.total; i++) {
        // 这里可以用find，也可以直接用move
        const curNode = li.find(i);
        li.insert(i, curNode.item); // 在curNode 后面插入 新的节点
        /**
         * move的话，感觉性能会更好一点, 因为不需要find查找一次, 但是find会影响指针位置
         * 遍历存储完成后，需要moveToHead
         */
        // li.move(1)
    }
    // 复杂的算法
    while (li.toArr().length > options.stayNum) {
        li.move(options.step); // 往前移动n个节点
        // console.log(li.toArr())
        // console.log(li.curNode.item)
        li.remove(li.curNode.item); // 删除当前节点
        // 删掉一个之后，回到头部
        // 关键规则，看是否需要指针回到原位，这一步会影响生死
        // li.moveToHead()
    }
    return li.toArr()
}

module.exports = josephus