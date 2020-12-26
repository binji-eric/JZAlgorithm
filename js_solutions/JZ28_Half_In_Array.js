//数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
// 例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。


function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    const len = numbers.length;
    let low = 0, high = len -1 ;
    const mid = low + Math.floor((high - low + 1)/2);
    let ok = 0;
    while(low <= high) {
        let pivot = partition(numbers, low, high);
        if(pivot == mid) {
            ok = pivot;
           break;
        } else if(pivot < mid) {
            low = pivot + 1;
        } else {
            high = pivot - 1;
        }
    }
    return checkMoreThanHalf(numbers, numbers[mid])? numbers[mid] : 0;
}

function partition(a, left, right) {
    const pivot = Math.floor(Math.random()*(right - left + 1)) + left;
    swap(a, pivot, right);
    let i = left, index = left;
    for(; i < right; i++) {
        if(a[i] < a[right]) {
            swap(a, index, i);
            index++;
        }
    }
    swap(a, index, right);
    return index;
}

function swap(input, low, high) {
    const temp = input[high];
    input[high] = input[low];
    input[low] = temp;
}

function checkMoreThanHalf(numbers, num) {
  let times = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (num === numbers[i]) {
      times++;
    }
  }
  if (times * 2 <= numbers.length) {
    return false;
  }
  return true;
}