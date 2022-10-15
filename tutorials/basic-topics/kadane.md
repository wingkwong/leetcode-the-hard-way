---
title: 'Kadane Algorithm'
description: 'Kadane 1D algorithm finds the maximum sum subarray in an array of integers. Kadane 2D algorithm finds the maximum sum subarray in a 2D array of integers.'
hide_table_of_contents: false
keywords:
  - leetcode
  - tutorial
  - Kadane
  - algorithm
---

import TutorialAuthors from '@site/src/components/TutorialAuthors';

<TutorialAuthors names="@ShivaRapolu01"/>

## Overview

Kadane’s algorithm is an iterative algorithm in which we search for a maximum sum contiguous subarray within 1D array.

## Example 1: [53 - Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

```
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

> A subarray is a contiguous part of an array maintaining the order of elements.            
>[1,2,3] is a subarray of [1,2,3,4,5] but [1,3,2] & [1,3,5] are not.

Consider an array of positive integers only, the maximum sum subarray will be the entire array itself. If the array contains negative integers only, then the maximum sum subarray will be the maximum element of the array. 
It gets tricker when we have both positive and negative numbers. 

If the array consists of positive integers(need not be all positive integers). Then there definitely exists a subarray which has positive sum, because I can choose one positive element in worst case and it would be my subarray with positive sum. 

The main idea of Kadane's algorithm is to neglect the negative sum subarrays and take maximum among the positive sum subarrays.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@ShivaRapolu01"/>

```cpp
class Solution {
public:
    int maxSubArraySum(vector<int>& nums){
        int n=nums.size(); 
        // globalSum is where the maximum sum of subarray is stored
        // localSum is where the sum of current subarray is stored
        int globalSum = INT_MIN, localSum = 0;
    
        for (int i = 0; i < n; i++){
            // Add current element to current sum 
            localSum = localSum + nums[i];

            // If current sum is greater than globalSum, update globalSum
            if (globalSum < localSum){
                globalSum = localSum;
            }
    
            // If upon adding ith element current sum is becoming less than 0
            // it cannot contribute to the maximum sum subarray so we neglect it 
            // and reset our current sum to 0 to start another subarray freshly
            if (localSum < 0){
                localSum = 0;
            }
        }
        return globalSum;
    }
};
```
</TabItem>
</Tabs>

## Steps in Kadane's Algorithm

1. Store the sum of elements of the current subarray found so far. 
2. Keep updating the maximum sum of subarray found so far by checking if the current sum is greater than the maximum sum found so far or not.
3. If the current sum is less than 0, then we can neglect the current subarray and start a new subarray from the next element.

export const kadaneSuggestedProblems = [
    {
        "problemName": "152 - Maximum Product Subarray",
        "difficulty": "Medium",
        "leetCodeLink": "https://leetcode.com/problems/maximum-product-subarray/",
        "solutionLink": ""
    },
    {
        "problemName": "121 - Best Time to Buy and Sell Stock",
        "difficulty": "Easy",
        "leetCodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        "solutionLink": ""
    },
    {
        "problemName": "918 - Maximum-sum-circular-subarray",
        "difficulty": "Medium",
        "leetCodeLink": "https://leetcode.com/problems/maximum-sum-circular-subarray/",
        "solutionLink": ""
    }
    
]

<Table title="Suggested Problems" data={kadaneSuggestedProblems} />

## Variations of Kadane's Algorithm

### Kadane's 2D Algorithm 

#### Overview

We know about Kadane's algorithm which is a O(N) algorithm that finds the maximum sum of a contiguous subarray in an array. It can be extended to find maximum sum submatrix in a 2D matrix.                                        
Consider the below problem statement:

### Example 1: [85 - Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/)

> Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.              
 
 ```
 Input: matrix = [
                    ["1","0","1","0","0"],
                    ["1","0","1","1","1"],
                    ["1","1","1","1","1"],
                    ["1","0","0","1","0"]
                 ]
