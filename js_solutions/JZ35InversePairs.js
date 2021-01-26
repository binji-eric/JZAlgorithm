
// function InversePairs(data) {
//   if (!data || data.length < 2) return 0;
//   let count = 0;
//   count = mergeCount(data, 0, data.length - 1);
//   return count % 1000000007;
// }
// function mergeCount(data, start, end) {
//     if (start === end) 
//         return 0;
//     const copy = data.slice();
//     const mid = (start + end) >> 1;
//     const left = mergeCount(data, start, mid); // 注意参数，copy作为data传入
//     const right = mergeCount(data, mid + 1, end); // 注意参数，copy作为data传入
//     let p = start, q = mid + 1, count = 0,  k = start;
//     while(k <= end) {
//         if(p > mid) {
//             data[k++] = copy[q++];
//         } else if(q > end) {
//             data[k++] = copy[p++];
//         } else if(copy[p] < copy[q]) {
//             data[k++] = copy[p++];
//         } else {
//             count += q - p;
//             data[k++] = copy[q++];
//         }
//     }
//     return count + left + right;
// }


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
  
  