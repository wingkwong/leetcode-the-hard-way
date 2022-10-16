class Solution {
    public int mySqrt(int x) {
     int s = 1;
        int e = x;
        int ans =0;
        if (x==0) return 0;
        if (x==1) return 1;
        while (s<=e){
            int mid = s+(e-s)/2;
            if (mid<=x/mid){
                ans = mid;
                s = mid+1;
            }else{
                e = mid-1;
            }
        }return ans;
    }
}
