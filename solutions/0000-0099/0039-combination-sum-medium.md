---
description: 'Author: @wingkwong, @radojicic23, @ColeB2 | https://leetcode.com/problems/combination-sum/'
tags: [Array, Backtracking]
---

# 0039 - Combination Sum (Medium)

## Problem Link

https://leetcode.com/problems/combination-sum/

## Problem Statement

Given an array of **distinct** integers `candidates` and a target integer `target`, return _a list of all **unique combinations** of_ `candidates` _where the chosen numbers sum to_ `target`_._ You may return the combinations in **any order**.

The **same** number may be chosen from `candidates` an **unlimited number of times**. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is **guaranteed** that the number of unique combinations that sum up to `target` is less than `150` combinations for the given input.

**Example 1:**

```
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
```

**Example 2:**

```
Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
```

**Example 3:**

```
Input: candidates = [2], target = 1
Output: [] 
```

**Constraints:**

* `1 <= candidates.length <= 30`
* `1 <= candidates[i] <= 200`
* All elements of `candidates` are **distinct**.
* `1 <= target <= 500`

## Approach 1: Backtracking

We can apply backtracking in this problem.

First, we sort the array and build our candidates incrementally. We iterate from starting point and  push each candidate to `tmp` and call `backtrack()` with the updated  $$target_{new} = target_{old} - candidates[i]$$.

If we have a valid solution, we push `tmp` to answer and abandon a candidate.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    void backtrack(vector<int>& candidates, int target, vector<vector<int>>& ans, vector<int>& tmp, int start) {
        if(target == 0) {
            ans.push_back(tmp);
            return;
        }
        for(int i = start; i < candidates.size() && target >= candidates[i]; i++){
            tmp.push_back(candidates[i]);
            backtrack(candidates, target - candidates[i], ans, tmp, i);
            tmp.pop_back();
        }
    }
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        sort(candidates.begin(), candidates.end());
        vector<vector<int>> ans;
        vector<int> tmp;
        backtrack(candidates, target, ans, tmp, 0);
        return ans;
    }
};
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@radojicic23"/>

```python
class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []

        def dfs(i, curr, total):
            if total == target:
                res.append(curr.copy())
                return 
            if i >= len(candidates) or total > target:
                return 
            curr.append(candidates[i])
            dfs(i, curr, total + candidates[i])
            curr.pop()
            dfs(i + 1, curr, total)
        
        dfs(0, [], 0)
        return res 
```

</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let res = [];
    backtrack(0, [], target);
    return res;

    function backtrack(i, curr, target) {
        if (target == 0) {
            res.push(curr.slice());
        }
        if (target <= 0 || i == candidates.length) {
            return;
        }
        curr.push(candidates[i]);
        backtrack(i, curr, target - candidates[i]);
        curr.pop();
        backtrack(i + 1, curr, target);
    }
};
```

</TabItem>
</Tabs>


## Approach 2: Dynamic Programming - Tabulation

For our dynamic programming approach, we can solve how many combinations sum up to all the targets from 0 to the target. That is how many combinations can we create to solve for $$0,1,2...target$$.

First, we would need a 2D dynamic programming array, $$dp$$ which would be an array of arrays that contains all possible combinations to reach that index of the array. Ie, for index $$0$$, how many combinations of candidates reach $$0$$, and that would repeat all the way up to an index of $$target + 1$$ which is our $$target$$ number.

We can do that by looping through each number, $$num$$ of candidates, and looping through each sub-target, $$sub_target$$ inside our $$dp$$ array starting at our $$num$$ and ending at $$target + 1$$. Then for each $$sub\_target$$, we can do 2 things.
1. On the first iteration, obviously the $$num$$ will equal our $$sub\_target$$ so we can append an array of just that number to the $$dp$$ array at an index of $$sub_target$$.
2. Then we can also append every combination from our $$dp$$ array at the position of $$sub\_target - num$$.


For example 2, starting at candidate number 2:
```
candidates = [2,3,5]
target = 8:
       0  1  2  3  4  5  6  7  8
dp = [[ ][ ][ ][ ][ ][ ][ ][ ][ ]]
             ^ start our loop at candidate number, 2.
             ^ since we are starting here, we know 2 adds up to 2, so we can add 2.
```
```
       0  1  2  3  4  5  6  7  8
dp = [[ ][ ][2][ ][ ][ ][ ][ ][ ]]
       ^  check 2-candidate number = 2-2=0 and add all those to current array.
                ^ repeat the process for all sub_targets until we reach the end.
```
For explanation's sake, I will skip the odds, since we can see we have nothing at positions $$3-2=1$$, $$5-2=3$$, $$7-2=5$$.
```
       0  1   2   3    4    5  6  7  8
dp = [[ ][ ][[2]][ ][[2,2]][ ][ ][ ][ ]]
                   ^ add all from 4-2=2
                        ...... ^ add all from 6-2 = 4
       0  1   2   3    4    5     6     7  8
dp = [[ ][ ][[2]][ ][[2,2]][ ][[2,2,2]][ ][ ]]
                                           ^add all from 8-2=6
       0  1   2   3    4    5     6     7     8
dp = [[ ][ ][[2]][ ][[2,2]][ ][[2,2,2]][ ][2,2,2,2]]
```
For candidate number $$3$$, you can imagine we would add a combo array with number $$3$$ to $$dp$$ array at $$sub\_target$$ 3, and all the combinations from $$dp$$ array at $$0$$, and repeat for numbers, $$4,5,6,7,8$$, and similarly for $$5$$ we would start at $$5$$, and repeat for $$6,7,8$$
The finished product would look something like this:
```
dp = [
    0   1   2      3
    [], [], [[2]], [[3]],
    4         5              6                    7
    [[2, 2]], [[2, 3], [5]], [[2, 2, 2], [3, 3]], [[2, 2, 3], [2, 5]],
    8
    [[2, 2, 2, 2], [2, 3, 3], [3, 5]]
]
```


<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        # initialize our DP array. This will have empty lists of
        # all possible combos to reach target index from
        # 0 to target + 1 and contain all state so we can access it
        # quickly.
        dp = [[] for _ in range(target + 1)]
        # loop through each candidate number, nums
        for num in candidates:
            # loop through all the sub targets starting at the num
            # and going until we reach our target. Since we are 0-indexed
            # our target will be at target + 1
            for sub_target in range(num, target + 1):
                # first iteration our num will be the sub target, so
                # we can add list containing that number to the 
                # dp array.
                if num == sub_target:
                    dp[sub_target].append([num])
                # loop through each combo we created at position:
                # sub_target - num
                for combo in dp[sub_target - num]:
                    # add those with current num to current sub_target
                    # position
                    dp[sub_target].append(combo + [num])
        # our answer will reside in the last position of our
        # dp array, so we can return it.
        return dp[-1]
        
```

</TabItem>
</Tabs>
