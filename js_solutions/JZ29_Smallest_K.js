function GetLeastNumbers_Solution(input, k)

{ 
    const len = input.length;
    if(k > input.length)
        return [];
    for(let i =  Math.floor((len-1)/2); i>=0; i--) {
        sink(input, i, len);
    }

    for(let j = len-1; j>len-1-k; j--) {
        [input[0], input[j]] = [input[j], input[0]];
        sink(input, 0, j);
       
    }
   const res = input.slice(len-k).reverse();
    return res;
}

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


