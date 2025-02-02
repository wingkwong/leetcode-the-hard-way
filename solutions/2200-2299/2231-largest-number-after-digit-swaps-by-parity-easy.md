---
description: >-
  Author: @wkw | https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/
---

# 2231 - Largest Number After Digit Swaps by Parity (Easy)

## Problem Link

https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/

## Problem Statement

You are given a positive integer `num`. You may swap any two digits of `num` that have the same **parity** (i.e. both odd digits or both even digits).

Return _the **largest** possible value of_ `num` _after **any** number of swaps._

**Example 1:**

```
Input: num = 1234
Output: 3412
Explanation: Swap the digit 3 with the digit 1, this results in the number 3214.
Swap the digit 2 with the digit 4, this results in the number 3412.
Note that there may be other sequences of swaps but it can be shown that 3412 is the largest possible number.
Also note that we may not swap the digit 4 with the digit 1 since they are of different parities.
```

**Example 2:**

```
Input: num = 65875
Output: 87655
Explanation: Swap the digit 8 with the digit 6, this results in the number 85675.
Swap the first digit 5 with the digit 7, this results in the number 87655.
Note that there may be other sequences of swaps but it can be shown that 87655 is the largest possible number.
```

**Constraints:**

- `1 <= num <= 10^9`

## Approach 1: Sorting

Put all digits with the same parity together. Sort them. Build the result.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int largestInteger(int num) {
        int tmp = num;
        vector<int> odd, even;
        // iterate each digit
        // and put the digit to the corresponding parity vector
        while (tmp) {
            int d = tmp % 10;
            if (d % 2 == 0) even.push_back(d);
            else odd.push_back(d);
            tmp /= 10;
        }
        // sort both vectors
        sort(even.begin(), even.end());
        sort(odd.begin(),odd.end());
        // build the ans
        int ans = 0, i = 0, j = 0, k = 0;
        while (num) {
            int d = num % 10;
            ans = (d % 2 == 0 ? even[j++] : odd[i++]) * pow(10, k++) + ans;
            num /= 10;
        }
        return ans;
    }
};
```

## Approach 2: Swapping

We cast the number as a string. Compare each pair the number and check its parity. If they have the same parity and $$s[i]$$ is smaller, then swap it with $$s[j]$$. Return the value as integer.

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int largestInteger(int num) {
        string s = to_string(num);
        int n = s.size();
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (
                    // 1. check if they hv the same parity
                    !((s[i] ^ s[j]) & 1) &&
                    // 2. check if it's worth swapping
                    s[i] < s[j]
                ) {
                    swap(s[i], s[j]);
                }
            }
        }
        return stoi(s);
    }
};
```
