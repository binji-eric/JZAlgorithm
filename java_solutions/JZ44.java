import java.util.*;
public class Solution {
    public String ReverseSentence(String str) {
        String[] arr = str.split(" ");
        String res = "";
        // 避免出现 str = " " 的情况
        if(str == null || arr.length <= 1) {
            return str;
        }
        for(int i = arr.length - 1; i >= 0; i--) {
            if(i != 0) {
                res = res + arr[i] + " ";
            } else {
                res = res + arr[i];
            }
        }
        return res;
    }
}