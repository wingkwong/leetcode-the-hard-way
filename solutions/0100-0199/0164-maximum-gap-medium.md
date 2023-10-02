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

## Approach 1: Bucket Sort with Uniform Bucket Size

1. Find the maximum and minimum values in the input array nums to determine the range of values.

2. Calculate the bucket size bucket_size. It's calculated as the maximum possible range `(max_val -    min_val)` divided by `(n - 1)`, where n is the number of elements in the array. This ensures that all buckets have the same size.

3.  Determine the number of buckets needed by dividing the range of values (max_val - min_val) by the bucket size and adding 1.

4. Create and initialize an array of pairs called buckets, where each pair represents a bucket. The first element of the pair stores the minimum value encountered in the bucket, and the second element stores the maximum value encountered in the bucket.

5. Iterate through the input array nums, and for each element, calculate which bucket it belongs to based on its value. Update the corresponding bucket's minimum and maximum values.

6. Calculate the maximum gap by iterating through the buckets. For each non-empty bucket, compute the gap between the previous bucket's maximum value and the current bucket's minimum value. Track the maximum gap encountered.

7. Return the maximum gap as the result.


__Time Complexity__ is $O(n)$

__Space Complexity__ is $O(n)$

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@sanchi1304"/>

```cpp

class Solution {
public:
    int maximumGap(vector<int>& nums) {
        int n = nums.size();
        
        if (n < 2) return 0; // There are less than 2 elements, so the maximum gap is 0.
        
        // Find the maximum and minimum values in the array.
        int max_val = *max_element(nums.begin(), nums.end());
        int min_val = *min_element(nums.begin(), nums.end());
        
        // Calculate the size of each bucket.
        int bucket_size = max(1, (max_val - min_val) / (n - 1));
        
        // Calculate the number of buckets needed.
        int num_buckets = (max_val - min_val) / bucket_size + 1;
        
        // Create and initialize the buckets.
        vector<pair<int, int>> buckets(num_buckets, {-1, -1}); // {min_val, max_val}
        for (int num : nums) {
            int bucket_index = (num - min_val) / bucket_size;
            if (buckets[bucket_index].first == -1) {
                buckets[bucket_index].first = num;
                buckets[bucket_index].second = num;
            } else {
                buckets[bucket_index].first = min(buckets[bucket_index].first, num);
                buckets[bucket_index].second = max(buckets[bucket_index].second, num);
            }
        }
        
        // Calculate the maximum gap.
        int max_gap = 0;
        int prev_max = min_val;
        for (int i = 0; i < num_buckets; ++i) {
            if (buckets[i].first == -1) continue; // Skip empty buckets.
            max_gap = max(max_gap, buckets[i].first - prev_max);
            prev_max = buckets[i].second;
        }
        
        return max_gap;
    }
};

```
</TabItem>
</Tabs>


## Approach 2: Bucket Sort with Non-Uniform Bucket Size

1. Find the maximum and minimum values in the input array nums to determine the range of values.

2. Calculate a minimum possible gap between two elements in the sorted array. This is done as min_gap = max(1, (max_val - min_val) / (n - 1)). The max(1, ...) ensures that the minimum gap is at least 1.

3. Determine the number of buckets needed by dividing the range of values (max_val - min_val) by the minimum gap and adding 1. This accounts for the possibility of non-uniform bucket sizes.


4. Create and initialize an array of pairs called buckets, where each pair represents a bucket. The first element of the pair stores the minimum value encountered in the bucket, and the second element stores the maximum value encountered in the bucket.

5. Iterate through the input array nums, and for each element, calculate which bucket it belongs to based on its value. Update the corresponding bucket's minimum and maximum values.

6. Calculate the maximum gap by iterating through the buckets. For each non-empty bucket, compute the gap between the previous bucket's maximum value and the current bucket's minimum value. Track the maximum gap encountered.
    
7. Return the maximum gap as the result.


__Time Complexity__ is $O(n)$

__Space Complexity__ is $O(n)$

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@sanchi1304"/>

```cpp

class Solution {
public:
    int maximumGap(vector<int>& nums) {
        int n = nums.size();
        
        if (n < 2) return 0; // There are less than 2 elements, so the maximum gap is 0.
        
        // Find the maximum and minimum values in the array.
        int max_val = *max_element(nums.begin(), nums.end());
        int min_val = *min_element(nums.begin(), nums.end());
        
        // Calculate the minimum possible gap between two elements in the sorted array.
        int min_gap = max(1, (max_val - min_val) / (n - 1));
        
        // Calculate the number of buckets needed.
        int num_buckets = (max_val - min_val) / min_gap + 1;
        
        // Create and initialize the buckets.
        vector<pair<int, int>> buckets(num_buckets, {-1, -1}); // {min_val, max_val}
        for (int num : nums) {
            int bucket_index = (num - min_val) / min_gap;
            if (buckets[bucket_index].first == -1) {
                buckets[bucket_index].first = num;
                buckets[bucket_index].second = num;
            } else {
                buckets[bucket_index].first = min(buckets[bucket_index].first, num);
                buckets[bucket_index].second = max(buckets[bucket_index].second, num);
            }
        }
        
        // Calculate the maximum gap.
        int max_gap = 0;
        int prev_max = min_val;
        for (int i = 0; i < num_buckets; ++i) {
            if (buckets[i].first == -1) continue; // Skip empty buckets.
            max_gap = max(max_gap, buckets[i].first - prev_max);
            prev_max = buckets[i].second;
        }
        
        return max_gap;
    }
};

```
</TabItem>
</Tabs>