public class Solution {
    public int cutRope(int target) {
        int[] dp = new int[target + 1];
        if(target < 2) {
            return 0;
        } else if(target < 4) {
            return target - 1;
        }
        dp[0] = 0;
        dp[1] = 1;
        dp[2] = 2;
        dp[3] = 3;
        for(int i = 4; i <= target; i++) {
            int max = 0;
            for(int j = 1; j <= i/2; j++) {
                max = Math.max(max, dp[i-j]*dp[j]);
            }
            dp[i] = max;
        }
        return dp[target];
    }
}