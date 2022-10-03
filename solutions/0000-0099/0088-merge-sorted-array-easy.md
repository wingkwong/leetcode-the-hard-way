---
description: 'Author: @deepanshu-rawat6 | https://leetcode.com/problems/merge-sorted-array/'
tags: [Array, Sorting,Two Pointers]
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
* `-109 <= nums1[i], nums2[j] <= 109`
 

**Follow up:** Can you come up with an algorithm that runs in `O(m + n)` time?

## Approach 1: Brute Force(Sorting)

Since, this problem is under easy category, we know `nums1` has length `m+n` so we add the elements of `nums2` in the empty spaces of `nums1`. Finally, we sort the `nums1` with any standard sorting algorithm. This solution gives O(N logN) time complexity and O(1) space complexity.

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@deepanshu-rawat6"/>

```java
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        for(int i=0;i<n;i++){
            nums1[m+i]=nums2[i];
        }
        Arrays.sort(nums1);
    }
}
```
</TabItem>
</Tabs>

## Approach 2: Two Pointer Approach

A better way to do it is using one-pass two pointer approach. We make a copy of `nums1` into `temp`, then iterate through both arrays `nums2` and `temp` comparing their elements in **ascending fashion** with the help of two pointers `i` and `j`,simultaneouslty adding the smaller elements into `nums1`. Finally, the bigger elements out of either `nums2` or `temp` are going to be added by seperately iterating over them if `i` or `j` satisfies the conditions.
This solution gives O(m+n) or O(N) time complexity and O(m) or O(N) space complexity.

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@deepanshu-rawat6"/>

```java
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i=0,j=0,k=0;
        int[] temp= Arrays.copyOfRange(nums1, 0, m);
        while(i<m && j<n){
            if(temp[i]<nums2[j]){
                nums1[k]=temp[i];
                i++;
            }else{
                nums1[k]=nums2[j];
                j++;
            }
            k++;
        }
        while(i<m){
            nums1[k]=temp[i];
            k++;
            i++;
        }
        while(j<n){
            nums1[k]=nums2[j];
            k++;
            j++;
        }
    }
}
```
</TabItem>
</Tabs>

