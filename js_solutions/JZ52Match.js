//s, pattern都是字符串
// check points
// 1, matchHelper中，两个index都等于原长，返回true，否则模式到底，但是s没有，返回false
function match(s, pattern)
{
    // write code here
    
    // 初始检查
    if(s == null || pattern == null) {
        return false;
    }
    // 从0开始
    return matchHelper(s, 0, pattern, 0);
}

function matchHelper(s, index1, pattern, index2) {
    // 都走到末端，return true
    if(s.length == index1 && pattern.length == index2) {
        return true;
     // 模式串空，return false
    } else if( pattern.length == index2) {
        return false;
    }
    // 第二个字符串是*
    if(index2 + 1 < pattern.length && pattern[index2+1] == '*') {
        // 前面相等的情况下，匹配0个，1个， 多个
        if(index1 < s.length && (s[index1] == pattern[index2] || pattern[index2] == '.')) {
            return matchHelper(s, index1, pattern, index2+2) || matchHelper(s, index1+1, pattern, index2+2) || matchHelper(s, index1+1, pattern, index2);
        // 前面不匹配，只能跳过该元素
        } else {
            return matchHelper(s, index1, pattern, index2+2);
        }
        
    // 其他情况, 只能挨个比较
    } else {
         if(index1 < s.length && (s[index1] == pattern[index2] || pattern[index2] == '.')) {
             return matchHelper(s, index1+1, pattern, index2+1);
         } else {
             return false;
         }
    }
    
}