function GetNumberOfK(data, k)
{
    // write code here
    if (getEnd(data, k) === -1 && getBegin(data, k) === -1) return 0;
  return getEnd(data, k) - getBegin(data, k) + 1;
}


function getBegin(data, k) {
  let [left, right] = [0, data.length - 1];
  let mid = left + right >> 1;
  while (left + 1 < right) {
    let mid = left + right >> 1;
    if (data[mid] > k) {
      right = mid - 1;
    } else if (data[mid] < k) {
      left = mid + 1;
    } else {
      right = mid;
    } 
  }
  if(data[left] != k && data[right] != k) {
      return -1;
  }
  return data[left] == k? left: right;
}
function getEnd(data, k) {
  let [left, right] = [0, data.length - 1];
  while (left +1 < right) {
    let mid = left + right >> 1;
    if (data[mid] > k) {
      right = mid - 1;
    } else if (data[mid] < k) {
      left = mid + 1;
    } else {
      left = mid;
    }
  }
   if(data[left] != k && data[right] != k) {
      return -1;
  }
   return data[right] == k? right: left;
}