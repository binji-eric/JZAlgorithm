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