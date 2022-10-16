class Solution {
public:
    double myPow(double x, int n) {
        if(n==0)
            return 1;
        if(n>0)
        {
            if(n%2 == 0)
            {
                double sub = pow(x,n/2);
                return sub*sub;
            }
            else
                return x*pow(x,n-1);
        }
        else
        {
            if(n%2 == 0)
            {
                double sub = pow(x,abs(n/2));
                return 1/(sub*sub);
            }
            else
                return (x*pow(x,n-1));
        }
        return 1;
    }
};