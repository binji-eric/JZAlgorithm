// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
// 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
// NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。


function minNumberInRotateArray(rotateArray)
{
    // write code here
    if(rotateArray.length==0){
            return 0;
        }
    var first=0;
    var last=rotateArray.length-1;
    var mid=0;
    while(first + 1 < last){
        if(rotateArray[first]<rotateArray[last]){
            return rotateArray[first];
        }
        mid=first+Math.floor((last-first)/2);
        if(rotateArray[mid]>rotateArray[last]){
            first=mid+1;
        }
        else {
            last=mid;
        }
    }   
    return rotateArray[first] < rotateArray[last]? rotateArray[first] : rotateArray[last];

}

