---
description: 'Author: @wkw, @jit | https://leetcode.com/problems/intersection-of-two-arrays-ii/'
tags: [Array, Hash Table, Two Pointers, Binary Search, Sorting]
---

# 0350 - Intersection of Two Arrays II (Easy)

## Problem Link

https://leetcode.com/problems/intersection-of-two-arrays-ii/

## Problem Statement

Given two integer arrays `nums1` and `nums2`, return _an array of their intersection_. Each element in the result must appear as many times as it shows in both arrays and you may return the result in **any order**.

**Example 1:**

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
```

**Example 2:**

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
```

**Constraints:**

- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`

**Follow up:**

- What if the given array is already sorted? How would you optimize your algorithm?
- What if `nums1`'s size is small compared to `nums2`'s size? Which algorithm is better?
- What if elements of `nums2` are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

## Approach 1: Built-in functions

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    vector<int> intersect(vector<int>& a, vector<int>& b) {
        sort(a.begin(), a.end());
        sort(b.begin(), b.end());
        a.erase(set_intersection(a.begin(), a.end(), b.begin(), b.end(), a.begin()), a.end());
        return a;
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        return list((Counter(nums1) & Counter(nums2)).elements())
```

</TabItem>

<TabItem value="scala" label="Scala">
<SolutionAuthor name="@jit"/>

```scala
object Solution {
    def intersect(a: Array[Int], b: Array[Int]) = a intersect b
}
```

</TabItem>
</Tabs>
