---
description: 'Author: @yashh0903 | https://leetcode.com/problems/next-greater-node-in-linked-list/'
tags: [Array, Linked List, Stack, Monotonic Stack]
---

# 1019 - Next Greater Node In Linked List (Medium) 

## Problem Link

https://leetcode.com/problems/next-greater-node-in-linked-list/

## Problem Statement

You are given the `head` of a linked list with `n` nodes.

For each node in the list, find the value of the **next greater node**. That is, for each node, find the value of the first node that is next to it and has a **strictly larger** value than it.

Return an integer array `answer` where `answer[i]` is the value of the next greater node of the `ith` node (**1-indexed**). If the `ith` node does not have a next greater node, set `answer[i] = 0`.

**Example 1:**

```
Input: head = [2,1,5]
Output: [5,5,0]
```

**Example 2:**

```
Input: head = [2,7,4,3,5]
Output: [7,0,5,5,0]
```

**Constraints:**

- The number of nodes in the list is `n`.
- `1 <= n <= 1e4`
- `1 <= Node.val <= 1e9`

## Approach 1: Stack

1. Initialize an empty stack and an empty answer vector.
2. Reverse the given linked list.
3. Traverse the reversed linked list.
4. For each node:
   - While the stack is not empty and the top element is less than or equal to the current node's value, pop elements from the stack.
   - If the stack is empty, append 0 to the answer vector.
   - If the stack is not empty, append the top element to the answer vector.
   - Push the current node's value onto the stack.
5. Reverse the answer vector to obtain the correct order of next larger elements.
6. Return the answer vector.

- Time Complexity: O(n), where n is the number of nodes in the linked list.
- Space Complexity: O(n), as we use a stack to store elements and an answer vector to store the

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@yashh0903"/>

```cpp
class Solution {
public:
    vector<int> nextLargerNodes(ListNode* head) {
        // Stores the result
        vector<int> ans;
        // Stack to keep track of elements
        stack<int> st;

        ListNode* newHead = NULL;

        // Reversing the linked list
        while (head != NULL) {
            ListNode* next = head->next;
            head->next = newHead;
            newHead = head;
            head = next;
        }

        while (newHead != nullptr) {
            if (st.empty()) ans.push_back(0);
            else if (!st.empty() && st.top() > newHead->val) ans.push_back(st.top());
            else if (!st.empty() && st.top() <= newHead->val) {
                // Pop elements from the stack until finding an element 
                // greater than the current node's value or the stack becomes empty
                while (!st.empty() && st.top() <= newHead->val) st.pop();
                // Append the top element to the answer vector
                if (!st.empty()) ans.push_back(st.top());
                // If the stack becomes empty, 
                // there is no larger element, so append 0 to the answer vector
                else ans.push_back(0);
            }
            // Push the current node's value onto the stack
            st.push(newHead->val);
            // Move to the next node
            newHead = newHead->next;
        }
        // Reversing the answer vector to restore the correct order
        reverse(ans.begin(), ans.end());
        return ans;
    }
};

```

</TabItem>
</Tabs>
