---
description: 'Author: @yashh0903 | https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/'
tags: [Array, Binary Search]
---

# 0154 - Find Minimum in Rotated Sorted Array II (Hard)

## Problem Link

https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/

## Problem Statement

Suppose an array of length `n` sorted in ascending order is **rotated** between `1` and `n` times. For example, the array `nums = [0,1,4,4,5,6,7]` might become:

- `[4,5,6,7,0,1,4]` if it was rotated `4` times.
- `[0,1,4,4,5,6,7]` if it was rotated `7` times.

Notice that **rotating** an array `[a[0], a[1], a[2], ..., a[n-1]]` 1 time results in the array `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]`.

Given the sorted rotated array `nums` that may contain **duplicates**, return _the minimum element of this array_.

You must decrease the overall operation steps as much as possible.

**Example 1:**

```
Input: nums = [1,3,5]
Output: 1
```

**Example 2:**

```
Input: nums = [2,2,2,0,1]
Output: 0
```

**Constraints:**

- `n == nums.length`
- `1 <= n <= 5000`
- `-5000 <= nums[i] <= 5000`
- `nums` is sorted and rotated between `1` and `n` times.

**Follow up:** This problem is similar to [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/), but `nums` may contain **duplicates**. Would this affect the runtime complexity? How and why?

## Approach 1: Binary Search

1. The code uses a binary search approach to find the minimum element in the given nums array.
2. We initialize the start and end indices to cover the entire array initially.
3. Inside the while loop, we calculate the middle index using (start + end) / 2.
4. We compare the element at the middle index (nums[mid]) with the element at the end index (nums[end]).
5. If nums[mid] < nums[end], it means the minimum element lies in the left half of the array, so we update the end index to mid.
6. If nums[mid] == nums[end], it means there are duplicate elements in the array. In this case, we can safely reduce the search range by moving the end index one step back.
7. If nums[mid] > nums[end], it means the minimum element lies in the right half of the array, so we update the start index to mid + 1.
8. The loop continues until the start index is equal to the end index, at which point it will point to the minimum element.
9. Finally, we return nums[start] as the minimum element.

- Time Complexity: O(log N), where N is the length of the input array nums. This is because the binary search approach reduces the search range by half in each iteration, resulting in a logarithmic time complexity.
- Space Complexity: O(1). The code uses a constant amount of extra space, regardless of the input size. We only have a few variables to store indices and intermediate calculations, which do not depend on the input size. Hence, the space complexity is constant.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@yashh0903"/>

```cpp

class Solution {
public:
    int findMin(vector<int>& nums) {
        // Starting index of the search range
        int start = 0;
        // Ending index of the search range
        int end = nums.size() - 1;
        while (start < end) {
            // Calculate the middle index
            int mid = start + (end - start) / 2;
            if (nums[mid] < nums[end]) {
                // If the element at the middle index is smaller than the element at the end index,
                // it means the minimum element lies in the left half, so update the end index
                end = mid;
            } else if (nums[mid] == nums[end]) {
                // If the element at the middle index is equal to the element at the end index,
                // it means there are duplicate elements in the array.
                // In this case, we can safely reduce the search range by moving the end index one step back.
                end--;
            } else {
                // If the element at the middle index is greater than the element at the end index,
                // it means the minimum element lies in the right half, so update the start index.
                start = mid + 1;
            }
        }
        // When the loop ends, the start index will point to the minimum element
        return nums[start];
    }
};

```

</TabItem>
</Tabs>
