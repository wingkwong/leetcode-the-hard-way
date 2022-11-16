---
description: >-
  Author: @1SundayMorning |
  https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/
---

# 2232 -  Minimize Result by Adding Parentheses to Expression (Medium)

## Problem Link

https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/

## Problem Statement

You are given a **0-indexed** string expression of the form `"<num1>+<num2>"` where `<num1>` and `<num2>` represent positive integers.

Add a pair of parentheses to expression such that after the addition of parentheses, expression is a **valid** mathematical expression and evaluates to the **smallest** possible value. The left parenthesis **must** be added to the left of '+' and the right parenthesis **must** be added to the right of '+'.

Return expression after adding a pair of parentheses such that expression evaluates to the ***smallest*** possible value. If there are multiple answers that yield the same result, return any of them.

The input has been generated such that the original value of expression, and the value of expression after adding any pair of parentheses that meets the requirements fits within a signed 32-bit integer.

**Example 1:**

```
Input: expression = "247+38"
Output: "2(47+38)"
Explanation: The expression evaluates to 2 * (47 + 38) = 2 * 85 = 170.
Note that "2(4)7+38" is invalid because the right parenthesis must be to the right of the '+'.
It can be shown that 170 is the smallest possible value.
```

**Example 2:**

```
Input: expression = "12+34"
Output: "1(2+3)4"
Explanation: The expression evaluates to 1 * (2 + 3) * 4 = 1 * 5 * 4 = 20.
```

**Example 3:**

```
Input: expression = "999+999"
Output: "(999+999)"
Explanation: The expression evaluates to 999 + 999 = 1998.
```

**Constraints:**

* `3 <= expression.length <= 10`
* `expression consists of digits from '1' to '9' and '+'.`
* `expression starts and ends with digits.`
* `expression contains exactly one '+'.`
* `The original value of expression, and the value of expression after adding any pair of parentheses that meets the requirements fits within a signed 32-bit integer.`

## Approach 1: Iterative

To solve, separate the expression into the two operands of the sum expression.

Then, iteratively place the open and close parenthesis at every possible location in the left and right substrings

Next, evaluate the expression by computing the inner sum, and then multiplying the outer values contained in the substrings
outside of the parenthesis.

Compare the result of the expression to the current minimum, and if it's lower, save the minimum and the locations of the
open and close parenthesis.

Once all possible expressions have been evaluated, construct the final expression using the saved locations of the open and
close parenthesis.

Return the expression.

Time Complexity: $O(a * b)$

Space Complexity: $O(n * a * b)$

where $a$ and $b$ are the length of the left and right operands of the input sum

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@1SundayMorning"/>

```cpp
class Solution {
public:
    string minimizeResult(string expression) {
        // find the location of the plus and separate the left and right operands
        int plus_idx = 0;
        while (expression[plus_idx] != '+') {
            plus_idx++;
        }
        
        string left = expression.substr(0, plus_idx);
        string right = expression.substr(plus_idx + 1, expression.length() - plus_idx);
        
        // set initial value of min to be INT_MAX
        int min = INT_MAX;
        int final_p1 = 0;
        int final_p2 = 0;
        
        // iterate through all valid parenthesis locations in each of the
        // left and right operands
        for(int p1 = 0; p1 < left.length(); p1++) {
            for (int p2 = 1; p2 <= right.length(); p2++) {
                // saving the substrings on either side of the parenthesis
                // to be converted to integers later
                string left_mul_str = left.substr(0, p1);
                string left_sum_str = left.substr(p1);
                string right_sum_str = right.substr(0, p2);
                string right_mul_str = right.substr(p2);
                
                // in the case where the entire expression is enclosed in parenthesis, 
                // set left mul and right mul to none.
                // This will be the case when their respective substrings are empty.
                int left_mul = 1;
                int left_sum = stoi(left_sum_str);
                int right_sum = stoi(right_sum_str);
                int right_mul = 1;
                
                if (!left_mul_str.empty())
                    left_mul = stoi(left_mul_str);
                if (!right_mul_str.empty()) {
                    right_mul = stoi(right_mul_str);
                }
                
                // evaluate the expression.
                int exp_result = left_mul * (left_sum + right_sum) * right_mul;
                
                // if final value is our new min, save the indices of the parenthesis
                if (exp_result < min) {
                    min = exp_result;
                    final_p1 = p1;
                    final_p2 = p2;
                }
            }
        }
        
        // construct and return the final expression with parenthesis added
        return left.substr(0, final_p1) +     \
            "(" + left.substr(final_p1) +     \
            "+" + right.substr(0, final_p2) + \
            ")" + right.substr(final_p2);
    }
};
```

</TabItem>
</Tabs>
