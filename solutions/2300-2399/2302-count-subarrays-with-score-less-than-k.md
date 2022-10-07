---
description: >-
  Author: @saloni33 |
  https://leetcode.com/problems/count-subarrays-with-score-less-than-k/
---

# 2302 - Count Subarrays With Score Less Than K (Hard)

## Problem Link

https://leetcode.com/problems/count-subarrays-with-score-less-than-k/

## Problem Statement

The **score** of an array is defined as the **product** of its sum and its length.

* For example, the score of $[1, 2, 3, 4, 5]$ is $(1 + 2 + 3 + 4 + 5) * 5 = 75$.
Given a positive integer array $nums$ and an integer $k$, return the **number of non-empty subarrays** of $nums$ whose score is **strictly less** than $k$.

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

* $1 <= nums.length <= 10^5$
* $1 <= nums[i] <= 10^5$
* $1 <= k <= 10$<sup>$15$</sup>


## Approach 1: Sliding Window
 
In this approach we will maintain a sliding window from $nums[i]$ to $nums[j]$, subarray starting with $i$ and ending at $j$ which has score less than $k$. $sum$ contains the current sum of element between the window.  

We will start iterating $j$ from 0 to $nums.size() - 1$, first we will add $nums[j]$ to $sum$.  

The current sum is denoted by $sum$ and length is $j - i + 1$. If the score $sum * (j - i + 1) >= k$, the window is too big, we will remove $nums[i]$ and update i++. We continue doing this until the score is less than $k$.  

If we find a subarray $nums[i]$ to $nums[j]$ which has score less than $k$, we will update answer $ans += j - i + 1$ as there will be $j - i + 1$ total subarrays in total.

Time Complexity: $O(n)$, where $n$ is the size of array

Space complexity: $O(1)$ 

<Tabs>
  
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@saloni33"/>

```cpp
long long countSubarrays(vector<int>& nums, long long k) {
        int n = nums.size();
        long long sum = 0;
        long long ans = 0;
        int i = 0,j = 0;
        
        while (j < n) {
            sum += nums[j];
            // increment j if score is less than k
            if (sum * (j - i + 1) < k) {
                ans += j - i + 1;
                j++;
            } else {
                // go on incrementing i until score becomes less than k again
                while (sum * (j - i + 1) >=k) {
                    sum -= nums[i];
                    i++;
                }
                ans += j - i + 1;
                j++;
            }
        } 
        return ans;
    }
```
</TabItem>
</Tabs>
