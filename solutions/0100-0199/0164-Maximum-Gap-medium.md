---
description: 'Author: @ARRY7686 | https://leetcode.com/problems/maximum-gap/'
tags: [Array, Sorting, Bucket Sort, Radix Sort]
---
# 0164 - Maximum Gap (Medium)

## Problem Link

https://leetcode.com/problems/maximum-gap/

## Problem Statement

Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.

You must write an algorithm that runs in linear time and uses linear extra space.

**Example 1:**

```
Input: nums = [3,6,9,1]
Output: 3
Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.
```

**Example 2:**
```
Input: nums = [10]
Output: 0
Explanation: The array contains less than 2 elements, therefore return 0.
```
**Constraints**
-`1 <= nums.length <= 10^5`
-`0 <= nums[i] <= 10^9`

## Approach 1: Bucket Sort
- Edge Case: If the array has fewer than 2 elements, return 0.
- Find Minimum and Maximum: Determine the minimum and maximum values in the array.
- Bucket Setup: Create buckets that can hold ranges of values. The number of buckets can be determined by the number of elements in the array.
- Distribute Values: Place each element in the appropriate bucket based on its value.
- Find Maximum Gap: After populating the buckets, calculate the maximum gap between the maximum of one bucket and the minimum of the next non-empty bucket.


<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@ARRY7686"/>

```cpp
class Solution {
public:
    int maximumGap(vector<int>& nums) {
        if (nums.size() < 2) return 0;

        int n = nums.size();
        int min_ = *min_element(nums.begin(), nums.end());
        int max_ = *max_element(nums.begin(), nums.end());

        int buc_size = max(1, (max_ - min_) / (n - 1));
        int buc_count = (max_ - min_) / buc_size + 1;

        vector<int> minBucket(buc_count, INT_MAX);
        vector<int> maxBucket(buc_count, INT_MIN);
        
        for (int num : nums) {
            int buc_index = (num - min_) / buc_size;
            minBucket[buc_index] = min(minBucket[buc_index], num);
            maxBucket[buc_index] = max(maxBucket[buc_index], num);
        }

        int maxGap = 0;
        int previousMax = min_;

        for (int i = 0; i < buc_count; i++) {
            if (minBucket[i] == INT_MAX) continue;
            maxGap = max(maxGap, minBucket[i] - previousMax);
            previousMax = maxBucket[i];
        }

        return maxGap;
    }
};

```
</TabItem>
</Tabs>