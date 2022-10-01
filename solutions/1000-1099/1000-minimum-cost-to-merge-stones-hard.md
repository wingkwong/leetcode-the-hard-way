---
description: 'Author: @hwaiting_dk | https://leetcode.com/problems/minimum-cost-to-merge-stones/'
tags: [Array, Dynamic Programming]
---

# 1000 - Minimum Cost to Merge Stones (Hard)

## Problem Link

https://leetcode.com/problems/minimum-cost-to-merge-stones/

## Problem Statement

There are n piles of stones arranged in a row. The ith pile has stones[i] stones.
A move consists of merging exactly k consecutive piles into one pile, and the cost of this move is equal to the total number of stones in these k piles.
Return the minimum cost to merge all piles of stones into one pile. If it is impossible, return -1.

**Example 1:**
```
Input: stones = [3,2,4,1], k = 2
Output: 20
Explanation: We start with [3, 2, 4, 1].
We merge [3, 2] for a cost of 5, and we are left with [5, 4, 1].
We merge [4, 1] for a cost of 5, and we are left with [5, 5].
We merge [5, 5] for a cost of 10, and we are left with [10].
The total cost was 20, and this is the minimum possible.
```

**Example 2:**
```
Input: stones = [3,2,4,1], k = 3
Output: -1
Explanation: After any merge operation, there are 2 piles left, and we can't merge anymore.  
So the task is impossible.
```

**Example 3:**
```
Input: stones = [3,5,1,2,6], k = 3
Output: 25
Explanation: We start with [3, 5, 1, 2, 6].
We merge [5, 1, 2] for a cost of 8, and we are left with [3, 8, 6].
We merge [3, 8, 6] for a cost of 17, and we are left with [17].
The total cost was 25, and this is the minimum possible.
```
**Constraints:**
* `n == stones.length`
* `1 <= n <= 30`
* `1 <= stones[i] <= 100`
* `2 <= k <= 30`

## Problem Breakdown

It's variation of MCM which is Matrix chain multiplication. It is an optimization problem concerning the most efficient way to multiply a given sequence of matrices. For more info, please check out <a href="https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/">GFG Article</a>.

Let's understand problem first.

```
stones = [3,5,1,2,6], k = 3
```

Here we are given stone array and $k$ piles, we have to merge $k$ consecutive piles into $1$ pile with the minimum cost.

For example, for $[3, 5, 1, 2, 6]$, we can merge $[5, 1, 2]$ into $[8]$. Then we have $[3, 8, 6]$, we can merge them into $[17]$. We can stop here. Our total cost = $8 + 17 = 25$.

### The first thing we need to check can we merge all these piles into 1 pile?

We can check this : `if ((n-1)%(k-1) == 0)` then only we can do merging.

Let's see how we can arrive at this formula. <br/>

If there's $n$ piles given and $k$ piles are to be merged. Then, <br/>
After the first merge - the length of the array will be $n - (k - 1)$ <br/>
After the second merge - the length of the array will be $n - (k - 1) - (k - 1)$ <br/>
After the third merge - the length of the array will be $n - (k - 1) - (k - 1) - (k - 1)$ <br/>
and so on...<br/>

For example, for $index = [0, 1, 2, 3, 4]$ and $arr = [3, 5, 1, 2, 6]$, the length is 5. If we do single merge of $[5, 1, 2]$ => $[8]$, then we have $index = [0, 1, 2]$ and $arr = [3, 8, 6]$.  The length is $n - (k - 1) = 5 - (k - 1) = 5 - (3 - 1) = 5 - 2 = 3$; <br/>

We know that after $m$ merges the length must be $1$ if we can merge piles. Therefore, we can say that the cost for single merge is $k - 1$ and for $m$ merges will be $m * (k - 1)$ <br/>

### Given in the question : A move consists of merging exactly k consecutive piles into one pile and in the end only single pile is left.

We can say that: <br/>

$$
N - \text(totalMerges) = 1 
$$

$$
N - m * (k - 1) = 1 
$$

$$
N - 1 = m * (k - 1) 
$$

$$
m = (N - 1) / (k - 1) 
$$

Now, $m$ must be positive number then only we can merge them.

