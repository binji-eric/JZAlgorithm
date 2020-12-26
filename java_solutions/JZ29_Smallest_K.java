import java.util.*;
public class Solution {
    public ArrayList<Integer> GetLeastNumbers_Solution(int [] input, int k) {
        // make  max heap
        ArrayList<Integer> res = new ArrayList<Integer>();
        if(input == null || input.length < k || k < 1) {
            return res;
        }
        PriorityQueue<Integer> pq = new PriorityQueue<Integer>(k, new Comparator<Integer>() {
            public int compare(Integer a, Integer b) {
               return b -a;
            }
        });
        for(int i = 0; i < k; i++) {
            pq.offer(input[i]);
        }
        for(int i = k; i < input.length; i++) {
            if(input[i] < pq.peek()) {
                pq.poll();
                pq.offer(input[i]);
            }
        }
        while(!pq.isEmpty()) {
            res.add(pq.poll());
        }
        return res;
    }
    
}