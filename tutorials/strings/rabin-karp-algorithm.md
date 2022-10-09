---
title: '<Rabin Karp Algorothm>'
description: 'Rabin Karp Algorithm used for searching pattern.'
hide_table_of_contents: true
---

<TutorialAuthors names="@<Yash Gautam>"/>

## Overview

Rabin Karp Algorithm is based on Hashing.


Problem: there are 2 strings, pattern A and text B. You have the determine wheather the pattern appear in text or not.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="Yash Gautam"/>

```cpp

    const int N = 1e5+7, M = 1e9+7;
    vector<int> power(N,0);
    int p = 31;

    vector<int> rabin_karp(string const& s, string const& t) {
        const int p = 31; 
        const int m = 1e9 + 9;
        int S = s.size(), T = t.size();

        vector<long long> p_pow(max(S, T)); 
        p_pow[0] = 1; 
        for (int i = 1; i < (int)p_pow.size(); i++){ 
            p_pow[i] = (p_pow[i-1] * p) % m;
        }

        vector<long long> h(T + 1, 0); 
        for (int i = 0; i < T; i++){
            h[i+1] = (h[i] + (t[i] - 'a' + 1) * p_pow[i]) % m; 
        }
        long long h_s = 0; 
        for (int i = 0; i < S; i++){
            h_s = (h_s + (s[i] - 'a' + 1) * p_pow[i]) % m; 
        }

        vector<int> occurences;
        for (int i = 0; i + S - 1 < T; i++) { 
            long long cur_h = (h[i+S] + m - h[i]) % m; 
            if (cur_h == h_s * p_pow[i] % m){
                occurences.push_back(i);
            }
        }
        return occurences;
    }
    ```
    
    
  Algorithm: 
  
     Calculate the hash of pattern A and calculate the hash of all the prefixes of the text B. Now compare the hash of substring B with A.
     Time Complexity = O(|A| + |B|). O(|A|) is used for calculationg the hash of the pattern and O(|B|) for comparing each substring of length B with the pattern. 


Problem: 
1) https://practice.geeksforgeeks.org/problems/31272eef104840f7430ad9fd1d43b434a4b9596b/1
2) https://leetcode.com/problems/longest-duplicate-substring/
