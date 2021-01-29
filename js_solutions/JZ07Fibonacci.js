// 大家都知道斐波那契数列，现在要求输入一个整数n，
// 请你输出斐波那契数列的第n项（从0开始，第0项为0，第1项是1）。
// n≤39


function Fibonacci(n)
{
    let arr = new Array(3);
    arr[0] = 0;
    arr[1] = 1;
    for(let i = 2; i <= n; i++) {
        arr[i%3] = arr[(i-2)%3] + arr[(i-1)%3];
    }
    return arr[n%3];
}