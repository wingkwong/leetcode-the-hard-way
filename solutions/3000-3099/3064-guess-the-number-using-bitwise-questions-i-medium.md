---
description: 'Author: @wkw | https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/'
tags: [Bit Manipulation, Interactive]
---

# 3064 - Guess the Number Using Bitwise Questions I (Medium)

## Problem Link

https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/

## Problem Statement

There is a number `n` that you have to find.

There is also a pre-defined API `int commonSetBits(int num)`, which returns the number of bits where both `n` and `num` are `1` in that position of their binary representation. In other words, it returns the number of set bits in `n & num`, where `&` is the bitwise `AND` operator.

Return _the number_ `n`.

**Example 1:**

**Input:** n = 31

**Output:** 31

**Explanation:** It can be proven that it's possible to find `31` using the provided API.

**Example 2:**

**Input:** n = 33

**Output:** 33

**Explanation:** It can be proven that it's possible to find `33` using the provided API.

**Constraints:**

- $1 <= n <= 2 ^ 30 - 1$
- $0 <= num <= 2 ^ 30 - 1$
- If you ask for some `num` out of the given range, the output wouldn't be reliable.

## Approach 1: Bit Manipulation

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
/**
 * Definition of commonSetBits API.
 * int commonSetBits(int num);
 */

class Solution {
public:
    int findNumber() {
        int ans = 0;
        // ask for 2 ^ i for 0 <= i < 30
        for (int i = 0; i < 30; i++) {
            // since we only have one bit set in `num`,
            // commonSetBits returns either 0 or 1
            // e.g. 1010 & 0001 -> 0
            // e.g. 1011 & 0001 -> 1
            if (commonSetBits(1 << i)) {
                // if it is 1, then that means this bit in `n` is set
                // then use OR operator to set the bit to `ans`
                ans |= (1 << i);
            }
        }
        return ans;
    }
};
```

</TabItem>
</Tabs>
