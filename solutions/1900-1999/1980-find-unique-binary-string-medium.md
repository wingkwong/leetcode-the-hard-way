---
description: 'Author: @wingkwong | https://leetcode.com/problems/find-unique-binary-string/'
tags: [Array, String, Backtracking]
---

# 1980 - Find Unique Binary String (Medium)

## Problem Link

https://leetcode.com/problems/find-unique-binary-string/

## Problem Statement

Given an array of strings `nums` containing `n` **unique** binary strings each of length `n`, return _a binary string of length_ `n` _that **does not appear** in_ `nums`_. If there are multiple answers, you may return **any** of them_.



**Example 1:**

```
Input: nums = ["01","10"]
Output: "11"
Explanation: "11" does not appear in nums. "00" would also be correct.
```

**Example 2:**

```
Input: nums = ["00","01"]
Output: "11"
Explanation: "11" does not appear in nums. "10" would also be correct.
```

**Example 3:**

```
Input: nums = ["111","011","001"]
Output: "101"
Explanation: "101" does not appear in nums. "000", "010", "100", and "110" would also be correct.
```

**Constraints:**

* `n == nums.length`
* `1 <= n <= 16`
* `nums[i].length == n`
* `nums[i]` is either `'0'` or `'1'`.
* All the strings of `nums` are **unique**.

## Approach 1: Hash Map

First we store the existing binary string into a hash map. Then we try to build all binary strings one by one and check if it exists in the hash map or not. If so, we return the answer.

As $$n$$ is at most $$16$$, there would be at most $$2 ^ {16} = 65536$$ possibilities. To find all of them, we can do the following.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
// try all 2 ^ n possibilities
for (int i = 0; i < 1 << n; i ++) {
    string s;
    // if the bit is set, mark it as one
    if (i & (1 << j)) s += '1';
    // else mark it as zero
    else s += '0'
    // TODO: do something with s
    // s here would be one of the binary string
}
```

</TabItem>
</Tabs>

Here's the full solution.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    string findDifferentBinaryString(vector<string>& nums) {
        string ans;
        // put existing binary strings into a hash map
        unordered_map<string, int> m;
        for (auto x : nums) m[x]++;
        int n = nums.size();
        // build all binary strings
        for (int i = 0; i < 1 << n; i++) {
            string s;
            for (int j = 0; j < n; j++) {
                s += (i & (1 << j)) ? '1' : '0';
            }
            // not found in hash map -> found the answer
            if (!m.count(s)) {
                ans = s;
                break;
            }
        }
        return ans;
    }
};
```

</TabItem>
</Tabs>