In this example: $[3, 5, 1, 2, 6]$. Here we got $N = 5$, $k = 3$.

$$
m = (N - 1) / (k - 1)
$$

$$
m = (5 - 1) / (3 - 1) = (4) / (2) = 2
$$

$2$ is positive integer, so here we can merge $2$ times, which is actually true in our case. Here we need range sum which will be added in the cost. For this purpose we will create prefix sum and use it.

For $arr = [3, 5, 1, 2, 6]$, the prefix sum would be $[0, 3, 8, 9, 11, 17]$. If we are merging $[5, 1, 2]$, then index $i = 1$, $j = 3$. The cost will be $prefix[j + 1] - prefix[i] = prefix[3 + 1] - prefix[1] = 11 - 3 = 8$ which is true. <br/>

Also, before calculating cost, for every range we will check if we can merge this or not <br/>
if `((j - i) % (piles - 1) == 0)` here $j - i =$ current range and piles is $k$. <br/>

In the induction step, in the for loop we will increment by $k = k + piles - 1$ because after merging, $k - 1$ piles will be deleted for sure (in this case $2$ piles will be deleted after every merge), so we just start from next valid (3rd in this case) pile from current.

### Sub Problem will range from:

If we do $rec(stones, i, k) + rec(stones, k + 1, j)$, as in our for loop we will loop till second last_index so that for $rec(k + 1, j)$ here $k + 1$ remains valid.

### Driver Function Call:

return rec(stones, 0, n - 1, k) : we will start from 0th index and last index n-1 which is the valid range. 

## Approach 1: Pure Recursion : Matrix Chain Multiplication (TLE)

**Time Complexity:** $O((N * (2 ^ N)) / K)$ here as we increment by $K$ piles in every step and for every element we have $2$ options and there are $2 ^ N$ ways.

**Space Complexity:**  $O(N)$ for prefix sum + $O(N ^ 2)$ for memo + $O(N)$ auxilary stack space.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@hwaiting_dk"/>

```cpp
class Solution {
public:
    vector<int> prefixSum = {0};
    int rec(vector<int> &stones, int i, int j, int piles) {
        // Base Case: Invalid Index or For single element answer is always 0
        if (i >= j) return 0;
        int mini = INT_MAX;
	    for (int k = i; k < j; k = k + piles - 1) {
            int tempAns = rec(stones, i, k, piles) + rec(stones, k + 1, j, piles);
            mini = min(tempAns, mini);
        }
	    if ((j - i) % (piles - 1) == 0) {
            mini += prefixSum[j + 1] - prefixSum[i];
        }
        return mini;
    }
    
    int mergeStones(vector<int>& stones, int k) {
        int n = stones.size();
	    // If we can't merge all piles into 1 pile, so we our answer is -1;
        if ((n - 1) % (k - 1) != 0) return -1;
        for (int i : stones) {
            prefixSum.emplace_back(prefixSum.back() + i);
        }
        return rec(stones, 0, n-1, k);
    }
};
```
</TabItem>
</Tabs>

## Approach 2: Extension of Recursion : Memoization : Just to get AC via Recursion.

**Time Complexity**: $O((N ^ 3) / K)$ here as we increment by $K$ piles in every step <br/>
**Space Complexity**: $O(N)$ for prefix sum + $O(N ^ 2)$ for memo + $O(N)$ auxilary stack space <br/>

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@hwaiting_dk"/>

```cpp
class Solution {
public:
    vector<int> prefixSum = {0};
    int memo[31][31];
    int rec(vector<int> &stones, int i, int j, int piles) {
        // Base Case: Invalid Index or For single element answer is always 0
        if (i >= j) return 0;
        if (memo[i][j] != -1) return memo[i][j];
        int mini = INT_MAX;
        for (int k = i; k < j; k = k + piles - 1) {
            // Sub Problems
            int tempAns = rec(stones, i, k, piles) + rec(stones, k + 1, j, piles);
            mini = min(tempAns, mini);
        }
        // If we can take current segment into our answer: 
        if ((j - i) % (piles - 1) == 0){
            mini += prefixSum[j + 1] - prefixSum[i];
        }
        return memo[i][j] = mini;
    }
    
    int mergeStones(vector<int>& stones, int k) {
        int n = stones.size();
        if ((n - 1) % (k - 1) != 0) return -1;
        for (int i : stones) prefixSum.emplace_back(prefixSum.back() + i);
        memset(memo, -1, sizeof(memo));
        return rec(stones, 0, n - 1, k);
    }
};  
```
</TabItem>
</Tabs>

