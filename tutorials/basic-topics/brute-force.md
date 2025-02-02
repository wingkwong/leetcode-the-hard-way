---
title: "Brute Force"
description: "Brute Force is used when the problem size is limited"
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - brute force
---

<TutorialCredits authors="@wingkwong"/>

## Overview

The brute force method for solving a problem involves using a simple and straightforward approach to solve the problem, without worrying about optimization. This method is often used as a starting point for solving a problem, as it can help to understand the problem better and develop a basic understanding of its requirements.

The steps for using the brute force method are as follows:

1. Understand the problem and its requirements by reading the problem statement and examples.
2. Develop a simple and straightforward solution that solves the problem by using a nested loop (or loops) to iterate through all possible combinations of the input.
3. Test the solution on the provided test cases to check if it works correctly and returns the expected output.
4. Optimize the solution if necessary, by analyzing its time and space complexity and identifying areas where it can be improved.

Note that the brute force approach often results in a solution that has a high time complexity, it is important to analyze the solution and optimize it, or come up with a more efficient algorithm that solves the problem, because the brute force method is not a good solution for problems that have a large input size or a large number of test cases.

## Example 1: [1480 -Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/)

> Given an array nums. We define a running sum of an array as $runningSum[i] = sum(nums[0] ... nums[i])$.
> Return the running sum of nums.
>
> Input: nums = $[1,2,3,4]$
>
> Output: $[1,3,6,10]$
>
> Explanation: Running sum is obtained as follows: $[1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4]$

For a brute force solution, we iterate each element $a[i]$ and we iterate from $j = [0 .. i]$ to add $a[j]$ to $sum$. This solution is acceptable but it is slow as we have two for-loops here. A better approach would be using [Prefix Sum](../basic-topics/prefix-sum) to reduce time complexity.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        int n = nums.size();
        vector<int> ans(n);
        for (int i = 0; i < n; i++) {
            int sum = 0;
            for (int j = 0; j <= i; j++) {
                sum += nums[j];
            }
            ans[i] = sum;
        }
        return ans;
    }
};
```

</TabItem>
</Tabs>

## Example 2: [2006 - Count Number of Pairs With Absolute Difference K](https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/)

> Given an integer array nums and an integer $k$, return the number of pairs $(i, j)$ where $i < j$ such that $|nums[i] - nums[j]| == k$.
>
> The value of $|x|$ is defined as:
>
> $x$ if $x >= 0$
>
> $-x$ if $x < 0$

Similar to Example 1, we iterate each element and iterate the elements after that to search for each pair to see if the condition can be met or not. Some better approaches would be using [Sliding Window](../basic-topics/sliding-window) or Counting Sort to reduce time complexity.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int countKDifference(vector<int>& nums, int k) {
        int n = nums.size(), ans = 0;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (abs(nums[i] - nums[j]) == k) {
                    ans += 1;
                }
            }
        }
        return ans;
    }
};
```

</TabItem>
</Tabs>

<!-- TODO: Suggeted Problems -->
