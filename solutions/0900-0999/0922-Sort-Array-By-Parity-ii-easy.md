---
description: 'Author: @ARRY7686 | https://leetcode.com/problems/sort-array-by-parity-ii/'
tags: [Array, Sorting, Two Pointers]
---
# 0922 Sort Array By Parity II

## Problem Link

https://leetcode.com/problems/sort-array-by-parity-ii

## Problem Statement

Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

Return any answer array that satisfies this condition.

**Example 1:**

```
Input: nums = [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
```

**Example 2:**
```
Input: nums = [2,3]
Output: [2,3]
```
**Constraints**
-`2 <= nums.length <= 2 * 104`
-`nums.length is even.`
-`Half of the integers in nums are even.`
-`0 <= nums[i] <= 1000`

## Approach 1: Bucket Sort
- Iterate through the array to collect the even and odd numbers into separate vectors (or buckets).

- Reconstruct the original array by placing the even numbers in the even indices and the odd numbers in the odd indices.


<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@ARRY7686"/>

```cpp
class Solution {
public:
    vector<int> sortArrayByParityII(vector<int>& nums) {
        vector<int> even, odd;
        for (int numss : nums) {
            if (num % 2 == 0) {
                even.push_back(numss);
            } else {
                odd.push_back(numss);
            }
        }
        for (int i = 0; i < nums.size() / 2; ++i) {
            nums[2 * i] = even[i];
            nums[2 * i + 1] = odd[i]; 
        }
        return nums;
    }
};

```
</TabItem>
</Tabs>