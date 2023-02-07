---
description: 'Author: @ColeB2 | https://leetcode.com/problems/word-search-ii/'
tags: [Array, String, Backtracking, Trie, Matrix]
---

# 0212 - Word Search II (Hard)

## Problem Link

https://leetcode.com/problems/word-search-ii/

## Problem Statement

Given an `m x n` `board` of characters and a list of strings `words`, return _all words on the board_.

Each word must be constructed from letters of sequentially adjacent cells, where **adjacent cells** are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/11/07/search1.jpg)

```
Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]
```

**Example 2:**

```
Input: board = [["a","b"],["c","d"]], words = ["abcb"]
Output: []
```

**Constraints:**

- `m == board.length`
- `n == board[i].length`
- `1 <= m, n <= 12`
- `board[i][j]` is a lowercase English letter.
- `1 <= words.length <= 3 * 10^4`
- `1 <= words[i].length <= 10`
- `words[i]` consists of lowercase English letters.
- All the strings of `words` are unique.

## Approach 1: Iterative DFS using a Trie

If you solved Word Search I, you know we can run a DFS on each cell of the matrix, checking that the cell location is inbounds, the cell letter matches the letter in the word we are looking at, and that we haven't already visited the cell in the current DFS. 

Repeating the above, but for each word, would be way too costly though, so we can use a Trie instead of a list of words. A Trie would give us access to the first letter of all the words so for each cell in the matrix we can check if it is worthwhile to run DFS in $$O(1)$$ time. Then if the letter is in our Trie, we can run our DFS. Still costly, but using a trie prevents us from having to run our algorithm for each word.

This also will be costly, as you can imagine if we find our word, every time we run across the first letter of that word, we are going to run our DFS again even if we don't need to. So we can add a counter of characters to our Trie, and a remove word method, so that we can decrement the number of times a character appears in our Trie, and then during the check to see if we should run DFS, check that our counter hasn't reached 0.

Note we use a counter instead of removing the letters, as if we had to words, $$bat$$ and $$ball$$, removing one of them, would remove the b, and therefore the whole word from our trie.

Time Complexity: $$m*n*4^L$$. Where $$m$$ is the number of rows, $$n$$ is the number of columns, and $$L$$ is the max length of the longest word. We have to loop through each cell in the matrix ($$mn$$), and then when we match the first letter of one of our words, we have to run our DFS, which can take 4 directions at each turn, and can run as long as the longest word in our Trie.

Space Complexity: $$N+mn+L$$. Where $$N$$ is the size of our Trie, $$mn$$ is length of our stack to hold each cell since we are doing it iteratively, our stack will contain each node in it at the start, and $$L$$ is the length of our current DFS route, which can run as long as the longest word in our Trie.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class TrieNode:
    # Create our trie,
    # nodes to track the next level of nodes in our trie
    # is_word denotes whether the at the current node, we created a word
    # num is the counter for number of time the current node has been
    # use in our trie. Ex: bat, ball -> b node will have num count of 2.
    def __init__(self):
        self.nodes = {}
        self.is_word = False
        self.num = 0

    def addWord(self, word):
        # Time: O(L) L is length of word.
        # current node, starts as self.
        node = self
        # increase the count of the node.
        node.num += 1
        # loop throuhg characters in word
        for ch in word:
            if ch not in node.nodes:
                # create the node and set key to be character.
                node.nodes[ch] = TrieNode()
            # move our current node pointer
            node = node.nodes[ch]
            # increment the counter on the node we moved to.
            node.num += 1
        # reached end, update is_word boolean.
        node.is_word = True

    def removeWord(self, word):
        # Time: O(l) L is the length of the word
        # remove word, decrements the node counters.
        # don't remove nodes, as nodes may be shared by multiple words
        # We could remove nodes if the .num counter every reached 0.
        # current node pointer, starts as self.
        # Both options could remove the mn from our space complexity.
        node = self
        # decrement count of the node
        node.num -= 1
        # loop through all the letters in word we are removing
        for ch in word:
            # make sure it is in our Trie
            if ch in node.nodes:
                # update our node to the node of character we
                # are looking at
                node = node.nodes[ch]
                # decrement the nodes count.
                node.num -= 1

class Solution:
    # Some Potential Improvements
    # Recursive DFS --> Call stack wouldn't initialize with all
    # values of our matrix inside our stack to start.
    # Iterative DFS with DFS function: We wouldn't have to initialize
    # a stack with all cells of the matrix, we could just call the
    # DFS and save a bit of space.
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        # track our Trie root.
        root = TrieNode()
        # loop through all our words
        for word in words:
            # add the words to our Trie
            root.addWord(word)
        # get length of our rows and columns
        ROWS, COLS = len(board), len(board[0])
        # create a list of words. Note since we are removing words
        # from our Trie, we don't need a set to prevent repeats.
        words_made = []
        # stack to perform iterative DFS
        stack = []
        # loop through the matrix, O(mn) to loop through each cell.
        for r in range(ROWS):
            for c in range(COLS):
                # add the cells to the stack
                # r,c to denote position in matrix
                # pass root as our current node position in Trie
                # "" empty string value to track word we at creating
                # empty set to denote if we have visited the cell or not.
                stack.append((r,c,root,"", set()))
        # while our stack has values
        while stack:
            # pop row, col position
            # node to denote current node
            # word we are creating
            # set to track if we have visited a node before
            row, col, node, word, visit = stack.pop()
            # Check if we are out of  bounds
            # board[row][col] -> ch is NOT in our Trie
            # Count of that Character is < 1 -> Word removed previously
            if (row < 0 or col < 0
                or row == ROWS or col == COLS
                or board[row][col] not in node.nodes
                or node.nodes[board[row][col]].num < 1
                or (row,col) in visit):
                # if any of above is True, no need to run DFS, continue
                continue
            # Passed above condition, we can run DFS on node.
            # add to our set that we visited the cell
            visit.add((row,col))
            # move our current node to proper node in True.
            node = node.nodes[board[row][col]]
            # add the character of cell to the word.
            word += board[row][col]
            # If current node is_word, we found a word!
            if node.is_word:
                # Remove word from Trie
                node.is_word = False
                root.removeWord(word)
                # add word to our return list
                words_made.append(word)
                
            # Check 4 adjacent directions to add those cells to our
            # stack for iterative DFS.
            for x,y in ((1,0), (0,1), (-1,0), (0,-1)):
                # Note we need a copy of visit for iterative DFS
                # as if we just passed visit, it would be a reference
                # and would be updated by all 4 directions during the
                # DFS, so each direction needs it's own copy.
                stack.append((row + x, col + y, node, word, visit.copy()))
        # return list of words we found during our search
        return words_made
```

</TabItem>
</Tabs>