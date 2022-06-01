---
description: 'Author: @wingkwong | https://leetcode.com/problems/count-number-of-texts/'
---

import Authors from '@site/src/components/Authors';

# 2266 - Count Number of Texts (Medium)

## Problem Link

https://leetcode.com/problems/count-number-of-texts/

## Problem Statement

Alice is texting Bob using her phone. The **mapping** of digits to letters is shown in the figure below.

![](https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png)

In order to **add** a letter, Alice has to **press** the key of the corresponding digit `i` times, where `i` is the position of the letter in the key.

* For example, to add the letter `'s'`, Alice has to press `'7'` four times. Similarly, to add the letter `'k'`, Alice has to press `'5'` twice.
* Note that the digits `'0'` and `'1'` do not map to any letters, so Alice **does not** use them.

However, due to an error in transmission, Bob did not receive Alice's text message but received a **string of pressed keys** instead.

* For example, when Alice sent the message `"bob"`, Bob received the string `"2266622"`.

Given a string `pressedKeys` representing the string received by Bob, return _the **total number of possible text messages** Alice could have sent_.

Since the answer may be very large, return it **modulo** `109 + 7`.



**Example 1:**

```
Input: pressedKeys = "22233"
Output: 8
Explanation:
The possible text messages Alice could have sent are:
"aaadd", "abdd", "badd", "cdd", "aaae", "abe", "bae", and "ce".
Since there are 8 possible messages, we return 8.
```

**Example 2:**

```
Input: pressedKeys = "222222222222222222222222222222222222"
Output: 82876089
Explanation:
There are 2082876103 possible text messages Alice could have sent.
Since we need to return the answer modulo 109 + 7, we return 2082876103 % (109 + 7) = 82876089.
```

**Constraints:**

* `1 <= pressedKeys.length <= 10^5`
* `pressedKeys` only consists of digits from `'2'` - `'9'`.

## Approach 1: Dynamic Programming

Every digit except 7 and 9 has 3 keys. We can iterate the input and check previous 3 results. If it is 7 or 9, then check the previous 4 results.

<Authors names="@wingkwing"/>

```cpp
class Solution {
public:
    int countTexts(string pressedKeys) {
        int n = pressedKeys.size(), M = 1e9 + 7;
        // dp[i]: total number of possible text messages ended at i-th character
        vector<int> dp(n + 1);
        // base case
        dp[0] = 1;
        for (int i = 1; i <= n; i++) {
            // take the previous one
            dp[i] = dp[i - 1] % M;
            // check for the case like 77
            if (i > 1 && pressedKeys[i - 1] == pressedKeys[i - 2]) {
                dp[i] = (dp[i] + dp[i - 2]) % M;
                // check for the case like 777
                if (i > 2 && pressedKeys[i - 1] == pressedKeys[i - 3]) {
                    dp[i] = (dp[i] + dp[i - 3]) % M;
                    // check for the case like 7777
                    if (i > 3 && (pressedKeys[i - 1] == '7' || pressedKeys[i - 1] == '9') 
                        && pressedKeys[i - 1] == pressedKeys[i - 4]) {
                        dp[i] = (dp[i] + dp[i - 4]) % M;
                    }
                }
            }
        }
        return dp[n];
    }
};
```
