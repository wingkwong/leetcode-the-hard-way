---
description: 'Author: @DoubleSpicy | https://leetcode.com/problems/add-binary/'
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 0067 - Add Binary (easy)

## Problem Link

https://leetcode.com/problems/add-binary/

## Problem Statement

Given two binary strings `a` and `b`, return their sum as a binary string.

**Example 1:**

```
Input: a = "11", b = "1"
Output: "100"
```

**Example 2:**

```
Input: a = "1010", b = "1011"
Output: "10101"
```

**Example 3:**

```
Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
```

**Constraints:**

* 1 <= a.length, b.length <= 104
* a and b consist only of '0' or '1' characters.
* Each string does not contain leading zeros except for the zero itself.

## Approach 1: Adding Digits One By One

For each digit, start from least significant ones, calculate the sum of digits and the carry. If the value > 1 then carry to the next digit.

The annoying part of this problem is taking care about index out-of-bound.

<SolutionAuthor name="@DoubleSpicy"/>

```cpp
class Solution {
public:
    string addBinary(string a, string b) {
        // preallocate a long string, no copying is needed in iteration.
        string ans(max(a.size(), b.size()), '0'); 
        int i = a.size()-1, j = b.size()-1, k = ans.size()-1, carry = 0;
        while(i >= 0 || j >= 0){
            // if all digits are used up for one of the string, give 0 for that part.
            int digit = (i >= 0 ? a[i] - '0': 0) + (j >= 0 ? b[j] - '0': 0) + carry;
            ans[k] = (digit % 2) + '0';
            carry = digit / 2;
            i--;
            j--;
            k--;
        }
        if(carry){
            return to_string(carry) + ans;
        }
        return ans;
    }
};
```

