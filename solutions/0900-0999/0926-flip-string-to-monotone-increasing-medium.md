---
description: 'Author: @wkw | https://leetcode.com/problems/flip-string-to-monotone-increasing/'
tags: [String, Dynamic Programming]
---

# 0926 - Flip String to Monotone Increasing (Medium)

## Problem Link

https://leetcode.com/problems/flip-string-to-monotone-increasing/

## Problem Statement

A binary string is monotone increasing if it consists of some number of `0`'s (possibly none), followed by some number of `1`'s (also possibly none).

You are given a binary string `s`. You can flip `s[i]` changing it from `0` to `1` or from `1` to `0`.

Return _the minimum number of flips to make_`s`_monotone increasing_.

**Example 1:**

```
Input: s = "00110"
Output: 1
Explanation: We flip the last digit to get 00111.
```

**Example 2:**

```
Input: s = "010110"
Output: 2
Explanation: We flip to get 011111, or alternatively 000111.
```

**Example 3:**

```
Input: s = "00011000"
Output: 2
Explanation: We flip to get 00000000.
```

**Constraints:**

- `1 <= s.length <= 10^5`
- `s[i]` is either `'0'` or `'1'`.

## Approach 1: Dynamic Programming

Let `dp[i]` be the min flips to make `[0, i)` monotone increasing. Starting from `i = 1`, if `s[i] = 1`, we check the previous character `s[i - 1]`. If it is `1` (e.g. `11...`), then it is monotone increasing already, so`dp[i] = dp[i - 1]`. However, if `s[i - 1] = 0` (e.g. `10...`), then we have two choices - we either flip this zero to make like `11...` or we flip all the ones before this zero (e.g. `00...`). Therefore, we can see the DP transition here.

- if `s[i - 1]` is `1`, then `dp[i] = dp[i - 1]`
- else `dp[i] = min(dp[i - 1] + 1, cnt1)`

since `dp[i]` is always based on `dp[i - 1]`, we can space-optimize it using two variables - `cnt0` and `cnt1` where `cnt0` is `dp[i]` at index `i` and `cnt1` is the number of 1s.

```
if (s[i] == 0) cnt0 = min(cnt0 + 1, cnt1);
else cnt1 += 1;
```

which is essentially same as

```
if (s[i] == 0) cnt0 += 1;
else cnt1 += 1;
cnt0 = min(cnt0, cnt1);
```

Alternatively, we can count the max of `cnt0` and `cnt1` and return `s.size() - cnt1`.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int minFlipsMonoIncr(string s) {
        // counters to count numbers of 0s and 1s
        int cnt0 = 0, cnt1 = 0;
        // for each character
        for(auto x : s) {
            // we count the number of zeros
            if (x == '0') cnt0++;
            // or the number of ones
            else cnt1++;
            // we can either flip all ones to zeros
            // e.g. [111]0000 -> [000]0000
            // or we can just flip the current zero
            // e.g. 001[0] -> 001[1]
            cnt0 = min(cnt0, cnt1);
        }
        return cnt0;
    }
};
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wkw"/>

```java
class Solution {
    public int minFlipsMonoIncr(String s) {
        // counters to count numbers of 0s and 1s
        int cnt0 = 0, cnt1 = 0;
        // for each character
        for (char x : s.toCharArray()) {
            // we count the number of zeros
            if (x == '0') cnt0 += 1;
            // of the number of ones
            else cnt1 += 1;
            // we can either flip all ones to zeros
            // e.g. [111]0000 -> [000]0000
            // or we can just flip the current zero
            // e.g. 001[0] -> 001[1]
            cnt0 = Math.min(cnt0, cnt1);
        }
        return cnt0;
    }
}

```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def minFlipsMonoIncr(self, s: str) -> int:
        # counters to count numbers of 0s and 1s
        cnt0, cnt1 = 0, 0
        # for each character
        for x in s:
            # we count the number of zeros
            if x == '0':
                cnt0 += 1
            # or the number of ones
            else:
                cnt1 += 1
            # we can either flip all ones to zeros
            # e.g. [111]0000 -> [000]0000
            # or we can just flip the current zero
            # e.g. 001[0] -> 001[1]
            cnt0 = min(cnt0, cnt1)
        return cnt0
```

</TabItem>

<TabItem value="rs" label="Rust">
<SolutionAuthor name="@wkw"/>

```rs
impl Solution {
    pub fn min_flips_mono_incr(s: String) -> i32 {
        // counters to count numbers of 0s and 1s
        let mut cnt0 = 0;
        let mut cnt1 = 0;
        // for each character
        for x in s.chars() {
            // we count the number of zeros
            if x == '0' {
                cnt0 += 1;
            }
            // or the number of ones
            else {
                cnt1 += 1;
            }
            // we can either flip all ones to zeros
            // e.g. [111]0000 -> [000]0000
            // or we can just flip the current zero
            // e.g. 001[0] -> 001[1]
            cnt0 = cnt0.min(cnt1);
        }
        cnt0
    }
}
```

</TabItem>
</Tabs>
