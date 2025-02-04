---
description: 'Author: @wkw | https://leetcode.com/problems/make-the-string-great/'
tags: [String, Stack]
---

# 1544 - Make The String Great (Easy)

## Problem Link

https://leetcode.com/problems/make-the-string-great/

## Problem Statement

Given a string `s` of lower and upper case English letters.

A good string is a string which doesn't have **two adjacent characters** `s[i]` and `s[i + 1]` where:

- `0 <= i <= s.length - 2`
- `s[i]` is a lower-case letter and `s[i + 1]` is the same letter but in upper-case or **vice-versa**.

To make the string good, you can choose **two adjacent** characters that make the string bad and remove them. You can keep doing this until the string becomes good.

Return _the string_ after making it good. The answer is guaranteed to be unique under the given constraints.

**Notice** that an empty string is also good.

**Example 1:**

```
Input: s = "leEeetcode"
Output: "leetcode"
Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".
```

**Example 2:**

```
Input: s = "abBAcC"
Output: ""
Explanation: We have many possible scenarios, and all lead to the same answer. For example:
"abBAcC" --> "aAcC" --> "cC" --> ""
"abBAcC" --> "abBA" --> "aA" --> ""
```

**Example 3:**

```
Input: s = "s"
Output: "s"
```

**Constraints:**

- `1 <= s.length <= 100`
- `s` contains only lower and upper case English letters.

## Approach 1: String as Stack

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    string makeGood(string s) {
        // we can use stack as well but we need to build the final string at the end
        // hence, using string is enough
        string t;
        // for each character
        for (auto c : s) {
            // as long as `t` has a character, we check if the last character is same letter but in upper-case or vice-versa
            // here we can use XOR and 1 << 5 to convert a lower character to a upper one and vice-versa
            // A: 01[0]00001
            // a: 01[1]00001
            // Z: 01[0]11010
            // z: 01[1]11010
            // a -> A / A -> a
            if (t.size() && (t.back() ^ (1 << 5)) == c) {
                // if it matches the requirement, we remove the last character in `t`
                t.pop_back();
            } else {
                // otherweise, we add the current char to `t`
                t.push_back(c);
            }
        }
        return t;
    }
};
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wkw"/>

```java
class Solution {
    public String makeGood(String s) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < s.length(); i++) {
            // as long as `sb` has a character,
            // we check if the last character is same letter but in upper-case or vice-versa
            // here we can use XOR and 1 << 5 to convert a lower character to a upper one and vice-versa
            // A: 01[0]00001
            // a: 01[1]00001
            // Z: 01[0]11010
            // z: 01[1]11010
            // a -> A / A -> a
            if (sb.length() > 0  && ((sb.charAt(sb.length() - 1) ^ (1 << 5)) == s.charAt(i))) {
                // if it matches the requirement, we remove the last character in `sb`
                sb.deleteCharAt(sb.length() - 1);
            } else {
                // otherwise, we add the current char to `sb`
                sb.append(s.charAt(i));
            }
        }
        return sb.toString();
    }
}
```

</TabItem>

<TabItem value="kt" label="Kotlin">
<SolutionAuthor name="@wkw"/>

```kt
class Solution {
    fun makeGood(s: String): String {
        var t : String = ""
        // for each character
        for (i in 0 .. s.length - 1) {
            // as long as `t` has a character, we check if the last character is same letter but in upper-case or vice-versa
            // here we can use XOR and 1 << 5 to convert a lower character to a upper one and vice-versa
            // A: 01[0]00001
            // a: 01[1]00001
            // Z: 01[0]11010
            // z: 01[1]11010
            // a -> A / A -> a
            if (t.length > 0 && (t.last() ^ s[i] == (1 shl 5)) {
                // if it matches the requirement, we remove the last character in `t`
                t = t.dropLast(1)
            } else {
                // otherweise, we add the current char to `t`
                t += s[i]
            }
        }
        return t
    }
}
```

</TabItem>
</Tabs>
