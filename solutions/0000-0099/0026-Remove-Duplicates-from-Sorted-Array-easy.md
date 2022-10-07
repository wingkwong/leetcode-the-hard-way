---
description: 'Author: @pankajsirari222 | https://leetcode.com/problems/remove-duplicates-from-sorted-array/'
tags: [Array, Two Pointers]
---

# 0026 - Remove Duplicates from Sorted Array (Easy) 

## Problem Link

https://leetcode.com/problems/remove-duplicates-from-sorted-array/

## Problem Statement

Given an integer array $nums$ sorted in non-decreasing order, **remove the duplicates** in-place such that each unique element appears only **once**.
The **relative order** of the elements should be kept the **same**.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the **first part** of the array $nums$. 
More formally, if there are $k$ elements after removing the duplicates, then the first $k$ elements of $nums$ should hold the final result. 
It does not matter what you leave beyond the first $k$ elements.

Return $k$ _after placing the final result in the first_ $k$ _slots of_ $nums$.

Do `not` allocate extra space for another array. You must do this by `modifying the input array` in-place with $O(1)$ extra memory.

**Custom Judge:**

The judge will test your solution with the following code:
```
int[] nums = [...];  // Input array
int[] expectedNums = [...];  // The expected answer with correct length

int k = removeDuplicates(nums);  // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be **accepted.**

**Example 1:**

```
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

**Example 2:**

```
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```


**Constraints:**

- `1 <= nums.length <= 3 * 10^4`
- `-100 <= nums[i] <= 100`
- `nums` is sorted in **non-decreasing** order.

## Approach 1: Two Pointers

In this problem, we have to count the number of distinct elements and it does not matter what elements are present other than those distinct elements. So, we will take a index count starting from 1 and traverse the array, keeping the distinct elements at the front. At last we will return the count.

As the array is sorted, it means all the duplicates of a number will be next to each other. So, basically while traversing the array we will check if next element is greater or not. If it is greater, then it means duplicate is not there and we will put it at the count index and increment the count. If it's not greater, then there will be no change. At last we will return the count.

**Time complexity** is $O(n)$ - As we are traversing the array only once

**Space complexity** is $O(1)$ - As No extra space is required

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@pankajsirari222"/>

```java
class Solution {
    public int removeDuplicates(int[] arr) {
        int n = arr.length;
        // index to keep the track of distinct variables and it starts from 1
        int count = 1;
        
        for (int i = 0; i + 1 < n; i++) {
            // to Check if next element is greater or not
            if (arr[i] < arr[i + 1])  {
                // if it is greater, means next element is distinct, 
                // so add it to count index and increment count by 1
                arr[count] = arr[i + 1];	
                count++;
            }
        }
        // returns the total number of distinct elements
        return count;
    }
}
```

</TabItem>
</Tabs>
