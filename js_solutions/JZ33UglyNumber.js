// 把只包含质因子2、3和5的数称作丑数（Ugly Number）。
// 例如6、8都是丑数，但14不是，因为它包含质因子7。 
// 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。

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
