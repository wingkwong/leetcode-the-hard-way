---
description: 'Author: @wingkwong | https://leetcode.com/problems/reverse-string/'
---

# 0344 - Reverse String (Easy)

## Problem Statement

Write a function that reverses a string. The input string is given as an array of characters `s`.

You must do this by modifying the input array [in-place](https://en.wikipedia.org/wiki/In-place\_algorithm) with `O(1)` extra memory.



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

* `1 <= s.length <= 10^5`
* `s[i]` is a [printable ascii character](https://en.wikipedia.org/wiki/ASCII#Printable\_characters).

## Approach 1: In-place modification

We iterate the array to process two elements at the same time and swap them. First we swap `s[0]` and `s[n - 1]`. Then swap `s[1]` and `s[n - 2]` and so on. Therefore, we only swap `n / 2` times.

### C++

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

### Go

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

## Approach 2: STL

### C++

```cpp
class Solution {
public:
    void reverseString(vector<char>& s) {
        reverse(s.begin(), s.end());
    }
};
```

### Python3

```python
class Solution:
    def reverseString(self, s: List[str]) -> None:
        s.reverse()
```

### Rust

```rust
impl Solution {
    pub fn reverse_string(s: &mut Vec<char>) {
       s.reverse()
    }
}
```
