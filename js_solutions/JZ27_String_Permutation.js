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

// method2 dfs, 这种方法更容易理解
function Permutation(str)
{
    // write code here
    const eleArr = str.split('');
    const len = eleArr.length;
    const visited = new Array(len);
    visited.fill(false);
    const res = [];
    helper(res, visited, eleArr, '');
    return res;
}

function helper(res, visited, eleArr, curStr) {
    if(curStr.length == visited.length) {
        res.push(curStr);
    }
    for(let i = 0; i < eleArr.length; i++) {
        if(visited[i]) {
            continue;
        }
        if(i != 0 && eleArr[i] == eleArr[i-1] && !visited[i-1]) {
            continue;
        }
        visited[i] = true;
        curStr += eleArr[i];
        helper(res, visited, eleArr, curStr);
        visited[i] = false;
        curStr = curStr.substring(0, curStr.length-1);
    }
}