const Graph = require('../data_structures/graph')

describe('Graph', () => {

    let graph;

    beforeEach(() => {
        // 创建一个有5个顶点的图
        /**
         * 0 -> [3]
         * 1 -> [2]
         * 2 -> [1]
         * 3 -> [0, 4]
         * 4 -> [3]
         */
        graph = new Graph(5)
        graph.addEdge(1, 2)
        graph.addEdge(0, 3)
        graph.addEdge(3, 4)
    })

    it('test addEdge', () => {
        expect(graph.showMap(0)).toEqual([3])
        expect(graph.showMap(3)).toEqual([0, 4])
    })

    // 深度优先搜索
    it('test dfs', () => {
        graph.resetSearchList();
        // 从顶点0，只能遍历图的0, 3, 4顶点
        graph.dfs(0)
        expect(graph.searchedList).toEqual([0, 3, 4])

        graph.resetSearchList();
        // 打通1, 3之间的连线
        graph.addEdge(1, 3)
        /**
         * 0 -> [3]
         * 1 -> [2, 3]
         * 2 -> [1]
         * 3 -> [0, 4, 1]
         * 4 -> [3]
         */
        graph.dfs(0)
        expect(graph.searchedList).toEqual([0, 3, 4, 1, 2])

        const dfsG = new Graph(5)
        dfsG.addEdge(0, 1)
        dfsG.addEdge(0, 2)
        dfsG.addEdge(1, 3)
        dfsG.addEdge(2, 4)
        /**
         * 0 -> [1, 2]
         * 1 -> [0, 3]
         * 2 -> [0, 4]
         * 3 -> [1]
         * 4 -> [2]
         */

         dfsG.dfs(0)
         expect(dfsG.searchedList).toEqual([0, 1, 3, 2, 4])

    })

    // 广度优先搜索
    it('test bfs', () => {
        graph.resetSearchList();
        graph.bfs(0);
        expect(graph.searchedList).toEqual([0, 3, 4])

        const dfsG = new Graph(5)
        dfsG.addEdge(0, 1)
        dfsG.addEdge(0, 2)
        dfsG.addEdge(1, 3)
        dfsG.addEdge(2, 4)

        /**
         * 0 -> [1, 2]
         * 1 -> [0, 3]
         * 2 -> [0, 4]
         * 3 -> [1]
         * 4 -> [2]
         */

         dfsG.bfs(0)
         expect(dfsG.searchedList).toEqual([0, 1, 2, 3, 4])
        // [null, 0, 0, 1, 2]
        //  console.log(dfsG.edgeTo)
    })
    it('pathTo', () => {
        const dfsG = new Graph(5)
        dfsG.addEdge(0, 1)
        dfsG.addEdge(0, 2)
        dfsG.addEdge(1, 3)
        dfsG.addEdge(2, 4)
        dfsG.addEdge(3, 4)
        dfsG.addEdge(2, 3)
        /**
         * 0 -> [1, 2]
         * 1 -> [0, 3]
         * 2 -> [0, 4, 3]
         * 3 -> [1, 4, 2]
         * 4 -> [2, 3]
         */

        // 查找0 -> 4的最短路径
        /**
         * 从0 到4, 有
         * 0 - 2 - 4
         * 0 - 1 - 3 - 4
         * 0 - 1 - 3 - 2 - 4
         */
        const shortPath = dfsG.pathTo(0, 4);
        expect(shortPath).toEqual([0, 2, 4]);
        /**
         * 1 - 0 - 2 - 4
         * 1 - 3 - 4
         */
        const shortPath2 = dfsG.pathTo(1, 4);
        expect(shortPath2).toEqual([1, 3, 4])
    })

    // 路线无法抵达
    it('unable pathTo', () => {
        expect(graph.pathTo(1, 4)).toEqual(null)
    })

    // 拓扑排序
    it('topSort', () => {
        const graph = new Graph(5, ['CSS3', 'HTML5', 'JS', 'Node', 'GraphQL'])
        graph.addEdge(1, 0) // HTML5 -> CSS3
        graph.addEdge(1, 2) // HTML5 -> JS
        graph.addEdge(2, 3) // JS -> Node
        graph.addEdge(2, 4) // JS -> GraphQL
        /**
         * 0 -> [1]
         * 1 -> [0, 2]
         * 2 -> [1, 3, 4]
         * 3 -> [2]
         * 4 -> [4]
         * topSort: [HTML5, CSS3, JS, Node, GraphQL] or [HTML5, JS, CSS3, Node, GraphQL]
         */
        const stack = graph.topSort(1);
        expect(stack).toEqual(['HTML5', 'CSS3', 'JS', 'Node', 'GraphQL'])
        // graph.dfs(1)
        // console.log(graph.searchedList)
    })
})
