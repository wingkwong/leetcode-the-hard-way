---
description: 'Author: @wingkwong, @ColeB2 | https://leetcode.com/problems/palindrome-partitioning/'
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
            // we want to test all substrings, each substring is a potential candidate
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
            // we want to test all substrings, each substring is a potential candidate
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
                # we want to test all substrings, each substring is a potential candidate
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
            // we want to test all substrings, each substring is a potential candidate
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

## Approach 2: Iterative Backtracking

We can do a similar approach, but iteratively. That is create our own stack to track our processes. That process is to generate all possible partitions of the input string by considering each character as a potential starting point and exploring all possible substrings from those starting points, which are palindromes.

In the example of $$"aaab"$$, we can see that $$"a"$$, $$"aa"$$, $$"aaa"$$ would all be palindrome partitions we would want to check if we started at index, $$i == 0$$. We also see $$"aaab"$$ is not a palindrome, so we wouldn't further check that partition.

If we further follow our example, we can see for $$"aaa"$$, we would check if "b" was a palindrome, then add it to the partition, and that would be 1 complete partition $$["aaa", "b"]$$

For $$"aa"$$, we would check $$"a"$$, and $$"ab"$$, and only add $$["aa", "a"]$$ to our stack. Then again finish with $$["aa", "a", "b"]$$

Finally for $$"a"$$, we would check the substrings, $$"a"$$, $$"aa"$$, and $$"aab"$$ and would and would create partitions using the first two as: $$["a", "a"]$$ and $$["a", "aa"]$$. If we continued to follow the same logic, you could see we would eventually finish the question off with 4 partitions:
$$["aaa", "b"]$$, $$["aa", "a", "b"]$$, $$["a", "aa", "b"]$$ and $$["a", "a", "a", "b"]$$

Time Complexity: $$O(n*2^n)$$. For each character in string, we have 2 choices, to include it or don't include it in the current partition, creating up to $$2^n$$ partitions. We also do our palindrome check in $$O(n)$$ time.

Space Complexity: $$(n*2^n)$$, in the worst case, we will have $$2^n$$ partitions of size $$n$$

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def is_palindrome(self, s, l, r):
        # palidrome function, start at both ends, checking
        # the characters are equal to each other. O(n) where
        # n is the length of the string.
        while l < r:
            if s[l] != s[r]:
                return False
            l += 1
            r -= 1
        return True

    def partition(self, s: str) -> List[List[str]]:
        # initialize empty list to store all partitions of input string.
        palindromes = []
        # initialize our stack for backtracking purposes.
        # The stack will track all partitions of the string.
        # initialize and index, 0 as a starting point, and empty list
        # as our partitions.
        stack = [(0, [])]
        while stack:
            # pop off our index in string, s and current partition list.
            i, partition = stack.pop()
            # if the index is at the end of the string, we have explored
            # all possible substrings in the current partition.
            if i >= len(s):
                # Add to our palindromes list, and continue.
                palindromes.append(partition)
                continue
            # loop through all possible substrings starting at index i.
            for j in range(i, len(s)):
                # if the string, s from i to j is a palindrome:
                if self.is_palindrome(s, i, j):
                    # create a copy of current partition and add the 
                    # palindromic string section for i to j+1
                    part = partition[:] + [s[i:j+1]]
                    # add the index we are going to leave off of,
                    # as well as the copy of the partition to the stack.
                    stack.append((j + 1, part))
        return palindromes

```

</TabItem>
</Tabs>
