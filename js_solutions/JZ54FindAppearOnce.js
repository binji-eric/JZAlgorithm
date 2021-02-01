// 请实现一个函数用来找出字符流中第一个只出现一次的字符。
// 例如，当从字符流中只读出前两个字符"go"时，第一个只出现一次的字符是"g"。
// 当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。

//Init module if you need
let map = null, list = null;

function Init()
{
    // write code here
//    map = {}
    map = new Map(), list = [];
}
//Insert one char from stringstream
function Insert(ch)
{
    if (map.has(ch)) {
        map.set(ch, map.get(ch) + 1);
    } else {
        map.set(ch, 1);
        list.push(ch);
    }
    while(list.length) {
        if(map.get(list[0]) != 1) {
            list.shift();
        } else {
            return;
        }
    }
    
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    // write code here
    return list.length > 0? list[0]: '#';
}s