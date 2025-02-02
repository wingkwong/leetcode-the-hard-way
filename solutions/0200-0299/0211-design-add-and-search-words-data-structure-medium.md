---
description: 'Author: @ColeB2 | https://leetcode.com/problems/design-add-and-search-words-data-structure/'
tags: [String, Depth-First Search, Design, Trie]
---

# 0211 - Design Add and Search Words Data Structure (Medium)

## Problem Link

https://leetcode.com/problems/design-add-and-search-words-data-structure/

## Problem Statement

Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the `WordDictionary` class:

- `WordDictionary()` Initializes the object.
- `void addWord(word)` Adds `word` to the data structure, it can be matched later.
- `bool search(word)` Returns `true` if there is any string in the data structure that matches `word` or `false` otherwise. `word` may contain dots `'.'` where dots can be matched with any letter.

**Example:**

```
Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]

Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True
```

**Constraints:**

- `1 <= word.length <= 25`
- `word` in `addWord` consists of lowercase English letters.
- `word` in `search` consist of `'.'` or lowercase English letters.
- There will be at most `3` dots in `word` for `search` queries.
- At most `10^4` calls will be made to `addWord` and `search`.

## Approach 1: Trie - Depth-First Search

If you haven't heard of a [trie](https://leetcodethehardway.com/solutions/0200-0299/implement-trie-medium), then this question will be extremely hard. But basically, a trie is a linked tree structure, which will have some way to denote which character you are currently looking at, and for each character in the trie, it will link to the next characters if they exist. So you can imagine a tree, but instead of numbers, we use letters, and each path from the root to the leaf will form a word.

The only adjustment we have to make is to the search method. Since we are introducing a wild card character, `'.'`, it means instead of just following a singular path down the tree, at that level we will have to search every path, as the answer can be down any one of the paths.

This is where we can use depth-first search, meaning we will follow from the leaf, all the way down to the node, and if we found our word, we can return, otherwise, we must backtrack, using our stack/call stack, and continue on from the next character in the level.

Time Complexity: $$O(w * 26^n)$$, where $$w$$ is the length of the $$word$$ we are searching for, $$26$$ is the max number of characters for each level as we are using only lowercase English characters, and $$n$$ being the number of dots in the $$word$$.

You can imagine, if we have a full trie, with all levels having all 26 characters, and we search for a word of all dots, that in the worst case, we to process through each node in the trie, and each node can have 26 other nodes to follow.

Space Complexity $$O(26^n)$$ where $$n$$ is the number of dot characters. You can imagine how we will have the current level we are at inside our stack and the whole of the current path We know that the current path, each node can also have up to $$26$$ children nodes as well.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class TrieNode:
    # Utilize a linked list DS --> One where the next
    # nodes can be reached via a hash map
    # Contains a char as an optional parameter
    # Also utilizes attributes of is_word to denote
    # whether it is a word.
    # Ex: If we have the word apple in our trie. a->p->p->l->e
    # 'e' node will have is_word = True, to denote that
    # apple is a word in our map. Letters, a,p,p,l,e won't be True
    # as they are not complete words in our Trie.
    def __init__(self, char=None) -> None:
        # Char is the character the trie has. Default to None above,
        # as the root node won't have a character associated with it.
        self.char = char
        # hash map of children nodes
        self.nodes = {}
        # boolean to denote whether the node we are at is the end of a word.
        self.is_word = False


class WordDictionary:

    def __init__(self):
        # initialize our root node as a TrieNode with char = None
        self.root = TrieNode()
        # max_length variable to speed searching.
        self.max_length = 0


    def addWord(self, word: str) -> None:
        # Time: O(l) where l is the length of the word.
        # a current node pointer to trace our linked list
        node = self.root
        # iterate through every character in the word, word.
        for ch in word:
            # current character is not in current TrieNode's
            # hashmap of nodes -> create that node and add
            # it to the hash map.
            if ch not in node.nodes:
                node.nodes[ch] = TrieNode(ch)
            # move our current node pointer to the character
            # we are looking at's node.
            node = node.nodes[ch]
        # When we reached the end set the is_word boolean to True.
        node.is_word = True
        # update max length to simplify searching.
        self.max_length = max(self.max_length, len(word))


    def search(self, word: str) -> bool:
        # Time WC: O(w * 26^n) where w is length of word, 26 being
        # the max number of chararacters at each level in our trie, and
        # n being the number of '.' characters in word.
        # Space WC: O(26^n) for our DFS stack.
        # Base Case: if word we search for > length of largest word,
        # we know it doesn't exist, so we have no need to run our large
        # algorithm
        if len(word) > self.max_length:
            return False
        # initialize stack,
        # tuple of values, 0 being the index of the first letter of 'word'
        # root being the root node of our trie.
        stack = [(0, self.root)]
        # while we have values inside our stack
        while stack:
            # get the index of character we are looking at
            # and get the node of current level we are on.
            i, node = stack.pop()
            # if i is > then length of word, we reach end.
            if i >= len(word):
                # if node we are looking at is a word return True
                if node.is_word:
                    return True
                # else, node is not a word, continue our algorithm.
                continue
            # character we are looking at.
            ch = word[i]
            if ch == '.':
                # loop through all nodes in current level
                for key, val in node.nodes.items():
                    # add them to the stack, increment the index
                    # note items() return k,v pairs. key = character
                    # and the value = TrieNode
                    stack.append((i+1, val))
            # ch isn't in current level. continue our algorithm
            elif ch not in node.nodes:
                continue
            # We found character in node.nodes
            else:
                # add it to our stack: (i+1, TrieNode)
                stack.append((i+1, node.nodes[ch]))
        # Search our Trie and didn't find the word -> return False
        return False
```

</TabItem>
</Tabs>
