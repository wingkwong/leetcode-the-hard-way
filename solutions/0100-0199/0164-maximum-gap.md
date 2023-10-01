---
description: >-
  Author: @Sanchita1304 |
  https://leetcode.com/problems/maximum-gap/
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


**Constraints:**

- `1 <= nums.length <= 105`
- `0 <= nums[i] <= 109`

## Approach 1: Using Bucket Sort with Uniform Bucket Sizes

1. Edge Case Check:

   Start by checking if the input array nums has fewer than 2 elements. If so, return 0 since there are not enough elements to calculate a gap.

2. Find Maximum and Minimum Values:

   Determine the maximum value (maxVal) and minimum value (minVal) in the array nums using the max_element and min_element functions.

3. Bucket Size Calculation:

   Calculate the bucket size (bucketSize) as the maximum of 1 and the range of values divided by the number of elements minus 1. This ensures that there's at least one element in each bucket.

4. Bucket Count Calculation:

   Calculate the number of buckets (bucketCount) by dividing the range of values by the bucket size and adding 1 to account for any remainder.

5. Bucket Creation and Distribution:

   Create an array of pairs (buckets) to represent the buckets, where each pair stores the minimum and maximum values in a bucket.
   Iterate through the elements in nums, calculate the index of the corresponding bucket, and update the bucket's minimum and maximum values.

6. Finding Maximum Gap:

   Iterate through the buckets and calculate the maximum gap between buckets. The maximum gap occurs between the maximum value of the current bucket and the minimum value of the next non-empty bucket.
   Update the maximum gap (maxGap) accordingly.

7. Return Result:

   Return the maximum gap as the result.


__Time Complexity__ is $O(n)$

__Space Complexity__ is $O(n)$

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@sanchi1304"/>

```cpp

class Solution {
public:
    int maximumGap(vector<int>& nums) {
        if (nums.size() < 2) {
            return 0;
        }

        int maxVal = *max_element(nums.begin(), nums.end());
        int minVal = *min_element(nums.begin(), nums.end());
        int bucketSize = max(1, (maxVal - minVal) / (int(nums.size()) - 1));  // Corrected line
        int bucketCount = (maxVal - minVal) / bucketSize + 1;

        // Create buckets
        vector<pair<int, int>> buckets(bucketCount, {-1, -1});
        for (int num : nums) {
            int index = (num - minVal) / bucketSize;
            if (buckets[index].first == -1) {
                buckets[index].first = num;
                buckets[index].second = num;
            } else {
                buckets[index].first = min(buckets[index].first, num);
                buckets[index].second = max(buckets[index].second, num);
            }
        }

        // Find maximum gap
        int maxGap = 0;
        int prevMax = minVal;
        for (int i = 0; i < bucketCount; ++i) {
            if (buckets[i].first == -1) {
                continue;  // Empty bucket
            }
            maxGap = max(maxGap, buckets[i].first - prevMax);
            prevMax = buckets[i].second;
        }

        return maxGap;
    }
};

```
</TabItem>
</Tabs>


## Approach 2: Using Pigeonhole Principle

1. Edge Case Check:

    Start by checking if the input array nums has fewer than 2 elements. If so, return 0 since there are not enough elements to calculate a gap.

2. Find Maximum and Minimum Values:

    Determine the maximum value (maxVal) and minimum value (minVal) in the array nums using the max_element and min_element functions.

3. Bucket Size Calculation:

    Calculate the bucket size (bucketSize) as the maximum of 1 and the range of values divided by the number of elements minus 1. This ensures that there's at least one element in each bucket.

4. Bucket Count Calculation:

    Calculate the number of buckets (bucketCount) by dividing the range of values by the bucket size and adding 1 to account for any remainder.

5. Bucket Creation and Distribution:

    Create an array of pairs (buckets) to represent the buckets, where each pair stores the minimum and maximum values in a bucket.
    Iterate through the elements in nums, calculate the index of the corresponding bucket, and update the bucket's minimum and maximum values.

6. Finding Maximum Gap:

    Iterate through the buckets and calculate the maximum gap between buckets. The maximum gap occurs between the maximum value of the current bucket and the minimum value of the next non-empty bucket.
    Update the maximum gap (maxGap) accordingly.
    
7. Return Result:

    Return the maximum gap as the result.


__Time Complexity__ is $O(n)$

__Space Complexity__ is $O(n)$

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@sanchi1304"/>

```cpp

class Solution {
public:
    int maximumGap(vector<int>& nums) {
        if (nums.size() < 2) {
            return 0;
        }

        int maxVal = *max_element(nums.begin(), nums.end());
        int minVal = *min_element(nums.begin(), nums.end());
        int bucketSize = max(1, (maxVal - minVal) / (int(nums.size()) - 1));  // Corrected line
        int bucketCount = (maxVal - minVal) / bucketSize + 1;

        // Create buckets
        vector<pair<int, int>> buckets(bucketCount, {INT_MAX, INT_MIN});
        for (int num : nums) {
            int index = (num - minVal) / bucketSize;
            buckets[index].first = min(buckets[index].first, num);
            buckets[index].second = max(buckets[index].second, num);
        }

        // Find maximum gap
        int maxGap = 0;
        int prevMax = minVal;
        for (int i = 0; i < bucketCount; ++i) {
            if (buckets[i].first == INT_MAX) {
                continue;  // Empty bucket
            }
            maxGap = max(maxGap, buckets[i].first - prevMax);
            prevMax = buckets[i].second;
        }

        return maxGap;
    }
};

```
</TabItem>
</Tabs>