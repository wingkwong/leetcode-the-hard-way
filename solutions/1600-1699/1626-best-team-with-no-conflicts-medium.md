---
description: 'Author: @wkw | https://leetcode.com/problems/best-team-with-no-conflicts/'
tags: [Array, Dynamic Programming, Sorting]
---

# 1626 - Best Team With No Conflicts (Medium)

## Problem Link

https://leetcode.com/problems/best-team-with-no-conflicts/

## Problem Statement

You are the manager of a basketball team. For the upcoming tournament, you want to choose the team with the highest overall score. The score of the team is the **sum** of scores of all the players in the team.

However, the basketball team is not allowed to have **conflicts**. A **conflict** exists if a younger player has a **strictly higher** score than an older player. A conflict does **not** occur between players of the same age.

Given two lists, `scores` and `ages`, where each `scores[i]` and `ages[i]` represents the score and age of the `ith` player, respectively, return _the highest overall score of all possible basketball teams_.

**Example 1:**

```
Input: scores = [1,3,5,10,15], ages = [1,2,3,4,5]
Output: 34
Explanation: You can choose all the players.
```

**Example 2:**

```
Input: scores = [4,5,6,5], ages = [2,1,2,1]
Output: 16
Explanation: It is best to choose the last 3 players. Notice that you are allowed to choose multiple people of the same age.
```

**Example 3:**

```
Input: scores = [1,2,3,5], ages = [8,9,10,1]
Output: 6
Explanation: It is best to choose the first 3 players.
```

**Constraints:**

- `1 <= scores.length, ages.length <= 1000`
- `scores.length == ages.length`
- `1 <= scores[i] <= 106`
- `1 <= ages[i] <= 1000`

## Approach 1: Dynamic Programming

For this kind of DP questions, remember the following

- calculate the result if you skip this candidate
- calculate the result if you pick this candidate
- take the max result of them then memorise it

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    int dp[1005][1005];
    // i is the index of g
    // age is the max age so far
    int dfs(vector<pair<int, int>>& g, int i, int age) {
        // if i reaches the end, then return 0
        if (i == g.size()) return 0;
        // if dp[i][age] is calculated before, return it directly
        if (dp[i][age] != -1) return dp[i][age];
        // we have two choices - either take this player or skip it
        // we first calculate the score if we skip this player
        int res = dfs(g, i + 1, age);
        // if we want to take this player, we need to check if there is a conflict
        // since the score is sorted, we just need to check the age
        // if we take this player, the score will be increased by g[i].first
        // then we add the result from `dfs(g, i + 1, g[i].second)`
        // since we take this player, we need ti mark the age as g[i].second
        if (g[i].second >= age) res = max(res, g[i].first + dfs(g, i + 1, g[i].second));
        // memo it
        return dp[i][age] = res;
    }
    int bestTeamScore(vector<int>& scores, vector<int>& ages) {
        // init dp with initial value -1
        memset(dp, -1, sizeof(dp));
        // we sort by score, then age
        vector<pair<int, int>> g;
        for (int i = 0; i < scores.size(); i++) {
            g.push_back({scores[i], ages[i]});
        }
        sort(g.begin(), g.end());
        return dfs(g, 0, 0);
    }
};
```

</TabItem>
</Tabs>
