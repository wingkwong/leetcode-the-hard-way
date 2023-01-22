---
description: 'Author: @wingkwong | https://leetcode.com/problems/palindrome-partitioning/'
tags: [String, Dynamic Programming, Backtracking]
---

# 0131 - Palindrome Partitioning (Medium) 

## Problem Link

https://leetcode.com/problems/palindrome-partitioning/

## Problem Statement

Given a string `s`, partition `s` such that every substring of the partition is a **palindrome**. Return *all possible palindrome partitioning of*`s`.

**Example 1:**

```
Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
```

**Example 2:**

```
Input: s = "a"
Output: [["a"]]
```

**Constraints:**

- `1 <= s.length <= 16`
- `s` contains only lowercase English letters.

## Approach 1: Backtracking

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<vector<string>> partition(string s) {
        // backtracking 
        // 1. define `ans` to hold `candidates`
        vector<vector<string>> ans;
        // 2. define `candidates` to hold all potential candidates (palindromic substring)
        vector<string> candidates;
        // 3. start backtrack from index 0
        backtrack(s, ans, candidates, 0);
        // 4. return ans
        return ans;
    }
    
     void backtrack(string s, vector<vector<string>>& ans, vector<string>& candidates, int start) {
        // 1. check if the goal is fulfilled, 
        // i.e. reaching the end of string in this problem
        if (start == s.size()) {
            // if so, we push `candidates` to ans since we've processed all characters
            ans.push_back(candidates);
            return;
        }
        // 2. find all potential candidates
        for (int i = start; i < s.size(); i++) {
            // we want test all substrings, each substring is a potential candidate
            // e.g. "aab" -> "a", "a", "b", "ab", "aa", "b", "aab"
            string candidate = s.substr(start, i - start + 1);
            // 3. check if the current candidate is palindrome or not 
            // if not, then we cannot push to `candidates`
            if(!is_palindrome(candidate)) continue;
            // 4. if so, push it to candidates
            candidates.push_back(candidate);
            // 5. backtrack with index + 1
            backtrack(s, ans, candidates, i + 1);
            // 6. remove the current substring from `candidates`
            candidates.pop_back();
        }
    }
    
    
    // there are different ways to check if `s` is palindrome 
    // here's my favourite one
    bool is_palindrome(string s) {
        return equal(s.begin(), s.begin() + s.size() / 2, s.rbegin());
    }
};
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wingkwong"/>

```java
class Solution {
    public List<List<String>> partition(String s) {
        // backtracking 
        // 1. define `ans` to hold `candidates`
        List<List<String>> ans = new ArrayList<>();
        // 2. define `candidates` to hold all potential candidates (palindromic substring)
        List<String> candidates = new ArrayList<>();
        // 3. start backtrack from index 0
        backtrack(s, ans, candidates, 0);
        // 4. return ans
        return ans;
    }
    
    private void backtrack(String s, List<List<String>> ans, List<String> candidates, int start) {
        // 1. check if the goal is fulfilled, 
        // i.e. reaching the end of string in this problem
        if (start == s.length()) {
            ans.add(new ArrayList<>(candidates));
            return;
        }
        // 2. find all potential candidates
        for (int i = start; i < s.length(); i++) {
            // we want test all substrings, each substring is a potential candidate
            // e.g. "aab" -> "a", "a", "b", "ab", "aa", "b", "aab"
            String candidate = s.substring(start, i + 1);
            // 3. check if the current candidate is palindrome or not 
            // if not, then we cannot push to `candidates`
            if (!isPalindrome(candidate)) continue;
            // 4. if so, push it to candidates
            candidates.add(candidate);
            // 5. backtrack with index + 1
            backtrack(s, ans, candidates, i + 1);
            // 6. remove the current substring from `candidates`
            candidates.remove(candidates.size() - 1);
        }
    }
    
    // there are different ways to check if `s` is palindrome 
    // here's one of the ways
    private boolean isPalindrome(String s) {
        return new StringBuilder(s).reverse().toString().equals(s);
    }
}
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
class Solution:
    def partition(self, s: str) -> List[List[str]]:
        def is_palindrome(s):
            return s == s[::-1]
    
        def backtrack(s, ans, candidates, start):
            # 1. check if the goal is fulfilled, 
            # i.e. reaching the end of string in this problem
            if start == len(s):
                # if so, we push `candidates` to ans since we've processed all characters
                ans.append(list(candidates))
                return
            # 2. find all potential candidates
            for i in range(start, len(s)):
                # we want test all substrings, each substring is a potential candidate
                # e.g. "aab" -> "a", "a", "b", "ab", "aa", "b", "aab"
                candidate = s[start:i+1]
                # 3. check if the current candidate is palindrome or not 
                # if not, then we cannot push to `candidates`
                if not is_palindrome(candidate):
                    continue
                # 4. if so, push it to candidates
                candidates.append(candidate)
                # 5. backtrack with index + 1
                backtrack(s, ans, candidates, i + 1)
                # 6. remove the current substring from `candidates`
                candidates.pop()

        # backtracking 
        # 1. define `ans` to hold `candidates`
        ans = []
        # 2. define `candidates` to hold all potential candidates (palindromic substring)
        candidates = []
        # 3. start backtrack from index 0
        backtrack(s, ans, candidates, 0)
        # 4. return ans
        return ans
```

</TabItem>

<TabItem value="rs" label="Rust">
<SolutionAuthor name="@wingkwong"/>

```rs
impl Solution {
    fn partition(s: String) -> Vec<Vec<String>> {
        // backtracking 
        // 1. define `ans` to hold `candidates`
        let mut ans = Vec::new();
        // 2. define `candidates` to hold all potential candidates (palindromic substring)
        let mut candidates = Vec::new();
        // 3. start backtrack from index 0
        Solution::backtrack(&s, &mut ans, &mut candidates, 0);
        // 4. return ans
        ans
    }

    fn backtrack(s: &String, ans: &mut Vec<Vec<String>>, candidates: &mut Vec<String>, start: usize) {
        // 1. check if the goal is fulfilled, 
        // i.e. reaching the end of string in this problem
        if start == s.len() {
            // if so, we push `candidates` to ans since we've processed all characters
            ans.push(candidates.clone());
            return;
        }
        // 2. find all potential candidates
        for i in start..s.len() {
            // we want test all substrings, each substring is a potential candidate
            // e.g. "aab" -> "a", "a", "b", "ab", "aa", "b", "aab"
            let candidate = &s[start .. i + 1];
            // 3. check if the current candidate is palindrome or not 
            // if not, then we cannot push to `candidates`
            if !Solution::is_palindrome(candidate) {
                continue;
            }
            // 4. if so, push it to candidates
            candidates.push(candidate.to_string());
            // 5. backtrack with index + 1
            Solution::backtrack(s, ans, candidates, i + 1);
            // 6. remove the current substring from `candidates`
            candidates.pop();
        }
    }

    fn is_palindrome(s: &str) -> bool {
        s.chars().eq(s.chars().rev())
    }
}

```

</TabItem>
</Tabs>
