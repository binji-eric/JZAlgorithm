// 对应每个测试案例，输出两个数，小的先输出。
import java.util.ArrayList;
public class Solution {
    public ArrayList<Integer> FindNumbersWithSum(int [] array,int sum) {
        ArrayList<Integer> res = new ArrayList<>();
        if(array == null || array.length < 2) {
            return res;
        }
        int len = array.length;
        int i = 0, j = len - 1;
        while(i < j) {
            if(array[i] + array[j] < sum) {
                i++;
            } else if(array[i] + array[j] > sum) {
                j--;
            } else {
                res.add(array[i]);
                res.add(array[j]);
                return res;
            }
        }
        return res;
    }
}