// 查找数组中的数据，级联的情况
// 使用递归实现
// 用栈代替递归?
// 使用广度优先的遍历方式实现?

/**
 * 查找一个级联关系的数据
 */

const sourceData = [
    {
        id: 1,
        nm: '上海',
        children: [
            {
                id: 11,
                nm: '浦东新区',
                children: [
                    {
                        id: 111,
                        nm: '川沙'
                    }
                ]
            },
            {
                id: 12,
                nm: '徐汇区'
            }
        ]
    },
    {
        id: 2,
        nm: '广东',
        children: [
            {
                id: 22,
                nm: '广州'
            }
        ]
    }
]

/**
 * 用栈实现递归算法的非递归版本
 * 递归实现存在一个中断
 * 栈的实现也存在一个中断, 那就是栈为空,
 * 在这个栈为空的前提下，以while和push来模拟递归调用, 以pop来减少堆栈数据
 */
function find(data, id) {
    let stack = [];
    for (let i = 0; i < data.length; i++) {
        let curDeep = data[i];
        if (curDeep.id == id) {
            return curDeep.nm
        }
        if (curDeep.children) {
            stack.push(...curDeep.children);
            while(stack.length) {
                let curPop = stack.pop();
                if (curPop.id == id) {
                    return curPop.nm
                }
                if (curPop.children) {
                    stack.push(...curPop.children)
                }
            }
        }
    }
}

/**
 * find(data, 111) // 川沙
 * find(data, 11) // 浦东新区
 */

/**
 * 递归实现, 这个写法没有hasFound 变量中断的话，总是会把循环体走完
 */
// function find(data, id) {

//     let curNm = '';
//     let hasFound = false;

//     _find(data, id)

//     function _find(fData, fid) {
//         for (let i = 0; i < fData.length; i++) {
//             // 可以添加变量标志的方式来限制查询次数
//             if (hasFound) {
//                 break
//             }
//             // console.log(fData[i].nm)
//             if (fData[i].id == fid) {
//                 curNm = fData[i].nm
//                 hasFound = true;
//             }
//             if (fData[i].children && fData[i].children.length) {
//                 _find(fData[i].children, id);
//             }
//         }
//     }
//     return curNm
// }

const nm = find(sourceData, 11);

console.log(nm);