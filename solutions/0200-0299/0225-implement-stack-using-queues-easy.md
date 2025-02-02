---
description: >-
  Author: @wkw | https://leetcode.com/problems/implement-stack-using-queues
---

# 0225 - Implement Stack using Queues (Easy)

## Problem Link

https://leetcode.com/problems/implement-stack-using-queues

## Problem Statement

Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (`push`, `top`, `pop`, and `empty`).

Implement the `MyStack` class:

- `void push(int x)` Pushes element x to the top of the stack.
- `int pop()` Removes the element on the top of the stack and returns it.
- `int top()` Returns the element on the top of the stack.
- `boolean empty()` Returns `true` if the stack is empty, `false` otherwise.

**Notes:**

- You must use **only** standard operations of a queue, which means that only `push to back`, `peek/pop from front`, `size` and `is empty` operations are valid.
- Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.

**Example 1:**

```
Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]

Explanation
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False
```

**Constraints:**

- `1 <= x <= 9`
- At most `100` calls will be made to `push`, `pop`, `top`, and `empty`.
- All the calls to `pop` and `top` are valid.

## Approach 1: 2 Queues

We can push all elements to one queue. For `pop` and `top` function, we move first $$n - 1$$ elements to another queue. What's left would be the top element. For `pop` function, we pop the top element as well and swap the queue.

<SolutionAuthor name="@wkw"/>

```cpp
class MyStack {
public:
    queue<int> q1, q2;
    MyStack() { }

    void push(int x) {
        q1.push(x);
    }

    int pop() {
        while (q1.size() > 1) {
            int x = q1.front();
            q1.pop();
            q2.push(x);
        }
        int res = q1.front();
        q1.pop();
        swap(q1, q2);
        return res;
    }

    int top() {
        while (q1.size() > 1) {
            int x = q1.front();
            q1.pop();
            q2.push(x);
        }
        return q1.front();
    }

    bool empty() {
        return q1.empty();
    }
};

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack* obj = new MyStack();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->top();
 * bool param_4 = obj->empty();
 */
```

## Approach 2: 1 Queue

For every push, we simply make the order backwards for `push` function. For `pop`() and `top()`, we can use `front()` to get the top element and return it.

<SolutionAuthor name="@wkw"/>

```cpp
class MyStack {
public:
    queue<int> q1;
    MyStack() { }

    void push(int x) {
        q1.push(x);
        for (int i = 1; i < q1.size(); i++) {
            q1.push(q1.front());
            q1.pop();
        }
    }

    int pop() {
        int x = q1.front(); q1.pop();
        return x;
    }

    int top() {
        return q1.front();
    }

    bool empty() {
        return q1.empty();
    }
};

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack* obj = new MyStack();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->top();
 * bool param_4 = obj->empty();
 */
```
