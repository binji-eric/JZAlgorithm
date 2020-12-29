import java.util.ArrayList;
public class Solution {
    public ArrayList<ArrayList<Integer> > FindContinuousSequence(int sum) {
       ArrayList<ArrayList<Integer>> res = new ArrayList<>();
        if(sum <= 0) {
            return res;
        }
       int max = (sum + 1)/2;
        int i = 1, j = 2;
        while(i < j && j <= max) {
            int total = (j-i+1)*(i+j)/2;
            if(total > sum) {
                i++;
            } else if(total < sum) {
                j++;
            } else {
                ArrayList<Integer> temp = new ArrayList<>();
                for(int k = i; k <= j; k++) {
                    temp.add(k);
                }
                res.add(temp);
                j++;
            }
        }
        return res;
    }
}