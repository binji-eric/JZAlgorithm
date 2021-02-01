// 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，
// 重复的结点不保留，返回链表头指针

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteDuplication(pHead)
{
    // write code here
    if(!pHead || !pHead.next) {
        return pHead;
    }
    const dummyHead = new ListNode(-1);
    dummyHead.next = pHead;
    let pre = dummyHead, cur = pHead;
    while(cur && cur.next) { 
        // 没有重复内容出现，直接往后走
        if(cur.val != cur.next.val) {
            pre = cur;
            cur = cur.next;
        } else {
            // 有重复内容出现，直接跳过
            const val = cur.val;
            while(cur && cur.val == val) {
                cur = cur.next;
            }
            // 滤过了重复的内容，跳出循环的条件是cur.val不再和之前的值相等
            // cur为null， 或者下一个不为val的节点
            pre.next = cur;
        }
        
    }
    return dummyHead.next;
    
}