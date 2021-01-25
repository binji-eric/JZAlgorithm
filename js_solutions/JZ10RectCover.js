function rectCover(number)
{
    // write code here
    if(number == 1)
        return 1;
    else if(number ==2) {
        return 2;
    }
    let first = 1, second = 2,cur = 0;
    for(let i = 3; i <= number; i++) {
        cur = first + second;
        first = second;
        second = cur;
    }
    return cur;
}