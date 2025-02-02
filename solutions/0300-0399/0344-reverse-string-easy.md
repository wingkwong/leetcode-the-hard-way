---
description: 'Author: @wkw, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/reverse-string/'
---

# 0344 - Reverse String (Easy)

## Problem Link

https://leetcode.com/problems/reverse-string/

## Problem Statement

Write a function that reverses a string. The input string is given as an array of characters `s`.

You must do this by modifying the input array [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) with `O(1)` extra memory.

**Example 1:**

```
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```

**Example 2:**

```
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```

**Constraints:**

- `1 <= s.length <= 10^5`
- `s[i]` is a [printable ascii character](https://en.wikipedia.org/wiki/ASCII#Printable_characters).

## Approach 1: In-place modification

We iterate the array to process two elements at the same time and swap them. First we swap `s[0]` and `s[n - 1]`. Then swap `s[1]` and `s[n - 2]` and so on. Therefore, we only swap `n / 2` times.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    void reverseString(vector<char>& s) {
        int n = (int) s.size();
        for (int i = 0; i < n / 2; i++) {
            swap(s[i], s[n - 1 - i]);
        }
    }
};
```

</TabItem>
<TabItem value="go" label="Go">
<SolutionAuthor name="@wkw"/>

```go
func reverseString(s []byte)  {
    i, j := 0, len(s) - 1
    for i < j {
        s[i], s[j] = s[j], s[i]
        i += 1
        j -= 1
    }
}
```

</TabItem>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public void reverseString(char[] s) {
        int i = 0, j = s.length - 1;
        while (i < j) {
            char c = s[i];
            s[i++] = s[j];
            s[j--] = c;
        }
    }
}
```

</TabItem>

<TabItem value="javascript" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    char = s[left];
    s[left] = s[right];
    s[right] = char;
    left++;
    right--;
  }
};
```

</TabItem>

<TabItem value="python" label="Python">
<SolutionAuthor name="@radojicic23"/>

```python
class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """

        left, right = 0, len(s) - 1
        while left < right:
            s[left], s[right] = s[right], s[left]
            left += 1
            right -= 1
```

</TabItem>
</Tabs>

## Approach 2: STL

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    void reverseString(vector<char>& s) {
        reverse(s.begin(), s.end());
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def reverseString(self, s: List[str]) -> None:
        s.reverse()
```

</TabItem>

<TabItem value="rust" label="Rust">
<SolutionAuthor name="@wkw"/>

```rust
impl Solution {
    pub fn reverse_string(s: &mut Vec<char>) {
       s.reverse()
    }
}
```

</TabItem>

<TabItem value="javascript" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```javascript
impl Solution {
    pub fn reverse_string(s: &mut Vec<char>) {
       s.reverse()
    }
}
```

</TabItem>
</Tabs>
