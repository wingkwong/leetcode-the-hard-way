---
description: 'Author: @wingkwong | https://leetcode.com/problems/smallest-sufficient-team/'
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 1125 - Smallest Sufficient Team (Hard)

## Problem Link

https://leetcode.com/problems/smallest-sufficient-team/

## Problem Statement

In a project, you have a list of required skills `req_skills`, and a list of people. The `ith` person `people[i]` contains a list of skills that the person has.

Consider a sufficient team: a set of people such that for every required skill in `req_skills`, there is at least one person in the team who has that skill. We can represent these teams by the index of each person.

* For example, `team = [0, 1, 3]` represents the people with skills `people[0]`, `people[1]`, and `people[3]`.

Return _any sufficient team of the smallest possible size, represented by the index of each person_. You may return the answer in **any order**.

It is **guaranteed** an answer exists.

**Example 1:**

```
Input: req_skills = ["java","nodejs","reactjs"], people = [["java"],["nodejs"],["nodejs","reactjs"]]
Output: [0,2]
```

**Example 2:**

```
Input: req_skills = ["algorithms","math","java","reactjs","csharp","aws"], people = [["algorithms","math","java"],["algorithms","math","reactjs"],["java","csharp","aws"],["reactjs","csharp"],["csharp","math"],["aws","java"]]
Output: [1,2]
```

**Constraints:**

* `1 <= req_skills.length <= 16`
* `1 <= req_skills[i].length <= 16`
* `req_skills[i]` consists of lowercase English letters.
* All the strings of `req_skills` are **unique**.
* `1 <= people.length <= 60`
* `0 <= people[i].length <= 16`
* `1 <= people[i][j].length <= 16`
* `people[i][j]` consists of lowercase English letters.
* All the strings of `people[i]` are **unique**.
* Every skill in `people[i]` is a skill in `req_skills`.
* It is guaranteed a sufficient team exists.

## Approach 1: DP Bit Masking

Since the skills are strings, we need to digitise them first. For example, given req\_skills = \["java","nodejs","reactjs"], we can turn it to \[0, 1, 2] where each number map the corresponding skill. Let $$dp[i]$$ be the number of people for the mask $$i$$ and $$ans[j]$$ be the list of people chosen for mask $$j$$. We iterate each people to calculate its skills and iterate each mask to see if adding this person to the team from the old mask could have a smaller team size for the new mask. If so, update $$dp$$ and add this person to $$ans$$.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> smallestSufficientTeam(vector<string>& req_skills, vector<vector<string>>& people) {
        int n = req_skills.size(), m = people.size();
        // digitize skills
        unordered_map<string, int> skills;
        for (int i = 0; i < n; i++) skills[req_skills[i]] = i;
        // dp[mask] : number of people for mask
        vector<int> dp(1 << n, 1e9);
        // ans[mask] : the list of people for mask
        vector<vector<int>> ans(1 << n);
        dp[0] = 0;
        // iterate people
        for (int i = 0; i < m; i++) {
            // skills for the i-th person
            int p_skill = 0;
            for (auto s : people[i]) p_skill |= (1 << skills[s]);
            // compute with previous masks
            for (int mask = 0; mask < (1 << n); mask++) {
                // create a new mask
                int new_mask = mask | p_skill;
                // check if there is a smaller team for the new_mask
                if (dp[mask] + 1 < dp[new_mask]) {
                    dp[new_mask] = dp[mask] + 1;
                    // take the people from mask
                    ans[new_mask] = ans[mask];    
                    // and add the i-th person
                    ans[new_mask].push_back(i);
                }
            }
        } 
        return ans[(1 << n) - 1];
    }
};
```
