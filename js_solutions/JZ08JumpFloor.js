// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
// 求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。

// method1
let memo = [];
memo.fill(0);
memo[0] = 1;
memo[1] = 1;
function jumpFloor(number)
{
       if(number < 2) {
           
           return 1;
       }
       memo[number - 1] = memo[number-1] || jumpFloor(number-1);
       memo[number - 2] = memo[number - 2] || jumpFloor(number-2);
       return memo[number - 1] + memo[number-2];
}

// method2
function jumpFloor(number)
{
    const dp = new Array(3);
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i <= number; i++) {
        dp[i%3] = dp[(i-1)%3] + dp[(i-2)%3];
    }
    return dp[number%3];
}