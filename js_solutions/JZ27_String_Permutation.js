function Permutation(str)
{
    // write code here
    let res = [];
    helper(res, str.split(''), 0);
    return res.sort();
}

function helper(res, str, start) {
    if(start == str.length - 1) {
        const finalStr = str.reduce((res, cur) => {
            return res + cur;
        }, '');
        if(res.indexOf(finalStr) == -1)
            res.push(finalStr);
    } else {
        for(let i = start; i < str.length; i++) {
            [str[i], str[start]] = [str[start], str[i]];
            helper(res, str, start + 1);
            [str[i], str[start]] = [str[start], str[i]];
        }
    }
}