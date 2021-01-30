// 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，
// 另一个特殊指针random指向一个随机节点），请对此链表进行深拷贝，并返回拷贝后的头结点。
// （注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）

/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
function Clone(pHead)
{
    // write code here
    if(!pHead) {
        return null;
    }
    let p1 = pHead, map = new Map();
    while(p1) {
        const temp = new RandomListNode(p1.label);
        map.set(p1, temp); // 新老节点映射
        p1 = p1.next;
    }
    p1 = pHead;
    while(p1) {
        const p2 = map.get(p1);
        p2.random = map.get(p1.random);
        p2.next = map.get(p1.next);
        p1 = p1.next;
    }
    return map.get(pHead)? map.get(pHead):null;
}