import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        String grid[] = new String[n];
        for(int grid_i=0; grid_i < n; grid_i++){
            grid[grid_i] = in.next();
                    
        }

        char[][] arr = new char[n][n];

        for(int i = 0; i < n; i++){
            for(int j = 0; j < n; j++){
                arr[i][j] = grid[i].charAt(j);
                            
            }
                    
        }

        for(int i = 0; i < n; i++){
            for(int j = 0; j < n; j++){
                char v = arr[i][j];
                if(i != 0 && j != 0 && i != n-1 && j != n-1){
                    if(arr[i-1][j] < v && arr[i+1][j] < v
                       && arr[i][j-1] < v && arr[i][j+1] < v){
                        arr[i][j] = 'X';
                                            
                    }
                                    
                }
                System.out.print(arr[i][j]);
                            
            }
            System.out.println();
                    
        }
            
    }
    
}
