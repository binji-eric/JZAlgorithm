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