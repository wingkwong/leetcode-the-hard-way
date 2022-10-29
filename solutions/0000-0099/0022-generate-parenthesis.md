---
description: 'Author: @VetlaPavanKalyan | https://leetcode.com/problems/generate-parentheses/'
---

# 0021 - Generate Parenthesis (Medium)

## Problem Link

https://leetcode.com/problems/generate-parentheses/

## Problem Statement

Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

**Example 1:**

```
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
```

**Example 2:**

```
Input: n = 1
Output: ["()"]
```

**Constraints:**

- `1 <= n <= 8`

## Approach 1: Recursion

Now here we try to solve this question using `Recurssion` and `Backtracking`.

Let's look at the solution, We generate open brackets ( `(` ) using the `if( open > 0 )` condition we can generate open brackets until they are available using this.

And generating Close brackets ( `)` ) is the Logical problem we need to device when we look carefully we can say that the close brackets should be generated only when the `(` count is less than the `)`.

This is Done using `if( open < close )` condition below.

Since Solution deviced is using Recursion the `Time Complexity = O ( 2 ^ n )` where `n` is the Number of Brackets Given.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@VetlaPavanKalyan"/>

```cpp
class Solution {
public:
    vector<string> v;
    void generate(string &s, int open, int close)
    {
        if(open == 0 && close == 0)
        {
            v.push_back(s);
            return;
        }
        if(open > 0)
        {
            s.push_back('(');
            generate(s, open - 1, close);
            s.pop_back();
        }
        if(close > 0)
        {
            if(open < close)
            {
                s.push_back(')');
                generate(s, open, close - 1);
                s.pop_back();
            }
        }
    }
    vector<string> generateParenthesis(int n) {
        string s;
        generate(s, n, n);
        return v;
    }
};
```
</TabItem>
</Tabs>


