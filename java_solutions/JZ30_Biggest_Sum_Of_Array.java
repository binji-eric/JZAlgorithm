public class Solution {
    public int FindGreatestSumOfSubArray(int[] array) {
        int pre = 0, max = Integer.MIN_VALUE;
        for(int i = 0; i < array.length; i++) {
            pre = pre > 0? pre + array[i]: array[i];
            max = Math.max(max, pre);
        }
        return max;
    }
}