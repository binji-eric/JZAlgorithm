public class Solution {
    public boolean VerifySquenceOfBST(int [] sequence) {
        if(sequence == null || sequence.length == 0) {
            return false;
        }
        return helper(sequence, 0, sequence.length - 1);
    }
    
    private boolean helper(int[] sequence, int begin ,int end) {
        if(begin >= end) {
            return true;
        }
        int i = end - 1;
        for(; i >= begin; i--) {
            if(sequence[i] > sequence[end]) {
                continue;
            } else {
                break;
            }
        }
        for(int j = i; j >= begin; j--) {
            if(sequence[j] > sequence[end]) {
                return false;
            }
        }
        return helper(sequence, begin, i) && helper(sequence, i+1, end-1);
    }
}