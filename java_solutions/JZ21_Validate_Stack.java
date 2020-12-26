import java.util.*;

public class Solution {
    public boolean IsPopOrder(int [] pushA,int [] popA) {
      LinkedList<Integer> stack = new LinkedList<Integer>();
      int j = 0;
      for(int i = 0; i < pushA.length; i++) {
          stack.push(pushA[i]);
          while(!stack.isEmpty() && stack.peek() == popA[j]) {
              stack.pop();
              j++;
          }
      }
      return stack.isEmpty();
    }
}