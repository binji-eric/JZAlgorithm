function Merge(pHead1, pHead2)
{
    // write code here
    let dummyHead = new ListNode(-1);
    let cur = dummyHead;
    while(pHead1 && pHead2) {
        if(pHead1.val < pHead2.val) {
            cur.next = pHead1;
            pHead1 = pHead1.next;
        } else {
            cur.next = pHead2;
            pHead2 = pHead2.next;
        }
        cur = cur.next;
    }
    if(pHead1) {
        cur.next = pHead1;
    } else {
        cur.next = pHead2;
    }
    return dummyHead.next;
}

