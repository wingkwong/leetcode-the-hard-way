---
description: 'Author: @heiheihang, @ColeB2 | https://leetcode.com/problems/min-stack/'
---

# 0155 - Min Stack (Medium)

## Problem Link

https://leetcode.com/problems/min-stack/

## Problem Statement

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the `MinStack` class:

* `MinStack()` initializes the stack object.
* `void push(int val)` pushes the element `val` onto the stack.
* `void pop()` removes the element on the top of the stack.
* `int top()` gets the top element of the stack.
* `int getMin()` retrieves the minimum element in the stack.

**Example 1:**

```
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
```

**Constraints:**

* `-2^31 <= val <= 2^31 - 1`
* Methods `pop`, `top` and `getMin` operations will always be called on **non-empty** stacks.
* At most `3 * 10^4` calls will be made to `push`, `pop`, `top`, and `getMin`.

## Approach 1: Implementation

The general approach is to keep track of the `current_min` at each level of the stack.

When we add a new element to the stack, we need to check if the new element is smaller than `current_min`. If yes, we need to update the value. We also need to attach a label of `current_min` when we `push`, so we can keep track of the smallest element **BEFORE** that entry.

Similarly, when we `pop` an element from the stack, we need to update `current_min`. A simple example is that the last element in the stack is the smallest. When we `pop` that element, `current_min` is still not updated. Hence, we need to set `current_min` to the new last element's label.

`top` and `getMin` are very straightforward implementations.

<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@heiheihang"/>

```python
class MinStack:

    def __init__(self):
        
        #initialize stack
        self.stack = []
        
        #we need to have a label to keep track of the current smallest number
        self.current_min = None
        
    def push(self, val: int) -> None:
        
        #update current_min if new value is smaller
        if(self.current_min == None or val < self.current_min):
            self.current_min = val
        
        #besides adding val, we also need to add current_min to keep track of current_min
        self.stack.append([val, self.current_min])
        

    def pop(self) -> None:
        
        #remove last element
        self.stack.pop()
        
        #update current_min after popping
        if(self.stack):
            self.current_min = self.stack[-1][1]
        else:
            self.current_min = None

    def top(self) -> int:
        
        #if stack is not empty, return the last element's value (not label)
        if(self.stack):
            return self.stack[-1][0]

    def getMin(self) -> int:
        
        #return current_min
        if(self.stack):
            return self.current_min

```

</TabItem>
</Tabs>

## Approach 2: Singly Linked List

We can also implement a Min Stack using a singly linked list. It will use a similar approach to approach 1, but instead of using arrays, with array values to track current and minimum value at each level of the stack, we will use list nodes. The list nodes will have 3 attributes, a value, `val` a minimum value, `min_val`, and a pointer to the node next to it, `next_node`. To make out linked list work more like a stack, we need to track the head of the linked list and only insert and pop on the head side of our linked list.

We can take some liberties to simplify it, as the question states that all `pop`, `top` and `getMin` calls will be done on non-empty stacks, we can ignore error checkings, and just return the value we need from the top of the stack, or pop in those cases.

Time Complexity: $$O(1)$$ for each method implemented.

Space Complexity: $$O(n)$$ n is the number of items we put onto the stack. 

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class ListNode:
    # Create our own singly linked list, using classes to create
    # list nodes. They will have a value, val, a minimum value,
    # min_val and a pointer to the next node, next_node/self.next.
    # Note: we use next_node in init as next is a python keyword, and
    # it is good practice to not overwrite python's keywords.
    # A singly linked list works, by having node objects that contain data,
    # and a pointer to point to the next node. The tail will point to None,
    # signalling the end of the list. We will also need a variable of some
    # kind to track the head of our linked list. Inside our MinStack,
    # we will use self.head.
    def __init__(self, val, min_val, next_node=None):
        self.val = val
        self.min_val = min_val
        self.next = next_node

class MinStack:
    # Whether you use a linked list like this solution or an array
    # the trick for implementing a min stack is using the idea that
    # we can use a little bit extra space to track the minimum value
    # as we push each element onto the stack. That way we don't need
    # to use O(n) time to search for the min, we can check it in 
    # constant time.
    def __init__(self):
        # No values, so we will initialize the head of our linked
        # list as None to signal that.
        self.head = None
        

    def push(self, val: int) -> None:
        # Time: O(1)
        # get the min value to add to our stack
        min_val = min(val, self.head.min_val) if self.head else val
        # create the node using val, min_val, and head as next_node.
        node = ListNode(val, min_val, next_node=self.head)
        # make sure to make the node we created the new head, to
        # make it the 'top' node, of the stack, and 'push' the other
        # nodes down below it.
        self.head = node
        
    def pop(self) -> None:
        # Time: O(1)
        # only called on non-empty stacks, so we can just
        # set the current head to head.next, as we know
        # there will always be a current head node.
        # Ex. headNode -> 2ndNode
        #     move pointer---^
        # we will have no way to go back and access headNode
        # python will handle the removal of our head node, and
        # our the new head of our stack will be the 2ndNode.
        self.head = self.head.next

    def top(self) -> int:
        # Time: O(1)
        # only called on non-empty stacks, we can just
        # return head.val, since we know there will always
        # be a head node with a value we can return.
        return self.head.val
        

    def getMin(self) -> int:
        # Time: O(1)
        # only called on non-empty stacks, we can just
        # return head.min_val, since we know there will
        # always be a head node with a min_value we can return.
        return self.head.min_val
```

</TabItem>
</Tabs>


