---
description: 'Author: @wingkwong, @ganajayant | https://leetcode.com/problems/group-anagrams/'
tags: ['Array', 'Hash Table', 'String', 'Sorting']
---

# 0049 - Group Anagrams (Medium)

## Problem Link

https://leetcode.com/problems/group-anagrams/

## Problem Statement

Given an array of strings `strs`, group **the anagrams** together. You can return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

```
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

**Example 2:**

```
Input: strs = [""]
Output: [[""]]
```

**Example 3:**

```
Input: strs = ["a"]
Output: [["a"]]
```

**Constraints:**

* `1 <= strs.length <= 10^4`
* `0 <= strs[i].length <= 100`
* `strs[i]` consists of lowercase English letters.

## Approach 1: Sorting + Hash Map

To check if $$s$$ and $$t$$ are anagrams, one of the ways is to sort them both and check if they are equal. For example, if we sort $tan$ and $nat$, we will get $ant$. Therefore, we can group them together.

We can use a hash map to store the sorted string as a key, and push the original value to an array. At the end, we iterate the hash map and push the corresponding array to our final answer.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    // all anagrams in the same group would have the same frequency for each character
    // e.g. ["nat","tan"] - both have 1 'a', 1't', and 1'n'
    // in other words, we can group the anagrams by their frequencies
    // another observation is that after sorting all anagrams in the group,
    // they would have the same result (because they have same frequency of each word)
    // ["nat","tan"] -> "ant"
    // so we can also group the anagrams by its sorted key
    // below it the group by sorted key version
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        // we need to a hashmap to store an array of the anagrams
        // with its sorted string as the key
        // e.g. "ant":  ["nat","tan"]
        unordered_map<string, vector<string>> m;
        // iterate each string
        for(auto& x : strs) {
            // since we need to know the original value,
            // we copy `x` to `t` for sorting
            string t = x;
            // sort it to make the key
            sort(t.begin(), t.end());
            // push the orginal the value under its sorted key
            m[t].push_back(x);
        }
        // build the final anwser
        vector<vector<string>> ans;
        // x.second is the array of the anagrams under the key `x.first`
        for(auto& x : m) ans.push_back(x.second);
        return ans;
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
<SolutionAuthor name="@ganajayant"/>

```java
class Solution {
    private String sortString(String str) {
        char[] chars = str.toCharArray();
        java.util.Arrays.sort(chars);
        return new String(chars);
    }

    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String, LinkedList<String>> hm = new HashMap<>();
        for (int i = 0; i < strs.length; i++) {
            String sortedstring = sortString(strs[i]);
            if (hm.containsKey(sortedstring)) {
                hm.get(sortedstring).add(strs[i]);
            } else {
                hm.put(sortedstring, new LinkedList<String>());
                hm.get(sortedstring).add(strs[i]);
            }
        }
        List<List<String>> ll = new LinkedList<List<String>>();
        for (Map.Entry<String, LinkedList<String>> entry : hm.entrySet()) {
            ll.add((List<String>) entry.getValue());
        }
        return ll;
    }
}
```
</TabItem>
</Tabs>

## Approach 2: Hash Map with Prime Numbers

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        int M = 1e9 + 9;
        vector<int> primes(26);
        for (int i = 0; i < 26; i++)  primes[i] = i * i + i + 41;
        unordered_map<long long, vector<string>> m;
        for (int i = 0; i < strs.size(); i++) {
            long long k = 1;
            for (int j = 0; j < strs[i].size(); j++) {
                k *= 1LL * primes[strs[i][j] - 'a'];
                k %= M;
            }
            m[k].push_back(strs[i]);
        }
        vector<vector<string>> ans;
        for (auto x : m) ans.push_back(x.second);
        return ans;
    }
};
```

</TabItem>
</Tabs>