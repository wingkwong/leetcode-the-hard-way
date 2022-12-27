---
description: 'Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/first-bad-version/'
---

# 0278 - First Bad Version (Easy)

## Problem Link

https://leetcode.com/problems/first-bad-version/

## Problem Statement

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have `n` versions `[1, 2, ..., n]` and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API `bool isBadVersion(version)` which returns whether `version` is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

**Example 1:**

```
Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
```

**Example 2:**

```
Input: n = 1, bad = 1
Output: 1
```

**Constraints:**

* `1 <= bad <= n <= 2^31 - 1`

## Approach 1: Binary Search

Prerequisite: [Binary Search](../../tutorials/basic-topics/binary-search)

<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
// The API isBadVersion is defined for you.
// bool isBadVersion(int version);

class Solution {
public:
    int firstBadVersion(int n) {
        // init possible range
        int l = 1, r = n;
        while (l < r) {
            int m = l + (r - l) / 2;
            // [F,F,..,F,T,T,T,..,T]
            // exclude m
            if (!isBadVersion(m)) l = m + 1;
            // include m
            else r = m;
        }
        return l;
    }
};
```

</TabItem>

<TabItem value="javascript" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```javascript
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 1;
        let r = n;
        while (l < r) {
            let mid = Math.floor((l + r) / 2);
            if (!isBadVersion(mid)) l = mid + 1;
            else r = mid;
        }
        return l;
    };
};
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@radojicic23"/>

```python
# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        l, r = 1, n
        while l < r:
            mid = (l + r) // 2
            if (isBadVersion(mid)):
                r = mid
            else:
                l = mid + 1
        return l 
```

</TabItem>
</Tabs>
