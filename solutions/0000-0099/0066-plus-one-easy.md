---
description: 'Author: @ColeB2 | https://leetcode.com/problems/plus-one/'
tags: [Array, Math]
---

# 0066 - Plus One (Easy)

## Problem Link

https://leetcode.com/problems/plus-one/

## Problem Statement

You are given a **large integer** represented as an integer array `digits`, where each `digits[i]` is the `ith` digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading `0`'s.

Increment the large integer by one and return _the resulting array of digits_.

**Example 1:**

```
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
```

**Example 2:**

```
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
```

**Example 3:**

```
Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
```

**Constraints:**

- `1 <= digits.length <= 100`
- `0 <= digits[i] <= 9`
- `digits` does not contain any leading `0`'s.

## Approach 1: Math

We can treat this exactly how we would normally treat a math problem, where we must add one. That is to line our numbers up and from right-to-left add them together, and if any digit goes over nine, we must carry over the value to the next place.

To do this, we can initialize a $$carry$$ value as 1, and consider this as our one we are going to add, then loop from right-left over our digits array, adding the current digit and the carry value if it exists (Note: it will always exist on the first iteration as we initialize it like this to be the plus one value we want to add). We must also remember that the digit we create may go over $$9$$, so we have to place the one's portion at the current $$i$$ position and use the tens portion as our carry over for the next iteration, which we can perform both of those operations using the modulo operator, and integer division. If we have no carry over, we can break early, as we know there is no need to continue iterating.

Finally remember that we can traverse digits, and still have a carry at the end, so we must perform one last $$O(n)$$ operation to insert our carry at the start of digits (if carry is not $$0$$), and return our answer.

Time Complexity: $$O(n)$$. Where $$n$$ is the length of $$digits$$. In the worst case we are going to iterate over the entire $$digits$$ array, and inserting to the start of the array will take $$O(n)$$ time as well.

Space Complexity: $$O(1)$$, we can do this in place, using variables to track our $$carry$$ value.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        # initialize a carry of one, which represents our "plus one"
        carry = 1
        # iterate over the array backwards from ones digit to left most digit.
        for i in range(len(digits) - 1, -1, -1):
            # if we have a carry value: we can add it to the current digit.
            if carry:
                # get the number after adding the current digit to carry.
                num = digits[i] + carry
                # replace our current digit with the ones place of the
                # the number we created above. The Modulo operator can do this
                # for us.
                digits[i] = num % 10
                # integer division to get the 10's place of num, which will
                # be 0 if it is less than 10.
                carry = num // 10
            # if carry doesn't exist, we can break early.
            else:
                break
        # if carry exists after our iteration above, we need to insert
        # our carry to the start of our digits array.
        if carry:
            digits.insert(0, carry)

        return digits
```

</TabItem>
</Tabs>