---
description: 'Author: @wingkwong | https://leetcode.com/problems/design-circular-queue/'
tags: [Array, Linked List, Design, Queue]
---

# 0622 - Design Circular Queue (Medium) 

## Problem Link

https://leetcode.com/problems/design-circular-queue/

## Problem Statement

Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

Implementation the `MyCircularQueue` class:

- `MyCircularQueue(k)` Initializes the object with the size of the queue to be `k`.
- `int Front()` Gets the front item from the queue. If the queue is empty, return `-1`.
- `int Rear()` Gets the last item from the queue. If the queue is empty, return `-1`.
- `boolean enQueue(int value)` Inserts an element into the circular queue. Return `true` if the operation is successful.
- `boolean deQueue()` Deletes an element from the circular queue. Return `true` if the operation is successful.
- `boolean isEmpty()` Checks whether the circular queue is empty or not.
- `boolean isFull()` Checks whether the circular queue is full or not.

You must solve the problem without using the built-in queue data structure in your programming language.

**Example 1:**

```
Input
["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "enQueue", "Rear"]
[[3], [1], [2], [3], [4], [], [], [], [4], []]
Output
[null, true, true, true, false, 3, true, true, true, 4]

Explanation
MyCircularQueue myCircularQueue = new MyCircularQueue(3);
myCircularQueue.enQueue(1); // return True
myCircularQueue.enQueue(2); // return True
myCircularQueue.enQueue(3); // return True
myCircularQueue.enQueue(4); // return False
myCircularQueue.Rear();     // return 3
myCircularQueue.isFull();   // return True
myCircularQueue.deQueue();  // return True
myCircularQueue.enQueue(4); // return True
myCircularQueue.Rear();     // return 4
```

**Constraints:**

- `1 <= k <= 1000`
- `0 <= value <= 1000`
- At most `3000` calls will be made to `enQueue`, `deQueue`, `Front`, `Rear`, `isEmpty`, and `isFull`.

## Approach 1: Array

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@wingkwong"/>

```cpp
// Time Complexity: O(N)
// Space Complexity: O(1)
class MyCircularQueue {
public:
    MyCircularQueue(int k) {
        // the queue holding the elements for the circular queue
        q.resize(k);
        // the number of elements in the circular queue
        cnt = 0;
        // queue size
        sz = k;
        // the idx of the head element
        headIdx = 0;
    }
    
    bool enQueue(int value) {
        // handle full case
        if (isFull()) return false;
        // Given an array of size of 4, we can find the position to be inserted using the formula
        // targetIdx = (headIdx + cnt) % sz
        // e.g. [1, 2, 3, _]
        // headIdx = 0, cnt = 3, sz = 4, targetIdx = (0 + 3) % 4 = 3
        // e.g. [_, 2, 3, 4]
        // headIdx = 1, cnt = 3, sz = 4, targetIdx = (1 + 3) % 4 = 0
        q[(headIdx + cnt) % sz] = value;
        // increase the number of elements by 1
        cnt += 1;
        return true;
    }
    
    bool deQueue() {
        // handle empty case
        if (isEmpty()) return false;
        // update the head index
        headIdx = (headIdx + 1) % sz;
        // decrease the number of elements by 1
        cnt -= 1;
        return true;
    }
    
    int Front() {
        // handle empty queue case
        if (isEmpty()) return -1;
        // return the head element
        return q[headIdx];
    }
    
    int Rear() {
        // handle empty queue case
        if (isEmpty()) return -1;
        // Given an array of size of 4, we can find the tailIdx using the formula
        // tailIdx = (headIdx + cnt - 1) % sz
        // e.g. [0 1 2] 3
        // headIdx = 0, cnt = 3, sz = 4, tailIdx = (0 + 3 - 1) % 4 = 2
        // e.g. 0 [1 2 3]
        // headIdx = 1, cnt = 3, sz = 4, tailIdx = (1 + 3 - 1) % 4 = 3
        // e.g. 0] 1 [2 3
        // headIdx = 2, cnt = 3, sz = 4, tailIdx = (2 + 3 - 1) % 4 = 0
        return q[(headIdx + cnt - 1) % sz];
    }
    
    bool isEmpty() {
        // no element in the queue
        return cnt == 0;
    }
    
    bool isFull() {
        // return true if the count is equal to the queue size
        // else return false
        return cnt == sz;
    }
    
private:
    int cnt, sz, headIdx;
    vector<int> q;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * MyCircularQueue* obj = new MyCircularQueue(k);
 * bool param_1 = obj->enQueue(value);
 * bool param_2 = obj->deQueue();
 * int param_3 = obj->Front();
 * int param_4 = obj->Rear();
 * bool param_5 = obj->isEmpty();
 * bool param_6 = obj->isFull();
 */
```

