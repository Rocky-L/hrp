import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        for(int cases = 0; cases < n; cases++){
            int steps = sc.nextInt();
            int a = sc.nextInt();
            int b = sc.nextInt();
            HashSet<Integer> set = new HashSet<Integer>();

            for(int run = 0; run < steps; run++){
                int sum = 0;
                sum += ((steps - run - 1) * a + run * b);
                set.add(sum);
                            
            }

            TreeSet<Integer> sorted = new TreeSet<Integer>();
            sorted.addAll(set);

            for(int item: sorted){
                System.out.print(item + " ");
                            
            }

            System.out.println();
                    
        }
            
    }
    
}

//Math