import java.util.ArrayList;
public class Solution {
    public ArrayList<Integer> printMatrix(int [][] matrix) {
        ArrayList<Integer> res = new ArrayList<Integer>();
        if(matrix == null || matrix.length == 0) {
            return res;
        }
        int rows = matrix.length, cols = matrix[0].length, start = 0;
        while(start*2 < rows && start*2 < cols) {
           res.addAll(printMatrixCircle(matrix, rows, cols, start));
            start++;
        }
        return res;
    }
    
    private ArrayList<Integer> printMatrixCircle(int[][] matrix, int rows, int cols, int start) {
        ArrayList<Integer> cur = new ArrayList<Integer>();
        int Xend = cols - 1- start, Yend = rows - 1 - start;
        for(int i = start; i <= Xend; i++) {
            cur.add(matrix[start][i]);
        }
        for(int i = start + 1; i <= Yend; i++) {
            cur.add(matrix[i][Xend]);
        }
         for(int i = Xend-1; i >= start && Yend > start; i--) {
            cur.add(matrix[Yend][i]);
        }
        for(int i = Yend-1; i > start && Xend > start; i--) {
            cur.add(matrix[i][start]);
        }
        return cur;
    }
}