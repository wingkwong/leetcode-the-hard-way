---
description: 'Author: @heder, @wingkwong | https://leetcode.com/problems/maximum-odd-binary-number/'
tags: [Math, String, Greedy]
---

# 2864 - Maximum Odd Binary Number (Easy) 

## Problem Link

https://leetcode.com/problems/maximum-odd-binary-number/

## Problem Statement

You are given a **binary** string `s` that contains at least one `'1'`.

You have to **rearrange** the bits in such a way that the resulting binary number is the **maximum odd binary number** that can be created from this combination.

Return *a string representing the maximum odd binary number that can be created from the given combination.*

**Note**that the resulting string **can** have leading zeros.

**Example 1:**

```
Input: s = "010"
Output: "001"
Explanation: Because there is just one '1', it must be in the last position. So the answer is "001".
```

**Example 2:**

```
Input: s = "0101"
Output: "1001"
Explanation: One of the '1's must be in the last position. The maximum number that can be made with the remaining digits is "100". So the answer is "1001".
```

**Constraints:**

- `1 <= s.length <= 100`
- `s` consists only of `'0'` and `'1'`.
- `s` contains at least one `'1'`.

## Approach 1: Count and create a new string

This is the simplest approach. We count the number of '1's and stich together a new string as answer.

Let $$n$$ be the length of the input string, then the

- Time complexity is $$O(n)$$ as we need to scan the input and then stich together the input, to be fair I need to research of stiching the string together here will actually yield a $$O(n)$$ solution, let me know if you have thoughts on this. The

- Space comlexity is $$O(n)$$, if we count the size of the output.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@header"/>

```cpp
string maximumOddBinaryNumber(const string& s) {
    const int ones = count(begin(s), end(s), '1');
    return string(ones - 1, '1') + string(size(s) - ones, '0') + "1";
}
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
class Solution:
    def maximumOddBinaryNumber(self, s: str) -> str:
        n = len(s)
        cnt1 = s.count('1')
        cnt0 = n - cnt1
        return '1' * (cnt1 - 1) + '0' * cnt0 + '1'
```

</TabItem>
</Tabs>

## Approach 2: Count and rewrite in-place

This is like approach 1, but instead of creating a new string, we are rewriting it in-place.

Let $$n$$ be the length of the input string, then the

- Time complexity is $$O(n)$$ as we need to scan the input and rewrite it, and the

- Space comlexity is $$O(1)$$.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
string maximumOddBinaryNumber(string& s) {
    const int ones = count(begin(s), end(s), '1');
    int w = 0;
    for (; w < ones - 1; ++w) s[w] = '1';
    for (; w + 1 < size(s); ++w) s[w] = '0';
    s[w] = '1';
    return s;
}
```

</TabItem>
</Tabs>

## Approach 3: Partation and swap the last 1 in place

We are writing the string in place in a single pass, all that's left to do after `std::partition` is to swap the last '1' to the last position.

- Time complexity is $$O(n)$$ as we need to scan the input and rewrite it, and the

- Space comlexity is $$O(1)$$.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
string maximumOddBinaryNumber(string& s) {
    auto it = partition(begin(s), end(s), [](char ch) { return ch == '1'; });
    iter_swap(prev(it), prev(end(s)));
    return s;
}
```

</TabItem>
</Tabs>