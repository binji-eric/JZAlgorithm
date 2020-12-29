// 左旋转字符串
public class Solution {
    public String LeftRotateString(String str,int n) {
        if(str == null || str.length() == 0) {
            return str;
        }
        int len = str.length();
        int newN = n % len;
        return str.substring(newN) + str.substring(0, newN);
    }
}