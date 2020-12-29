function LastRemaining_Solution(n, m)
{
    // write code here
    if(n <= 0|| m<=0){
        return -1;
    }
      
    //  method1:
   /*
   const arr = [];
    for(let i = 0; i < n; i++) {
        arr[i] = i;
    }
    let index = 0;
    while(arr.length > 1) {
       const k = m - 1;
       index = (index + k)%arr.length;
       arr.splice(index, 1); 
    }
    return arr.pop();
    */
    // method2 
    let p = 0;
    for(let i = 2; i <=n; i++){
        p = (p+m)%i;
    }
    return p;
}