## Approach 3: Tabulation | Bottom Up 
Basically Tabulation is reverse of memoization. Here we have to think reverse of recursion.

1. Filling the base cases.
2. Adjust pointers. Example: $rec(i, j)$ -> $dp[i][j]$ (valid range).
3. Copy the reocurrence from the recursion.

**Time Complexity**: $O((N^3)/K)$ here as we increment by $K$ piles in every step <br/>
**Space Complexity**: $O(N)$ for prefix sum + $O(N ^ 2)$ for dp <br/>

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@hwaiting_dk"/>

```cpp
class Solution {
public:
    int mergeStones(vector<int>& stones, int k) {
        int n = stones.size();
        if ((n - 1) % (k - 1) != 0) return -1;
        vector<int> prefixSum = {0};
        for (int i : stones) prefixSum.emplace_back(prefixSum.back() + i);
        int dp[n][n];
        // Filling the first base case : if (i >= j) return 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= i; j++) {
                dp[i][j] = 0;
            }
        }
        // As you can see our driver function, call is rec(stones, 0, n - 1, k);
        // here in rec => i starts from 0 : means in tabulation : our ith start from last index which is n - 1
        // here in rec => j starts from n - 1: means in tabulation : out jth starts from starting index which is 0
        
        // Here we get our answer at rec(stones, 0, n - 1, k); means we will get our answer at 0th index in "i" and last index of jth i.e n - 1th index: 
        // we have to fill them : so for 0th index : we have to fill from last to first : that's how we will reach at 0th index and for jth index:
        // we have to start from 0th index then we will reach to the last index in the end
        
        // NOTE: Here as u can see in base case if (i >= j) return 0; 
	// means our answer at i >= j  is always 0 : so we will start our jth loop from i + 1 index
        
        int piles = k;
        for (int i = n - 1; i >= 0; i--;) {
            for(int j = i + 1; j < n; j++;) {
                int mini = INT_MAX;
                for (int k = i; k < j; k = k + piles - 1;){
                    // Sub Problems
                    mini = min(dp[i][k] + dp[k + 1][j], mini);
                }
                // If we can take current segment into our answer: 
                if ((j - i) % (piles - 1) == 0){
                    mini += prefixSum[j + 1] - prefixSum[i];
                }
                dp[i][j] = mini;
            }
        }
        return dp[0][n - 1];
    }
};  
```
</TabItem>
</Tabs>

## Concise Version

**Time Complexity**: $O((N ^ 3)/K)$ here as we increment by $K$ piles in every step <br/>
**Space Complexity**: $O(N)$ for prefix sum + $O(N ^ 2)$ for dp <br/>

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@hwaiting_dk"/>

```cpp
class Solution {
public:
    int mergeStones(vector<int>& stones, int k) {
        int n = stones.size();
        if ((n - 1) % (k - 1) != 0) return -1;
        vector<int> prefixSum = {0};
        for (int i : stones) prefixSum.emplace_back(prefixSum.back() + i);
        int dp[n][n];
        // Filling the first base case : if (i >= j) return 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= i; j++) {
                dp[i][j] = 0;
            }
        }
        int piles = k;
        for (int i = n - 1; i >= 0; i--) {
            for(int j = i + 1; j < n; j++) {
                int mini = INT_MAX;
		
                for (int k = i; k < j; k = k + piles - 1){
                    // Sub Problems
                    int tempAns = dp[i][k] + dp[k + 1][j];
                    mini = min(tempAns, mini);
                }

                // If we can take current range into our answer: 
                if ((j - i) % (piles - 1) == 0){
                    mini += prefixSum[j + 1] - prefixSum[i];
                }
                dp[i][j] = mini;
            }
        }
        return dp[0][n - 1];
    }
```
</TabItem>
</Tabs>
