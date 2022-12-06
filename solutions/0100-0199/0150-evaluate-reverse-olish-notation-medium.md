---
description: "Author: @ColeB2 | https://leetcode.com/problems/evaluate-reverse-polish-notation/"
tags: [Array, Math, Stack]
---

# 0150 - Evaluate Reverse Polish Notation (Medium)

## Problem Link

https://leetcode.com/problems/evaluate-reverse-polish-notation/

## Problem Statement

Evaluate the value of an arithmetic expression in [Reverse Polish Notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation).

Valid operators are `+`, `-`, `*`, and `/`. Each operand may be an integer or another expression.

**Note** that division between two integers should truncate toward zero.

It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.

**Example 1:**

```
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
```

**Example 2:**

```
Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
```

**Example 3:**

```
Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
```

**Constraints:**
- `1 <= tokens.length <= 10^4`
- `tokens[i]` is either an operator: `"+"`, `"-"`, `"*"`, or `"/"`, or an integer in the range `[-200, 200]`.

## Approach 1: Stack

We need to understand that Reverse Polish Notation aka postfix notation, is a notation where the operators follow the operands. Meaning when we iterate through `tokens` we are going to reach at least 2 numbers before we reach an operator. Example: `["2","1","+"]` This also resembles how a stack works, so by placing numbers in a stack, we will have access to the last 2 numbers that entered the stack, so that we can pop them off to perform the operation whenever we reach the operator.

The main problem to solve is now that we know we need to use a stack, but in which order do we handle our operations? For addition and multiplication, the order won't matter, but for subtraction and division, there is a difference depending on which number subtracts from which, or which is the dividend. By analyzing the examples we can see that the first number that gets popped off the stack appears to be our `y` value, and the second appears to be our `x` value in any expression $x / y$ or $x - y$.

Example: if our stack looks like: `[4,2]`, and our token is `/`. The expression should be analyzed as y=2, x=4 as we pop off the y first then the x, which will give us an answer of $4/2=2$ and not $2/4=0.5$ which would truncate towards 0 as 0.

Note: We can also significantly improve readability by utilizing a hash map, and lambda functions to map our operators to the operations they perform, instead of nesting a bunch of if/else clauses. But we could also utilize if/else, or switch cases, then for each case, `+`, `-`, `*`, and `/`, perform the required operation/function utilizing the top 2 numbers from the stack as the parameters.

Time Complexity: $$O(n)$$ where n is the length of the input, tokens.

Space Complexity: $$O(n)$$ for our stack, which will depend on the length of the input, tokens.


<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        # First we initialize our hash map which will map our
        # operators directly to the operations they perform.
        # We also utilize lambda functions, which are just anonymous,
        # nameless function.
        # "+" maps to function which takes params x,y and adds them.
        # "-" maps to function which takes params x,y and subtracts them.
        # "*" maps to function which takes params x,y and multiplies them.
        # "/" maps to function which takes params x,y and divides them.
        # Note "/" utilizes regular division, but converts the float to an 
        # int to handle the requirement of needing to truncate towards 0.
        ops = {
            "+": lambda x, y : (x + y),
            "-": lambda x, y : (x - y),
            "*": lambda x, y : (x * y),
            "/": lambda x, y : int(x/y)
        }
        # initialize an empty stack.
        stack = []
        # Loop through each token in tokens, O(n) time, where n is the number of tokens.
        for token in tokens:
            # Check if our token is in our ops hash map. O(1) to check.
            if token in ops:
                # It is, then we pop, remembering the order of y first, then x.
                y,x = stack.pop(), stack.pop()
                # solve our answer, by calling our lambda function by first
                # accessing the value of our hash map the same way we would any 
                # hash map, then, since we know it will return a function, to supply
                # the parameters that the function will need, which we know is x,y.
                answer = ops[token](x,y)
                # remember to append the answer to the stack.
                stack.append(answer)
            # If token is NOT a operator, but a number, add the token to the stack.
            # Remember that we are reading through an array of strings, so 
            # we will convert to an integer first here, to prevent having to convert
            # later when we need to pop it off.
            else:
                stack.append(int(token))
        # Our stack should be empty except for the answer, so we can return that
        # value that is left in the stack.
        return stack[-1]
```

</TabItem>
</Tabs>
