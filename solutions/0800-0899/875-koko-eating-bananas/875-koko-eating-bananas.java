class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        int left = 1;
        int right = 0;
        for(int pile : piles){
            right = Math.max(right, pile);
        }
        while(left <= right){
            int mid = left + (right-left)/2;
            long hour = eatBanana(piles, mid);
            if(hour <= (long) h){
                right = mid - 1;
            }else{ //hour > h Only increase left boundary when we eat slower than h
                left = mid + 1;
            }
        }
        return left;
    }
    public long eatBanana(int[] piles, int mid){
        long result = 0;
        for(int pile : piles){
            result += (long) (pile/mid + (pile % mid != 0 ? 1 : 0));
        }
        return result;
    }
}