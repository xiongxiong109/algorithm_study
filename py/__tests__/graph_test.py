import unittest
from data_structures.graph import Graph


class TestGraph(unittest.TestCase):
    def test_initMetrix(self):
        graph = Graph(5)
        # print(graph.metrix)
        graph.add_edge(3, 4)
        graph.add_edge(1, 2)
        graph.add_edge(2, 5)
        print(graph.metrix)
        self.assertEqual(graph.metrix[0], [0, 0, 0, 0, 0])
