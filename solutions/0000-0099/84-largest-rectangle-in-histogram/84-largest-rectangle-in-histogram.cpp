class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
         int n = heights.size();
         stack<int> s;
        int maxi = 0;
        
        for(int i=0;i<=n;i++)
        {
            while(!s.empty() && (i == n || heights[s.top()] >= heights[i]))
            {
                int height = heights[s.top()];
                s.pop();
                int w;
                if(s.empty()) w = i;
                else
                {
                    w = i - s.top() - 1;
                }
                maxi = max(maxi,height*w);
            }
            s.push(i);
        }
        return maxi;
        
//           int n = heights.size();
//          stack<int> s;
//         vector<int> left(n);
//         vector<int> right(n);
        
//         for(int i=0;i<n;i++)
//         {
//             while(!s.empty() && heights[s.top()] >= heights[i] )
//             {
//                 s.pop();
//             }
//             if(s.empty())
//                 left[i] = 0;
//             else
//                 left[i] = s.top()+1;
            
//             s.push(i);
//         }
//         while(!s.empty()) s.pop();
//         for(int i=n-1;i>=0;i--)
//         {
//             while(!s.empty() && heights[s.top()] >= heights[i])
//             {
//                 s.pop();
//             }
//             if(s.empty())
//             {
//                 right[i] = n-1;
//             }
//             else
//             {
//                 right[i] = s.top()-1;
//             }
            
//             s.push(i);
//         }
//         int maxi = INT_MIN;
//         for(int i=0;i<n;i++)
//         {
//           maxi = max(maxi, (right[i] - left[i] + 1) * heights[i]);  
//         }
        
//         return maxi == INT_MIN ? 0 : maxi;
        
        
    }
};