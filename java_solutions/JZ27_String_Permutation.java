// 输入一个字符串,按字典序打印出该字符串中字符的所有排列。
// 例如输入字符串abc,则按字典序打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。


import java.util.*;
public class Solution {
    public ArrayList<String> Permutation(String str) {
       char[] arr = str.toCharArray();
        ArrayList<String> res = new ArrayList<>();
        helper(res, arr, 0);
        Collections.sort(res);
        return res;
    }
    
    private void helper(ArrayList<String> res, char[] arr, int start) {
        if(start == arr.length - 1) {
            String temp = "";
            for(char ele : arr) {
                temp += ele;
            }
            if(!res.contains(temp)) {
                res.add(temp);
            }
        } else {
            for(int i = start; i < arr.length; i++) {
                swap(arr, i, start);
                helper(res, arr, start + 1);
                swap(arr, i, start);
            }
        }
    }
    
    private void swap(char[] arr, int a, int b) {
        char temp = arr[a];
        arr[a] = arr[b];
        arr[b]= temp;
    }
}

