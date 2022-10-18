---
description: 'Author: @tostream , @ganajayant | https://leetcode.com/problems/palindrome-number/'
---

# 0009 - Palindrome Number (Easy)

## Problem Link

https://leetcode.com/problems/palindrome-number/

## Problem Statement

Given an integer `x`, return `true` if `x` is palindrome integer.

An integer is a **palindrome** when it reads the same backward as forward.

* For example, `121` is a palindrome while `123` is not.

**Example 1:**

```
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
```

**Example 2:**

```
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

**Example 3:**

```
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

**Constraints:**

* `-2^31 <= x <= 2^31 - 1`

## Approach 1: Convert to string

Convert the integer value to string format and compare it one by one.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@tostream"/>

```python
class Solution:
    def isPalindrome(self, x: int) -> bool:
        #str: convert to string
        #[::-1]: read from the end
        return str(x) == str(x)[::-1]
```
</TabItem>
<TabItem value="java" label="Java">
<SolutionAuthor name="@ganajayant"/>

```java
class Solution {
    public boolean isPalindrome(int x) {
        String str = Integer.toString(x);
        StringBuilder rev = new StringBuilder(str).reverse();
        return rev.toString().equals(str);
    }
}
```
</TabItem>
</Tabs>

## Approach 2: Calculation

Calculate the reversed number.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@tostream"/>

```python
class Solution:
    def isPalindrome(self, x: int) -> bool:
        in_num = x
        reverser = 0
        while in_num > 0:
            reverser = reverser * 10 + checker % 10
            in_num = in_num//10
        return reverser == x
```
</TabItem>
<TabItem value="java" label="Java">
<SolutionAuthor name="@ganajayant"/>

```java
class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) {
            return false;
        } else {
            int result = 0;
            int n = x;
            while (n > 0) {
                int r = n % 10;
                result = result * 10 + r;
                n /= 10;
            }
            return result == x;
        }
    }
}
```
</TabItem>
<TabItem value="javascript" label="JavaScript">
<SolutionAuthor name="@MithunPrabhu777"/>

```javascript
var isPalindrome = function(x) {
   let result = 0;
    
   if(x < 0){
       return false;
   } else{
       let number = x;
       while(number > 0){ 
           const remainder = number % 10; 
           result = result * 10 + remainder; 
           number = Math.floor(number / 10); 
       }
   }
    
   return result === x; 
};
```
</TabItem>
</Tabs>
