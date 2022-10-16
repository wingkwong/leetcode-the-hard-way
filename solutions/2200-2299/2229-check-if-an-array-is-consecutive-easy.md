---
description: >-
  Author: @hiverkiya | https://leetcode.com/problems/check-if-an-array-is-consecutive/
  tags: [Array]
---

# 2229 - Check if an Array is Consecutive (Easy)

## Problem Link

https://leetcode.com/problems/check-if-an-array-is-consecutive/

## Problem Statement

Given an integer array `nums`, return `true` _if_ `nums` _is_ **_consecutive_** _, otherwise return_ `false`.

An array is **consecutive** if it contains every number in the range `[x, x + n - 1]` **(inclusive)**, where `x` is the minimum number in the array and `n` is the length of the array.

**Example 1:**

```
Input: nums = [1,3,4,2]
Output: true
Explanation:
The minimum value is 1 and the length of nums is 4.
All of the values in the range [x, x + n - 1] = [1, 1 + 4 - 1] = [1, 4] = (1, 2, 3, 4) occur in nums.
Therefore, nums is consecutive.
```

**Example 2:**

```
Input: nums = [1,3]
Output: false
Explanation:
The minimum value is 1 and the length of nums is 2.
The value 2 in the range [x, x + n - 1] = [1, 1 + 2 - 1], = [1, 2] = (1, 2) does not occur in nums.
Therefore, nums is not consecutive.
```
**Example 3:**
```
Input: nums = [3,5,4]
Output: true
Explanation:
The minimum value is 3 and the length of nums is 3.
All of the values in the range [x, x + n - 1] = [3, 3 + 3 - 1] = [3, 5] = (3, 4, 5) occur in nums.
Therefore, nums is consecutive.
```

**Constraints:**

- `1 <= nums.length <= 105`
- `0 <= nums[i] <= 105`

## Approach 1: Sort and Compare

We can sort the array using the default sort method and compare the consecutive elements. It's easy to compare the elements in one loop run.

Time Complexity: $O(n*log(n))$. The Time complexity of the default sort function in C++

Space Complexity: $O(n)$. An array is passed to the function whose size scales with the input

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@hiverkiya"/>

```cpp
class Solution {
public:
    bool isConsecutive(vector<int>& nums) {
    // Using the default sort function   
    sort(nums.begin(),nums.end());
    // Strictly checking the problem statement
    for(int i=0;i<nums.size()-1;i++){
                if(nums[i]+1!=nums[i+1]){
                return false;
                }
        }
        return true;
    }
};
```

</TabItem>
</Tabs>