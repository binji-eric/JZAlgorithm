// 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,
// 并返回它的位置, 如果没有则返回 -1（需要区分大小写）.（从0开始计数）

function FirstNotRepeatingChar(str)
{
    // write code here
    const map = new Map();
    const arr = str.split('');
    for(let index = 0; index < arr.length; index++){
        if(map.has(arr[index])) {
            map.set(arr[index], -1);
        } else {
            map.set(arr[index], index);
        }
    }
    let index = Number.MAX_VALUE;
    map.forEach(function(value) {
        if(value != -1) {
           index = Math.min(index, value);
        }
    })
    return index == Number.MAX_VALUE? -1: index;
}