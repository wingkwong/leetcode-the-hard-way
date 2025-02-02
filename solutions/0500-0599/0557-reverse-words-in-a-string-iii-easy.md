---
description: 'Author: @wkw | https://leetcode.com/problems/reverse-words-in-a-string-iii/'
tags: [Two Pointers, String]
---

# 0557 - Reverse Words in a String III (Easy)

## Problem Link

https://leetcode.com/problems/reverse-words-in-a-string-iii/

## Problem Statement

Given a string `s`, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

**Example 1:**

```
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
```

**Example 2:**

```
Input: s = "God Ding"
Output: "doG gniD"
```

**Constraints:**

- `1 <= s.length <= 5 * 10^4`
- `s` contains printable **ASCII** characters.
- `s` does not contain any leading or trailing spaces.
- There is **at least one** word in `s`.
- All the words in `s` are separated by a single space.

## Approach 1: Split and Reverse

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    // custom split template
    vector<string> split(string str, char delim) {
        string line;
        vector<string> res;
        stringstream ss(str);
        while (getline(ss, line, delim)) res.push_back(line);
        return res;
    }

    string reverseWords(string s) {
        // split by ' '
        vector<string> v = split(s, ' ');
        // reverse each string
        for(auto &x : v) reverse(x.begin(), x.end());
        // construct the answer
        string ans;
        for(int i = 0; i < v.size(); i++) {
            ans += v[i];
            // add space after each string except the last one
            if(i != v.size() - 1) ans += " ";
        }
        return ans;
    }
};
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wkw"/>

```py
class Solution:
    def reverseWords(self, s: str) -> str:
        # step1: split the string
        #   split() = ["Let's","take","LeetCode","contest"]
        # step2: reverse the list
        #   s.split()[::-1] = ["contest","LeetCode","take","Let's"]
        # step3: convert each element to string separated by space
        #   ' '.join(s.split()[::-1]) = "contest LeetCode take Let's"
        # step4: reverse the string
        #   ' '.join(s.split()[::-1])[::-1] = "s'teL ekat edoCteeL tsetnoc"
        return ' '.join(s.split()[::-1])[::-1]
```

</TabItem>

<TabItem value="kt" label="Kotlin">
<SolutionAuthor name="@wkw"/>

```java
class Solution {
    fun reverseWords(s: String): String {
        // step 1: split by space
        // s.split(" ") = [Let's, take, LeetCode, contest]
        // step 2: reverse each element
        // s.split(" ").map { it.reversed() } = [s'teL, ekat, edoCteeL, tsetnoc]
        // step 3: join them back
        // s.split(" ").map { it.reversed() }.joinToString(" ") = "s'teL ekat edoCteeL tsetnoc"
        return s.split(" ").map { it.reversed() }.joinToString(" ");
    }
}
```

</TabItem>

<TabItem value="ts" label="TypeScript">
<SolutionAuthor name="@wkw"/>

```ts
function reverseWords(s: string): string {
  // step 1: split by space
  //  s.split(' ') = [ "Let's", 'take', 'LeetCode', 'contest' ]
  // step 2: for each element, reverse it
  //  s.split(' ').map(w => w.split('').reverse().join('')) = [ "s'teL", 'ekat', 'edoCteeL', 'tsetnoc' ]
  // step 3: join them back
  //  s.split(' ').map(w => w.split('').reverse().join('')).join(' ') = "s'teL ekat edoCteeL tsetnoc"
  return s
    .split(' ')
    .map((w) => w.split('').reverse().join(''))
    .join(' ');
}
```

</TabItem>

<TabItem value="go" label="Go">
<SolutionAuthor name="@wkw"/>

```go
func reverseWords(s string) string {
    // split by space
    w := strings.Split(s, " ")
    // iterate each word
    for k, v := range w {
        // convert to bytes array
        b := []byte(v)
        // length of current word
        n := len(v)
        // for each word, we iterate n / 2 times
        for i := 0; i < n / 2; i++ {
            // swap the characters
            b[i], b[n - 1 - i] = b[n - 1 - i], b[i]
            // w[k] here is the reversed version of v
            w[k] = string(b)
        }
    }
    // build the final string
    return strings.Join(w, " ")
```

</TabItem>
</Tabs>

## Approach 2: Two Pointers

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    string reverseWords(string s) {
        int l = 0, r = 0, n = s.size();
        for (int i = 0; i < n; i++) {
            // looking for the space index
            if (s[i] == ' ' || i == n - 1) {
                // r is the index before the space
                // if s[i] is space, then we want to reverse s[l : i - 1]
                // if s[i] is the last character, then we want to reverse s[l : i]
                r = i == n - 1 ? i : i - 1;
                // swap the character
                // e.g. s = `Let's` where l is 0 and r is 4
                // Let's -> set'L -> s'teL
                while (l < r) swap(s[l++], s[r--]);
                // update left pointer which is i + 1
                // i.e. the first index of the next word if applicable
                l = i + 1;
            }
        }
        return s;
    }
};
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wkw"/>

```java
class Solution {
    public String reverseWords(String s) {
        int l = 0, r = 0, n = s.length();
        char[] c = s.toCharArray();
        for (int i = 0; i < n; i++) {
            // looking for the space index
            if (c[i] == ' ' || i == n - 1) {
                // r is the index before the space
                // if s[i] is space, then we want to reverse s[l : i - 1]
                // if s[i] is the last character, then we want to reverse s[l : i]
                r = i == n - 1 ? i : i - 1;
                // swap the character
                // e.g. s = `Let's` where l is 0 and r is 4
                // Let's -> set'L -> s'teL
                while (l < r) {
                    char tmp = c[l];
                    c[l] = c[r];
                    c[r] = tmp;
                    l++;
                    r--;
                }
                // update left pointer which is i + 1
                // i.e. the first index of the next word if applicable
                l = i + 1;
            }
        }
        return new String(c);
    }
}
```

</TabItem>
</Tabs>
