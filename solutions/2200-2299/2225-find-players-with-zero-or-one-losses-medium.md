---
description: >-
  Author: @wkw, @heder | https://leetcode.com/problems/find-players-with-zero-or-one-losses/


tags: [Array, Hash Table, Sorting, Counting]
---

# 2225 - Find Players With Zero or One Losses (Medium)

## Problem Link

https://leetcode.com/problems/find-players-with-zero-or-one-losses/

## Problem Statement

You are given an integer array `matches` where `matches[i] = [winneri, loseri]` indicates that the player `winneri` defeated player `loseri` in a match.

Return _a list_ `answer` _of size_ `2` _where:_

- `answer[0]` is a list of all players that have **not** lost any matches.
- `answer[1]` is a list of all players that have lost exactly **one** match.

The values in the two lists should be returned in **increasing** order.

**Note:**

- You should only consider the players that have played **at least one** match.
- The testcases will be generated such that **no** two matches will have the **same** outcome.

**Example 1:**

```
Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
Output: [[1,2,10],[4,5,7,8]]
Explanation:
Players 1, 2, and 10 have not lost any matches.
Players 4, 5, 7, and 8 each have lost one match.
Players 3, 6, and 9 each have lost two matches.
Thus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].
```

**Example 2:**

```
Input: matches = [[2,3],[1,3],[5,4],[6,4]]
Output: [[1,2,5,6],[]]
Explanation:
Players 1, 2, 5, and 6 have not lost any matches.
Players 3 and 4 each have lost two matches.
Thus, answer[0] = [1,2,5,6] and answer[1] = [].
```

**Constraints:**

- `1 <= matches.length <= 10^5`
- `matches[i].length == 2`
- `1 <= winneri, loseri <= 10^5`
- `winneri != loseri`
- All `matches[i]` are **unique**.

## Approach 1: Hash Map (1062ms)

Check the number of times to lose for each player. If it is $$0$$, then this player belongs to $$ans[0]$$. If it is $$1$$, then it belongs to $$ans[1]$$.

Let $$n$$ be the number of matches then the

- Time complexity is $$O(n \log n)$$ we need to look at all the matches which would be $$O(n)$$ but the sort at the end is $$O(n \log n)$$ (kudos @learner_9 for spotting and pointing out the mistake) and the
- Space complexity is $$O(n)$$.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    vector<vector<int>> findWinners(vector<vector<int>>& matches) {
        vector<vector<int>> ans(2);
        unordered_map<int, int> lost;
        // calculate lost matches
        for (auto x : matches) {
            if (!lost.count(x[0])) lost[x[0]] = 0;
            if (!lost.count(x[1])) lost[x[1]] = 0;
            lost[x[1]]++;
        }
        // categorise players
        for (auto x : lost) {
            int who = x.first, lostMatches = x.second;
            if (lostMatches == 0) ans[0].push_back(who);
            else if (lostMatches == 1) ans[1].push_back(who);
        }
        // the values in the two lists should be returned in increasing order
        sort(ans[0].begin(), ans[0].end());
        sort(ans[1].begin(), ans[1].end());
        return ans;
    }
};
```

</TabItem>
</Tabs>

## Approach 2: Set (1249 ms)

Let $$n$$ be the number of matches then the

- Time complexity is $$O(n \log n)$$ because of the insertion into the set / map and the
- Space complexity is $$O(n)$$.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static vector<vector<int>> findWinners(const vector<vector<int>>& matches) noexcept {
    vector<vector<int>> ans(2);

    set<int> win;
    map<int, int> loss;

    for (const vector<int>& match : matches) {
        win.insert(match[0]);
        ++loss[match[1]];
    }

    for (int p : win)
        if (loss.find(p) == end(loss)) ans[0].push_back(p);

    for (auto [p, l] : loss)
        if (l == 1) ans[1].push_back(p);

    return ans;
}
```

</TabItem>
</Tabs>

### Variant with a single map (1069ms)

Picking up on a idea from @stanislav-iablokov we can turn this into a solution with only one map. This is as fast as the solution with the hash set / map.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static vector<vector<int>> findWinners(const vector<vector<int>>& matches) noexcept {
    vector<vector<int>> ans(2);

    map<int, int> loss;

    for (const vector<int>& match : matches) {
        loss[match[0]] += 0;  // make sure the winners are in the map too., just  loss[match[0]]; would work as well
        ++loss[match[1]];
    }

    for (auto [p, l] : loss) {
        if (l == 0) {
            ans[0].push_back(p);
        } else if (l == 1) {
            ans[1].push_back(p);
        }
    }

    return ans;
}
```

</TabItem>
</Tabs>

## Approach 3: Arrays (749ms)

The range of the play number is limited enough that we can just use arrays instead of a hash map / set.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static vector<vector<int>> findWinners(const vector<vector<int>>& matches) noexcept {
    array<bool, 100001> played = {};
    array<int, 100001> losses = {};

    for (const vector<int>& match : matches) {
        played[match[0]] = true;
        played[match[1]] = true;
        ++losses[match[1]];
    }

    vector<vector<int>> ans(2);

    for (int i = 0; i < size(played); ++i) {
        if (played[i]) {
            if (losses[i] == 0) {
                ans[0].push_back(i);
            } else if (losses[i] == 1) {
                ans[1].push_back(i);
            }
        }
    }

    return ans;
}
```

</TabItem>
</Tabs>

Let $$n$$ be the number of matches then the

- Time complexity is $$O(n + c)$$ we need to look at all the matches, but there is a significat constant factor $$c$$ as we need look over the entier arrays and the
- Space complexity is $$O(c)$$, which means it's constant, but it's a large constant.
