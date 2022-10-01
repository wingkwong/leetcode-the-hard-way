---
description: 'Author: @ganajayant | https://leetcode.com/problems/bitwise-xor-of-all-pairings'
---

# 2425 - Bitwise XOR of All Pairings (Medium) 

## Problem Link

https://leetcode.com/problems/bitwise-xor-of-all-pairings/

## Problem Statement

You are given two 0-indexed arrays, `nums1` and `nums2`, consisting of non-negative integers. There exists another array, `nums3`, which contains the bitwise XOR of all pairings of integers between `nums1` and `nums2` (every integer in nums1 is paired with every integer in nums2 exactly once).

Return the bitwise XOR of all integers in `nums3`.

**Example 1:**

```
Input: nums1 = [2,1,3], nums2 = [10,2,5,0]
Output: 13
Explanation: A possible nums3 array is [8,0,7,2,11,3,4,1,9,1,6,3].
The bitwise XOR of all these numbers is 13, so we return 13.
```

**Example 2:**

```
Input: nums1 = [1,2], nums2 = [3,4]
Output: 0
Explanation: All possible pairs of bitwise XORs are nums1[0] ^ nums2[0], nums1[0] ^ nums2[1], nums1[1] ^ nums2[0],
and nums1[1] ^ nums2[1].
Thus, one possible nums3 array is [2,5,1,6].
2 ^ 5 ^ 1 ^ 6 = 0, so we return 0.
```

**Constraints:**

- `1 <= nums1.length, nums2.length <= 105`
- `0 <= nums1[i], nums2[j] <= 109`

## Approach 1: XOR Properties
Concept used:-
XOR of even times of a number is zero (0);
XOR of odd times of a number is number itself;
here,
n=nums1.size() and m=nums2.size();

case 1: when n and m is even
suppose nums1={a,b}, nums2={c,d}
taking xor => {a^c,a^d,b^c,b^d }
finally taking xor of all => {a^c^a^d^b^c^b^d} ------ (1)
we know that x^x=0(even times xor with self = 0)
Now, (1) becomes => {a^a^b^b^c^c^d^d} => {0^0^0^0} =0
RESULT(case 1) =0;

case 2 : when both are odd
Let's x1= xor of all elements of nums1, x2=xor of all elements of nums2
suppose nums1={a}, nums2={c} (you can deduce by yourself, I am taking the easier one , take nums1={a,b,c}, nums2={d,e,f} and solve it)
taking xor => {a^c}
RESULT (case 2) = (x1 ^x2)
**

Case 3/4:** when one of them is odd and other is even
nums1={a,b,c}, nums2={d,e}
Here, all terms of nums1 comes even times(m times) in final xorr => so, we can take them as zero
And, all terms of nums2 comes odd times(n times) => so, we can take odd=(even+1) => 1 times x2
x1=a^b^c, x2=d^e
**
RESULT(CASE 3/4) = x2(if m is even) , = x1 (if n is even)

<Tabs>
<TabItem value="java" label="Java">
<SolutionAuthor name="@ganajayant"/>

```java
class Solution {
    private int xor(int[] nums) {
        int res = 0;
        for (int num : nums) {
            res ^= num;
        }
        return res;
    }

    public int xorAllNums(int[] nums1, int[] nums2) {
        if (nums1.length % 2 == 0 && nums2.length % 2 == 0) { // if both arrays have even length
            return 0;
        }
        int xorone = xor(nums1), xortwo = xor(nums2);
        // if both arrays have odd length then xor of both arrays is the answer or else
        // xor of one even length array is the answer
        return nums1.length % 2 == 1 && nums2.length % 2 == 1 ? xorone ^ xortwo
                : (nums1.length % 2 != 0 ? xortwo : xorone);
    }
}
```
</TabItem>
</Tabs>