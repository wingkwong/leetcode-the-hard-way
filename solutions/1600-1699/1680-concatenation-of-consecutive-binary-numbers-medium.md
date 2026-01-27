---
description: 'Author: @wkw | https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/'
tags: [Math, Bit Manipulation, Simulation]
---

# 1680 - Concatenation of Consecutive Binary Numbers (Medium)

## Problem Link

https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/

## Problem Statement

Given an integer `n`, return _the **decimal value** of the binary string formed by concatenating the binary representations of_`1`_to_`n`\*in order, **modulo\***`1e9 + 7`.

**Example 1:**

```
Input: n = 1
Output: 1
Explanation: "1" in binary corresponds to the decimal value 1.
```

**Example 2:**

```
Input: n = 3
Output: 27
Explanation: In binary, 1, 2, and 3 corresponds to "1", "10", and "11".
After concatenating them, we have "11011", which corresponds to the decimal value 27.
```

**Example 3:**

```
Input: n = 12
Output: 505379714
Explanation: The concatenation results in "1101110010111011110001001101010111100".
The decimal value of that is 118505380540.
After modulo 1e9 + 7, the result is 505379714.
```

**Constraints:**

- `1 <= n <= 10^5`

## Approach 1: Bit Manipulation

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
// Time Complexity: O(N)
// Space Complexity: O(1)
class Solution {
public:
    // the idea is to use bit manipulation to set the current number based on the previous number
    // for example,
    // n = 1, ans = 0b1
    // n = 2 (10), we need to shift 2 bits of the previous ans to the left and add `n`
    // i.e. 1 -> 100 (shift 2 bits to the left) -> 110 (set `10`). ans = 0b110
    // n = 3 (11), we need to shift 2 bits of the previous ans to the left and add `n`
    // i.e 110 -> 11000 (shift 2 bits to the left) -> 11011 (set `11`). ans = 0b11011
    // n = 4 (100), we need to shift 3 bits of the previous ans to the left and add `n`
    // i.e. 11011 -> 11011000 (shift 3 bits to the left) -> 11011100 (set `100). ans = 0b11011100
    // so now we can see a pattern here
    // we need to shift `l` bits of the previous ans to the left and add the current `i`
    // how to know `l`? it is not difficult to see `x` only increases when we meet power of 2
    int concatenatedBinary(int n) {
        // `l` is the bit length to be shifted
        int M = 1e9 + 7, l = 0;
        // use long here as it potentially could overflow for int
        long ans = 0;
        for (int i = 1; i <= n; i++) {
            // i & (i - 1) means removing the rightmost set bit
            // e.g. 100100 -> 100000
            //      000001 -> 000000
            //      000000 -> 000000
            // after removal, if it is 0, then it means it is power of 2
            // as all power of 2 only contains 1 set bit
            // if it is power of 2, we increase the bit length `l`
            if ((i & (i - 1)) == 0) l += 1;
            // (ans << l) means shifting the orginal answer `l` bits to th left
            // (x | i) means  using OR operation to set the bit
            // e.g. 0001 << 3 = 0001000
            // e.g. 0001000 | 0001111 = 0001111
            ans = ((ans << l) | i) % M;
        }
        return ans;
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
# Time Complexity: O(N)
# Space Complexity: O(1)
class Solution:
    # the idea is to use bit manipulation to set the current number based on the previous number
    # for example,
    # n = 1, ans = 0b1
    # n = 2 (10), we need to shift 2 bits of the previous ans to the left and add `n`
    # i.e. 1 -> 100 (shift 2 bits to the left) -> 110 (set `10`). ans = 0b110
    # n = 3 (11), we need to shift 2 bits of the previous ans to the left and add `n`
    # i.e 110 -> 11000 (shift 2 bits to the left) -> 11011 (set `11`). ans = 0b11011
    # n = 4 (100), we need to shift 3 bits of the previous ans to the left and add `n`
    # i.e. 11011 -> 11011000 (shift 3 bits to the left) -> 11011100 (set `100). ans = 0b11011100
    # so now we can see a pattern here
    # we need to shift `l` bits of the previous ans to the left and add the current `i`
    # how to know `l`? it is not difficult to see `x` only increases when we meet power of 2
    def concatenatedBinary(self, n: int) -> int:
        M = 10 ** 9 + 7
        # `l` is the bit length to be shifted
        l, ans = 0, 0
        for i in range(1, n + 1):
            # i & (i - 1) means removing the rightmost set bit
            # e.g. 100100 -> 100000
            #      000001 -> 000000
            #      000000 -> 000000
            # after removal, if it is 0, then it means it is power of 2
            # as all power of 2 only contains 1 set bit
            # if it is power of 2, we increase the bit length `l`
            if i & (i - 1) == 0:
                l += 1
            # (ans << l) means shifting the orginal answer `l` bits to th left
            # (x | i) means  using OR operation to set the bit
            # e.g. 0001 << 3 = 0001000
            # e.g. 0001000 | 0001111 = 0001111
            ans = ((ans << l) | i) % M
        return ans
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wkw"/>

```java
// Time Complexity: O(N)
// Space Complexity: O(1)
class Solution {
    // the idea is to use bit manipulation to set the current number based on the previous number
    // for example,
    // n = 1, ans = 0b1
    // n = 2 (10), we need to shift 2 bits of the previous ans to the left and add `n`
    // i.e. 1 -> 100 (shift 2 bits to the left) -> 110 (set `10`). ans = 0b110
    // n = 3 (11), we need to shift 2 bits of the previous ans to the left and add `n`
    // i.e 110 -> 11000 (shift 2 bits to the left) -> 11011 (set `11`). ans = 0b11011
    // n = 4 (100), we need to shift 3 bits of the previous ans to the left and add `n`
    // i.e. 11011 -> 11011000 (shift 3 bits to the left) -> 11011100 (set `100). ans = 0b11011100
    // so now we can see a pattern here
    // we need to shift `l` bits of the previous ans to the left and add the current `i`
    // how to know `l`? it is not difficult to see `x` only increases when we meet power of 2
    public int concatenatedBinary(int n) {
        // `l` is the bit length to be shifted
        int M = 1000000007, l = 0;
        // use long here as it potentially could overflow for int
        long ans = 0;
        for (int i = 1; i <= n; i++) {
            // i & (i - 1) means removing the rightmost set bit
            // e.g. 100100 -> 100000
            //      000001 -> 000000
            //      000000 -> 000000
            // after removal, if it is 0, then it means it is power of 2
            // as all power of 2 only contains 1 set bit
            // if it is power of 2, we increase the bit length `l`
            if ((i & (i - 1)) == 0) l += 1;
            // (ans << l) means shifting the orginal answer `l` bits to th left
            // (x | i) means  using OR operation to set the bit
            // e.g. 0001 << 3 = 0001000
            // e.g. 0001000 | 0001111 = 0001111
            ans = ((ans << l) | i) % M;
        }
        return (int) ans;
    }
}
```

</TabItem>

<TabItem value="go" label="Go">
<SolutionAuthor name="@wkw"/>

```go
// Time Complexity: O(N)
// Space Complexity: O(1)

