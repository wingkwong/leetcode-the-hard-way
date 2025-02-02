---
description: 'Author: @wkw, @radojicic23 | https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/'
tags: [String, Stack]
---

# 1047 - Remove All Adjacent Duplicates In String (Easy)

## Problem Link

https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

## Problem Statement

You are given a string `s` consisting of lowercase English letters. A **duplicate removal** consists of choosing two **adjacent** and **equal** letters and removing them.

We repeatedly make **duplicate removals** on `s` until we no longer can.

Return _the final string after all such duplicate removals have been made_. It can be proven that the answer is **unique**.

**Example 1:**

```
Input: s = "abbaca"
Output: "ca"
Explanation:
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
```

**Example 2:**

```
Input: s = "azxxzy"
Output: "ay"
```

**Constraints:**

- `1 <= s.length <= 105`
- `s` consists of lowercase English letters.

## Approach 1: Stack

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    string removeDuplicates(string s) {
        // use string here instead of Stack<char>
        // so that we don't need to build the final string again
        string ans;
        for (auto c : s) {
            // if the current character is same as the last one in `ans`
            // then we cannot push it to `ans`
            // we remove the one in `ans`
            if (ans.size() && ans.back() == c) ans.pop_back();
            // otherwise, add the current character to `ans`
            else ans.push_back(c);
        }
        return ans;
    }
};
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wkw"/>

```java
class Solution {
    public String removeDuplicates(String s) {
        StringBuilder sb = new StringBuilder();
        for (char c : s.toCharArray()) {
            // if the current character is same as the last one in `sb`
            // then we cannot push it to `sb`
            // we remove the one in `sb`
            if (sb.length() > 0 && sb.charAt(sb.length() - 1) == c) sb.deleteCharAt(sb.length() - 1);
            // otherwise, add the current character to `sb`
            else sb.append(c);
        }
        return sb.toString();
    }
}
```

</TabItem>

<TabItem value="go" label="Go">
<SolutionAuthor name="@wkw"/>

```go
func removeDuplicates(s string) string {
    ans := make([]rune, 0, len(s))
    for _, c := range s {
        if len(ans) > 0 && ans[len(ans) - 1] == c {
            // if the current character is same as the last one in `ans`
            // then we cannot push it to `ans`
            // we remove the one in `ans`
            ans = ans[:len(ans) - 1]
        } else {
            // otherwise, add the current character to `ans`
            ans = append(ans, c)
        }
    }
    return string(ans)
}
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def removeDuplicates(self, s: str) -> str:
        ans = []
        for c in s:
            # if the current character is same as the last one in `ans`
            # then we cannot push it to `ans`
            # we remove the one in `ans`
            if ans and ans[-1] == c: ans.pop()
            # otherwise, add the current character to `ans`
            else: ans.append(c)
        return ''.join(ans)
```

</TabItem>

<TabItem value="kt" label="Kotlin">
<SolutionAuthor name="@wkw"/>

```kt
class Solution {
    fun removeDuplicates(s: String): String {
        val sb = StringBuilder()
        for (c in s) {
            if (sb.length > 0 && sb.last() == c) {
                // if the current character is same as the last one in `sb`
                // then we cannot push it to `sb`
                // we remove the one in `sb`
                sb.deleteCharAt(sb.length - 1)
            } else {
                // otherwise, add the current character to `sb`
                sb.append(c)
            }
        }
        return sb.toString()
    }
}
```

</TabItem>

<TabItem value="rs" label="Rust">
<SolutionAuthor name="@wkw"/>

```rs
impl Solution {
    pub fn remove_duplicates(s: String) -> String {
        let mut ans = String::new();
        for c in s.chars() {
            if (ans.len() > 0 && ans.chars().last() == Some(c)) {
                // if the current character is same as the last one in `ans`
                // then we cannot push it to `ans`
                // we remove the one in `ans`
                ans.pop();
            } else {
                // otherwise, add the current character to `ans`
                ans.push(c);
            }
        }
        return ans;
    }
}
```

</TabItem>

<TabItem value="js" label="JavaScript">
<SolutionAuthor name="@radojicic23"/>

```js
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let stack = [];
  for (let c = 0; c < s.length; c++) {
    if (stack.length > 0 && stack[stack.length - 1] == s[c]) {
      stack.pop();
    } else {
      stack.push(s[c]);
    }
  }
  return stack.join('');
};
```

</TabItem>
</Tabs>
