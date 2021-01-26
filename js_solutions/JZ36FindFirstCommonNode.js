function FindFirstCommonNode(pHead1, pHead2)
{
    // write code here
    let cur1 = pHead1, cur2 = pHead2, count1 = 0, count2 = 0;
    let exceedCount;
    while(cur1) {
        cur1 = cur1.next;
        count1++;
    }
    while(cur2) {
        cur2 = cur2.next;
        count2++;
    }
     cur1 = pHead1;
     cur2 = pHead2;
    if(count1 > count2) {
        exceedCount = count1 - count2;
        while(exceedCount) {
            cur1 = cur1.next;
            exceedCount--;
        }
    } else {
        exceedCount = count2 - count1;
        while(exceedCount) {
            cur2 = cur2.next;
            exceedCount--;
        }
    }
    while(cur1 != cur2) {
        cur1 = cur1.next;
        cur2 = cur2.next;
    }
    return cur1;
}