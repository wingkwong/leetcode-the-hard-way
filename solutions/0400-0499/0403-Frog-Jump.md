---
description: >-
  Author: @Kavita613 |
  https://leetcode.com/problems/frog-jump/
tags: [Array, Dynamic Programming]
---

# 0403 - Frog Jump (Hard) 

## Problem Link

https://leetcode.com/problems/frog-jump/

## Problem Statement

A frog is crossing a river. The river is divided into some number of units, and at each unit, there may or may not exist a stone. The frog  
can jump on a stone, but it must not jump into the water. Given a list of stones' positions (in units) in sorted ascending order, determine if the  
frog can cross the river by landing on the last stone. Initially, the frog is on the first stone and assumes the first jump must be 1 unit. If the  
frog's last jump was k units, its next jump must be either k - 1, k, or k + 1 units. The frog can only jump in the forward direction.

**Example 1:**

```
Input: stones = [0,1,3,5,6,8,12,17]
Output: true  
Explanation: The frog can jump to the last stone by jumping $1$ unit to the $2nd$ stone, then $2$ units to the $3rd$ stone, then  
$2$ units to the $4th$ stone, then $3$ units to the $6th$ stone, $4$ units to the $7th$ stone, and $5$ units to the $8th$ stone.
```

**Example 2:**

```
Input: stones = [0,1,2,3,4,8,9,11]
Output: false  
Explanation: There is no way to jump to the last stone as the gap between the $5th$ and $6th$ stone is too large.
```


**Constraints:**

- `2 <= stones.length <= 2000`
- `0 <= stones[i] <= 231 - 1`
- `stones[0] == 0`
- `stones` is sorted in a strictly increasing order.


## Approach 1: HashMap

- First, we make hashmap of each stone, which would contain a set(stores viable moves that can be made)
- Traversing the $stones$ array from index $0$ which is our 0th positions(only one move at 0th position made by frog)
- Populate the sets of stones that can be reached from current position using a viable move which are $k-1$, $k$ and $k+1$. And also we will  
  calculate next viable move using previous move 
- At the end we will return true if we reach at the end of posiions which is $stones[n-1]$

Time Complexity is $O(n*n)$, where $n$ is the length of $stones$ array.

Space Complexity is $O(n)$.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Kavita613"/>

```cpp
class Solution {
public:
    bool canCross(vector<int>& stones) {
        
        int n = stones.size();
        
        // create map <stone positions, set<moves we can make at this stone position>>
        unordered_map<int, set<int>> map;
        
        // intializing map
        for (int i = 0; i < n; i++) {
            map[stones[i]] = {};
        }
        
        // when we are at Zero position, there is only one move which is equal to 1
        map[0].insert(1);
        
        // iterating every stone positions through $stones$ array
        for (int i = 0; i < n; i++) {
            int currstone = stones[i];
            
            // iterating each moves
            set<int> st = map[currstone];
            
            for (auto x : st) {
                // pos is stone's positon after applying move x
                int pos = currstone + x;
                
                // if position of stone is equal to final position then frog will win 
                if (pos == stones[stones.size() - 1]) {
                     return true;
                }
  
                // first we will check pos is available in our stones array
                if (map.find(pos) != map.end()) {
                    // if the frog's last jump was x units, its next jump must be either x - 1, x, or x + 1 units
                    if (x - 1 > 0) {  
                        map[pos].insert(x - 1);  
                    }
                    
                    map[pos].insert(x);
                    map[pos].insert(x + 1); 
                }
            }
        }
      
        return false;
    }
};
  
```
</TabItem>
</Tabs>

## Approach 2: Dynamic Programming  
  We apply Recursion + Memoization to find out the solution. There are three possible recursion call for $k-1$, $k$, $k+1$ moves.  
  There are some base condtions, we have to facus on 
- if move k is less then zero, then we can not make a jump at that position.
- Now, we have to find that whatever $move$ $(stones[idx-1] + k)$ that has been made is present in our $stones$ array or not
- Also we are answer in our dp and if $dp[idx][k]!=-1$, it means our answer is already present in dp
- Now, final base condition will check if we reach last position or not  
  
Time Complexity is $O(n*n)$, where $n$ is the length of the $stones$ array.  
Space Complexity is $O(n*n)$


<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@Kavita613"/>

```cpp  
class Solution {  
public:
    // Create Globally 2d dp array 
    int dp[2002][2002];
    
    bool solve(int idx, int k, vector<int>& stones, unordered_map<int, int>& m)
    {   
        // k is number of moves 
        if (k <= 0) return false;
        
        // checking k + stones[idx - 1] is available position in our stones array or not
        if (m.find(k + stones[idx - 1]) == m.end()) {
            return false;  
        } else {
            idx = m[k + stones[idx - 1]];
        }
        if (dp[idx][k] != -1) {
            return dp[idx][k];
        }
                  
        // when we reach at end of the positions we will return true
        if (idx == stones.size() - 1) {
            return true;
        }
        // calling recursive function for k-1, k, k+1 moves
        dp[idx][k]  = solve(idx + 1, k-1, stones, mp) ||  solve(idx + 1, k, stones, mp) ||  solve(idx + 1, k+1, stones, mp);
        
        return dp[idx][k];
  }
    
  bool canCross(vector<int>& stones) {
        
        // create unordered_map to store position of stone and index
        unordered_map<int, int> m;
        
        // intializing dp
        memset(dp, -1, sizeof(dp));
        
        // intializing map
        for (int i = 0; i < stones.size(); i++) {
            m.insert({stones[i], i});
        }
        // stones[1] must be 1 because at position zero we one move which is one
        if (stones[1] != 1) {
            return false;
        }
        // calling recursive function, passing index 1 and at index privous move is one
        return solve(1, 1, stones, m);
    }
};
```
</TabItem>
</Tabs>
