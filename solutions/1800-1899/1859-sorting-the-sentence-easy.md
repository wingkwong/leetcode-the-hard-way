---
description: >-
  Author: @wkw | https://leetcode.com/problems/sorting-the-sentence/


tags: ['Sorting']
---

# 1859 - Sorting the Sentence (Easy)

## Problem Link

https://leetcode.com/problems/sorting-the-sentence/

## Problem Statement

A **sentence** is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be **shuffled** by appending the **1-indexed word position** to each word then rearranging the words in the sentence.

- For example, the sentence `"This is a sentence"` can be shuffled as `"sentence4 a3 is2 This1"` or `"is2 sentence4 This1 a3"`.

Given a **shuffled sentence** `s` containing no more than `9` words, reconstruct and return _the original sentence_.

**Example 1:**

```
Input: s = "is2 sentence4 This1 a3"
Output: "This is a sentence"
Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
```

**Example 2:**

```
Input: s = "Myself2 Me1 I4 and3"
Output: "Me Myself and I"
Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.
```

**Constraints:**

- `2 <= s.length <= 200`
- `s` consists of lowercase and uppercase English letters, spaces, and digits from `1` to `9`.
- The number of words in `s` is between `1` and `9`.
- The words in `s` are separated by a single space.
- `s` contains no leading or trailing spaces.

## Approach 1: Sorting with Comparator

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    // split template
    vector<string> split(string str, char delim) {
        string line;
        vector<string> res;
        stringstream ss(str);
        while(getline(ss, line, delim)) res.push_back(line);
        return res;
    }

    string sortSentence(string s) {
        string ans;
        // split the string by space
        // "is2 sentence4 This1 a3" -> ["is2", "sentence4", "This1", "a3"]
        vector<string> ss = split(s, ' ');
        // we need to sort a pair of words with orders -> {word, order}
        // so we use vector<pair<string, int>>
        vector<pair<string, int>> v((int) ss.size());
        // we put word in the first place
        for (auto& x : ss) {
            v.push_back({
                x.substr(0, (int) x.size() - 1), // word
                x.back() // order
            });
        }
        // by default, sort() would sort the first element first, then sort the second one
        // in this case, we would like to sort by the order which is the second element
        // hence, we need to define a custom comparator
        sort(v.begin(), v.end(), [&](const pair<string, int> &x, const pair<string, int>& y) {
            // compare the second element
            return x.second < y.second;
        });
        // build the final string
        for (auto& x : v) {
            if ((int) ans.size() > 0) ans += ' ';
            ans += x.first;
        }
        return ans;
    }
};
```

## Approach 2: Sorting without Comparator

<SolutionAuthor name="@wkw"/>

```cpp
class Solution {
public:
    // split template
    vector<string> split(string str, char delim) {
        string line;
        vector<string> res;
        stringstream ss(str);
        while(getline(ss, line, delim)) res.push_back(line);
        return res;
    }

    string sortSentence(string s) {
        string ans;
        // split the string by space
        // "is2 sentence4 This1 a3" -> ["is2", "sentence4", "This1", "a3"]
        vector<string> ss = split(s, ' ');
        // we need to sort a pair of words with orders -> {order, word}
        // so we use vector<pair<int, string>>
        vector<pair<int, string>> v((int) ss.size());
        // we put order in the first place
        // so that we don't need to write a custom comparator in sorting
        for (auto& x : ss) {
            v.push_back({
                x.back(), // order
                x.substr(0, (int) x.size() - 1) // word
            });
        }
        // sort it without a custom comparator
        sort(v.begin(), v.end());
        // build the final string
        for (auto& x : v) {
            if ((int) ans.size() > 0) ans += ' ';
            ans += x.second;
        }
        return ans;
    }
};
```
