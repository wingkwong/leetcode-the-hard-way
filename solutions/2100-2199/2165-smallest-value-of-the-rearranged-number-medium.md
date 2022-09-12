---
description: >-
  Authors: @heiheihang, @wingkwong |
  https://leetcode.com/problems/smallest-value-of-the-rearranged-number/
---

# 2165 - Smallest Value of the Rearranged Number (Medium)

## Problem Link

https://leetcode.com/problems/smallest-value-of-the-rearranged-number/

## Problem Statement

You are given an integer `num.` **Rearrange** the digits of `num` such that its value is **minimized** and it does not contain **any** leading zeros.

Return _the rearranged number with minimal value_.

Note that the sign of the number does not change after rearranging the digits.

**Example 1:**

```
Input: num = 310
Output: 103
Explanation: The possible arrangements for the digits of 310 are 013, 031, 103, 130, 301, 310. 
The arrangement with the smallest value that does not contain any leading zeros is 103.
```

**Example 2:**

```
Input: num = -7605
Output: -7650
Explanation: Some possible arrangements for the digits of -7605 are -7650, -6705, -5076, -0567.
The arrangement with the smallest value that does not contain any leading zeros is -7650.
```

**Constraints:**

* `-10^15 <= num <= 10^15`

## Approach 1: Conditional

There are two cases in this problem:

* `num` is positive: we need to rearrange the digits such that they are **minimized**
* `num` is negative: we need to rearrange the digits such that they are **maximized**

There are some common tools that you will need for this problem:

#### Getting the Digits from a Number

To get the digits from a number, we need to iterate the number with `%10` and `//10` every time to get the last digit of the number.

For example, to get the digits of `6403`:

* Last digit : `6403 % 10 = 3` and we need to remove the last digit by `6403 // 10` now it becomes 640
* Last digit: `640 % 10 = 0` and we need to remove the last digit by `640 // 10` now it becomes 64
* Last digit: `64 % 10 = 4` and we need to remove the last digit by `64 // 10` now it becomes 6
* Last digit: `6 % 10 = 6` and we need to remove the last digit by `6 // 10` now it becomes 0
* We stop when `num` becomes 0

#### Building Number from Digits

To build a number from digits (`digits = [4,2,5,6]`, and we want 4256 as a result), we need to accumulate the number in the following way

```python
number = number * 10 + new_digit
```

Let's look at the example with `digits = [4,2,5,9]`.

* `result = 0` initially, we perform `result = result * 10 + digits[0]`, we get `result = 0 * 10 + 4`, which results in `4`.
* `result = 4` , we perform `result = result * 10 + digits[1]`, we get `result = 4*10 + 2`, which results in `42`
* `result = 42`, we perform `result = result * 10 + digits[2]`, we get `result = 42 * 10 + 5`, which results in 425
* `result = 425,` we perform `result = result * 10 + digits[3]`, we get `result = 425 * 10 + 9`, which results in 4259.

We first need to get the digits from a number. Then we need to sort them in order.

For the _negative_ case, we need to **maximize** the result, so we reverse the order of the digits. To **maximize** the number, we put the zeros at the end, so we need to perform `result = result * 10 ** number_of_zeros` **after** merging the digits.

For the _positive_ case, we need to **minimize** the result. We need to put the zeros after the first digit to **minimize** the result, so we perform `result = digits[0] * 10 ** number_of_zeros` **before** looking at other digits.

And we do not forget to multiply -1 in the negative case before returning.

<SolutionAuthor name="@heiheihang"/>

```python
 def smallestNumber(self, num: int) -> int:
        
        #return 0 if input is 0
        if(num == 0):
            return 0
        
        #we need to check the sign of num
        #different approach to handle positive and negative numbers
        negative = False
        if(num < 0):
            negative = True
            num *= -1
        
        #we need to store the digits
        digits = []
        
        #we need to store the number of zeros
        number_of_zeros = 0
        
        #we iterate the digits of num
        while(num > 0):
            tmp = num % 10
            
            #if it is zero, we store it separately
            if(tmp == 0):
                number_of_zeros += 1
            else:
                digits.append(tmp)
            
            num //= 10

        #we need to get the order of digits by sorting    
        digits.sort()
        
        #handle positive case and negative case separately
        #negative: maximize the number
        #positive: minimize the number
        
        if(negative):
            
            #we need to start from the largest number to maximize the negative case
            digits.reverse()
            
            #we store the result here
            result = 0
            
            # build the number with digits
            for i in range(len(digits)):
                
                #declare new_digit
                new_digit = digits[i]
                
                #push the digits left, new space for new digit
                result = result * 10
                
                #"slide in" the new digit
                result = result + new_digit
            
            #append the zeros at the end
            result *= 10**number_of_zeros
            
            #make it negative 
            result *= -1
            
            #return result
            return result
        else:
            
            #zeros should be placed after the first non-zero digit
            result = digits[0] * 10**number_of_zeros
            
            #similar to above, but we skip the first digit as we have used it already
            for i in range(1,len(digits)):
                result = result * 10 + digits[i]
                
            #return result
            return result
```

## Approach 2: Sort and Swap

If $$num$$is negative, we sort it in descending order to make it greatest value.

If $$num$$ is positive, we sort it in ascending order to make it smallest value. However, it may contain leading zeros. For example,  $$310$$ would become $$013$$. In this case, we simply swap the first digit (i.e. zero) with the first non-zero digit to have the minimal value. In this case, it would be $$103$$.

To implement it, we first convert $$num$$ from long long to string. Sort the string and swap the first digit with the first non-zero digit. If there is no leading zero, it stays as-is. At the end, we convert the string back to long long type and add minus sign if $$num$$ is negative.

<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    long long smallestNumber(long long num) {
        int pos = num >= 0;
        string s = to_string(abs(num));
        sort(s.begin(), s.end(), [&](const int x, const int y){
            return pos ? x < y : x > y;
        });
        if (s.size() > 1) swap(s[0], s[s.find_first_not_of('0')]);
        return pos ? stoll(s) : -stoll(s);
    }
};
```