Output: 6
```


If noticed properly we can see that maximum sum submatrix is the 6. Which is the submatrix enclosed by zero-indexed vertices (1,2),(1,4),(2,2),(2,4). 

> Hint: The problem statement resonates with Kadane's algorithm. The main thing is how to extend the 1D Kadane's algorithm to 2D. General Kadane's algorithm works on a 1D array, so first we need to convert the submatrix into 1D array in such a way that we can uniquely identify the boundaries of maximum sum submatrix. Then we can apply Kadane's algorithm on this 1D array to find the maximum sum subarray.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@ShivaRapolu01"/>

```cpp
class Solution {
public:
    int Kadane(vector<int> arr, int &cursumLeft, int &cursumRight, int n){
        // function returns maxiumum sum of subarray and also updates 
        // the left and right indices of the subarray in cursumLeft and cursumRight respectively
        int localSum = 0, globalSum = 0;

        // variable to store the right index of current subarray
        int localSumRight = 0;

        // variable to store starting index of intermediate subarrays
        int localCurStart = 0;

        for (int i = 0; i < n; ++i){
            localSum += arr[i];
            if (localSum < 0){
                localSum = 0;
                localCurStart = i + 1;
            }else if (localSum > globalSum){
                globalSum = localSum;
                cursumLeft = localCurStart;
                cursumRight = i;
            }
        }
        return globalSum;
    }


    int maximalRectangle(vector<vector<char>>& matrix){
        int globalMaxSum = 0;
        // variables to indicate maximum submatrix boundaries
        int finalLeft, finalRight, finalTop, finalBottom;

        int rows=matrix.size(); 
        int cols=matrix[0].size(); 

        const int INF = -(rows*cols); 
        // since there can be maximum of rows*cols number of 1's in the matrix 
        // If we encounter 0 in a row in the current submatrix, our maximum sum submatrix 
        // can't contain this row as it should contain only 1's. 
        // As we need to neglect the whole row
        // we need erase contributions of 1's in the same row which are before 0 
        // hence we add INF to temp array before passing it to Kadane's algorithm

        // Set the left column
        for (int left = 0; left < cols; ++left){
            vector<int> temp(rows, 0); 
            // temp is used to store sum between current left and right boundaries for every row.
            
            // Set the right column corresponding to  left
            for (int right = left; right < cols; ++right){

                // Calculate sum between current left and right for each row
                for (int i = 0; i < rows; ++i){
                    if(matrix[i][right]=='1'){
                        temp[i]+=1;
                    }else{
                        temp[i]+=INF; 
                    }
                }

                // Find the maximum sum subarray in this created temp array using Kadane's 1D algorithm.
                int localSum, localSumLeft, localSumRight;
                localSum = Kadane(temp, localSumLeft, localSumRight, rows);

                // Compare sum with maximum sum so far.
                // If sum is more, then update globalMaxSum
                // and also update boundaries of maximum sum submatrix
                if (localSum > globalMaxSum){
                    globalMaxSum = localSum;
                    finalLeft = left;
                    finalRight = right;
                    finalTop = localSumLeft;
                    finalBottom = localSumRight;
                }
            }
        }
        return globalMaxSum; 
    }
};
```

</TabItem>
</Tabs>

> For grid given in example (0-indexing) finalLeft=2, finalRight=4, finalTop=1, finalBottom=2.

### Code Flow

1. Any submatrix has 4 sides so we need 4 variables to uniquely identify and store the boundaries of the maximum sum submatrix.
2. Using the 1D kadane's algorithm we can find the maximum sum subarray in a 1D array and with some modifications we can retrieve the boundaries(starting index and ending index) of this maximum sum subarray.
3. We need to convert the submatrix into 1D array in such a way that we can identify the boundaries of maximum sum submatrix. For this we can try fixing the left and right boundaries (finalLeft and finalRight) of the submatrix and then we calculate the cummulative sum in each row and store it as 1D array.
4. Now we can apply 1D Kadane's algorithm on this 1D array to find the maximum sum subarray and we retrieve the boundaries of this maximum sum subarray.
5. The boundaries retrieved from this 1D Kadane's algorithm are the final Top and FinalBottom boundaries of the maximum sum submatrix in the original 2D matrix.

export const kadane2DSuggestedProblems = [
    {
        "problemName": "363 - Max Sum of Rectangle No Larger Than K",
        "difficulty": "Hard",
        "leetCodeLink": "https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/",
        "solutionLink": ""
    }
]

<Table title="Suggested Problems" data={kadane2DSuggestedProblems} />