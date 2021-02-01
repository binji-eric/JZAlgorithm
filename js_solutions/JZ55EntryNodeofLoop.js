// 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。

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
}