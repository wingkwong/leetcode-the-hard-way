---
description: 'Author: @wingkwong | https://leetcode.com/problems/ways-to-make-a-fair-array/'
tags: [Array, Dynamic Programming]
---

# 1664 - Ways to Make a Fair Array (Medium) 

## Problem Link

https://leetcode.com/problems/ways-to-make-a-fair-array/

## Problem Statement

You are given an integer array `nums`. You can choose **exactly one** index (**0-indexed**) and remove the element. Notice that the index of the elements may change after the removal.

For example, if `nums = [6,1,7,4,1]`:

- Choosing to remove index `1` results in `nums = [6,7,4,1]`.
- Choosing to remove index `2` results in `nums = [6,1,4,1]`.
- Choosing to remove index `4` results in `nums = [6,1,7,4]`.

An array is **fair** if the sum of the odd-indexed values equals the sum of the even-indexed values.

Return the ***number** of indices that you could choose such that after the removal,*`nums`*is **fair**.*

**Example 1:**

```
Input: nums = [2,1,6,4]
Output: 1
Explanation:
Remove index 0: [1,6,4] -> Even sum: 1 + 4 = 5. Odd sum: 6. Not fair.
Remove index 1: [2,6,4] -> Even sum: 2 + 4 = 6. Odd sum: 6. Fair.
Remove index 2: [2,1,4] -> Even sum: 2 + 4 = 6. Odd sum: 1. Not fair.
Remove index 3: [2,1,6] -> Even sum: 2 + 6 = 8. Odd sum: 1. Not fair.
There is 1 index that you can remove to make nums fair.
```

**Example 2:**

```
Input: nums = [1,1,1]
Output: 3
Explanation: You can remove any index and the remaining array is fair.
```

**Example 3:**

```
Input: nums = [1,2,3]
Output: 0
Explanation: You cannot make a fair array after removing any index.
```

**Constraints:**

- `1 <= nums.length <= 105`
- `1 <= nums[i] <= 104`

## Approach 1: Prefix Sum

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int waysToMakeFair(vector<int>& nums) {
        int ans = 0, odd = 0, even = 0, n = nums.size();
        for (int i = 0; i < n; i++) {
            // calculate the sum at odd index
            if (i & 1) odd += nums[i];
            // calculate the sum at even index
            else even += nums[i];
        }
        // we want to simulate the removal and calculate the result on the fly
        // if we remove a number at index i, 
        // then the parity of all numbers after nums[i] will be changed
        // i.e. even -> odd and odd -> even
        // while that of numbers before nums[i] will not changed
        // we can calculate the prefix sum at odd index & even index for the calculation
        int preOdd = 0, preEven = 0;
        for (int i = 0; i < n; i++) {
            if (i & 1) {
                // 1. remove nums[i] at odd index -> `odd` would become `odd - nums[i]`
                // 2. the odd sum after index i = `odd - nums[i] - preOdd`
                // 3. since nums[i] is removed, all numbers after that will shift to the left by 1 position
                //    `odd - nums[i] - preOdd` would contribute to even sum
                // 4. since the parity of numbers before index i won't be changed,
                //    the new even sum would be `preEven + (odd - nums[i] - preOdd)`
                
                // similarly, the new odd would be preOdd + even - preEven
                // where preOdd doesn't change and (even - preEven) is the even sum after index i 
                
                int new_even = preEven + (odd - nums[i] - preOdd);
                int new_odd = preOdd + (even - preEven);
                ans += new_odd == new_even;
                // add the current number to preOdd
                preOdd += nums[i];
            } else {
                // 1. remove nums[i] at even index -> `even` would become `even - nums[i]`
                // 2. the even sum after index i = `even - nums[i] - preEven`
                // 3. since nums[i] is removed, all numbers after that will shift to the left by 1 position
                //    `even - nums[i] - preEven` would contribute to odd sum
                // 4. since the parity of numbers before index i won't be changed,
                //    the new odd sum would be `preOdd + even - nums[i] - preEven`
                
                // similarly, the new even would be preEven + odd - preOdd
                // where preEven doesn't change and (odd - preOdd) is the even sum after index i 
                int new_odd = preOdd + (even - nums[i] - preEven);
                int new_even = preEven + (odd - preOdd);
                ans += new_odd == new_even;
                // add the current number to preEven
                preEven += nums[i];
            }
        }
        return ans;
    }
};
```

</TabItem>
</Tabs>