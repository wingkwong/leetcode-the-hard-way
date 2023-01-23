---
description: 'Author: @wingkwong | https://leetcode.com/problems/find-the-town-judge/'
tags: [Array, Hash Table, Graph]
---

# 0997 - Find the Town Judge (Easy) 

## Problem Link

https://leetcode.com/problems/find-the-town-judge/

## Problem Statement

In a town, there are `n` people labeled from `1` to `n`. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

1. The town judge trusts nobody.
2. Everybody (except for the town judge) trusts the town judge.
3. There is exactly one person that satisfies properties **1** and **2**.

You are given an array `trust` where `trust[i] = [ai, bi]` representing that the person labeled `ai` trusts the person labeled `bi`.

Return *the label of the town judge if the town judge exists and can be identified, or return*`-1`*otherwise*.

**Example 1:**

```
Input: n = 2, trust = [[1,2]]
Output: 2
```

**Example 2:**

```
Input: n = 3, trust = [[1,3],[2,3]]
Output: 3
```

**Example 3:**

```
Input: n = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1
```

**Constraints:**

- `1 <= n <= 1000`
- `0 <= trust.length <= 104`
- `trust[i].length == 2`
- All the pairs of `trust` are **unique**.
- `ai != bi`
- `1 <= ai, bi <= n`

## Approach 1: Counting (Two Arrays)

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int findJudge(int n, vector<vector<int>>& trust) {
		// indegree (in) = trusted by others
		// outdegree (out) = trust others
        vector<int> in(n + 1), out(n + 1);
		// calculate the in and out
        for (auto x : trust) in[x[1]]++, out[x[0]]++;
		// iterate each person
        for (int i = 1; i <= n; i++) {
			// the judge will be the one with indegree = n - 1 and outdegree = 0
            if (in[i] == n - 1 && out[i] == 0) {
				// found the judge
                return i;
            }
        }
        // cannot identify -> return -1
        return -1;
    }
};

```

</TabItem>
</Tabs>

## Approach 2: Counting (One Array)

We can further simplify Approach 1 with one array since we know `indegrees - outdegrees = n - 1`.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int findJudge(int n, vector<vector<int>>& trust) {
        // n people
        vector<int> v(n + 1);
        for (auto x : trust) {
            // out: trust other
            v[x[0]]--;
            // in: trusted by others
            v[x[1]]++;
        }
        for (int i = 1; i <= n; i++) {
            // we are looking for indegrees - outdegrees = n - 1
            if (v[i] == n - 1) {
                // if so, the i-th person will be the judge
                return i;
            }
        }
        // cannot identify -> return -1
        return -1;
    }
};

```

</TabItem>
</Tabs>