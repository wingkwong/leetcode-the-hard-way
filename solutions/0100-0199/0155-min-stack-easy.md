---
description: 'Author: @heiheihang | https://leetcode.com/problems/min-stack/'
---

# 0155 - Min Stack (Easy)

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
* At most `3 * 104` calls will be made to `push`, `pop`, `top`, and `getMin`.

## Approach 1: Implementation

The general approach is to keep track of the `current_min` at each level of the stack.

When we add a new element to the stack, we need to check if the new element is smaller than `current_min`. If yes, we need to update the value. We also need to attach a label of `current_min` when we `push`, so we can keep track of the smallest element **BEFORE** that entry.

Similarly, when we `pop` an element from the stack, we need to update `current_min`. A simple example is that the last element in the stack is the smallest. When we `pop` that element, `current_min` is still not updated. Hence, we need to set `current_min` to the new last element's label.

`top` and `getMin` are very straightforward implementations.

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
