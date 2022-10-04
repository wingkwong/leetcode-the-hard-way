---
Description: >-
  Author: @chinmayayy |
  https://leetcode.com/problems/longest-palindromic-subsequence/
Tags: [String, Dynamic Programming]
---

# 0516 -Longest Palindromic Subsequence (Medium)

## Problem Link

https://leetcode.com/problems/longest-palindromic-subsequence/

## Problem Statement

We are given a string `s` and have to return the **longest palindromic subsequence's** length in s.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

For example: Given `s = abcdefg` -> `abcf`, `deg`, and `bcdg` all are subsequences of s. 

The task is to find the longest such subsequence which is also a palindrome.

**Example 1:**

```
Input: s = "bbbab"
Output: 4
Explanation: One possible longest palindromic subsequence is "bbbb".
```

**Example 2:**

```
Input: s = "cbbd"
Output: 2
Explanation: One possible longest palindromic subsequence is "bb".
```

**Constraints:**

* `1 <= s.length <= 1000`
* `s consists only of lowercase English letters.`
 

## Intution: Longest Common Subsequence

The basic intution to this problem is to understand that it is a variation of the famous DP problem of finding the **Longest Common Subsequence (LCS)** between two given strings and then evolve into the required solution.

The input format in a LCS problem are two given strings. We have one input string here and since we need to find a palindromic subsequence, it can be derived easily that reversing the given input, treating them as two separate strings and finding the LCS between them could fetch us the feasible solution. 

## Approach 1: Recursive - Brute Force

 Since, we need to iterate and check for each of the characters in the string, recursion could be of use to us. 

<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@chinmayayy"/>

```c++
class Solution {
public:
    int longestPalindromeSubseq(string s) {
        
        string s1 = "";
        
        // Reversed string
        for(int i=s.length()-1; i>=0; i--) {
            s1.push_back(s[i]);
        }     
        return LCS(s,s1, s.length(), s2.length());
}
  
    int LCS(string a, string b,int len1 ,int len2) {
  
        if(len1==0 || len2==0){
            return 0;
        }
        if(a[len1-1]==b[len2-1]) {
            return 1+LCS(a,b,len1-1,len2-1);
        }
        else{
            return max(LCS(a,b,len1-1,n), LCS(a,b,len1,len2-1));
        }
}
  
```
</TabItem>
</Tabs>

## Approach 2: Recursion + Memoization


<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@chinmayayy"/>

```c++
class Solution {
public:
    int dp[s.length()+1][s1.length()+1];
  
    int longestPalindromeSubseq(string s) {
        
        string s1 = "";
        
        // Reversed string
        for(int i=s.length()-1; i>=0; i--) {
            s1.push_back(s[i]);
        }    
  
        for(int i=0; i<len1; i++){
            for(int j=0; j<len2; j++){
                dp[i][j]=-1;
            }
        }
  
        return LCS(s,s1, s.length(), s2.length());
}
  
    int LCS(string a, string b,int len1 ,int len2) {

        if(len1==0 || len2==0){
            return 0;
        }
  
        if(dp[len1][len2]!=-1){
            return dp[len1][len2];
        }
        if(a[len1-1]==b[len2-1]) {
            return 1+LCS(a,b,len1-1,len2-1);
        }
        else{
            return max(LCS(a,b,len1-1,n), LCS(a,b,len1,len2-1));
        }
}
```
</TabItem>
</Tabs>

## Approach 3: Top-Down Dynamic Programming + Memoization


<Tabs>
<TabItem value="c++" label="C++">
<SolutionAuthor name="@chinmayayy"/>

```c++
class Solution {
public:
    int longestPalindromeSubseq(string s) {
        // Basically LCS(s, reverse of s);
        
        string s1 = "";
        
        for(int i=s.length()-1; i>=0; i--) {
            s1.push_back(s[i]);
        }
        
        // Since, s and s1 have same length, one parameter is enough
        return LCS(s,s1, s.length());
    }
    
    int LCS(string a, string b, int len) {
        int dp[len+1][len+1];
        
        for(int i=0; i<=len; i++) {
            for(int j=0; j<=len; j++) {
                if(i==0 || j==0) 
                    dp[i][j] = 0;
            }
        }
        
        
        for(int i=1; i<=len; i++) {
            for(int j=1; j<=len; j++) {
                if(a[i-1]==b[j-1]) {
                    dp[i][j] = 1 + dp[i-1][j-1];
                }
                else {
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }
        
        return dp[len][len];
    }
};
```
</TabItem>
</Tabs>