</TabItem>

<TabItem value="java" label="Java">
<SolutionAuthor name="@wingkwong"/>

```java
// Time Complexity: O(N)
// Space Complexity: O(1)
class MyCircularQueue {

    public MyCircularQueue(int k) {
        // the queue holding the elements for the circular queue
        q = new int[k];
        // the number of elements in the circular queue
        cnt = 0;
        // queue size
        sz = k;
        // the idx of the head element
        headIdx = 0;
    }
    
    public boolean enQueue(int value) {
         // handle full case
        if (isFull()) return false;
        // set the value 
        // Given an array of size of 4, we can find the position to be inserted using the formula
        // targetIdx = (headIdx + cnt) % sz
        // e.g. [1, 2, 3, _]
        // headIdx = 0, cnt = 3, sz = 4, targetIdx = (0 + 3) % 4 = 3
        // e.g. [_, 2, 3, 4]
        // headIdx = 1, cnt = 3, sz = 4, targetIdx = (1 + 3) % 4 = 0
        q[(headIdx + cnt) % sz] = value;
        // increase the number of elements by 1
        cnt += 1;
        return true;
    }
    
    public boolean deQueue() {
        // handle empty case
        if (isEmpty()) return false;
        // update the head index
        headIdx = (headIdx + 1) % sz;
        // decrease the number of elements by 1
        cnt -= 1;
        return true;
    }
    
    public int Front() {
        // handle empty queue case
        if (isEmpty()) return -1;
        // return the head element
        return q[headIdx];
    }
    
    public int Rear() {
        // handle empty queue case
        if (isEmpty()) return -1;
        // Given an array of size of 4, we can find the tailIdx using the formula
        // tailIdx = (headIdx + cnt - 1) % sz
        // e.g. [0 1 2] 3
        // headIdx = 0, cnt = 3, sz = 4, tailIdx = (0 + 3 - 1) % 4 = 2
        // e.g. 0 [1 2 3]
        // headIdx = 1, cnt = 3, sz = 4, tailIdx = (1 + 3 - 1) % 4 = 3
        // e.g. 0] 1 [2 3
        // headIdx = 2, cnt = 3, sz = 4, tailIdx = (2 + 3 - 1) % 4 = 0
        return q[(headIdx + cnt - 1) % sz];
    }
    
    public boolean isEmpty() {
        // no element in the queue
        return cnt == 0;
    }
    
    public boolean isFull() {
        // return true if the count is equal to the queue size
        // else return false
        return cnt == sz;
    }
    
    private int[] q;
    private int headIdx, cnt, sz;
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * MyCircularQueue obj = new MyCircularQueue(k);
 * boolean param_1 = obj.enQueue(value);
 * boolean param_2 = obj.deQueue();
 * int param_3 = obj.Front();
 * int param_4 = obj.Rear();
 * boolean param_5 = obj.isEmpty();
 * boolean param_6 = obj.isFull();
 */
```

</TabItem>

