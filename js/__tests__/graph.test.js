const Graph = require('../data_structures/graph')

describe('Graph', () => {
    it('test addEdge', () => {
        // 创建一个有5个顶点的图
        const graph = new Graph(5)
        graph.addEdge(1, 2)
        graph.addEdge(0, 3)
        graph.addEdge(3, 4)
        /**
         * 0 -> [3]
         * 1 -> [2]
         * 2 -> [1]
         * 3 -> [0, 4]
         * 4 -> [3]
         */
        expect(graph.showMap(0)).toEqual([3])
        expect(graph.showMap(3)).toEqual([0, 4])
    })
})
