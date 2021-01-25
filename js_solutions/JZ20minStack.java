import java.util.Stack;

public class Solution {
    private Stack<Integer> stack = new Stack<>();
    private Stack<Integer> minStack = new Stack<>();
    public void push(int node) {
        int minValue;
        if(minStack.isEmpty()) {
            minValue = node;
        } else {
            minValue = Math.min(minStack.peek(), node);
        }
        stack.push(node);
        minStack.push(minValue);
    }
    
    public void pop() {
        if(!stack.isEmpty()) {
            stack.pop();
            minStack.pop();
        }
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int min() {
        return minStack.peek();
    }
}