// the idea is to use bit manipulation to set the current number based on the previous number
// for example,
// n = 1, ans = 0b1
// n = 2 (10), we need to shift 2 bits of the previous ans to the left and add `n`
// i.e. 1 -> 100 (shift 2 bits to the left) -> 110 (set `10`). ans = 0b110
// n = 3 (11), we need to shift 2 bits of the previous ans to the left and add `n`
// i.e 110 -> 11000 (shift 2 bits to the left) -> 11011 (set `11`). ans = 0b11011
// n = 4 (100), we need to shift 3 bits of the previous ans to the left and add `n`
// i.e. 11011 -> 11011000 (shift 3 bits to the left) -> 11011100 (set `100). ans = 0b11011100
// so now we can see a pattern here
// we need to shift `l` bits of the previous ans to the left and add the current `i`
// how to know `l`? it is not difficult to see `x` only increases when we meet power of 2
func concatenatedBinary(n int) int {
    // `l` is the bit length to be shifted
    ans, l, M := 0, 0, 1_000_000_007
    for i := 1; i <= n; i++ {
        // i & (i - 1) means removing the rightmost set bit
        // e.g. 100100 -> 100000
        //      000001 -> 000000
        //      000000 -> 000000
        // after removal, if it is 0, then it means it is power of 2
        // as all power of 2 only contains 1 set bit
        // if it is power of 2, we increase the bit length `l`
        if (i & (i - 1) == 0) {
            l += 1
        }
        // (ans << l) means shifting the orginal answer `l` bits to th left
        // (x | i) means  using OR operation to set the bit
        // e.g. 0001 << 3 = 0001000
        // e.g. 0001000 | 0001111 = 0001111
        ans = ((ans << l) | i) % M
    }
    return ans
}

```

</TabItem>
</Tabs>
