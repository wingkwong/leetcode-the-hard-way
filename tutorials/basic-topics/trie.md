---
title: 'Trie'
description: 'A trie or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings.'
# hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - trie
  - prefix tree
  - data structure
---

import TutorialAuthors from '@site/src/components/TutorialAuthors';

<TutorialAuthors names="@wingkwong"/>

## Overview

[208. Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/) will be used as an example.

A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

- Trie() Initializes the trie object.
- void insert(String word) Inserts the string word into the trie.
- boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
- boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

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

- 1 <= word.length, prefix.length <= 2000
- word and prefix consist only of lowercase English letters.
- At most 3 * 10^4 calls in total will be made to insert, search, and startsWith.


## Trie

We can see Trie containing a number of Trie nodes. Each node contains a value and links to other nodes. We start from the root, we traverse till $e$ so that we have $gee$. At this node, we have three different nodes to traverse so that we have $geek$, $geer$, and $geez$. We can also further to have $geeks$ and $geekt$ and so on.

<img src="https://user-images.githubusercontent.com/35857179/168469460-8dc4b23b-21e9-43dd-84ca-287f0b44834a.png" width="400"/>

> Diagram Source: https://www.geeksforgeeks.org/

## Trie Node

Each Trie Node should have a children array with the size of $26$ for character $a$ to $z$. Also it has a boolean variable $$isEndOfWord$$ to indicate if a word is ended at this node. 

```cpp
class TrieNode {
 public:
  // is a word ended at this node
  bool isEndOfWord;
  // children for 26 characters
  TrieNode* children[26];
  
  // constructor - setting initial values
  TrieNode() {
    // no word is ended here
    isEndOfWord = false;
    // not linking to other Trie node
    for (int i = 0; i < 26; i++) {
        children[i] = NULL;
    }
  }
};
```

## Initializing 

```cpp
Trie() { 
    // init Trie - define the very first node
    root = new TrieNode();
}
```

## Searching

Given a word, `search` returns if the word is in the trie.

```cpp
bool search(string word) {
    // start from the root node
    TrieNode* node = root;
    // iterate the word
    for (int i = 0; i < (int) word.size(); i++) {
        // get the index of the character 
        // a -> 0
        // b -> 1
        // ...
        // z -> 25
        int idx = word[i] - 'a';
        // if there is no such node, that means the word doesn't exist
        if (!node->children[idx]) return false;
        // otherwise, traverse the next node
        node = node->children[idx];
    }
    // check if this node is marked with isEndOfWord = true
    return node->isEndOfWord;
}
```

## Insertion

Given a word, `insert` inserts it into the trie.

```cpp
void insert(string word) {
    // start from the root node
    TrieNode* node = root;
    for (int i = 0; i < (int) word.size(); i++) {
        // get the index of the character 
        // a -> 0
        // b -> 1
        // ...
        // z -> 25
        int idx = word[i] - 'a';
        // traverse each node, 
        if (!node->children[idx]) {
            // if the node doesn't exist, 
            // create a new node
            node->children[idx] = new TrieNode();
        }
        // traverse the next one
        node = node->children[idx];
    }
    // mark this node with isEndOfWord = true
    node->isEndOfWord = true;
}
```

## startsWith

Given a prefix, `startsWith` checks if there is any word in the trie that starts with the given prefix.

```cpp
bool startsWith(string prefix) {
    // start from the root node
    TrieNode* node = root;
    // iterate each character in prefix
    for (int i = 0; i < (int) prefix.size(); i++) {
        // get the index of the character 
        // a -> 0
        // b -> 1
        // ...
        // z -> 25
        int idx = prefix[i] - 'a';
        // if there is no such node, that means the word doesn't exist
        if (!node->children[idx]) return false;
        // otherwise, traverse the next node
        node = node->children[idx];
    }
    // all target nodes have been traversed, return true here
    return true;
}
```
Related Problems:

[208. Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/)

[139. Word Break](https://leetcode.com/problems/word-break/)

[2416. Sum of Prefix Scores of Strings](https://leetcode.com/problems/sum-of-prefix-scores-of-strings/)

[745. Prefix and Suffix Search](https://leetcode.com/problems/prefix-and-suffix-search/)

[336. Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/)
