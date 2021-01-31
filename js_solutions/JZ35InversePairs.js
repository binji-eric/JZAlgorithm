// 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
// 输入一个数组,求出这个数组中的逆序对的总数P。并将P对1000000007取模的结果输出。 
// 即输出P%1000000007


function InversePairs(data) {
    if (!data || data.length < 2) return 0;
    let count = 0;
    const copy = data.slice();
    count = mergeCount(data, copy, 0, data.length - 1);
    return count % 1000000007;
  }
  function mergeCount(data, copy, start, end) {
      if (start === end) 
          return 0;
       const mid = (end + start) >> 1
       // data将是排好序的数组
      const left = mergeCount(copy, data, start, mid); // 注意参数，copy作为data传入
      const right = mergeCount(copy, data, mid + 1, end); // 注意参数，copy作为data传入
    // 经过下面，copy作为排好序的数组，但是是data传入的
      let k = start, i = start, j = mid+1, count = 0;
      while(k <= end){
        if(i > mid) {
          copy[k++] = data[j++];
        } else if(j > end){
          copy[k++] = data[i++];
        } else if(data[i] < data[j]) {
          copy[k++] = data[i++];
        } else{
            // 位置i~位置mid的值， >= data[i], 所以data[j] < data[i] ....data[mid]
          count = count + mid - i + 1;
           copy[k++] = data[j++];
        }
      }
        return left + right + count;
  }
  
  