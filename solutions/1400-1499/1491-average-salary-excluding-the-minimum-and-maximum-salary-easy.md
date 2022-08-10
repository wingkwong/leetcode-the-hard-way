---
description: 'Author: @wingkwong | https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/'
---

import SolutionAuthor from '@site/src/components/SolutionAuthor';

# 1491 - Average Salary Excluding the Minimum and Maximum Salary (Easy)

## Problem Link

https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/

## Problem Statement

You are given an array of **unique** integers `salary` where `salary[i]` is the salary of the `ith` employee.

Return _the average salary of employees excluding the minimum and maximum salary_. Answers within `10-5` of the actual answer will be accepted.

**Example 1:**

```
Input: salary = [4000,3000,1000,2000]
Output: 2500.00000
Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500
```

**Example 2:**

```
Input: salary = [1000,2000,3000]
Output: 2000.00000
Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
Average salary excluding minimum and maximum salary is (2000) / 1 = 2000
```

**Constraints:**

* `3 <= salary.length <= 100`
* `1000 <= salary[i] <= 10^6`
* All the integers of `salary` are **unique**.

## Approach 1: One Pass

We iterate $$salary$$ and calculate the total sum $$sum$$, the minimum value $$mi$$ and the maximum value $$mx$$. The average salary of employees excluding the minimum and maximum salary would be $$sum - mi - mx$$. Since we exclude two items, we just need to divide by $$len(salary) - 2$$.

<SolutionAuthor name="@wingkwong"/>

```go
func average(salary []int) float64 {
    sum, n := 0, len(salary)
    mi, mx := 100005, 0
    for _, x := range salary {
        // calculate the total sum
        sum += x
        // find the minimum value
        if x < mi { mi = x }
        // find the maximum value
        if x > mx { mx = x }
    }
    // exclude mi & mx and get the avg 
    return float64(sum - mi - mx) / float64(n - 2)
}
```

<SolutionAuthor name="@wingkwong"/>

```rs
use std::cmp;

impl Solution {
    pub fn average(salary: Vec<i32>) -> f64 {
        let mut sum = 0;
        let mut mx = 0;
        let mut mi = 100005;
        let n = salary.len() as f64;
        for x in salary {
            sum += x;
            mx = cmp::max(mx, x);
            mi = cmp::min(mi, x);
        }
        return ((sum - mx - mi) as f64 / (n - 2.0)); 
    }
}
```