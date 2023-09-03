---
description: 'Author: @wingkwong | https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/'
---

# 2840 - Check if Strings Can be Made Equal With Operations II (Medium) 

## Problem Link

https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/

## Problem Statement

You are given two strings `s1` and `s2`, both of length `n`, consisting of **lowercase** English letters.

You can apply the following operation on **any** of the two strings **any** number of times:

- Choose any two indices `i` and `j` such that `i < j` and the difference `j - i` is **even**, then **swap** the two characters at those indices in the string.

Return `true`*if you can make the strings*`s1`*and*`s2`*equal, and*`false`*otherwise*.

**Example 1:**

```
Input: s1 = "abcdba", s2 = "cabdab"
Output: true
Explanation: We can apply the following operations on s1:
- Choose the indices i = 0, j = 2. The resulting string is s1 = "cbadba".
- Choose the indices i = 2, j = 4. The resulting string is s1 = "cbbdaa".
- Choose the indices i = 1, j = 5. The resulting string is s1 = "cabdab" = s2.
```

**Example 2:**

```
Input: s1 = "abe", s2 = "bea"
Output: false
Explanation: It is not possible to make the two strings equal.
```

**Constraints:**

- `n == s1.length == s2.length`
- `1 <= n <= 10 ^ 5`
- `s1` and `s2` consist only of lowercase English letters.

## Approach 1: Sorting

We can only swap any characters with the same parity. We can simply sort all characters at even parity and odd parity for $s1$ and $s2$, then compare if they are all same.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool checkStrings(string s1, string s2) {
        // put all characters in s1 at even index
        // put all characters in s1 at odd index
        vector<int> s1_even, s1_odd;
        for (int i = 0; i < s1.size(); i++) {
            if (i % 2 == 0) s1_even.push_back(s1[i]);
            else s1_odd.push_back(s1[i]);
        }
        // sort them
        sort(s1_even.begin(), s1_even.end());
        sort(s1_odd.begin(), s1_odd.end());
        
        // put all characters in s2 at even index
        // put all characters in s2 at odd index
        vector<int> s2_even, s2_odd;
        for (int i = 0; i < s2.size(); i++) {
            if (i % 2 == 0) s2_even.push_back(s2[i]);
            else s2_odd.push_back(s2[i]);
        }
        // sort them
        sort(s2_even.begin(), s2_even.end());
        sort(s2_odd.begin(), s2_odd.end());

        return s1_even == s2_even && s1_odd == s2_odd;
    }
};
```

</TabItem>
</Tabs>