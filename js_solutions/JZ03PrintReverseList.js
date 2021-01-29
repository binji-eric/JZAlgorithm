// 输入一个链表，按链表从尾到头的顺序返回
function printListFromTailToHead(head)
{
    const arr = [];
    // 翻转链表
    let pre = null, cur = head;
    while(cur) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    // pre现在是头
    while(pre){
        arr.push(pre.val);
        pre = pre.next;
    }
    return arr;
}

function printListFromTailToHead(head)
{
    // 不断从头部插入
    let arr1 = [], cur = head;
    while(cur) {
        arr1.unshift(cur.val);
        cur = cur.next;
    }
    return arr1;
}