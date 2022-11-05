---
description: 'Author: @wingkwong | https://leetcode.com/problems/minimum-genetic-mutation/'
tags: [Hash Table, String, Breadth-First Search]
---

# 0433 - Minimum Genetic Mutation (Medium) 

## Problem Link

https://leetcode.com/problems/minimum-genetic-mutation/

## Problem Statement

A gene string can be represented by an 8-character long string, with choices from `'A'`, `'C'`, `'G'`, and `'T'`.

Suppose we need to investigate a mutation from a gene string `start` to a gene string `end` where one mutation is defined as one single character changed in the gene string.

- For example, `"AACCGGTT" --> "AACCGGTA"` is one mutation.

There is also a gene bank `bank` that records all the valid gene mutations. A gene must be in `bank` to make it a valid gene string.

Given the two gene strings `start` and `end` and the gene bank `bank`, return *the minimum number of mutations needed to mutate from*`start`*to*`end`. If there is no such a mutation, return `-1`.

Note that the starting point is assumed to be valid, so it might not be included in the bank.

**Example 1:**

```
Input: start = "AACCGGTT", end = "AACCGGTA", bank = ["AACCGGTA"]
Output: 1
```

**Example 2:**

```
Input: start = "AACCGGTT", end = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
Output: 2
```

**Example 3:**

```
Input: start = "AAAAACCC", end = "AACCCCCC", bank = ["AAAACCCC","AAACCCCC","AACCCCCC"]
Output: 3
```

**Constraints:**

- `start.length == 8`
- `end.length == 8`
- `0 <= bank.length <= 10`
- `bank[i].length == 8`
- `start`, `end`, and `bank[i]` consist of only the characters `['A', 'C', 'G', 'T']`.

## Approach 1: BFS

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    // Intuition: we can see each string as a node and we can connect them if 
    // 1. there is only one single character different
    // 2. the target node is available in `bank`
    // the problem is now to find the shortest path from the starting point to the ending point
    // so we can use BFS
    int minMutation(string start, string end, vector<string>& bank) {
        // a queue to store each gene string (node)
        queue<string> q;
        // a hash map to store if we've visited a node
        unordered_map<string, int> vis;
        // distance
        int steps = 0;
        // we start from gene string `start` as a starting point
        // push it to the queue
        q.push(start);
        // and mark it visited
        vis[start] = 1;
        // BFS
        while (!q.empty()) {
            // iterate from the back because the size of q varies
            // which would result in wrong answer if you iterate from 0
            // alternatively, you can define a new variable for q.size() before the for-loop
            // i.e. 
            // int n = q.size();
            // for (int i = 0; i < n; i++) { 
            for (int i = q.size(); i > 0; i--) {
                // get the gene string from the queue
                string s = q.front();
                q.pop();
                // if it is same as `end`, that means we found the answer
                if (s == end) return steps;
                // otherwise, given a gene string with 8-character long
                // we can replace each character with "A", "C", "G" and "T" (i.e. mutate)
                for (int j = 0; j < 8; j++) {
                    // s[j] will be modified later, 
                    // hence store the original character here
                    char oc = s[j];
                    // iterate ACGT
                    // alternatively, you can use `for (char c : "ACGT") { ... }`
                    for (int k = 0; k < 4; k++) {
                        // replace the j-th character in s with the k-th character in ACGT
                        s[j] = "ACGT"[k];
                        // we can reach the next node if the next node hasn't been visited
                        // and the next node is available in `bank`
                        if (!vis[s] && find(bank.begin(), bank.end(), s) != bank.end()) {
                            // push the next node to the queue
                            q.push(s);
                            // and mark it visited
                            vis[s] = 1;
                        }
                    }
                    // since we updated the character, we revert it back
                    s[j] = oc;
                }
            }
            // increase the step count
            steps += 1;
        }
        // not able to reach `end`, return -1 here
        return -1;
    }
};
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wingkwong"/>

```java
class Solution {
    // Intuition: we can see each string as a node and we can connect them if 
    // 1. there is only one single character different
    // 2. the target node is available in `bank`
    // the problem is now to find the shortest path from the starting point to the ending point
    // so we can use BFS
    public int minMutation(String start, String end, String[] bank) {
        // a queue to store each gene string (node)
        Queue<String> q = new LinkedList<>();
        // a hash set to store if we've visited a node
        HashSet<String> vis = new HashSet<String>();
        // convert bank to List
        List<String> banks = Arrays.asList(bank);
        // distance
        int steps = 0;
        // we start from gene string `start` as a starting point
        // push it to the queue
        q.add(start);
        // and mark it visited
        vis.add(start);
        // BFS
        while (!q.isEmpty()) {
            // iterate from the back because the size of q varies
            // which would result in wrong answer if you iterate from 0
            // alternatively, you can define a new variable for q.size() before the for-loop
            // i.e. 
            // int n = q.size();
            // for (int i = 0; i < n; i++) { 
            for (int i = q.size(); i > 0; i--) {
                // get the gene string from the queue
                String s = q.poll();
                // if it is same as `end`, that means we found the answer
                if (s.equals(end)) return steps;
                // otherwise, given a gene string with 8-character long
                // we can replace each character with "A", "C", "G" and "T"
                char[] ca = s.toCharArray();
                for (int j = 0; j < 8; j++) {
                    // s[j] will be modified later, 
                    // hence store the original character here
                    char oc = ca[j];
                    // iterate ACGT
                    // alternatively, you can use `for (char c : "ACGT") { ... }`
                    for (int k = 0; k < 4; k++) {
                        // replace the j-th character in s with the k-th character in ACGT
                        ca[j] = "ACGT".charAt(k);
                        // we can reach the next node if the next node hasn't been visited
                        // and the next node is available in `bank`
                        String t = new String(ca);
                        if (!vis.contains(t) && banks.contains(t)) {
                            // push the next node to the queue
                            q.add(t);
                            // and mark it visited
                            vis.add(t);
                        }
                    }
                    // since we updated the character, we revert it back
                    ca[j] = oc;
                }
            }
            // increase the step count
            steps += 1;
        }
        // not able to reach `end`, return -1 here
        return -1;
    }
}
```

</TabItem>
</Tabs>