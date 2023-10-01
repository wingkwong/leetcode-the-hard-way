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

## Approach 1: Bucket Sort

1. Check for edge cases: If indexDiff is less than or equal to 0 or valueDiff is less than 0,   return false as it's impossible to find a valid pair.

2. Initialize an unordered map buckets to store the mapping of bucket numbers to values.

3. Calculate the bucketWidth as valueDiff + 1. This determines the width of each bucket.

4. Iterate through the elements in the nums array.

5. For each element num, calculate the bucket number using the getBucket function. This function ensures that negative numbers are placed in different buckets.

6. Check if the current bucket is already in the buckets map. If yes, return true because you found a pair satisfying all conditions.

7. Check the neighboring buckets (previous and next) to see if there's a value within the valueDiff range. If yes, return true.

8. Update the buckets map with the current bucket and value.

9. If the index is greater than or equal to indexDiff, remove the earliest bucket to maintain the window size.

10. If no valid pair is found, return false after iterating through the entire array.

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
