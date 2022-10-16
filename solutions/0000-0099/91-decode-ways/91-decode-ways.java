class Solution {
    public int numDecodings(String s) {
        char[] chs = s.toCharArray();
        int n = chs.length;
        
        int[] dp = new int[n+1];
        dp[0] = 1;
        
        for (int i = 1; i <= n; i++) {
            int tmp = chs[i-1] - '0';
            
            if (tmp != 0) {
                dp[i] = dp[i-1];
                
                if (i > 1) {
                    int prev = chs[i-2] - '0';
                    if (prev == 1 || (prev == 2 && tmp <= 6)) {
                        dp[i] += dp[i-2];
                    }
                }
            } else {
                if (i > 1) {
                    int prev = chs[i-2] - '0';
                    if (prev == 1 || prev == 2) {
                        dp[i] += dp[i-2];
                    }
                }
            }
        }
        return dp[n];
    }
}