<TabItem value="py" label="Python">
<SolutionAuthor name="@wingkwong"/>

```py
# Time Complexity: O(N)
# Space Complexity: O(1)
class MyCircularQueue:

    def __init__(self, k: int):
        # the queue holding the elements for the circular queue
        self.q = [0] * k
        # the number of elements in the circular queue
        self.cnt = 0
        # queue size
        self.sz = k
        # the idx of the head element
        self.headIdx = 0
        

    def enQueue(self, value: int) -> bool:
        # handle full case
        if self.isFull(): return False
		# Given an array of size of 4, we can find the position to be inserted using the formula
		# targetIdx = (headIdx + cnt) % sz
		# e.g. [1, 2, 3, _]
		# headIdx = 0, cnt = 3, sz = 4, targetIdx = (0 + 3) % 4 = 3
		# e.g. [_, 2, 3, 4]
		# headIdx = 1, cnt = 3, sz = 4, targetIdx = (1 + 3) % 4 = 0
        self.q[(self.headIdx + self.cnt) % self.sz] = value
        # increase the number of elements by 1
        self.cnt += 1
        return True

    def deQueue(self) -> bool:
        # handle empty case
        if self.isEmpty(): return False
        # update the head index
        self.headIdx = (self.headIdx + 1) % self.sz
        # decrease the number of elements by 1
        self.cnt -= 1
        return True

    def Front(self) -> int:
        # handle empty queue case
        if self.isEmpty(): return -1
        # return the head element
        return self.q[self.headIdx]
        
    def Rear(self) -> int:
        # handle empty queue case
        if self.isEmpty(): return -1
        # Given an array of size of 4, we can find the tail using the formula
        # tailIdx = (headIdx + cnt - 1) % sz
        # e.g. [0 1 2] 3
        # headIdx = 0, cnt = 3, sz = 4, tailIdx = (0 + 3 - 1) % 4 = 2
        # e.g. 0 [1 2 3]
        # headIdx = 1, cnt = 3, sz = 4, tailIdx = (1 + 3 - 1) % 4 = 3
        # e.g. 0] 1 [2 3
        # headIdx = 2, cnt = 3, sz = 4, tailIdx = (2 + 3 - 1) % 4 = 0
        return self.q[(self.headIdx + self.cnt - 1) % self.sz]

    def isEmpty(self) -> bool:
        # no element in the queue
        return self.cnt == 0

    def isFull(self) -> bool:
        # return True if the count is equal to the queue size
        # else return False
        return self.cnt == self.sz


# Your MyCircularQueue object will be instantiated and called as such:
# obj = MyCircularQueue(k)
# param_1 = obj.enQueue(value)
# param_2 = obj.deQueue()
# param_3 = obj.Front()
# param_4 = obj.Rear()
# param_5 = obj.isEmpty()
# param_6 = obj.isFull()
```

</TabItem>

<TabItem value="ts" label="TypeScript">
<SolutionAuthor name="@wingkwong"/>

