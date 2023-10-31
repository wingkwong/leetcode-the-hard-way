---
description: >-
  Author: @vigneshshiv |
  https://leetcode.com/problems/find-the-original-array-of-prefix-xor/
---

# 2433 - Find the Original array of prefix XOR (Medium)

## Problem Link

https://leetcode.com/problems/find-the-original-array-of-prefix-xor/

## Problem Statement

You are given an **integer** array `pref` of size `n`. Find and return _the array `arr` of size `n` that satisfies_:

- `pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i]`.
Note that `^` denotes the **bitwise-xor** operation.

It can be proven that the answer is **unique**.

**Example 1:**

```
Input: pref = [5,2,0,3,1]
Output: [5,7,2,3,2]
Explanation: From the array [5,7,2,3,2] we have the following:
- pref[0] = 5.
- pref[1] = 5 ^ 7 = 2.
- pref[2] = 5 ^ 7 ^ 2 = 0.
- pref[3] = 5 ^ 7 ^ 2 ^ 3 = 3.
- pref[4] = 5 ^ 7 ^ 2 ^ 3 ^ 2 = 1.
```

**Example 2:**

```
Input: pref = [13]
Output: [13]
Explanation: We have pref[0] = arr[0] = 13.
```

**Constraints:**

* `1 <= pref.length <= 10^5`
* `0 <= pref[i] <= 10^6`


## Approach 1: STL

Time Complexity: $O(n)$, where $n$ - # of elements in the array

Space Complexity: $O(n)$

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public int[] findArray(int[] pref) {
        int[] nums = new int[pref.length];
        nums[0] = pref[0];
        for (int i = 1; i < pref.length; i++) {
            nums[i] = pref[i] ^ pref[i - 1];
        }
        return nums;
    }
}
```
</TabItem>
</Tabs>
