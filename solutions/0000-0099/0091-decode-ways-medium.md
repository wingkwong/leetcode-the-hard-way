---
description: 'Author: @ColeB2, @heder, @wkw | https://leetcode.com/problems/decode-ways/'
tags: [String, Dynamic Programming]
---

# 0091 - Decode Ways (Medium)

## Problem Link

https://leetcode.com/problems/decode-ways/

## Problem Statement

A message containing letters from `A-Z` can be **encoded** into numbers using the following mapping:

```
'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
```

To **decode** an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, `"11106"` can be mapped into:

- `"AAJF"` with the grouping `(1 1 10 6)`
- `"KJF"` with the grouping `(11 10 6)`

Note that the grouping `(1 11 06)` is invalid because `"06"` cannot be mapped into `'F'` since `"6"` is different from `"06"`.

Given a string `s` containing only digits, return _the **number** of ways to **decode** it_.

The test cases are generated so that the answer fits in a **32-bit** integer.

**Example 1:**

```
Input: s = "12"
Output: 2
Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
```

**Example 2:**

```
Input: s = "226"
Output: 3
Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
```

**Example 2:**

```
Input: s = "06"
Output: 0
Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").
```

**Constraints:**

- `1 <= s.length <= 100`
- `s` contains only digits and may contain leading zero(s).

## Approach 1: Bottom-Up Dynamic Programming

We can use a bottom-up dp approach. By looping backwards we have 2 main cases to worry about.

1. Current number is not a zero. If the current number was a 0, we would do nothing, and just leave our current number of ways as 0, as we may not have a valid string that can be decoded. If it is not a 0 though, we know we should have at least the same number of ways that we had in the previous case.
2. If the current number is a $$1$$, or a $$2$$ and the previous was a $$6$$ or less, then the number of ways would be equal to whatever the current number of ways is, plus the number of ways from 2 iterations before.

These two cases work in sequence based on each other. If the current number is a 1 or a 2, then we know from the first case that we have at least as many ways as we had on the previous iteration, so we can update our dp value to reflect that. We also know that based on the second case, we can add the values we have from our dp array from 2 iterations before as the current and previous string values can also be counted now as a single letter we can decode.

Knowing that, we only ever need to track current, 1 before and 2 before, means we don't need to initialize a dp array of all zeroes, and we can use $$O(1)$$ space to just track the 3 values we need.

We can do this, as on any given iteration, we need to know the value of the last iteration $$(dp[i - 1])$$ at least to determine the current value $$(dp[i])$$, and if we can potentially use the current string number as a two-digit string, we would also need to know the value of the dp value from 2 iterations ago $$dp[i - 2]$$.

Time Complexity: $$O(n)$$ where n is the length of the string.

Space Complexity: $$O(1)$$.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def numDecodings(self, s: str) -> int:
        # initialize n, and our 3 dp values
        n = len(s)
        # values are current, previous 1 and previous 2.
        # dp[i], dp[i + 1], dp[i + 2] if we utilized a dp array and
        # looped backwards. Initialize our All of them as 0, to cover
        # the case if re reach a 0, and initialize dp1/dp[i + 1] as
        # 1 to assume that we will have at least 1 way to decode string.
        dp, dp1, dp2 = 0, 1, 0
        # loop through the numbers backwards
        for i in range(n - 1, -1, -1):
            # if number isn't a 0, we need to change it.
            if s[i] != '0':
                # set current dp value, which is 0, to the previous
                # dp value which is dp1/dp[i + 1]
                dp = dp1
            # If we aren't the last digit in the string and the digit
            # is either a 1, or it is a 2, and second is 0->6
            # ie 10->19 or 20->26
            if i + 1 < n and (s[i] == '1' or s[i] == '2' and s[i + 1] <= '6'):
                # add the values from dp2/dp[i + 2] to the current as we
                # have multiple way we can parse this number.
                dp += dp2
            # Reset our dp values. Our current will be 0 again, to handle
            # the case where number may be 0.
            # Previous value: dp1/dp[i + 1] will be what the current dp is.
            # dp2/dp[i + 2] value will be our previous, dp1 value.
            dp, dp1, dp2 = 0, dp, dp1
        # return our previous dp1 value we solved. Which would be the
        # current value on the last iteration, but that gets set to 0.
        return dp1
