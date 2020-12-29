import java.util.*;
public class Solution {
    public boolean isContinuous(int [] numbers) {
        HashSet<Integer> set = new HashSet<>();
        int min = 14, max = 0;
        if(numbers.length != 5) {
            return false;
        }
        for(int number :  numbers) {
            if(number < 0 || number > 13) {
                return false;
            }
            // 大王小王
            if(number == 0) {
                continue;
            }
            if(set.contains(number)){
                return false;
            }
            set.add(number);
            min = Math.min(min, number);
            max = Math.max(max, number);
            set.add(number);
        }
        return max - min < 5;
    }
}