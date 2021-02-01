// 给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。
// 牛客网的测试平台有问题，可以在leetcode上测试通过
function maxInWindows(num, size)
{
    // write code here
    if(!num || num.length < size) {
        return null;
    }
    var res = [], queue = [];
    for(let i = 0; i < size-1; i++) {
        inQue(queue, num[i]);
    }
    for(let i = size-1; i < num.length; i++) {
        inQue(queue, num[i]);
        // console.log(queue);
        res.push(queue[0]);
        outQue(queue, num[i-size+1]);
    }
    return res; 
}

function inQue(arr, newValue) {
    while(arr.length && arr[arr.length-1] < newValue) {
        arr.pop();
    }
    arr.push(newValue);
}

function outQue(arr, value) {
    if(arr[0] === value){
        arr.shift();
    }
}
