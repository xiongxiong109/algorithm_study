// 防抖与节流

/**
 * 这么多年了，还要去手动写防抖的实现
 * 防抖: 函数在 n ms 内只会执行一次, 可以用闭包和定时器实现
 */

 function debounce(duration, fn) {
     let timer = null;
     return () => {
         clearTimeout(timer)
         timer = setTimeout(fn, duration)
     }
 }

 /**
  * 节流, 工作了5年, 实际业务场景中其实几乎没有用到节流
  * 节流: 一定时间段内, 函数多次触发时，只会有一次回调
  */

function throttle(duration, fn) {
    let pre = new Date().getTime()
    return function() {
        const time = new Date().getTime()
        // 到达了一定指定时间, 执行一次
        if (time - pre >= duration) {
            fn && fn(...arguments)
            pre = new Date().getTime()
        }
    }
}