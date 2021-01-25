/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    // write code here
    if(!pHead || !pHead.next) {
        return pHead;
    }
    let pre = null, cur = pHead, next;
    while(cur) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}