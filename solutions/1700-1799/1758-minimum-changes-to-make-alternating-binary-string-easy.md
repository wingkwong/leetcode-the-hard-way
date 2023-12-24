---
description: 'Author: @jit, @wingkwong | https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/'
tags: [String]
---

# 1758 - Minimum Changes To Make Alternating Binary String (Easy)

## Problem Link

https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/

## Problem Statement

You are given a string `s` consisting only of the characters `'0'` and `'1'`. In one operation, you can change any `'0'` to `'1'` or vice versa.

The string is called alternating if no two adjacent characters are equal. For example, the string `"010"` is alternating, while the string `"0100"` is not.

Return *the **minimum** number of operations needed to make* `s` *alternating*.

**Example 1:**

```
Input: s = "0100"
Output: 1
Explanation: If you change the last character to '1', s will be "0101", which is alternating.
```

**Example 2:**

```
Input: s = "10"
Output: 0
Explanation: s is already alternating.
```

**Example 3:**

```
Input: s = "1111"
Output: 2
Explanation: You need two operations to reach "0101" or "1010".
```

**Constraints:**

- $1 <= s.length <= 10^4$
- `s[i]` is either `'0'` or `'1'`.

## Approach 1: Counting

<Tabs>
<TabItem value="scala" label="Scala">
<SolutionAuthor name="@jit"/>

```scala
object Solution {
  // Count swaps required for an alternating string starting with 0.
  // The alternating string starting with 1 is just the complement.
  def minOperations(s: String): Int = {
    val zSwaps = s.indices.count(i => s(i).asDigit == i % 2)
    zSwaps min (s.length - zSwaps)
  }
}
```

</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int minOperations(string s) {
        int cnt = 0, n = s.size();
        for (int i = 0; i < n; i++) cnt += s[i] - '0' == i % 2;
        return min(cnt, n - cnt);
    }
};
```

</TabItem>
</Tabs>