---
description: 'Author: @wingkwong | https://leetcode.com/problems/orderly-queue/'
tags: [Math, String, Sorting]
---

# 0899 - Orderly Queue (Hard) 

## Problem Link

https://leetcode.com/problems/orderly-queue/

## Problem Statement

You are given a string `s` and an integer `k`. You can choose one of the first `k` letters of `s` and append it at the end of the string..

Return *the lexicographically smallest string you could have after applying the mentioned step any number of moves*.

**Example 1:**

```
Input: s = "cba", k = 1
Output: "acb"
Explanation: 
In the first move, we move the 1st character 'c' to the end, obtaining the string "bac".
In the second move, we move the 1st character 'b' to the end, obtaining the final result "acb".
```

**Example 2:**

```
Input: s = "baaca", k = 3
Output: "aaabc"
Explanation: 
In the first move, we move the 1st character 'b' to the end, obtaining the string "aacab".
In the second move, we move the 3rd character 'c' to the end, obtaining the final result "aaabc".
```

**Constraints:**

- `1 <= k <= s.length <= 1000`
- `s` consist of lowercase English letters.

## Approach 1: Rotate or Sort

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
// Time Complexity: O(N ^ 2)
// Space Complexity: O(N)
class Solution {
public:
    // just a refresher ...
    void bubbleSort(string& s) {
        int n = s.size();
        bool swapped;
        for (int i = 0; i < n; i++) {
            swapped = false;
            for (int j = 0; j < n - 1; j++) {
                if (s[j] > s[j + 1]) {
                    swap(s[j], s[j + 1]);
                    swapped = true;
                }
            }
            if (!swapped) break;
        }
    }
    
    string orderlyQueue(string s, int k) {
        string ans = s;
        if (k == 1) {
            // "cba" -> "bac" -> "acb" -> "cba" -> ...
            // we only have N swaps here 
            // as it will become the original string after N swaps
            // hence, we can try all N possible swaps and find the lexicographically smallest one
            for (int i = 1; i < s.size(); i++) {
                ans = min(ans, s.substr(i) + s.substr(0, i));
            }
        } else {
            // if k > 1, we can move any character to any position by swapping two adjacent characters
            // By swapping a number of times, 
            // e.g. "cab" 
            // eventually we could have "abc", "acb", "bca", "bac", "cba", "cab" (3 * 2 * 1 = 6 possible arrangements)
            // so the lexicographically smallest string would be the sorted string using bubble sort
            bubbleSort(ans);
            // alternatively, you can use `sort(ans.begin(), ans.end());`
        }
        return ans;
    }
};
```
</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wingkwong"/>

```java
// Time Complexity: O(N ^ 2)
// Space Complexity: O(N)
class Solution {
    public String orderlyQueue(String s, int k) {
        String ans = s;
        if (k == 1) {
            // "cba" -> "bac" -> "acb" -> "cba" -> ...
            // we only have N swaps here 
            // as it will become the original string after N swaps
            // hence, we can try all N possible swaps and find the lexicographically smallest one
            for (int i = 0; i < s.length(); i++) {
                String t = s.substring(i) + s.substring(0, i);
                if (ans.compareTo(t) > 0) {
                    ans = t;
                }
            }
        } else {
            // if k > 1, we can move any character to any position by swapping two adjacent characters
            // By swapping a number of times, 
            // e.g. "cab" 
            // eventually we could have "abc", "acb", "bca", "bac", "cba", "cab" (3 * 2 * 1 = 6 possible arrangements)
            // so the lexicographically smallest string would be the sorted string
            char[] ca = ans.toCharArray();
            Arrays.sort(ca);
            ans = new String(ca);
        }
        return ans;
    }
}
```

</TabItem>

<TabItem value="go" label="Go">
<SolutionAuthor name="@wingkwong"/>

```go
// Time Complexity: O(N ^ 2)
// Space Complexity: O(N)
func orderlyQueue(s string, k int) string {
    ans := s
    if k == 1 {
        // "cba" -> "bac" -> "acb" -> "cba" -> ...
        // we only have N swaps here 
        // as it will become the original string after N swaps
        // hence, we can try all N possible swaps and find the lexicographically smallest one
        for i := 0; i < len(s); i++ {
            t := s[i:] + s[:i]
            if t < ans {
                ans = t
            }
        }
    } else {
        // if k > 1, we can move any character to any position by swapping two adjacent characters
        // By swapping a number of times, 
        // e.g. "cab" 
        // eventually we could have "abc", "acb", "bca", "bac", "cba", "cab" (3 * 2 * 1 = 6 possible arrangements)
        // so the lexicographically smallest string would be the sorted string
        r := []rune(ans)
        sort.Slice(r, func(i int, j int) bool { return r[i] < r[j] })
        ans = string(r)
    }
    return ans
}
```

</TabItem>

<TabItem value="py" label="Python3">
<SolutionAuthor name="@wingkwong"/>

```py
# Time Complexity: O(N ^ 2)
# Space Complexity: O(N)
class Solution:
    def orderlyQueue(self, s: str, k: int) -> str:
        # "cba" -> "bac" -> "acb" -> "cba" -> ...
        # we only have N swaps here 
        # as it will become the original string after N swaps
        # hence, we can try all N possible swaps and find the lexicographically smallest one
        if k == 1: return min(s[i:] + s[:i] for i in range(len(s)))
        # if k > 1, we can move any character to any position by swapping two adjacent characters
        # By swapping a number of times, 
        # e.g. "cab" 
        # eventually we could have "abc", "acb", "bca", "bac", "cba", "cab" (3 * 2 * 1 = 6 possible arrangements)
        # so the lexicographically smallest string would be the sorted string
        return "".join(sorted(s))
```

</TabItem>
</Tabs>

## Approach 2: 

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    string orderlyQueue(string s, int k) {
        if (k > 1) {
            sort(s.begin(), s.end());
            return s;
        }
        // case: k == 1
        // Booth's algorithm uses a modified preprocessing function from KMP
        // and it runs in O(N) time
        // ref: https://en.wikipedia.org/wiki/Lexicographically_minimal_string_rotation
        int n = s.size();
        s += s;
        vector<int> f(s.size(), -1);
        k = 0;
        for (int j = 1; j < s.size(); j++) {
            char sj = s[j];
            int i = f[j - k - 1];
            while (i != -1 && sj != s[k + i + 1]) {
                if (sj < s[k + i + 1]) k = j - i - 1;
                i = f[i];
            }
            if (sj != s[k + i + 1]) {
                if (sj < s[k]) {
                    k = j;
                }
                f[j - k] = -1;
            } else {
                f[j - k] = i + 1;
            }
        }
        return s.substr(k, s.size() / 2);
    }
};
```
</TabItem>
</Tabs>