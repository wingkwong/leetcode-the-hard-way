---
description: >-
  Author: @wingkwong |
  https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/
---

# 1502 - Can Make Arithmetic Progression From Sequence (Easy)

## Problem Link

https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/

## Problem Statement

A sequence of numbers is called an **arithmetic progression** if the difference between any two consecutive elements is the same.

Given an array of numbers `arr`, return `true` _if the array can be rearranged to form an **arithmetic progression**. Otherwise, return_ `false`.

**Example 1:**

```
Input: arr = [3,5,1]
Output: true
Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.
```

**Example 2:**

```
Input: arr = [1,2,4]
Output: false
Explanation: There is no way to reorder the elements to obtain an arithmetic progression.
```

**Constraints:**

* `2 <= arr.length <= 1000`
* `-106 <= arr[i] <= 10^6`

## Approach 1: Sorting

We sort the array and calculate the first difference. Iterate the rest of the elements to check if they have the same difference between two elements.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool canMakeArithmeticProgression(vector<int>& arr) {
        // reorder first
        sort(arr.begin(), arr.end());
        // calculate the first difference
        int d = arr[1] - arr[0];
        // check the rest of the differences
        // if there is a new difference, then it is false
        // else it is true
        for (int i = 2; i < arr.size(); i++) {
            if (arr[i] - arr[i - 1] != d) {
                return false;
            }
        }
        return true;
    }
};
```

</TabItem>

<TabItem value="rs" label="Rust">
<SolutionAuthor name="@wingkwong"/>

```rs
impl Solution {
    pub fn can_make_arithmetic_progression(mut arr: Vec<i32>) -> bool {
		// sort the arr first
        arr.sort();
		// then we focus on a window of size of 3
        for w in arr.windows(3) {
			// check if the difference between w[0] and w[1] and that between w[1] and w[2]  is same
			// if not, then we cannot make an AP
            if w[2] - w[1] != w[1] - w[0] {
                return false;
            }
        }
        true
    }
}
```

</TabItem>
</Tabs>
