import unittest
from data_structures.graph import Graph


def create_graph():
    graph = Graph(['1', '2', '3', '4', '5'])
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
