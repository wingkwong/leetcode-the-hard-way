---
description: >-
  Author: @vigneshshiv | https://leetcode.com/problems/concatenated-words/
---

# 0472 - Concatenated Words (Hard)

## Problem Link

https://leetcode.com/problems/concatenated-words/

## Problem Statement

Given an array of strings `words` (**without duplicates**), return _all the_ **_concatenated words_** _in the given list of_ `words`.

A **concatenated word** is defined as a string that is comprised entirely of at least two shorter words in the given array.

**Example 1:**

```
Input: words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]
Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats";
"dogcatsdog" can be concatenated by "dog", "cats" and "dog";
"ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".
```

**Example 2:**

```
Input: words = ["cat","dog","catdog"]
Output: ["catdog"]
```

**Constraints:**

- `1 <= words.length <= 10^4`
- `1 <= words[i].length <= 30`
- `words[i]` consists of only lowercase English letters.
- All the strings of `words` are **unique**.
- `1 <= sum(words[i].length) <= 10^5`

## Approach 1: Trie Structure

Construct a list of string as a tree (similar to trie) and check whether larger string consist of atleast two or more than two strings.

So lets break down problem statement, a concatenated words is combined with $2$ or more than $2$ words from the list to forms a large string. Let's take above example $2$, _catdog_ is concatenated strings of _cat_ and _dog_ from the list.

Simpler appraoch to solve this, by taking larger string, check index by index with other strings in the list to _match prefix of larger string to forms a complete word_. If larger string has a remaining substring, iterate through the same process to find the next half of the string in the list.

Here, the second string may be a another string in the list (_dog_) or it may be on the same string then the larger consist of $3$ strings.

- First, builds a trie structure, to forms string tree structure.
- Iterate through the list of words and check the prefix and suffix forms a complete word either two or more than two strings (as mentioned above).

Time Complexity: $O(n * s^3)$, where $n$ - # of words, $s$ - the highest length of the word

Space Complexity: $O(n)$

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {

    class TrieNode {
        private char character;
        private TrieNode[] nodes = new TrieNode[26];
        private boolean completeWord;

        public TrieNode(char character) {
            this.character = character;
        }

        public void setWordCompletion(boolean complete) {
            this.completeWord = complete;
        }

        public boolean isCompleteWord() {
            return completeWord;
        }
    }

    public List<String> findAllConcatenatedWordsInADict(String[] words) {
        List<String> result = new ArrayList<>();
        TrieNode root = buildsTrie(words);
        for (String word : words) {
            if (canForm(root, word, 0, word.length() - 1)) {
                result.add(word);
            }
        }
        return result;
    }

    public TrieNode buildsTrie(String[] words) {
        // Forms as Root
        TrieNode root = new TrieNode('\0');
        for (String word : words) {
            TrieNode current = root;
            for (char c : word.toCharArray()) {
                int idx = c - 'a';
                if (current.nodes[idx] == null) {
                    current.nodes[idx] = new TrieNode(c);
                }
                current = current.nodes[idx];
            }
            if (current != null) {
                current.setWordCompletion(true);
            }
        }
        return root;
    }

    public boolean canForm(TrieNode root, String word, int start, int end) {
        TrieNode current = root;
        for (int i = start; i <= end; i++) {
            char c = word.charAt(i);
            current = current.nodes[c - 'a'];
            if (current == null) return false;
            // Prefix word
            if (current.isCompleteWord()) {
                if (hasWord(root, word, i + 1, end) || canForm(root, word, i + 1, end)) {
                    return true;
                }
            }
        }
        return false;
    }

    public boolean hasWord(TrieNode root, String word, int start, int end) {
        TrieNode current = root;
        for (int i = start; i <= end; i++) {
            char c = word.charAt(i);
            current = current.nodes[c - 'a'];
            if (current == null) return false;
        }
        return current.isCompleteWord();
    }
}
```

</TabItem>
</Tabs>

## Approach 2: HashSet with Iterative Solution

Construct a list of string as a collection store in Set, and check whether larger string consist of atleast two or more than two strings.

HashSet preferred instead of list, it avoids duplicate string in the collection of objects when we iterate through the list and store suffix string as a memoization for faster lookup. Consider the below example why suffix stored as a memoized value in the list,

`["cat","cats","rat","ratcatsdog","dog","dogcatsdog"]`

When iterating on `ratcatsdog` string, as soon as the `rat` get matched, the suffix `catsdog` string is look for matching string. Since it can be formed by `cats` and `dog` and string, this suffix `catsdog` will be added to the HashSet. So when, `dogcatsdog` iteration, the prefix `dog` is found the list, so the suffix `catsdog` is also available in the list, since we added as memoized record for future conditions to run as optimal solution.

Solve this by,

- First, builds a HashSet store with all the words
- Iterate through the list of words and check the prefix and suffix forms a complete word either two or more than two strings.

Time Complexity: $O(n * s^3)$, where $n$ - # of words, $s$ - the highest length of the word

Space Complexity: $O(n^2)$

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Solution {
    public List<String> findAllConcatenatedWordsInADict(String[] words) {
        List<String> result = new ArrayList<>();
        Set<String> store = new HashSet<>(Arrays.asList(words));
        for (String word : words) {
            if (hasWord(word, store)) result.add(word);
        }
        return result;
    }

    public boolean hasWord(String word, Set<String> store) {
        for (int i = 1; i < word.length(); i++) {
            if (store.contains(word.substring(0, i))) {
                String suffix = word.substring(i);
                if (store.contains(suffix) || hasWord(suffix, store)) {
                    // memoization - concatenated word for look up at later stage
                    store.add(suffix);
                    return true;
                }
            }
        }
        return false;
    }
}
```

</TabItem>
</Tabs>
