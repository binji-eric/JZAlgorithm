/*
public class RandomListNode {
    int label;
    RandomListNode next = null;
    RandomListNode random = null;

    RandomListNode(int label) {
        this.label = label;
    }
}
*/
import java.util.*;
public class Solution {
    public RandomListNode Clone(RandomListNode pHead)
    {
        if(pHead == null) {
            return null;
        }
        HashMap<RandomListNode, RandomListNode> map = new HashMap<>();
        RandomListNode p = pHead;
        while(p != null) {
            RandomListNode temp = new RandomListNode(p.label);
            map.put(p, temp);
            p = p.next;
        }
        p = pHead;
        while(p != null) {
            RandomListNode temp = map.get(p);
            temp.next = map.get(p.next);
            temp.random = map.get(p.random);
            p = p.next;
        }
        return map.get(pHead);  
    }
}