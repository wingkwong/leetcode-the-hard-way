---
description: 'Author: @wingkwong, @vigneshshiv | https://leetcode.com/problems/is-subsequence/'
---

# 0392 - Is Subsequence (Easy)

## Problem Link

https://leetcode.com/problems/is-subsequence/

## Problem Statement

Given two strings `s` and `t`, return `true` _if_ `s` _is a **subsequence** of_ `t`_, or_ `false` _otherwise_.

A **subsequence** of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).

**Example 1:**

```
Input: s = "abc", t = "ahbgdc"
Output: true
```

**Example 2:**

```
Input: s = "axc", t = "ahbgdc"
Output: false 
```

**Constraints:**

* `0 <= s.length <= 100`
* `0 <= t.length <= 10^4`
* `s` and `t` consist only of lowercase English letters.

**Follow up:** Suppose there are lots of incoming `s`, say `s1, s2, ..., sk` where `k >= 10^9`, and you want to check one by one to see if `t` has its subsequence. In this scenario, how would you change your code?

## Approach 1: Two Pointers

We use two pointers $$i$$ and $$j$$ to track the index in $$s$$ and $$t$$ respectively. If $$s[i] == t[j]$$, then we set $$i := i + 1$$ and $$j := j + 1$$ and then check the next character in both string. If they are not same, we move $$j$$ to the next character in $$t$$ while keeping $$i$$ in $$s$$. At the end, pointer $$i$$ would be $$n$$ if $$s$$ is a subsequence of $$t$$.

<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool isSubsequence(string s, string t) {
        int n = s.size(), m = t.size(), i = 0, j = 0;
        while (i < n && j < m) {
            // moving pointer i only if they are same
            if (s[i] == t[j]) i++;
            // move j for both case
            j++;
        }
        // s is a subsequence of t if i == n
        return i == n;
    }
};
```
</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public boolean isSubsequence(String s, String t) {
        int i = 0, j = 0, m = s.length(), n = t.length();
        while (i < m && j < n) {
            if (s.charAt(i) == t.charAt(j)) {
                i += 1;
            }
            j += 1;
        }
        return i == m;
    }
}
```
</TabItem>
</Tabs>

## Approach 2: Edit Distance

We can directly use [0072 - Edit Distance (Hard)](../0000-0099/edit-distance-hard) solution to solve this easy problem since the constraints are not large. Edit distance here means the minimum number of operations required to covert $$s$$ to $$t$$. We just need to check if it is equal to $$m - n$$.

