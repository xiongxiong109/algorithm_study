from nuclear.pubsub import PubSub
import unittest


class TestPubSub(unittest.TestCase):
    def test_pubsub(self):
        pubsub = PubSub()
        rst = None

        def show_fn(data):
            nonlocal rst
            if data.get('foo') is not None:
                rst = data.get('foo')

        pubsub.on('show', show_fn)
        self.assertIsNone(rst)

        pubsub.emit('show', {
            "foo": "hello"
        })

        self.assertEqual(rst, "hello")

        pubsub.off('show', show_fn)

        pubsub.emit('show', {
            "foo": "bar"
        })

        self.assertEqual(rst, "hello")
