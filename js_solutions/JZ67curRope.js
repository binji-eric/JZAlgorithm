// 给你一根长度为n的绳子，请把绳子剪成整数长的m段（m、n都是整数，n>1并且m>1，m<=n），
// 每段绳子的长度记为k[1],...,k[m]。请问k[1]x...xk[m]可能的最大乘积是多少？
// 例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

public class Solution {
    public int cutRope(int target) {
        // java solution
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

    // method2
    public int cutRope(int target) {
        int multi=1;
           //小值判断
           if(target<=3)
               return target-1;
           while(target>4){//只有5才可分为 2+3，比5小的直接当作一段时乘积最大
               target-=3;
               multi*=3;
           }
           return multi*target;
       }
}