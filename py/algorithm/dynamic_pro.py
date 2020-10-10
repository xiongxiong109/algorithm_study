# 备忘录的斐波那契
memo = None


def _fib(n):
    if memo[n] is not None:
        return memo[n]
    if n == 0:
        return 0
    if n == 1:
        return 1
    memo[n] = _fib(n - 1) + _fib(n - 2)
    return memo[n]


def fibonacci(n):
    global memo
    memo = [None] * (n + 1)
    return _fib(n)


# 动态规划实现的斐波那契
def dynamic_fibo(n):
    if n == 1 or n == 2:
        return 1
    fibo_arr = [1, 1] + [None] * (n - 2)
    for item in range(2, n):
        fibo_arr[item] = fibo_arr[item - 1] + fibo_arr[item - 2]
    return fibo_arr[n - 1]
