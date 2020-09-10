import unittest
from data_structures.graph import Graph


def create_graph(is_direc=False):
    graph = Graph(['计算机基础', '微机原理', '高等数学', '算法数据结构', 'C语言'], is_direc)
    return graph


class TestGraph(unittest.TestCase):
    def test_initMetrix(self):
        graph = create_graph()
        # print(graph.metrix)
        graph.add_edge(3, 4)
        graph.add_edge(1, 2)
        graph.add_edge(2, 5)
        # print(graph.metrix)
        self.assertEqual(graph.metrix[0], [0, 0, 0, 0, 0])

    def test_dfs(self):
        graph = create_graph()
        graph.add_edge(1, 2)
        graph.add_edge(0, 3)
        graph.add_edge(3, 4)
        graph.dfs(0)
        self.assertEqual(graph.show_search_list(), [0, 3, 4])
        #   01234
        # 0 00010
        # 1 00100
        # 2 01000
        # 3 10001
        # 4 00010

        graph.reset_search_list()
        graph.add_edge(1, 3)
        graph.dfs(0)
        # print(graph.metrix)
        #   01234
        # 0 00010
        # 1 00110
        # 2 01000
        # 3 11001
        # 4 00010
        self.assertEqual(graph.show_search_list(), [0, 3, 4, 1, 2])

    def test_bfs(self):
        graph = create_graph()
        graph.add_edge(0, 1)
        graph.add_edge(0, 2)
        graph.add_edge(1, 3)
        graph.add_edge(2, 4)
        #     0 1 2 3 4
        # -------------
        # 0 | 0 1 1 0 0
        # 1 | 1 0 0 1 0
        # 2 | 1 0 0 0 1
        # 3 | 0 1 0 0 0
        # 4 | 0 0 1 0 0

        # print(graph.metrix)

        graph.bfs(0)
        self.assertEqual(graph.search_list, [0, 1, 2, 3, 4])

    def test_short_path(self):
        graph = create_graph()
        graph.add_edge(0, 1)
        graph.add_edge(0, 2)
        graph.add_edge(1, 3)
        graph.add_edge(2, 4)
        graph.add_edge(3, 4)
        #     0 1 2 3 4
        # -------------
        # 0 | 0 1 1 0 0
        # 1 | 1 0 0 1 0
        # 2 | 1 0 0 0 1
        # 3 | 0 1 0 0 1
        # 4 | 0 0 1 1 0
        # 从0 到 4, 有
        # 0 - 1 - 3 - 4
        # 0 - 2 - 4
        stack = graph.short_path(0, 4)
        self.assertEqual(stack, [0, 2, 4])

    def test_short_path2(self):
        graph = create_graph()
        graph.add_edge(0, 1)
        # graph.add_edge(0, 2)
        graph.add_edge(0, 3)
        graph.add_edge(1, 3)
        graph.add_edge(3, 4)
        graph.add_edge(2, 4)
        graph.add_edge(3, 2)
        stack = graph.short_path(0, 4)
        self.assertEqual(graph.edge_to, [None, 0, 3, 0, 3])
        self.assertEqual(stack, [0, 3, 4])

    # 测试有向图
    def test_direc(self):
        graph = create_graph(True)
        # 有向图，只建立单向箭头
        graph.add_edge(0, 1)
        self.assertEqual(graph.metrix[0][1], 1)
        self.assertEqual(graph.metrix[1][0], 0)
        graph.add_edge(1, 0)
        self.assertEqual(graph.metrix[1][0], 1)

    # 测试拓扑排序
    def test_top_sort(self):
        graph = create_graph(True)
        # '计算机基础', '微机原理', '高等数学', '算法数据结构', 'C语言'
        graph.add_edge(2, 1)
        graph.add_edge(2, 0)
        graph.add_edge(1, 3)
        graph.add_edge(1, 4)
        #   01234
        # 0 00000
        # 1 00011
        # 2 11000
        # 3 00000
        # 4 00000
        stack = graph.top_sort()
        self.assertEqual(stack[0], '高等数学')
        # 按top分组
        self.assertIn('微机原理', stack[1:3])
        self.assertIn('计算机基础', stack[1:3])
        # 按top分组
        self.assertIn('C语言', stack[3:])
        self.assertIn('算法数据结构', stack[3:])
