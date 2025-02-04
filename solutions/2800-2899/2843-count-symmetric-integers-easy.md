---
description: 'Author: @heder | https://leetcode.com/problems/count-symmetric-integers/'
tags: [Math, Enumeration]
---

# 2843 - Count Symmetric Integers (Easy)

## Problem Link

https://leetcode.com/problems/count-symmetric-integers/

## Problem Statement

You are given two positive integers `low` and `high`.

An integer `x` consisting of `2 * n` digits is **symmetric** if the sum of the first `n` digits of `x` is equal to the sum of the last `n` digits of `x`. Numbers with an odd number of digits are never symmetric.

Return _the **number of symmetric** integers in the range_ `[low, high]`.

**Example 1:**

```
Input: low = 1, high = 100
Output: 9
Explanation: There are 9 symmetric integers between 1 and 100: 11, 22, 33, 44, 55, 66, 77, 88, and 99.
```

**Example 2:**

```
Input: low = 1200, high = 1230
Output: 4
Explanation: There are 4 symmetric integers between 1200 and 1230: 1203, 1212, 1221, and 1230.
```

**Constraints:**

- $1 <= low <= high <= 10^4$

## Approach 1: bf, check range, divide and modulo, O(n)

This solution is checking every number in the range if it's a "symmetric integer", which is done by checking if the number is in the range for an such an integer and then just doing division and modulo operations. Given that these numbers never change we could also pre compute them at compile time and use a prefix sum to answer the question in constant time.

Let $$n$$ be the size of the input range ($$high - low + 1$$) then the

- Time complexity is $$O(n)$$ as we need to check each number, and the check is constant time and the
- Space comlexity is $$O(1)$$ as we only need loop variables.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
int countSymmetricIntegers(int low, int high) {
    int ans = 0;
    for (int i = low; i <= high; ++i)
        ans += isSymmetricInteger(i);
    return ans;
}

bool isSymmetricInteger(int x) {
    if (x >= 10 && x <= 99) {
        return x / 10 == x % 10;
    } else if (x >= 1000 && x <= 9999) {
        const int lo = x % 100;
        const int hi = x / 100;
        return lo % 10 + lo / 10 == hi % 10 + hi / 10;
    }
    return false;
}
```

</TabItem>
</Tabs>

## Approach 2: prefix sum, do the work at compile time, O(1)

As pointed out, we can do most of the work at compile time and just use a prefix sum to evaluate at runtime.

Let $$n$$ be the size of the input range ($$high - low + 1$$) then the

- Time complexity is $$O(1)$$ as we need do a lookup into the prefix sum, and the
- Space comlexity is $$O(1)$$, which might be a bit controversial, but we only keep ~10k integers, which doesn't changed based on the input.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
namespace {
constexpr bool isSymmetricInteger(int x) {
    if (x >= 10 && x <= 99) {
        return x / 10 == x % 10;
    } else if (x >= 1000 && x <= 9999) {
        const int lo = x % 100;
        const int hi = x / 100;
        return lo % 10 + lo / 10 == hi % 10 + hi / 10;
    }
    return false;
}

constexpr auto gen_ps() {
    array<int, 10001> ans = {};
    for (int i = 1; i < size(ans); ++i)
        ans[i] = ans[i - 1] + isSymmetricInteger(i);
    return ans;
}

constexpr auto ps = gen_ps();

}  // namespace

class Solution {
public:
    static int countSymmetricIntegers(int low, int high) {
        return ps[high] - ps[low - 1];
    }
};
```

</TabItem>
</Tabs>