```

</TabItem>

<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
// Time Complexity: O(N)
// Space Complexity: O(N)
// This solution can be further space-optimized to be O(1).
class Solution {
public:
    // number of ways to do something -> think about dp
    int numDecodings(string s) {
        // cannot map to any character due to the leading zero
        if (s.front() == '0') return 0;
        int n = s.size();
        // dp[i]: number of ways of decoding the substring s[:i]
        vector<int> dp(n + 1);
        // base case
        dp[0] = 1;
        for (int i = 1; i <= n; i++) {
            // check single digit decode
            // valid deocde is possible only when s[i - 1] is not zero
            // if so, take the previous state dp[i - 1]
            // e.g. AB - 1[2]
            if (s[i - 1] != '0') dp[i] = dp[i - 1];
            // check double digit decode
            // by looking at the previous two digits
            // if the substring belongs to the range [10 - 26]
            // then add the previous state dp[i - 2]
            // e.g. L - [12]
            if (i >= 2) {
                // or you can use `stoi(s.substr(i - 2, 2))`
                int x = (s[i - 2] - '0') * 10 + s[i - 1] - '0';
                // check the range
                if (10 <= x && x <= 26) dp[i] += dp[i - 2];
            }
        }
        return dp[n];
    }
};
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wkw"/>

```java
// Time Complexity: O(N)
// Space Complexity: O(N)
// This solution can be further space-optimized to be O(1).
class Solution {
    public int numDecodings(String s) {
        // cannot map to any character due to the leading zero
        if (s.charAt(0) == '0') return 0;
        int n = s.length();
        // dp[i]: number of ways of decoding the substring s[:i]
        int[]  dp = new int[n + 1];
        // base case
        dp[0] = 1;
        for (int i = 1; i <= n; i++) {
            // check single digit decode
            // valid deocde is possible only when s[i - 1] is not zero
            // if so, take the previous state dp[i - 1]
            // e.g. AB - 1[2]
            if (s.charAt(i - 1) != '0') dp[i] = dp[i - 1];
            // check double digit decode
            // by looking at the previous two digits
            // if the substring belongs to the range [10 - 26]
            // then add the previous state dp[i - 2]
            // e.g. L - [12]
            if (i >= 2) {
                // or you can use `stoi(s.substr(i - 2, 2))`
                int x = (s.charAt(i - 2) - '0') * 10 + s.charAt(i - 1) - '0';
                // check the range
                if (10 <= x && x <= 26) dp[i] += dp[i - 2];
            }
        }
        return dp[n];
    }
}
```

</TabItem>
</Tabs>

## Approach 2: Top-Down Dynamic Programming

- Time complexity: $$O(n)$$ with $$n$$ being the length of the string. Memoization helps to prune the recurision tree and makes the differenc here.
- Space Complexity: $$O(n)$$ for memo but also for the the recursion stack.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static int numDecodings(const string& s) {
    vector<int> memo(size(s), -1);
    return dp(s, 0, memo);
}

static int dp(const string& s, int i, vector<int>& memo) {
    if (i == size(s)) return 1;

    if (memo[i] != -1) return memo[i];
    int ans = 0;

    if (s[i] == '0') {
        ans = 0;
    } else {
        ans = dp(s, i + 1, memo);
        if (i + 1 < size(s) && (s[i] == '1'  || s[i] == '2' && s[i + 1] <= '6')) {
            ans += dp(s, i + 2, memo);
        }
    }

    return memo[i] = ans;
}
```

</TabItem>
</Tabs>
