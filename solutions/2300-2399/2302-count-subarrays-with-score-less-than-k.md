---
description: >-
  Author: @saloni33 |
  https://leetcode.com/problems/count-subarrays-with-score-less-than-k/
---

# 2302 - Count Subarrays With Score Less Than K (Hard)

## Problem Link

https://leetcode.com/problems/count-subarrays-with-score-less-than-k/

## Problem Statement

The `score` of an array is defined as the `product` of its sum and its length.

For example, the score of [1, 2, 3, 4, 5] is (1 + 2 + 3 + 4 + 5) * 5 = 75.
Given a positive integer array nums and an integer k, return the number of non-empty subarrays of nums whose score is strictly less than k.

A subarray is a contiguous sequence of elements within an array.



**Example 1:**

```
Input: nums = [2,1,4,3,5], k = 10
Output: 6
Explanation: The 6 subarrays having scores less than 10 are:
- [2] with score 2 * 1 = 2.
- [1] with score 1 * 1 = 1.
- [4] with score 4 * 1 = 4.
- [3] with score 3 * 1 = 3. 
- [5] with score 5 * 1 = 5.
- [2,1] with score (2 + 1) * 2 = 6.
Note that subarrays such as [1,4] and [4,3,5] are not considered because their scores are 10 and 36 respectively, while we need scores strictly less than 10.

```

**Example 2:**

```
Input: nums = [1,1,1], k = 5
Output: 5
Explanation: Every subarray except [1,1,1] has a score less than 5.
[1,1,1] has a score (1 + 1 + 1) * 3 = 9, which is greater than 5.
Thus, there are 5 subarrays having scores less than 5.
```


**Constraints:**

* `1 <= nums.length <= 105`
* `1 <= nums[i] <= 105`
* `1 <= k <= 1015`


## Approach : Sliding Window

In this approach, we will maintain two points `i` and `j` both initialized with 0 and go on incrementing j until the `score` is less than k, where score is defined as product of length and sum of subarray.  
Since we need to count number of subarrays which have score less than k, we will add `j-i+1` number of arrays to our `ans` each time, as it adds all the subarrays that starts at i and ends at j.  

*example [1,2,3,4,5] and let i = 0, j = 2  
Total subarrays will be 3  
[1,2,3,4,5] , [1,2,3,4] , and [1,2,3]*


Time Complexity: $O(n)$, where $n$ - size of array

Space complexity: $O(1)$ 

<Tabs>
<TabItem value="cpp" label="c++">
<SolutionAuthor name="@saloni33"/>

```cpp
long long countSubarrays(vector<int>& nums, long long k) {
        int n = nums.size();
        long long sum = 0;
        long long ans = 0;
        
        int i = 0,j = 0;
        
        while(j < n) {
            sum += nums[j];
           
            // increment j if score is less than k
            if(sum*(j-i+1) < k) {
                ans += j-i+1;
                j++;
            }
            
            else {
                // go on incrementing i until score becomes less than k again
                while((sum)*(j-i+1) >=k) {
                    sum -= nums[i];
                    i++;
                }
                
                ans += j-i+1;
                j++;
            }
        }
        
        return ans;
    }
```
</TabItem>
</Tabs>
