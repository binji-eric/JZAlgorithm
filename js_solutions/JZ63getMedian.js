const arr = []
function Insert(num)
{
    // write code here
    let i = arr.length - 1
    for(; i >= 0; i--) {
        if(arr[i] > num) {
            arr[i+1] = arr[i];
        } else {
            break;
        }
    }
    arr[i+1] =num;
}
function GetMedian(){
	// write code here
    if(arr.length % 2 == 0) {
        const mid = arr.length/2;
        return (arr[mid-1] + arr[mid])/2;
    } else {
        return arr[Math.floor(arr.length/2)]
    }
}