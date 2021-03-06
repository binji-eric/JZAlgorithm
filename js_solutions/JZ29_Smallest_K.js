// 输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，
// 则最小的4个数字是1,2,3,4。

// method1，使用堆排序的方法，构造小顶堆，然后k次与末尾元素交换，倒数k个元素就是答案
function GetLeastNumbers_Solution(input, k)
{ 
    const len = input.length;
    if(k > input.length)
        return [];
    for(let i =  Math.floor((len-1)/2); i>=0; i--) {
        sink(input, i, len);
    }

    // k次将小顶堆的堆顶与尾部交换
    for(let j = len-1; j>len-1-k; j--) {
        [input[0], input[j]] = [input[j], input[0]];
        sink(input, 0, j);
    }
   const res = input.slice(len-k).reverse();
    return res;
}

// 构造小顶堆
const sink = (arr, start, len) => {
  for(let i = start*2 +1; i < len; i = i*2 +1 ) {
   
    if(i+1 < len && arr[i+1] < arr[i])
      i = i+1;
    if(arr[start] <= arr[i])
      break;

    [arr[start], arr[i]] = [arr[i], arr[start]];
    start = i;
  }
}



// method2， 利用快速选择的方法，得到第k个元素，那么左侧的k的即为所求
function GetLeastNumbers_Solution(input, k)
{ 
    var result = [];
    if (input.length < 0 || k > input.length || k <= 0) {
        return false;
    }
    var start = 0;
    var end = input.length - 1;
    var p = partition(input, start, end);
    while (p !== (k - 1)) {
        if (p > (k - 1)) {
            end = p - 1;
            p = partition(input, start, end);
        } else {
            start = p + 1;
            p = partition(input, start, end);
        }
    }
    for (var i = 0; i < k; i++) {
        result.push(input[i]);
    }
    return result.sort();
}


function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const partition = (arr, low, high) => {
  const pivot = Math.floor(Math.random()*(high - low +1)) + low;
  swap(arr, pivot, high);
  let index = low;
  for(let i = low; i<=high; i++) {
    if(arr[i] < arr[high]){
      swap(arr, index, i);
      index++;
    }
  }
  swap(arr, index, high);
  return index;
}

