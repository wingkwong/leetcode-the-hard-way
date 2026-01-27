---
description: >-
  Author: @wkw | https://leetcode.com/problems/solving-questions-with-brainpower/
---

# 2140 - Solving Questions With Brainpower (Medium)

## Problem Link

https://leetcode.com/problems/solving-questions-with-brainpower/

## Problem Statement

You are given a **0-indexed** array `questions` where `questions[i] = [points_i, brainpower_i]`. The questions must be solved in order (i.e., from the first question to the last).

- **If you solve** the `i`-th question:
  - You earn `points_i` points.
  - You are then forced to **skip** the next `brainpower_i` questions.
- **If you skip** the `i`-th question:
  - You move directly to the next question without earning any points.

Your task is to determine the maximum number of points you can earn by either solving or skipping each question optimally.

## Examples

### Example 1

- **Input:** `questions = [[3,2], [4,3], [4,4], [2,5]]`
- **Output:** `5`
- **Explanation:**
  - You can solve question `0` to earn `3` points. After solving it, you must skip the next `2` questions (questions `1` and `2`).
  - Then, you solve question `3` to earn an additional `2` points.
  - In total, you earn `3 + 2 = 5` points, which is optimal.

### Example 2

- **Input:** `questions = [[1,1], [2,2], [3,3], [4,4], [5,5]]`
- **Output:** (Depends on the optimal choices; input here serves as an additional test case.)
- **Explanation:**
  - The maximum points depend on intelligently deciding which questions to skip or solve to maximize the overall score.

_Note: Replace or augment the examples with additional ones if needed, based on what the original problem description provides._

## Constraints

- $1 <= questions.length <= 10^5$
- $questions[i].length == 2$
- $1 <= points_i, brainpower_i <= 10^5$

## Approach 1: Dynamic Programming

We can use top-down dynamic programming approach with memoization to solve this problem. We can notice that we have two choices at each step - either skip the current question or solve the current question. If we skip the question, then we simply move to the next one, which is $(i + 1)$. If we solve the $i$-th question, we earn $p$ points and must skip the next $b$ questions. Therefore, we jump to the question at index $i + b + 1$.

For the base case, when the index $i$ goes beyond the last question (i.e. $i >= n$), then return 0 since there are no more question to process.

The complexity for both time & space is $O(n)$.

<SolutionAuthor name="@wkw"/>

```py
# TC: O(n)
# SC: O(n)
class Solution:
    def mostPoints(self, questions: List[List[int]]) -> int:
        n = len(questions)
        @cache
        def dfs(i):
            # base case
            if i >= n: return 0
            p, b = questions[i]
            # two choices at each step - skip or not skip
            # skip - go to next question
            # not skip - take the point and skip next b questions
            # -> max(skip, not skip)
            return max(dfs(i + 1), p + dfs(i + b + 1))
        return dfs(0)
```
