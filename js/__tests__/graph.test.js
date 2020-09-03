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
    })
})
