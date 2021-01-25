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

