---
description: "Author: @dhanu084, @wingkwong, @jit, @heder | https://leetcode.com/problems/find-the-pivot-integer/"
tags: [Math, Prefix Sum]
---

# 2485 - Find the Pivot Integer (Easy)

## Problem Link

https://leetcode.com/problems/find-the-pivot-integer/

## Problem Statement

Given a positive integer n, find the pivot integer x such that:

The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.
Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.

**Example 1:**

```
Input: n = 8
Output: 6
Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.
```

**Example 2:**

``
Input: n = 1
Output: 1
Explanation: 1 is the pivot integer since: 1 = 1.

```

**Example 3:**

```

Input: n = 4
Output: -1
Explanation: It can be proved that no such integer exist.

```

**Constraints**:
- 1 <= n <= 1000
```

## Approach 1: Math

- Time Complexity: $$O(n)$$

- Space Complexity: $$O(1)$$

<Tabs>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int pivotInteger(int n) {
        int s1 = n * (n + 1) / 2, s2 = 0;
        for (int i = 1; i <= n; i++) {
            s2 += i;
            if (s1 == s2) return i;
            s1 -= i;
        }
        return -1;
    }
};
```

</TabItem>

<TabItem value="py" label="Python">

<SolutionAuthor name="@dhanu084" />

```python

class Solution:
    def pivotInteger(self, n: int) -> int:
        if n == 1:
            return 1

        # calculate the sum till n
        total_sum = 0
        for i in range(1, n + 1):
            total_sum += i

        current_sum = 0
        '''
            start iterating again and increase current_sum and decrease total_sum
            if any case both are equal return that position
        '''
        for i in range(1, n + 1):
            current_sum += i
            if current_sum == total_sum:
                return i
            total_sum -= i

        return -1
```

</TabItem>
</Tabs>

## Approach 2: Binary Search

- Time Complexity: $$O(nlogn)$$

- Space Complexity: $$O(1)$$

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static int fast_io = []() { std::ios::sync_with_stdio(false); cin.tie(nullptr); cout.tie(nullptr); return 0; }();

class Solution {
public:
    __attribute__((disable_sanitizer_instrumentation))
    static int pivotInteger(const int n)  {
        const int total = n * (n + 1) / 2;
        int lo = 1;
        int hi = n;
        while (lo <= hi) {
            const int x = lo + (hi - lo) / 2;
            const int below = (x - 1) * x / 2;
            const int left = below + x;
            const int right = total - below;
            if (left == right) {
                return x;
            } else if (left < right) {
                lo = x + 1;
            } else {
                hi = x - 1;
            }
        }
        return -1;
    }
};
```

</TabItem>

<TabItem value="ruby" label="Ruby">
<SolutionAuthor name="@jit"/>

```ruby
# Binary search:
def pivot_integer(n)
  (1..n).bsearch { |x| (x..n).sum <=> (1..x).sum } || -1
end
```

</TabItem>

</Tabs>