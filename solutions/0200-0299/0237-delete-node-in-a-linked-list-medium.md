---
description: 'Author: @heder | https://leetcode.com/problems/delete-node-in-a-linked-list/'
tags: [Linked List]
---

# 0237 - Delete Node in a Linked List (Medium) 

## Problem Link

https://leetcode.com/problems/delete-node-in-a-linked-list/

## Problem Statement

There is a singly-linked list `head` and we want to delete a node `node` in it.

You are given the node to be deleted `node`. You will **not be given access** to the first node of `head`.

All the values of the linked list are **unique**, and it is guaranteed that the given node `node` is not the last node in the linked list.

Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:

- The value of the given node should not exist in the linked list.
- The number of nodes in the linked list should decrease by one.
- All the values before `node` should be in the same order.
- All the values after `node` should be in the same order.

**Custom testing:**

- For the input, you should provide the entire linked list `head` and the node to be given `node`. `node` should not be the last node of the list and should be an actual node in the list.
- We will build the linked list and pass the node to your function.
- The output will be the entire list after calling your function.

**Example 1:**

```
Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
```

**Example 2:**

```
Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.
```

**Constraints:**

- The number of the nodes in the given list is in the range `[2, 1000]`.
- `-1000 <= Node.val <= 1000`
- The value of each node in the list is **unique**.
- The `node` to be deleted is **in the list** and is **not a tail** node.

## Approach 1: Copy next node

Before looking at different implementation let me briefly touch on the intiution. Usually for a linked list if we want to remove a ListNode we would update the previous node to point the the node after the one we want to remove. For this problem we don't know the previous node, we are only given the address of the node we want to remove. The approach is to overwrite the node we want to remove with the content of the next node and then remove the next node. The problem description states that we can expect that the node we should remove is never the last node, otherwise the problem can't be solved.

### Variant 1: C style code

Instead of assigning node->val and node->next we can just assign the entire node.

- Time Complexity: left as an exercise to the reader.
- Space Complexity: Is negative space complexity a thing, since we are freeing memory here? :D

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static void deleteNode(ListNode* node) {
    ListNode* next = node->next;
    *node = *next;
    // Don't be that person that leaks memory.
    delete next;
}
```

</TabItem>
</Tabs>

### Variant 2: std::unique_ptr

Instead of calling delete on the "next" node, we can also use std::unique_ptr which take owner ship of the node we want to delete. As soon as this std::unique_ptr goes out of scope it will delete the owned node. This approach has the benefit if we have a function with multiple returns the object will be destroyed, i.e. we can not forget to call delete on it.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static void deleteNode(ListNode* node) {
    std::unique_ptr<ListNode> to_be_deleted(node->next);
    *node = *node->next;
}
```

</TabItem>
</Tabs>

### Variant 3: std::exchange (just for fun, not recommended)

With std::exchange we can turn approach 1 into a oneliner. I don't recommend actually doing this.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@heder"/>

```cpp
static void deleteNode(ListNode* node) {
    delete std::exchange(*node, *node->next).next;
}
```

</TabItem>
</Tabs>

### Appendix: Looking at the generated assembly

Just for fun I looked the generated assembly [(using clang x86-64 (trunk))](https://godbolt.org/z/WPz1cW98x)

```
deleteNode(ListNode*):               # @deleteNode(ListNode*)
mov     rax, qword ptr [rdi + 8]
vmovups xmm0, xmmword ptr [rax]
vmovups xmmword ptr [rdi], xmm0
mov     rdi, rax
jmp     operator delete(void*)@PLT                      # TAILCALL
```

Variant 2: Is exactly the same as Variant 1

```
deleteNode(ListNode*):               # @deleteNode(ListNode*)
        mov     rax, qword ptr [rdi + 8]
        vmovups xmm0, xmmword ptr [rax]
        vmovups xmmword ptr [rdi], xmm0
        mov     rdi, rax
        jmp     operator delete(void*)@PLT                      # TAILCALL
```

... and it looks like clang can see through all of this, and Variant 3 generates the same code as well:

```
deleteNode(ListNode*):               # @deleteNode(ListNode*)
        mov     rax, qword ptr [rdi + 8]
        vmovups xmm0, xmmword ptr [rax]
        vmovups xmmword ptr [rdi], xmm0
        mov     rdi, rax
        jmp     operator delete(void*)@PLT                      # TAILCALL
```