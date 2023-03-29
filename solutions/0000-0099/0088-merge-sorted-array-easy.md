---
description: >-
  Author: @deepanshu-rawat6, @vigneshshiv, @radojicic23 |
  https://leetcode.com/problems/merge-sorted-array/
tags: [Array, Two Pointers, Sorting]
---

# 0088 - Merge Sorted Array (Easy)

## Problem Link

https://leetcode.com/problems/merge-sorted-array/

## Problem Statement

You are given two integer arrays `nums1` and `nums2`, sorted in **non-decreasing order**, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

**Merge** `nums1` and `nums2` into a single array sorted in **non-decreasing order**.

The final sorted array should not be returned by the function, but instead be _stored inside the array_ `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.

**Example 1:**

```
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
```

**Example 2:**

```
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
```

**Example 3:**

```
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
```

**Constraints:**

* `nums1.length == m + n`
* `nums2.length == n`
* `0 <= m, n <= 200`
* `1 <= m + n <= 200`
* `-10^9 <= nums1[i], nums2[j] <= 10^9`
 

**Follow up:** Can you come up with an algorithm that runs in `O(m + n)` time?

## Approach 1: Brute Force

Since, this problem is under easy category, we know $nums1$ has length $m + n$ so we add the elements of $nums2$ in the empty spaces of $nums1$. Finally, we sort the $nums1$ with any standard sorting algorithm. This solution gives $O(N log N)$ time complexity and $O(1)$ space complexity.

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@deepanshu-rawat6"/>

```java
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        // adding elements of nums2 at empty places of nums1
        // starting at index m
        for(int i = 0; i < n; i++) {
            nums1[m + i] = nums2[i];
        }
        // sorting nums1 in an ascending order
        Arrays.sort(nums1);
    }
}
```
</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@radojicic23"/>

```python
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        # adding elements of nums2 at empty places of nums1
        for i in range(n):
            nums1[m + i] = nums2[i]
        # sort nums1
        nums1.sort()
```

</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for (i = 0; i < n; i++) {
        nums1[m + i] = nums2[i];
    }
    nums1.sort(function(a, b) {return a - b});
};
```

</TabItem>
</Tabs>

## Approach 2: Two Pointers

A better way to do it is using one-pass two pointer approach. We make a copy of $nums1$ into $temp$, then iterate through both arrays $nums2$ and $temp$ comparing their elements in **ascending fashion** with the help of two pointers $i$ and $j$,simultaneouslty adding the smaller elements into $nums1$. Finally, the bigger elements out of either $nums2$ or $temp$ are going to be added by seperately iterating over them if $i$ or $j$ satisfies the conditions.
This solution gives $O(m + n)$ or $O(n)$ time complexity and $O(m)$ or $O(n)$ space complexity.

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@deepanshu-rawat6"/>

```java
class Solution {
    public void merge(int[] nums1 , int m , int[] nums2 , int n) {
        int i = 0, j = 0, k = 0;
        // making a temp copy of nums1, for easier swapping of elements
        int[] temp = Arrays.copyOfRange(nums1 , 0 , m);
        // loop till anyone array elements exhausts
        while (i < m && j < n) {
            // adding the elements into nums1 in ascending order
            if (temp[i] < nums2[j]) {
                nums1[k] = temp[i];
                i++;
            } else {
                nums1[k] = nums2[j];
                j++;
            }
            k++;
        }
        // now adding the left out elements either of temp or nums2
        // Either one of the loops will execute because every time one array's length
        // would come out to be shorter than the other one
        while (i < m) {
            nums1[k] = temp[i];
            k++;
            i++;
        }
        while (j < n) {
            nums1[k] = nums2[j];
            k++;
            j++;
        }
    }
}
```
</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@radojicic23"/>

```python
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        # last element of nums1
        last = m + n - 1
        # merge them in reverse order 
        while m > 0 and n > 0:
            # find the largest value 
            if nums1[m - 1] > nums2[n - 1]:
                nums1[last] = nums1[m - 1]
                m -= 1
            else:
                nums1[last] = nums2[n - 1]
                n -= 1
            last -= 1
        # edge case 
        # fill nums1 with leftover of nums2 elements
        while n > 0:
            nums1[last] = nums2[n - 1]
            n -= 1
            last -= 1
```

</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // last element of nums1
    let last = m + n - 1;
    // merge them in reverse order
    while (m > 0 && n > 0) {
        // find the largest value 
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[last] = nums1[m - 1];
            m--;
        } else {
            nums1[last] = nums2[n - 1];
            n--;
        }
        last--;
    }
    // edge case
    // fill nums1 with leftover of nums2 elements
    while (n > 0) {
        nums1[last] = nums2[n - 1];
        n--;
        last--;
    }
};
```

</TabItem>
</Tabs>

## Approach 3: Two Pointers In-place (Optimal)

As we know, $nums1$ can hold size of $m + n$ array, which can have empty slots at the end to move $nums2$ array. 

Since the array is already sorted, we can place the elements from highest to lowest in $nums1$ by moving from last slot to first. 

Time Complexity: $O(m + n)$, where, $m$ - length of nums1, $n$ - length of nums2

Space complexity: $O(1)$

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        // index position for array placements
        int idx = nums1.length - 1; m -= 1; n -= 1;
        while (n >= 0) {
            // Place elements from right direction to left. 
            if (m >= 0 && nums1[m] > nums2[n]) {
                nums1[idx] = nums1[m--];
            } else {
                nums1[idx] = nums2[n--];
            }
            idx--;
        }
    }
}
```
</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let index = m + n - 1;
    let a = m - 1;
    let b = n - 1;
    while (b >= 0) {
        if (a >= 0 && nums1[a] > nums2[b]) {
            nums1[index] = nums1[a--];
        } else {
            nums1[index] = nums2[b--];
        }
        index--;
    }
}
```
</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@radojicic23"/>

```py
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        index = m + n - 1
        a = m - 1
        b = n - 1
        while b >= 0:
            if a >= 0 and nums1[a] > nums2[b]:
                nums1[index] = nums1[a]
                a -= 1
            else:
                nums1[index] = nums2[b]
                b -= 1
            index -= 1
```
</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@radojicic23"/>

```cpp
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int index = m + n - 1;
        int a = m - 1, b = n - 1;
        while (b >= 0) {
            if (a >= 0 && nums1[a] > nums2[b]) {
                nums1[index] = nums1[a--];
            } else {
                nums1[index] = nums2[b--];
            }
            index--;
        }
    }
};
```
</TabItem>
</Tabs>
