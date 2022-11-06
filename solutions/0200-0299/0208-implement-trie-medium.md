---
description: >-
  Author: @vigneshshiv |
  https://leetcode.com/problems/implement-trie-prefix-tree/
---

# 0208 - Implement Trie (Prefix Tree) (Medium)

## Problem Link

https://leetcode.com/problems/implement-trie-prefix-tree/

## Problem Statement

A **trie** (pronounced as "try") or **prefix tree** is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

- `Trie()` Initializes the trie object.
- `void insert(String word)` Inserts the string `word` into the trie.
- `boolean search(String word)` Returns `true` if the string `word` is in the trie (i.e., was inserted before), and `false` otherwise.
- `boolean startsWith(String prefix)` Returns `true` if there is a previously inserted string `word` that has the prefix `prefix`, and `false` otherwise.

**Example 1:**

```
Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True
```

**Constraints:**

* `1 <= word.length, prefix.length <= 2000`
* `word` and `prefix` consist only of lowercase English letters.
* At most `3 * 10^4` calls in total will be made to `insert`, `search`, and `startsWith`.


## Approach 1: Trie Structure

A trie, or a prefix tree, is a type of search tree that is usually used to store strings. 
- Each path from the root to leaves forms a word.
- Each node except for the root node contains a value.
- All the descendants of a node share a common prefix associated to that node. 

For example, when trie stores [ape,apple,are,art, ...], `are` and `art` share `ar` as the prefix.

**So we can form a tree of characters represents a value and connecting from top to bottom to form a string.** 
There are two operations provided by a trie: `insert` a new string and `search` for a given string. 

Here, we are using ASCII key based character store in tree, since the constraint given is all characters are english lowercase letters, we can covert each character to integer value represents corresponding to a char. While inserting a string, we are constructing a tree to form a string and at the end, mark the word as completes. This helps to search for a string weather it is a complete word or prefix. 

> Wiki Reference - https://en.wikipedia.org/wiki/Trie

Time Complexity for insert and search: $O(L)$, where $L$ is the length of the word
Space Complexity: $O(K*N)$, where $K$ is the no. of characters and $N$ is the no. of nodes in the tree. 

Side note, all of our Google searches performs similar to Trie structure implementation and Google search autocomplete is a great example. 

![Alt text](https://assets.leetcode.com/users/images/1d1bc396-05a2-4d8c-b8b0-e707c5790fde_1604920548.2461913.png)

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@vigneshshiv"/>

```java
class Trie {
    
    // The root of this Trie
    private TrieNode root;

    public Trie() {
        root = new TrieNode('\0'); // Forms as Root
    }
    
    public void insert(String word) {
        TrieNode current = root;
        for (char c : word.toCharArray()) {
            int idx = c - 'a';
            if (current.nodes[idx] == null) {
                current.nodes[idx] = new TrieNode(c);
            }
            current = current.nodes[idx];
        }
        current.isWord = true;
    }
    
    public boolean search(String word) {
        return contains(word, false);
    }
    
    public boolean startsWith(String prefix) {
        return contains(prefix, true);
    }
    
    private boolean contains(String prefix, boolean startsWith) {
        TrieNode current = root;
        for (char c : prefix.toCharArray()) {
            current = current.nodes[c - 'a'];
            if (current == null) {
                return false;
            }
        }
        return startsWith ? true : current.isWord;
    }
    
    /**
     * Node in the Trie
     */
    private class TrieNode {
        private char character;
        private TrieNode[] nodes = new TrieNode[26];
        private boolean isWord;

        public TrieNode(char character) {
            this.character = character;
        }
    }
}
```
</TabItem>
</Tabs>