<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    // Check out 0072 - Edit Distance for detailed explanation
    int minDistance(string word1, string word2) {
        int m = (int) word1.size();
        int n = (int) word2.size();
        int dp[m + 1][n + 1];
        memset(dp, 0, sizeof(dp));
        for (int i = 1; i <= m; i++) dp[i][0] = i;
        for (int j = 1; j <= n; j++) dp[0][j] = j;
        for (int i = 1; i <= m; i++){
            for(int j = 1; j <= n; j++){
                if(word1[i - 1] == word2[j - 1]) { // a = b
                    dp[i][j] = dp[i - 1][j - 1]; 
                } else {
                    // find out the min cost for all three actions
                    dp[i][j] = 1 + min({
                        dp[i - 1][j - 1], // replace a with b
                        dp[i - 1][j],     // delete a
                        dp[i][j - 1]      // insert b after a
                    });
                }
            }
        }
        return dp[m][n];
    }
    
    bool isSubsequence(string s, string t) {
        int n = s.size(), m = t.size();
        return minDistance(s, t) == m - n;
    }
}
```
</TabItem>
</Tabs>

## Approach 3: Lower Bound of Indices

This approach is for follow-up. We can store the indices $$idx$$ of each character in $$t$$. For example, if $$t$$ is $$aaaabbcde$$, then we have the following $$idx$$.

| Character (Key) | Indice (Value) |
| --------------- | -------------- |
| a               | \[0, 1, 2, 3]  |
| b               | \[4, 5]        |
| c               | \[6]           |
| d               | \[7]           |
| e               | \[8]           |

Then we initialise $$bound$$ which is the starting index. For each character in $$s$$, we want to find the index $$j$$ which starts from $$bound$$. If it reaches the end, then return false. Else we can update $$bound := j + 1$$ because the next character cannot appear before the previous character and continue until we process all characters.

For example, let's say $$s = abc$$ and $$t = aaaabbcde$$. The first character is $$a$$ and we got $$bound = 0$$ and $$j = 0$$. Then we update the bound to $$j + 1$$. Then for the second character $$b$$, we got $$bound = 1$$ and $$j = 4$$. Similarly, we got $$bound = 5$$ and $$j = 6$$ for the last character.

<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    bool isSubsequence(string s, string t) {
        int n = s.size(), m = t.size();
        unordered_map<char, vector<int>> idx;
        // put each char as key, the value is the indice of that char
        for (int i = 0; i < m; i++) idx[t[i]].push_back(i);
        int bound = 0;
        for (auto x : s) {
            // find the index which starts from bound
            auto j = lower_bound(idx[x].begin(), idx[x].end(), bound);
            // cannot find the index -> false
            if (j == idx[x].end()) return false;
            // update bound and try next character
            bound = *j + 1;
        }
        return true;
    }
};
```
</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    
    /**
     * Eg-1. s="abc", t="bahbgdca"
     *  idx=[a={1,7}, b={0,3}, c={6}]
     *  i=0 ('a'): prev=1
     *  i=1 ('b'): prev=3
     *  i=2 ('c'): prev=6 (return true)
     *
     * Eg-2. s="abc", t="bahgdcb"
     *  idx=[a={1}, b={0,6}, c={5}]
     *  i=0 ('a'): prev=1
     *  i=1 ('b'): prev=6
     *  i=2 ('c'): prev=-1 (return false)
     */
    public boolean isSubsequence(String s, String t) {
        List<Integer>[] idx = new List[256];
        // Pre-process of t
        int i = 0;
        for (char c : t.toCharArray()) {
            if (idx[c] == null) {
                idx[c] = new ArrayList<>();
            }
            idx[c].add(i++);
        }
        int prev = -1;
        for (char c : s.toCharArray()) {
            if (idx[c] == null) return false;
            prev = binarySearch(idx[c], prev);
            if (prev == -1) return false;
        }
        return true;
    }
    
    private int binarySearch(List<Integer> list, int index) {
        int start = 0, mid = 0, end = list.size() - 1;
        while (start <= end) {
            mid = start + (end - start) / 2;
            if (index < list.get(mid)) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return start == list.size() ? -1 : list.get(start);
    }
}
```
</TabItem>
</Tabs>

## Approach 4: LCS

If $$s$$ is a subsequence of $$t$$, then it means the Longest Common Subsequence (LCS) would be $$n$$. We can directly use [1143 - Longest Common Subsequence (Medium)](../1100-1199/longest-common-subsequence-medium) solution.

<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    // 1143 - Longest Common Subsequence (Medium)
    int longestCommonSubsequence(string text1, string text2) {
        int n = text1.size(), m = text2.size();
        vector<vector<int>> dp(n + 1, vector<int>(m + 1));
        for(int i = 1; i <= n; i++) {
            for(int j = 1; j <= m; j++) {
                if(text1[i - 1] == text2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[n][m];
    }
    
    bool isSubsequence(string s, string t) {
        int n = s.size();
        return longestCommonSubsequence(s, t) == n;
    }
};
```
</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public boolean isSubsequence(String s, String t) {
        int m = s.length(), n = t.length();
        int[][] dp = new int[m][n];
        Arrays.setAll(dp, r -> {
            Arrays.fill(dp[r], -1);
            return dp[r];
        });
        int length = lcs(s, t, m - 1, n - 1, dp);
        return length == m;
    }
    
    private int lcs(String s, String t, int i, int j, int[][] dp) {
        if (i < 0 || j < 0) return 0;
        if (dp[i][j] != -1) {
            return dp[i][j];
        }
        if (s.charAt(i) == t.charAt(j)) {
            return dp[i][j] = 1 + lcs(s, t, i - 1, j - 1, dp);
        }
        return dp[i][j] = Math.max(lcs(s, t, i - 1, j, dp), lcs(s, t, i, j - 1, dp));
    }
}
```
</TabItem>
</Tabs>

## Approach 5: Dynamic Programming with Memoization

We can apply the same recurrance relation which is used in DP Bottom-up with DP Recursive with memoization. 

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public boolean isSubsequence(String s, String t) {
        int m = s.length(), n = t.length();
        int[][] memo = new int[m][n];
        int length = lcs(s, t, m - 1, n - 1, memo);
        return length == m;
    }
    
    private int lcs(String s, String t, int i, int j, int[][] memo) {
        int result = 0;
        if (i < 0 || j < 0) return result;
        if (memo[i][j] > 0) return memo[i][j];
        if (s.charAt(i) == t.charAt(j)) {
            result = 1 + lcs(s, t, i - 1, j - 1, memo);
        } else {
            result = Math.max(lcs(s, t, i - 1, j, memo), lcs(s, t, i, j - 1, memo));
        }
        memo[i][j] = result;
        return result;
    }
}
```
</TabItem>
</Tabs>

## Approach 6: Stack

Just a build a stack with S string in reversing order, and iterate over T string and pops out stack if Stack top and T characters are matching, once Stack becomes empty then we find the answer as true. 

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public boolean isSubsequence(String s, String t) {
        Stack<Character> stack = new Stack<>();
        for (int i = s.length() - 1; i >= 0; i--) {
            stack.push(s.charAt(i));
        }
        for (char c : t.toCharArray()) {
            if (stack.isEmpty()) return true;
            if (c == stack.peek()) {
                stack.pop();
            }
        }
        return stack.isEmpty();
    }
}
```
</TabItem>
</Tabs>

## Approach 7: STL (indexOf)

String class provides, built-in method called `indexOf`, just pass **fromIndex** argument to define the search space, and it keeps searching for a character from that position. This solution is optimal and efficient for smaller strings. 

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public boolean isSubsequence(String s, String t) {
        int idx = -1;
        for (char c : s.toCharArray()) {
            idx = t.indexOf(c, idx + 1);
            if (idx == -1) return false;
        }
        return true;
    }
}
```
</TabItem>
</Tabs>