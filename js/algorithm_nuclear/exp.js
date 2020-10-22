// 正则相关
 /**
  * var str1=new RegExp("e");
  * document.write(str1.exec("hello"));
  * 以上代码的输出结果
  * 
  * 
  * 考察: exp.exec方法
  * exec方法, 如果有匹配到的元素, 则返回一个数组
  * 如果没有匹配到，则返回null
  * 但是这个地方, 用到了document.write, 所以答案不是一个数组, 而是"e"...
  */

// 短横线命名改为驼峰命名
function renameStr(str) {
    let strArr = str.split('-')
    for (let i = 0; i < strArr.length; i++) {
        const item = strArr[i]
        strArr[i] = item[0].toUpperCase() + item.substring(1)
    }
    return strArr.join('')
}

const formatted = renameStr('kuai-shou-front-end')
console.log(formatted)