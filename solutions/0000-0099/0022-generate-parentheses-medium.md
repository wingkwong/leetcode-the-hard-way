---
description: "Author: @ColeB2, @vigneshshiv | https://leetcode.com/problems/generate-parentheses/description/"
tags: [String, Dynamic Programming, Backtracking]
---

# 0022 - Generate Parentheses (Medium)

## Problem Link

https://leetcode.com/problems/generate-parentheses/description/

## Problem Statement

Given `n` pairs of parentheses, write a function to _generate all combinations of well-formed parentheses_.

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

## Approach 1: Backtracking

To solve this, we need to understack how valid parentheses work. We know that we can not start a valid parentheses pair with a closing parentheses, so we always need an open parentheses before we add a close parentheses. We also know that we can have as many open parentheses as we see fit (obviously limited by $n=8$ in this specific question), as well as open and close pairs inbetween any open and close parentheses pairs. $((()))$ or $(()())$ etc.

Knowing that we have can create some rules on how to place parentheses inside our string.
1. If we reach a limit of both open and close parentheses, then we can add our answer to our output array. ie: $open == close == 0$.
2. If we reach a limit of open parentheses but not close, that is number of open parentheses is equal to $n$, but number of close isn't, then we only need to add closing parentheses. ie: $open == 0$ but $close != 0$.
3. If we have an even amount of open and close parentheses, we can only place an open parentheses, as there isn't anything to close. ie: $open == close$.
4. Finally that means if we have more close parentheses than open and either are not 0. We can place either another open parentheses, or a close parentheses.

Know these rules we can use a stack, and backtrack our way, by placing the appropriate parentheses using our rules at each step, decrementing the proper count of either open or close depending on what we did to the string, and returning our output when we run out of items in the stack.

Now the time and space for this is not a simple answer. If we count out the number of parentheses in each output for our $n$ from $1 to 8$, we get counts of $1, 2, 5, 14, 42, 132, 429$, and $1430$. Knowing that, we can see they are not quite bound by $2^n$ ($2, 4, 8, 16, 32, 64, 128, 256$), but they are bound by $2^{(2*n)}$ or $4^n$ ($4, 16, 64, 256, 1024, 4096, 16384, 65536$). They are also even bound by $3^n$ for all n from 1 to 8. 

But if we want a more accurate bound, we must use math. An astute reader might also see that the number of parentheses matches very well with the [Catalan Numbers](https://en.wikipedia.org/wiki/Catalan_number). That is true, that our time does more resemble $$O(n * Catalan(n))$$ Where $n$ is the $n$ from our question, the number of parentheses pairs, and $Catalan(n)$ is the nth catalan number. Which asymptotically grows as: $$O(\frac{4^n}{n^{3/2}\sqrt(\pi)})$$. So by removing constant, root of pi, and substituting it in for Catalan(n) we get a closer bound of $$O(\frac{4^n}{\sqrt(n)})$$

Time and Space Complexity: $$O(4^n)$$ does a good job as being a loose upper bound, but if you want a close one, $$O(\frac{4^n}{\sqrt(n)})$$ works, and I urge you to research more about Catalan number to find out why. But for our case $$O(4^n)$$ is fairly sufficient. 


<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        # Initialize our output array, and our stack.
        # Our stack will be formatted in the form of:
        # (parentheses string, open_left, close_left) Where we will initialize
        # an empty string, as we haven't started yet, and n as remaining number
        # of opening and closing parentheses.
        output = []
        stack = [("", n, n)]
        while stack:
            # Here we pop off the stack our parentheses string, and our remaining
            # count of opening and closing parentheses.
            paren, _open, _close = stack.pop()
            # Here we can combine steps 1, and 2 above using some clever python.
            # If opening has reach 0, we can only add closing parentheses.
            if _open == 0:
                # So we add remaining number of closing parentheses to string.
                # Python can handle that using string multiplication.
                # If _close > 0 it will, ex 3, it will create ")))" to add to end.
                # If _close == 0, it will add nothing to the end.
                # In either case, _close will reach 0, and be ready to add to output.
                paren += ")" * _close
                # Add answer to our output and continue.
                output.append(paren)
            # If we have even number of open and close parentheses, we know we
            # can't close anything, so we have to add opening parentheses.
            elif _open == _close:
                stack.append((paren + "(", _open - 1, _close))
            # Left in the 4th step, We can do either add an open, or close. So we
            # will do both, and allow our backtracking stack to handle both cases.
            else:
                stack.append((paren + "(", _open - 1, _close))
                stack.append((paren + ")", _open, _close - 1))
        return output
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public List<String> generateParenthesis(int n) {
        char[] pairs = new char[2 * n];
        List<String> result = new ArrayList<>();
        generateParenthesis(pairs, n, n, 0, result);
        return result;
    }
    
    public void generateParenthesis(char[] pairs, int open, int close, int index, List<String> result) {
        if (open < 0 || close < open) return;
        if (open == 0 && close == 0) {
            result.add(String.valueOf(pairs));
        } else {
            pairs[index] = '(';
            generateParenthesis(pairs, open - 1, close, index + 1, result);
            // Close it properly at the right index
            pairs[index] = ')';
            generateParenthesis(pairs, open, close - 1, index + 1, result);
        }
    }
}
```

</TabItem>
</Tabs>