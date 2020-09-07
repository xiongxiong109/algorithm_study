// 改良版的拓扑排序
const Graph = require('../algorithm/top_sort')

test('topSort test', () => {
    const graph = new Graph(['计算机基础', '微机原理', '高等数学', '算法数据结构', 'C语言']);
    graph.addEdge(2, 1) // 高数 -> 微机原理   
    graph.addEdge(2, 0) // 高数 -> 计算机基础
    graph.addEdge(1, 3) // 微机原理 -> 算法
    graph.addEdge(1, 4) // 微机原理 -> C语言
    const stack = graph.topSort();
    expect(stack[0]).toEqual('高等数学');
    // 优先级调度, 高数一定在计算机和微机前面, 计算机和微机不分先后
    expect(stack.slice(1, 3)).toEqual(
        expect.arrayContaining(['微机原理', '计算机基础'])
    )
    // C语言/算法一定在微机后面，C和算法不分先后
    expect(stack.slice(3)).toEqual(
        expect.arrayContaining(['算法数据结构', 'C语言'])
    )
})