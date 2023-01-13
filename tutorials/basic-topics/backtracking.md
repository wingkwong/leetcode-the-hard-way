---
title: 'Backtracking'
description: 'A backtracking algorithm is used to construct a solution recursively by starting with an empty solution and adding solution one by one.'
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - backtracking
  - algorithm
---

<TutorialAuthors names="@wingkwong"/>

## Overview

Backtracking is a general algorithmic technique that involves exploring all possible solutions to a problem by incrementally building a solution and then undoing (or "backtracking" on) the choices that lead to dead ends. It is a form of depth-first search and is particularly useful for solving problems that involve searching through a large number of possibilities, such as finding all possible solutions to a problem or finding the one solution that satisfies a set of constraints.

The steps for using backtracking to solve a problem are as follows:

1. Understand the problem and its requirements by reading the problem statement and examples.
2. Develop a recursive algorithm that incrementally builds a solution and backtracks when a dead end is reached.
3. Define a base case for the recursion that indicates when a complete solution has been found, and a terminating condition that indicates when to stop the recursion.
4. Test the solution on the provided test cases to check if it works correctly and returns the expected output.

Backtracking can be used for various of problems such as:

- Generating all possible combinations of a set of items.
- Finding all possible solutions to a problem
- Finding a specific solution that satisfies a set of constraints.
- Solving puzzles or other combinatorial problems
- And many more

Backtracking can be very inefficient, especially when the number of possible solutions or the size of the input is large. Therefore, it is important to carefully analyze the problem and develop an efficient backtracking algorithm.

## Example: [0046 - Permutations (Medium)](../../solutions/0000-0099/permutations-medium)

If we have an array $nums$ of distinct integers, what are all the possible permutations? If the input is $[1,2,3]$, then the permutations would be $[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]$. In C++, it is easy to solve this problem by using the built-in STL **next_permutation**. However, we can also solve it using backtracking.

The general steps are as follows.

1\. Sort the input array if necessary. However, in this example, sorting is not necessary.

```cpp
sort(nums.begin(), nums.end());
```

2\. Define `ans` and `tmp` where `ans` is the array storing all final permutations and `tmp` is used to store possible permutations at some point.

```cpp
vector<vector<int>> ans;
vector<int> tmp;
```

3\. Call `backtrack()` function in main

```cpp
backtrack(nums, ans, tmp);
```

4\. Let's add logic in `backtrack()` function. First we need to define the exit criteria. When should we push `tmp` to `ans`? If `tmp` already got enough candidates, then we can push `tmp` to `ans`.

```cpp
if ((int) tmp.size() == (int) nums.size()) {
    ans.push_back(tmp);
    return;
}
```

5\. Iterate each number, check If the candidate has been used or not, skip it if it is already in `tmp`. Otherwise, push it to `tmp` and call `backtrack()` again. After that, remove the previous candidate from `tmp` and move to the next candidate.

```cpp
for (auto x : nums) {
    if (find(tmp.begin(), tmp.end(), x) != tmp.end()) continue;
    tmp.push_back(x);
    backtrack(nums, ans, tmp);
    tmp.pop_back();   
}
```

export const suggestedProblems = [
  {
    "problemName": "0039 - Combination Sum",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/combination-sum/",
    "solutionLink": "../../solutions/0000-0099/combination-sum-medium"
  },
  {
    "problemName": "0040 - Combination Sum II",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/combination-sum-ii/",
    "solutionLink": "../../solutions/0000-0099/combination-sum-ii-medium"
  },
  {
    "problemName": "0046 - Permutations",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/permutations/",
    "solutionLink": "../../solutions/0000-0099/permutations-medium"
  },
  {
    "problemName": "0078 - Subsets",
    "difficulty": "Medium",
    "leetCodeLink": "https://leetcode.com/problems/subsets/",
    "solutionLink": "../../solutions/0000-0099/subsets-medium"
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />