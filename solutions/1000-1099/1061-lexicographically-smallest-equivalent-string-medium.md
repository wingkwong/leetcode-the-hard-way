---
description: 'Author: @wingkwong | https://leetcode.com/problems/lexicographically-smallest-equivalent-string/'
tags: [String, Union Find]
---

# 1061 - Lexicographically Smallest Equivalent String (Medium) 

## Problem Link

https://leetcode.com/problems/lexicographically-smallest-equivalent-string/

## Problem Statement

You are given two strings of the same length `s1` and `s2` and a string `baseStr`.

We say `s1[i]` and `s2[i]` are equivalent characters.

- For example, if `s1 = "abc"` and `s2 = "cde"`, then we have `'a' == 'c'`, `'b' == 'd'`, and `'c' == 'e'`.

Equivalent characters follow the usual rules of any equivalence relation:

- **Reflexivity:** `'a' == 'a'`.
- **Symmetry:** `'a' == 'b'` implies `'b' == 'a'`.
- **Transitivity:** `'a' == 'b'` and `'b' == 'c'` implies `'a' == 'c'`.

For example, given the equivalency information from `s1 = "abc"` and `s2 = "cde"`, `"acd"` and `"aab"` are equivalent strings of `baseStr = "eed"`, and `"aab"` is the lexicographically smallest equivalent string of `baseStr`.

Return *the lexicographically smallest equivalent string of*`baseStr`*by using the equivalency information from*`s1`*and*`s2`.

**Example 1:**

```
Input: s1 = "parker", s2 = "morris", baseStr = "parser"
Output: "makkek"
Explanation: Based on the equivalency information in s1 and s2, we can group their characters as [m,p], [a,o], [k,r,s], [e,i].
The characters in each group are equivalent and sorted in lexicographical order.
So the answer is "makkek".
```

**Example 2:**

```
Input: s1 = "hello", s2 = "world", baseStr = "hold"
Output: "hdld"
Explanation: Based on the equivalency information in s1 and s2, we can group their characters as [h,w], [d,e,o], [l,r].
So only the second letter 'o' in baseStr is changed to 'd', the answer is "hdld".
```

**Example 3:**

```
Input: s1 = "leetcode", s2 = "programs", baseStr = "sourcecode"
Output: "aauaaaaada"
Explanation: We group the equivalent characters in s1 and s2 as [a,o,e,r,s,c], [l,p], [g,t] and [d,m], thus all letters in baseStr except 'u' and 'd' are transformed to 'a', the answer is "aauaaaaada".
```

**Constraints:**

- `1 <= s1.length, s2.length, baseStr <= 1000`
- `s1.length == s2.length`
- `s1`, `s2`, and `baseStr` consist of lowercase English letters.

## Approach 1: DSU

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    int root[26];
    
    // recursively get the root element
    int get(int x) {
        return x == root[x] ? x : (root[x] = get(root[x]));
    }
    
    // unite two elements
    void unite(int x, int y) {
        // find the root of x
        x = get(x);
        // find the root of y
        y = get(y);
        // if their roots are not same, we combine them
        if (x != y) {
            // smaller first
            if (x < y)  root[y] = x;
            else root[x] = y;
        }
        return;
    }
    string smallestEquivalentString(string s1, string s2, string baseStr) {
        // dsu
        string ans;
        // init root. initialy each element is in its own group.
        for (int i = 0; i < 26; i++)  root[i] = i;
        // unite each character
        for (int i = 0; i < s1.size(); i++) unite(s1[i] - 'a', s2[i] - 'a');
        // build the final answer from the root element (smallest)
        for (auto x : baseStr) ans += (char)(get(x - 'a') + 'a');
        return ans;
    }
};
```

</TabItem>


<TabItem value="java" label="Java">
<SolutionAuthor name="@wingkwong"/>

```java
class Solution {
    int[] root = new int[26];

    // recursively get the root element
    int get(int x) {
        return x == root[x] ? x : (root[x] = get(root[x]));
    }

    // unite two elements
    void unite(int x, int y) {
        // find the root of x
        x = get(x);
        // find the root of y
        y = get(y);
        // if their roots are not same, we combine them
        if (x != y) {
            // smaller first
            if (x < y)  root[y] = x;
            else root[x] = y;
        }
        return;
    }
    
    public String smallestEquivalentString(String s1, String s2, String baseStr) {
        String ans = "";
        // init root. initialy each element is in its own group.
        for (int i = 0; i < 26; i++)  root[i] = i;
        // unite each character
        for (int i = 0; i < s1.length(); i++) unite(s1.charAt(i) - 'a', s2.charAt(i) - 'a');
        // build the final answer from the root element (smallest)
        for (int i = 0; i < baseStr.length(); i++) {
            ans += (char)(get(baseStr.charAt(i) - 'a') + 'a');
        }
        return ans;
    }
}
```

</TabItem>


<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
class Solution:
    def smallestEquivalentString(self, s1: str, s2: str, baseStr: str) -> str:
        root = [i for i in range(26)]
    
        def get(x):
            # recursively get the root element
            if x == root[x]:
                return x 
            else:
                return get(root[x])
        
        # unite two elements
        def unite(x, y):
            # find the root of x and y, 
            x = get(x)
            y = get(y)
            # if their roots are not same, we combine them
            if x != y:
                if x < y:
                    root[y] = x
                else:
                    root[x] = y
            return
        
        ans = ""
        for i in range(len(s1)):
            unite(ord(s1[i]) - ord('a'), ord(s2[i]) - ord('a'))
        # dsu to build the final answer from the root element (smallest)
        for x in baseStr:
            ans += chr(get(ord(x) - ord('a')) + ord('a'))
        return ans
```

</TabItem>


<TabItem value="rs" label="Rust">
<SolutionAuthor name="@wingkwong"/>

```rs
impl Solution {
    pub fn smallest_equivalent_string(s1: String, s2: String, base_str: String) -> String {
        let mut root: [i32; 26] = [i32::default(); 26];
        // recursively get the root element
        fn get(root: &mut [i32; 26], x: i32) -> i32 {
            if x == root[x as usize] {
                return x;
            }
            root[x as usize] = get(root, root[x as usize]);
            root[x as usize]
        }
        // unite two elements
        fn unite(root: &mut [i32; 26], x: i32, y: i32) {
            // find the root of x
            let x = get(root, x);
            // find the root of y
            let y = get(root, y);
            // if their roots are not same, we combine them
            if x != y {
                // smaller first
                if x < y {
                    root[y as usize] = x;
                } else {
                    root[x as usize] = y;
                }
            }
        }

        let mut ans = String::new();
        // init root. initialy each element is in its own group.
        for i in 0..26 {
            root[i] = i as i32;
        }
        for i in 0..s1.len() {
            unite(&mut root, s1.as_bytes()[i] as i32 - 'a' as i32, s2.as_bytes()[i] as i32 - 'a' as i32);
        }
        // build the final answer from the root element (smallest)
        for i in base_str.bytes() {
            ans.push((get(&mut root, i as i32 - 'a' as i32) + 'a' as i32) as u8 as char);
        }
        ans
    }
}

```

</TabItem>
</Tabs>