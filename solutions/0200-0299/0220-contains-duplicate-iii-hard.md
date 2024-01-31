---
description: >-
  Author: @Sanchita1304 |
  https://leetcode.com/problems/contains-duplicate-iii/
---

# 0220 - Contains Duplicate III (Hard)

## Problem Link

https://leetcode.com/problems/contains-duplicate-iii/

## Problem Statement

You are given an integer array `nums` and two integers `indexDiff` and `valueDiff`.

Find a pair of indices `(i, j)` such that:

- `i != j`,
- `abs(i - j) <= indexDiff`.
- `abs(nums[i] - nums[j]) <= valueDiff`, and

Return true if such pair exists or false otherwise.

**Example 1:**

```
Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
Output: true

Explanation: We can choose (i, j) = (0, 3).
We satisfy the three conditions:
i != j --> 0 != 3
abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0
```

**Example 2:**

```
Input: nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
Output: false

Explanation: After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false.
```

**Constraints:**

- `2 <= nums.length <= 105`
- `-109 <= nums[i] <= 109`
- `1 <= indexDiff <= nums.length`
- `0 <= valueDiff <= 109`

## Approach : Bucket Sort

1. Input Validation: 

    The function first checks if indexDiff is less than or equal to 0 or if valueDiff is less than 0. If either of these conditions is met, the function returns false. This is done to handle invalid input values.

2. Bucket Initialization: 

    The code uses an unordered map called buckets to store the elements of the array. Each bucket represents a range of values. The width of each bucket is determined by bucketWidth, which is valueDiff + 1. The purpose of buckets is to group elements within a certain range of values together.

3. Iterating through the Array: 

    The code iterates through the input array nums using a for loop.

4. Bucket Assignment: 

    For each element nums[i], it calculates the bucket to which it belongs using the getBucket function. The getBucket function ensures that negative numbers are placed in a different bucket by adjusting the bucket number accordingly.

5. Checking for Duplicates: 

    The code checks if the calculated bucket already exists in the buckets map. If it does, it means there's a previous element within the same bucket with a value that satisfies the valueDiff condition. In such a case, the function returns true, indicating that a valid pair of indices was found.

6. Checking Neighboring Buckets: 

    The code also checks the neighboring buckets (one to the left and one to the right). If there's an element in either neighboring bucket that satisfies the valueDiff condition with the current element, it returns true.


7. Updating Buckets: 

    After processing an element, it adds it to the buckets map with its corresponding bucket number as the key. If the number of elements in buckets exceeds indexDiff, the code removes the earliest added element from the map to keep it within the desired index difference.

8. Return False by Default: 

    If the function iterates through the entire array without finding a valid pair of indices, it returns false by default.


__Time Complexity__ is $O(n)$, where $n$ is the number of elements in the `nums` array.

__Space Complexity__ is $O(min(n, valueDiff))$, and in practice, it is often close to $O(n)$ when valueDiff is large.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@sanchi1304"/>

```cpp

class Solution {
public:
    bool containsNearbyAlmostDuplicate(vector<int>& nums, int indexDiff, int valueDiff) {
        if (indexDiff <= 0 || valueDiff < 0) {
            return false;
        }

        unordered_map<long long, long long> buckets; // Bucket number to value mapping
        long long bucketWidth = static_cast<long long>(valueDiff) + 1;

        for (int i = 0; i < nums.size(); ++i) {
            long long num = static_cast<long long>(nums[i]);
            long long bucket = getBucket(num, bucketWidth);

            if (buckets.find(bucket) != buckets.end()) {
                return true;
            }

            if (buckets.find(bucket - 1) != buckets.end() && num - buckets[bucket - 1] <= valueDiff) {
                return true;
            }

            if (buckets.find(bucket + 1) != buckets.end() && buckets[bucket + 1] - num <= valueDiff) {
                return true;
            }

            buckets[bucket] = num;

            if (i >= indexDiff) {
                long long removeBucket = getBucket(nums[i - indexDiff], bucketWidth);
                buckets.erase(removeBucket);
            }
        }

        return false;
    }

private:
    long long getBucket(long long num, long long bucketWidth) {
        // Ensure negative numbers are placed in a different bucket
        if (num < 0) {
            return (num + 1) / bucketWidth - 1;
        } else {
            return num / bucketWidth;
        }
    }
};

```
</TabItem>
</Tabs>
