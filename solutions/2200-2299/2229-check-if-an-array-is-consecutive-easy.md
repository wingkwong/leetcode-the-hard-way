---
description: >-
  Author: @hiverkiya | https://leetcode.com/problems/check-if-an-array-is-consecutive/


tags: [Array]
---

# 2229 - Check if an Array is Consecutive (Easy)

## Problem Link

https://leetcode.com/problems/check-if-an-array-is-consecutive/

## Problem Statement

Given an integer array $nums$, return $true$ _if_ $nums$ _is_ **_consecutive_** _, otherwise return_ $false$.

An array is **consecutive** if it contains every number in the range $[x, x + n - 1]$ **(inclusive)**, where $x$ is the minimum number in the array and $n$ is the length of the array.

**Example 1:**

```
Input: nums = [1, 3, 4, 2]
Output: true
Explanation:
The minimum value is 1 and the length of nums is 4.
All of the values in the range [x, x + n - 1] = [1, 1 + 4 - 1] = [1, 4] = (1, 2, 3, 4) occur in nums.
Therefore, nums is consecutive.
```

**Example 2:**

```
Input: nums = [1, 3]
Output: false
Explanation:
The minimum value is 1 and the length of nums is 2.
The value 2 in the range [x, x + n - 1] = [1, 1 + 2 - 1], = [1, 2] = (1, 2) does not occur in nums.
Therefore, nums is not consecutive.
```

**Example 3:**

```
Input: nums = [3, 5, 4]
Output: true
Explanation:
The minimum value is 3 and the length of nums is 3.
All of the values in the range [x, x + n - 1] = [3, 3 + 3 - 1] = [3, 5] = (3, 4, 5) occur in nums.
Therefore, nums is consecutive.
```

**Constraints:**

- $1 <= nums.length <= 10^5$
- $0 <= nums[i] <= 10^5$

## Approach 1: Sort and Compare

The problem statements require you to check for consecutive elements in a range, which means the element next to the current element should be one number higher. For example, $[1 , 2 , 3]$ are consecutive elements while $[1, 3, 4]$ or $[1, 2, 2, 3, 4]$ are not. That means the **current element + 1 = next element**.

The elements are given in random order, and it's mentioned that the elements are in a range $[x , x + n - 1]$ with $x$ as the minimum element. To find the minimum element, you can sort the array in ascending order, and the first element will be the minimum element.

However, we simply have to check the consecutive elements, and even if they are repeating like $[1, 1, 2, 3, 4]$, they are not consecutive as they don't satisfy the condition $nums[i] + 1 == nums[i + 1]$. The primary focus is on the first statement, as the other one may confuse you to think of ambiguous corner cases. You can easily check for consecutive elements after sorting the array.

Time Complexity: $O(n*log(n))$. The Time complexity of the default sort function in C++

Space Complexity: $O(1)$. No extra space is used

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@hiverkiya"/>

```cpp
class Solution {
public:
    bool isConsecutive(vector<int>& nums) {
        // using sort from C++ STL to order the elements in ascending order
        sort(nums.begin(), nums.end());
        // run a loop to check elements till size-1 to avoid overflow
        for(int i = 0; i < nums.size() - 1; i++) {
            // check if current element + 1 equals to the next element
            if(nums[i] + 1 != nums[i + 1]) return false;
        }
        return true;
    }
};
```

</TabItem>
</Tabs>
