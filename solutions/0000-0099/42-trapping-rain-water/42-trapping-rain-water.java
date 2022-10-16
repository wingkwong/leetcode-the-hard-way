class Solution {
    public static int trap(int[] a) {
        int[] l= new int[a.length];
        int[] r= new int[a.length];
        l[0]=a[0];
        for (int i = 1; i <a.length ; i++) {
            l[i]=Math.max(l[i-1],a[i]);
        }
       r[a.length-1]=a[a.length-1];
        for (int i = a.length-2; i >=0 ; i--) {
            r[i]=Math.max(r[i+1],a[i]);
        }

        int sum=0;

        for (int i = 1; i < a.length-1; i++) {
            sum+=Math.min(l[i],r[i])-a[i];
        }
        return sum;
    }
}