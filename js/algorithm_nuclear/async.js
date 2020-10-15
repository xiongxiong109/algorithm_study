/**
 * 不知道什么时候出来一个宏任务与微任务的东西
 * 说是微任务会先执行
 * 对于js而言，目前宏任务，一般是指同步任务，以及setTimeout之类的老的异步方法
 * 微任务，有process.nextTick, Promise, MutationObserver等
 */
function macroAndMicro() {
    // 这是一个微任务
    Promise.resolve()
        .then(() => {
            // 这是一个同步输出
            console.log('pr1')
            // 这是一个微任务执行后遇到的宏任务
            setTimeout(() => {
                console.log('timeout2')
            }, 0)
            // 这是一个微任务
            process.nextTick(() => {
                console.log('nextTick')
            })
        })
        .then(() => {
            // 这是一个同步输出
            console.log('pr2')
        })

    // 这是一个宏任务中的宏任务
    setTimeout(() => {
        console.log('timeout1')
    }, 0)

    // 这是一个同步输出
    console.log('end')

    /**
     * 执行顺序是
     * 同步 -> <微任务> -> [宏任务]
     * 所以得到结果
     * end <Promise> [setTimeout1]
     * <Promise> -> pr1 <nextTick> [setTimeout2] pr2
     * <nextTick> -> nextTick
     * [setTimeout1] -> timeout1
     * [setTimeout2] -> timeout2
     * end pr1 pr2 nextTick timeout1 timeout2
     */
}

// macroAndMicro()

// 在连续多次请求的情况下，如何保证只使用最后一次请求的结果?
/**
 * 1. debounce and click 标志位
 * 2. xhr abort
 * 3. promise fetchAbort
 * 4. push(callBack)
 */

// xhr实现
class XHRequest {
    constructor() {
        this.xhr = new XMLHttpRequest()
    }
    post(url, params = {}, callBack) {
        // 每次请求之前abort掉
        this.xhr.abort()
        this.xhr.open('POST', url, true)
        this.xhr.setRequestHeader("Content-type", "application/json");
        this.xhr.send(params);
        const xhr = this.xhr
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                callBack && callBack(JSON.stringify(xhr.responseText))
            }
        }
    }
    abort() {
        this.xhr.abort();
    }
}

// abortController实现
class FetchController {
    initFetch(url, params, callback) {
        this.abortController = new AbortController()
        this.fetcher = new Promise((resolve, reject) => {
            fetch(url, {
                signal: this.abortController.signal,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: params
            })
            .then(resolve)
            .catch(reject)
        })
    }
    post(url, params, callback) {
        this.initFetch(url, params, callback)
        this.abortController.abort();
        this.initFetch(url, params, callback)
        this.fetcher
        .then(rst => rst.json())
        .then(data => {
            console.log(data)
        })
    }
}

// 利用数组堆栈实现(此时没有cancel的情况)
class LastAbortFetch {
    constructor() {
        // 存储回调函数
        this.callbackStack = []
        this.rst = null
    }
    post(url, callback) {

        this.callbackStack.push(callback)

        // this.isFetching = true;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: {}
        })
        .then(rst => rst.json())
        .then(data => {
            // this.rst = data
            if (this.callbackStack.length) {
                this.callbackStack[this.callbackStack.length - 1].call(null, data)
            }
            this.callbackStack = []
            // this.isFetching = false
        })
        .catch(err => {
            this.callbackStack = []
            // this.isFetching = false
        })
    }
}