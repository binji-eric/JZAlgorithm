import java.util.*;
public class Solution {
    public int MoreThanHalfNum_Solution(int [] array) {
        int len = array.length;
        int low = 0, high = len -1 ;
        int mid = low + (high - low)/2;
        int ok = 0;
        while(low <= high) {
            int pivot = partition(array, low, high);
            if(pivot == mid) {
                ok = pivot;
               break;
            } else if(pivot < mid) {
                low = pivot + 1;
            } else {
                high = pivot - 1;
            }
        }
        return checkMoreThanHalf(array, array[mid])? array[mid] : 0;
     }
    
    private int partition(int[] a, int left, int right) {
        Random random = new Random();
        int pivot = random.nextInt(right - left + 1) + left;
        swap(a, pivot, right);
        int i = left, index = left;
        for(; i < right; i++) {
            if(a[i] < a[right]) {
                swap(a, index, i);
                index++;
            }
        }
        swap(a, index, right);
        return index;
    }

    private void swap(int[] input,int low,int  high) {
        int temp = input[high];
        input[high] = input[low];
        input[low] = temp;
    }

    private boolean checkMoreThanHalf(int[] numbers, int num) {
      int times = 0;
      for (int i = 0; i < numbers.length; i++) {
        if (num == numbers[i]) {
          times++;
        }
      }
      if (times * 2 <= numbers.length) {
        return false;
      }
      return true;
    }
}


