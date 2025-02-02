---
description: 'Author: @heiheihang | https://leetcode.com/problems/design-bitset/'
---

# 2166 - Design Bitset (Medium)

## Problem Link

https://leetcode.com/problems/design-bitset/

## Problem Statement

A **Bitset** is a data structure that compactly stores bits.

Implement the `Bitset` class:

- `Bitset(int size)` Initializes the Bitset with `size` bits, all of which are `0`.
- `void fix(int idx)` Updates the value of the bit at the index `idx` to `1`. If the value was already `1`, no change occurs.
- `void unfix(int idx)` Updates the value of the bit at the index `idx` to `0`. If the value was already `0`, no change occurs.
- `void flip()` Flips the values of each bit in the Bitset. In other words, all bits with value `0` will now have value `1` and vice versa.
- `boolean all()` Checks if the value of **each** bit in the Bitset is `1`. Returns `true` if it satisfies the condition, `false` otherwise.
- `boolean one()` Checks if there is **at least one** bit in the Bitset with value `1`. Returns `true` if it satisfies the condition, `false` otherwise.
- `int count()` Returns the **total number** of bits in the Bitset which have value `1`.
- `String toString()` Returns the current composition of the Bitset. Note that in the resultant string, the character at the `ith` index should coincide with the value at the `ith` bit of the Bitset.

**Example 1:**

```
Input
["Bitset", "fix", "fix", "flip", "all", "unfix", "flip", "one", "unfix", "count", "toString"]
[[5], [3], [1], [], [], [0], [], [], [0], [], []]
Output
[null, null, null, null, false, null, null, true, null, 2, "01010"]

Explanation
Bitset bs = new Bitset(5); // bitset = "00000".
bs.fix(3);     // the value at idx = 3 is updated to 1, so bitset = "00010".
bs.fix(1);     // the value at idx = 1 is updated to 1, so bitset = "01010".
bs.flip();     // the value of each bit is flipped, so bitset = "10101".
bs.all();      // return False, as not all values of the bitset are 1.
bs.unfix(0);   // the value at idx = 0 is updated to 0, so bitset = "00101".
bs.flip();     // the value of each bit is flipped, so bitset = "11010".
bs.one();      // return True, as there is at least 1 index with value 1.
bs.unfix(0);   // the value at idx = 0 is updated to 0, so bitset = "01010".
bs.count();    // return 2, as there are 2 bits with value 1.
bs.toString(); // return "01010", which is the composition of bitset.
```

**Constraints:**

- `1 <= size <= 105`
- `0 <= idx <= size - 1`
- At most `105` calls will be made **in total** to `fix`, `unfix`, `flip`, `all`, `one`, `count`, and `toString`.
- At least one call will be made to `all`, `one`, `count`, or `toString`.
- At most `5` calls will be made to `toString`.

## Approach 1: Class Implementation

In general, we need to keep track of 3 things:

- The state of the bits
- The number of 1s
- Flipped or not

We first consider the `flip` function first. The naive way to perform `flip` is to iterate over the `bits` and change all the bits. This takes $$O(N)$$ time and is too slow. We instead use a state called `flipped` to store the state whether the `bits` are flipped or not. When we call `flip`, the new number of 1s in `bits` becomes the old number of 0s in `bits`, which can be calculated by `len(bits) - ones`.

We then consider `fix` and `unfix`. These two functions require certain condition of the target bit to activate. If we want to check a bit is `1` or not, we have two possibilities

- target bit is `0`, and `flipped = True`
- target bit is `1`, and `flipped = False`

Then we update the target bit and `ones` accordingly.

Similar logic applies to `toString` that we need to accommodate the state of `flipped`

<SolutionAuthor name="@heiheihang"/>

```python
class Bitset:

    def __init__(self, size: int):

        #record the state of the bit
        self.bits = [0] * size

        #record the number of ones
        self.ones = 0

        #record if flip is called
        self.flipped = False


    def fix(self, idx: int) -> None:

        #we need to check if the target bit is 0 (if not flipped -> 0) or 1 (if flipped -> 0)
        if(self.bits[idx] == 0 and not self.flipped or self.bits[idx] == 1 and self.flipped):

            #add 1 to ones if it is 0 (after considering flip)
            self.ones += 1

            #change its state
            self.bits[idx] = (self.bits[idx] + 1) % 2


    def unfix(self, idx: int) -> None:

        #we need to check if the target bit is 1 (if not flipped -> 1) or 0 (if flipped -> 1)
        if(self.bits[idx] == 1 and not self.flipped or self.bits[idx] == 0 and self.flipped):

            #decrease 1 to ones if it is 1 (after considering flip)
            self.ones -= 1

            #change its state
            self.bits[idx] = (self.bits[idx] + 1) % 2

    #this needs to be O(1)!
    def flip(self) -> None:

        #we reverse the number of ones after flip
        self.ones = len(self.bits) - self.ones

        #update the state of flipped
        if(self.flipped):
            self.flipped = False
        else:
            self.flipped = True

    def all(self) -> bool:

        #check if number of ones equals to the length of bits
        if(self.ones == len(self.bits)):
            return True
        return False

    def one(self) -> bool:

        #check if there is at least one 1
        if(self.ones > 0):
            return True
        return False

    def count(self) -> int:

        #return the number of ones
        return self.ones

    def toString(self) -> str:

        #initialize the result
        res = []

        if(self.flipped):

            for i in range(len(self.bits)):

                #if flipped, we need to put the reverse of the bit to result
                res.append(str((self.bits[i] + 1) % 2))
        else:
            for i in range(len(self.bits)):

                #put the bit to result
                res.append(str(self.bits[i]))

        #return the string of list
        return "".join(res)
```
