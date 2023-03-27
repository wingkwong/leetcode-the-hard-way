---
description: 'Author: @wingkwong, @ColeB2, @radojicic23 | https://leetcode.com/problems/combination-sum-ii/'
tags: [Array, Backtracking]
---

# 0040 - Combination Sum II (Medium)

## Problem Link

https://leetcode.com/problems/combination-sum-ii/

## Problem Statement

Given a collection of candidate numbers (`candidates`) and a target number (`target`), find all unique combinations in `candidates` where the candidate numbers sum to `target`.

Each number in `candidates` may only be used **once** in the combination.

**Note:** The solution set must not contain duplicate combinations.

**Example 1:**

```
Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
```

**Example 2:**

```
Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]
```

**Constraints:**

* `1 <= candidates.length <= 100`
* `1 <= candidates[i] <= 50`
* `1 <= target <= 30`

## Approach 1: Backtracking

Similar to [0039 - Combination Sum (Medium)](combination-sum-medium), the only difference is each number can be used once in the combination. To avoid overcounting, we can simply add `i != start && candidates[i] == candidates[i - 1].`

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
            if(i != start && candidates[i] == candidates[i - 1]) continue;
            tmp.push_back(candidates[i]);
            backtrack(candidates, target - candidates[i], ans, tmp, i + 1);
            tmp.pop_back();
        }
    }
    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
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
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    # Iterative Backtracking Approach
    # Time O(n*2^n)
    # We need to make a decision tree where we take/don't take
    # the next number, and during each decision, we have to create
    # a new list of combinations to pass to the stack.
    # Space O(2^n)
    # Our stack may reach the size of our decision tree.
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        # Sort first, greatly simplify our backtracking and help
        # us to avoid our duplicates by only moving forward.
        candidates.sort()
        # initialize our combinations to return.
        combinations = []
        # initialize stack: 3 parameters, combos, our current target
        # value, and our position in candidates array.
        stack = [([], 0, 0)]
        while stack:
            # pop off our combos, current target score, and position.
            combo, targ, pos = stack.pop()
            # if our we reached target value add to combinations.
            if targ == target:
                combinations.append(combo)
                continue
            # set a prev value so when looping through candidates
            # to create combinations, we don't repeat values.
            # 1,1,1,5 --> after first 1, we will skip other 1's.
            # This will help us avoid our dupes.
            prev = -1
            for i in range(pos, len(candidates)):
                # skip clause if the candidate was same as previous
                if candidates[i] == prev:
                    # skip this iteration
                    continue
                # early termination. If the current candidate would push
                # us above the target value, then no need to continue
                # checking values as since we are sorted, all values
                # beyond this point would push us above the target.
                if candidates[i] + targ > target:
                    # break the loop
                    break
                # create our new combo array to add to the stack
                new_combo = combo + [candidates[i]]
                # append new combo, new target score, next position to
                # start the loop from.
                stack.append((new_combo, targ + candidates[i], i + 1))
                # set new previous for subsequent loops.
                prev = candidates[i]
        return combinations
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
var combinationSum2 = function(candidates, target) {
    res = [];
    candidates.sort((a, b) => a - b);
    function backtrack(index, curr, target) {
        if (target < 0) return;
        if (target == 0) {
            res.push(curr.slice());
            return;
        }
        for (let i = index; i < candidates.length; i++) {
            if (i != index && candidates[i] === candidates[i - 1]) continue;
            curr.push(candidates[i]);
            backtrack(i + 1, curr, target - candidates[i]);
            curr.pop();
        }
    }
    backtrack(0, [], target);
    return res;
};
```

</TabItem>
</Tabs>
