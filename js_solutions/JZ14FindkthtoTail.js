public class Solution {
    public ListNode FindKthToTail(ListNode head,int k) {
        
        ListNode slow = head, fast = head;
        // 提前走k步
        while(k > 0){
            if(fast == null) {
                return null;
            }
            k--;
            fast = fast.next;
        }
        while(fast != null) {
            fast = fast.next;
            slow = slow.next;
        }
        return slow;
        
    }
}