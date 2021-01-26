function GetUglyNumber_Solution(index)
{
    if(index <= 0) {
        return 0;
    }
    let cur = 1;
    
    let indexOf2 = 0, indexOf3 = 0, indexOf5 = 0;
    const res = new Array(index);
    res[0] = 1;
    while(cur < index){
        res[cur] = Math.min(res[indexOf2]*2, res[indexOf3]*3, res[indexOf5]*5);
        while(res[indexOf2]*2 <= res[cur])
            indexOf2++;
        while(res[indexOf3]*3 <= res[cur])
            indexOf3++;
        while(res[indexOf5]*5 <= res[cur])
            indexOf5++;
        cur++;
    }
    return res[index-1];
}