```ts
// Time Complexity: O(N)
// Space Complexity: O(1)
class MyCircularQueue {
    private q: number[]
    private cnt: number
    private sz: number
    private headIdx: number

    constructor(k: number) {
        // the queue holding the elements for the circular queue
        this.q = []
        // the number of elements in the circular queue
        this.cnt = 0
        // queue size
        this.sz = k
        // the idx of the head element
        this.headIdx = 0
    }

    enQueue(value: number): boolean {
        // handle full case
        if (this.isFull()) return false
        // set the value 
        this.q[(this.headIdx + this.cnt) % this.sz] = value
        // increase the number of elements by 1
        this.cnt += 1
        return true
    }

    deQueue(): boolean {
        // handle empty case
        if (this.isEmpty()) return false
        // update the head index
        this.headIdx = (this.headIdx + 1) % this.sz
        // decrease the number of elements by 1
        this.cnt -= 1
        return true
    }

    Front(): number {
        // handle empty queue case
        if (this.isEmpty()) return -1
        // return the head element
        return this.q[this.headIdx]
    }

    Rear(): number {
        // handle empty queue case
        if (this.isEmpty()) return -1
        // Given an array of size of 4, we can find the tail using the formula
        // tailIdx = (headIdx + cnt - 1) % sz
        // e.g. [0 1 2] 3
        // headIdx = 0, cnt = 3, sz = 4, tailIdx = (0 + 3 - 1) % 4 = 2
        // e.g. 0 [1 2 3]
        // headIdx = 1, cnt = 3, sz = 4, tailIdx = (1 + 3 - 1) % 4 = 3
        // e.g. 0] 1 [2 3
        // headIdx = 2, cnt = 3, sz = 4, tailIdx = (2 + 3 - 1) % 4 = 0
        return this.q[(this.headIdx + this.cnt - 1) % this.sz]
    }

    isEmpty(): boolean {
        // no element in the queue
        return this.cnt == 0
    }

    isFull(): boolean {
        // return true if the count is equal to the queue size
        // else return false
        return this.cnt == this.sz
    }    
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
```

</TabItem>

<TabItem value="go" label="Go">
<SolutionAuthor name="@wingkwong"/>

```go
// Time Complexity: O(N)
// Space Complexity: O(1)

type MyCircularQueue struct {
    q []int
    cnt, sz, headIdx int
}


func Constructor(k int) MyCircularQueue {
    return MyCircularQueue {
        // the queue holding the elements for the circular queue
        q: make([]int, k),
        // the number of elements in the circular queue
        cnt: 0,
        // queue size
        sz: k,
        // the idx of the head element
        headIdx: 0,
    }
}


func (this *MyCircularQueue) EnQueue(value int) bool {
     // handle full case
    if this.IsFull() {
        return false
    }
     // set the value 
    this.q[(this.headIdx + this.cnt) % this.sz] = value
    // increase the number of elements by 1
    this.cnt += 1
    return true
}


func (this *MyCircularQueue) DeQueue() bool {
    // handle empty case
    if this.IsEmpty() {
        return false
    }
    // update the head index
    this.headIdx = (this.headIdx + 1) % this.sz
    // decrease the number of elements by 1
    this.cnt -= 1
    return true
}


func (this *MyCircularQueue) Front() int {
    // handle empty queue case
    if this.IsEmpty() {
        return -1
    }
    // return the head element
    return this.q[this.headIdx]
}


func (this *MyCircularQueue) Rear() int {
    // handle empty queue case
    if this.IsEmpty() {
        return -1
    }
    // Given an array of size of 4, we can find the tail using the formula
    // tailIdx = (headIdx + cnt - 1) % sz
    // e.g. [0 1 2] 3
    // headIdx = 0, cnt = 3, sz = 4, tailIdx = (0 + 3 - 1) % 4 = 2
    // e.g. 0 [1 2 3]
    // headIdx = 1, cnt = 3, sz = 4, tailIdx = (1 + 3 - 1) % 4 = 3
    // e.g. 0] 1 [2 3
    // headIdx = 2, cnt = 3, sz = 4, tailIdx = (2 + 3 - 1) % 4 = 0
    return this.q[(this.headIdx + this.cnt - 1) % this.sz]
}


func (this *MyCircularQueue) IsEmpty() bool {
    // no element in the queue
    return this.cnt == 0
}


func (this *MyCircularQueue) IsFull() bool {
    // return true if the count is equal to the queue size
    // else return false
    return this.cnt == this.sz
}


/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * obj := Constructor(k);
 * param_1 := obj.EnQueue(value);
 * param_2 := obj.DeQueue();
 * param_3 := obj.Front();
 * param_4 := obj.Rear();
 * param_5 := obj.IsEmpty();
 * param_6 := obj.IsFull();
 */
```

</TabItem>
</Tabs>