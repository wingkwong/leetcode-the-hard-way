---
description: >-
  Author: @wingkwong, @ganajayant |
  https://leetcode.com/problems/partition-array-according-to-given-pivot/
---

# 2161 - Partition Array According to Given Pivot (Medium)

## Problem Link

https://leetcode.com/problems/partition-array-according-to-given-pivot/

## Problem Statement

You are given a **0-indexed** integer array `nums` and an integer `pivot`. Rearrange `nums` such that the following conditions are satisfied:

* Every element less than `pivot` appears **before** every element greater than `pivot`.
* Every element equal to `pivot` appears **in between** the elements less than and greater than `pivot`.
* The **relative order** of the elements less than `pivot` and the elements greater than `pivot` is maintained.
  * More formally, consider every `pi`, `pj` where `pi` is the new position of the `ith` element and `pj` is the new position of the `jth` element. For elements less than `pivot`, if `i < j` and `nums[i] < pivot` and `nums[j] < pivot`, then `pi < pj`. Similarly for elements greater than `pivot`, if `i < j` and `nums[i] > pivot` and `nums[j] > pivot`, then `pi < pj`.

Return `nums` _after the rearrangement._

**Example 1:**

```
Input: nums = [9,12,5,10,14,3,10], pivot = 10
Output: [9,5,3,10,10,12,14]
Explanation: 
The elements 9, 5, and 3 are less than the pivot so they are on the left side of the array.
The elements 12 and 14 are greater than the pivot so they are on the right side of the array.
The relative ordering of the elements less than and greater than pivot is also maintained. [9, 5, 3] and [12, 14] are the respective orderings.
```

**Example 2:**

```
Input: nums = [-3,4,3,2], pivot = 2
Output: [-3,2,4,3]
Explanation: 
The element -3 is less than the pivot so it is on the left side of the array.
The elements 4 and 3 are greater than the pivot so they are on the right side of the array.
The relative ordering of the elements less than and greater than pivot is also maintained. [-3] and [4, 3] are the respective orderings. 
```

**Constraints:**

* `1 <= nums.length <= 105`
* `-106 <= nums[i] <= 106`
* `pivot` equals to an element of `nums`.

## Approach 1: Push elements to 3 arrays

It is same as

* Pushing the elements less the pivot.
* Pushing the elements equal to the pivot
* Pushing the elements greater than the pivot

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> pivotArray(vector<int>& nums, int p) {
        vector<int> l, r, m;
        for (auto x : nums) {
            if (x < p) l.push_back(x);
            else if (x > p) r.push_back(x);
            else m.push_back(x);
        }
        l.insert(l.end(), m.begin(), m.end());
        l.insert(l.end(), r.begin(), r.end());
        return l;
    }
};
```

</TabItem>
<TabItem value="java" label="Java">
<SolutionAuthor name="@ganajayant"/>

```java
class Solution {
    public int[] pivotArray(int[] nums, int pivot) {
        LinkedList<Integer> l = new LinkedList<>();
        LinkedList<Integer> r = new LinkedList<>();
        LinkedList<Integer> m = new LinkedList<>();
        for (int x : nums) {
            if (x < pivot) {
                l.add(x);
            } else if (x > pivot) {
                m.add(x);
            } else {
                r.add(x);
            }
        }
        l.addAll(r);
        l.addAll(m);
        return l.stream().mapToInt(i -> i).toArray();
    }
}
```
</TabItem>
</Tabs>


## Approach 2: 3 Passes with 1 array

Same idea as Approach 1 but we only use one array.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> pivotArray(vector<int>& nums, int p) {
        vector<int> ans;
        for (auto x : nums) if (x < p) ans.push_back(x);
        for (auto x : nums) if (x == p) ans.push_back(x);
        for (auto x : nums) if (x > p) ans.push_back(x);
        return ans;
    }
};
```

</TabItem>
<TabItem value="java" label="Java">
<SolutionAuthor name="@ganajayant"/>

```java
class Solution {
    public int[] pivotArray(int[] nums, int pivot) {
        LinkedList<Integer> ll = new LinkedList<>();
        for (int x : nums)
            if (x < pivot)
                ll.add(x);
        for (int x : nums)
            if (x == pivot)
                ll.add(x);
        for (int x : nums)
            if (x > pivot)
                ll.add(x);
        return ll.stream().mapToInt(i -> i).toArray();
    }
}
```
</TabItem>
</Tabs>



