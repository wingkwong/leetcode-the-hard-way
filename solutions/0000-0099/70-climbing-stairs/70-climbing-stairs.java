class Solution {
    public int climbStairs(int n) {
        if(n==0||n==1) return 1;
        int stepOne=1,stepTwo=1;
        int result=0;
        
        for(int i=2;i<=n;i++){
            result=stepOne+stepTwo;
            stepTwo=stepOne;
            stepOne=result;
        }
        
    return result;
    }
}