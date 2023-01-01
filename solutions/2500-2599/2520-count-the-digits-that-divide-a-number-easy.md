---
description: 'Author: @wingkwong | https://leetcode.com/problems/count-the-digits-that-divide-a-number/'
---

# 2520 - Count the Digits That Divide a Number (Easy) 

## Problem Link

https://leetcode.com/problems/count-the-digits-that-divide-a-number/

## Problem Statement

Given an integer `num`, return *the number of digits in num that divide*`num`.

An integer `val` divides `nums` if `nums % val == 0`.

**Example 1:**

```
Input: num = 7
Output: 1
Explanation: 7 divides itself, hence the answer is 1.
```

**Example 2:**

```
Input: num = 121
Output: 2
Explanation: 121 is divisible by 1, but not 2. Since 1 occurs twice as a digit, we return 2.
```

**Example 3:**

```
Input: num = 1248
Output: 4
Explanation: 1248 is divisible by all of its digits, hence the answer is 4.
```

**Constraints:**

- `1 <= num <= 109`
- `num` does not contain `0` as one of its digits.

## Approach 1: Convert to String

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int countDigits(int num) {
        int ans = 0;
        // convert num to string
        string s = to_string(num);
        // for each character
        for (auto c : s) {
            // convert it to number
            int d = c - '0';
            // check if it divisible
            ans += num % d == 0;
        }
        return ans;
    }
};
```

</TabItem>
</Tabs>

## Approach 2: Check each digit

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int countDigits(int num) {
        int ans = 0, n = num;
        while (n > 0) {
            // check each digit using remainder
            ans += num % (n % 10) == 0;
            // move to the next digit
            n /= 10;
        }
        return ans;
    }
};
```

</TabItem>
</Tabs>