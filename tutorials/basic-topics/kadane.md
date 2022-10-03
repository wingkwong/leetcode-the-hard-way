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
int maxSubArraySum(vector<int>& nums)
{   
    int n=nums.size(); 
    // globalSum is where the maximum sum of subarray is stored
    // localSum is where the sum of current subarray is stored
    int globalSum = INT_MIN, localSum = 0;
 
    for (int i = 0; i < n; i++) {
        // Add current element to current sum 
        localSum = localSum + nums[i];

        // If current sum is greater than globalSum, update globalSum
        if (globalSum < localSum)
            globalSum = localSum;
 
        // If upon adding ith element current sum is becoming less than 0
        // it cannot contribute to the maximum sum subarray so we neglect it 
        // and reset our current sum to 0 to start another subarray freshly
        if (localSum < 0)
            localSum = 0;
    }
    return globalSum;
}
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

# Variations of Kadane's Algorithm

## Kadane's 2D Algorithm 

### Overview

We know about Kadane's algorithm which is a O(N) algorithm that finds the maximum sum of a contiguous subarray in an array. It can be extended to find maximum sum submatrix in a 2D matrix.                                        
Consider the below problem statement:

### Example 1: [85 - Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/)

> Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.              
> You must write an algorithm with `O(rows*cols^2)` runtime complexity.

For example, given the input:

```
grid= [
        [ -1   -2   -3  -13   -21 ],
        [ -4    5    6   14   -20 ],
        [ -7    8    9   15   -19 ],
        [-10   -11  -12   16  -18 ]
      ]
```

It is easy to notice that the maximum sum submatrix is the 57. Which is the submatrix enclosed by zero-indexed vertices (1,1),(1,3),(2,1),(2,3). 

> Hint: The problem statement resonates with Kadane's algorithm. The main thing is how to extend the 1D Kadane's algorithm to 2D. General Kadane's algorithm works on a 1D array, so first we need to convert the submatrix into 1D array in such a way that we can uniquely identify the boundaries of maximum sum submatrix. Then we can apply Kadane's algorithm on this 1D array to find the maximum sum subarray.

<Tabs>
<TabItem value="cpp" label="C++">
<SolutionAuthor name="@ShivaRapolu01"/>

```cpp
int ModifiedKadane(vector<int> arr, int &cursumLeft, int &cursumRight, int n)
{
    int cursum = 0, maxSum = INT_MIN;

    // Just some initial value to check whether a positive maximum sum subarray exists or not
    cursumRight = -1;

    // variable to store starting index of intermediate subarrays
    int curStart = 0;

    for (int i = 0; i < n; ++i)
    {
        cursum += arr[i];
        if (cursum < 0)
        {
            cursum = 0;
            curStart = i + 1;
        }
        else if (cursum > maxSum)
        {
            maxSum = cursum;
            cursumLeft = curStart;
            cursumRight = i;
        }
    }

    // There is at-least one  non-negative number
    if (cursumRight != -1)
        return maxSum;

    // Special Case: When all numbers in arr[] are negative then find the maximum negative element in array
    maxSum = arr[0];
    cursumLeft = cursumRight = 0;

    // Finding the maximum negative element in array
    for (int i = 1; i < n; i++)
    {
        if (arr[i] > maxSum)
        {
            maxSum = arr[i];
            cursumLeft = cursumRight = i;
        }
    }
    return maxSum;
}

// function which finds maximum sum rectangle in grid[][]
void findMaxSumIn2DMatrix(vector<vector<int>> grid, int rows, int cols)
{

    int maxSum = INT_MIN;
    // variables to indicate maximum submatrix boundaries
    int finalLeft, finalRight, finalTop, finalBottom;

    int left, right;
    vector<int> temp(rows, 0); // temp is used to store sum between current left and right boundaries for every row.

    // Set the left column
    for (left = 0; left < cols; ++left)
    {

        // Set the right column corresponding to  left
        for (right = left; right < cols; ++right)
        {

            // Calculate sum between current left and right for each row
            for (int i = 0; i < rows; ++i)
                temp[i] += grid[i][right];

            // Find the maximum sum subarray in this created temp array using Kadane's 1D algorithm.
            // This modifed Kadane function also sets the starting and ending indices of the maximum sum subarray.
            int cursum, cursumLeft, cursumRight;
            cursum = ModifiedKadane(temp, cursumLeft, cursumRight, rows);

            // Compare sum with maximum sum so far.
            // If sum is more, then update maxSum
            if (cursum > maxSum)
            {
                maxSum = cursum;
                finalLeft = left;
                finalRight = right;
                finalTop = cursumLeft;
                finalBottom = cursumRight;
            }
        }
    }

    // Printing final values
    cout << "Top: " << finalTop << "  Left: " << finalLeft << endl;
    cout << "Bottom: " << finalBottom << " Right: " << finalRight  << endl;
    cout << "Max sum of Submatrix is: " << maxSum << endl;
}
```

</TabItem>
</Tabs>

> For grid given in example finalLeft=1, finalRight=3, finalTop=1, finalBottom=2.

### Code Flow

1. Any submatrix has 4 sides so we need 4 variables to uniquely identify and store the boundaries of the maximum sum submatrix.
2. Using the 1D kadane's algorithm we can find the maximum sum subarray in a 1D array and with some modifications we can retrieve the boundaries(starting index and ending index) of this maximum sum subarray.
3. We need to convert the submatrix into 1D array in such a way that we can identify the boundaries of maximum sum submatrix. For this we can try fixing the left and right boundaries (finalLeft and finalRight) of the submatrix and then we calculate the cummulative sum in each row and store it as 1D array.
4. Now we can apply Modified 1D Kadane's algorithm on this 1D array to find the maximum sum subarray and we retrieve the boundaries of this maximum sum subarray.
5. The boundaries retrieved from this 1D Kadane's algorithm are the final Top and FinalBottom boundaries of the maximum sum submatrix in the original 2D matrix.

export const kadane2DSuggestedProblems = [
    {
        "problemName": "85 - Maximal Rectangle",
        "difficulty": "Hard",
        "leetCodeLink": "https://leetcode.com/problems/maximal-rectangle/",
        "solutionLink": ""
    },
    {
        "problemName": "363 - Max Sum of Rectangle No Larger Than K",
        "difficulty": "Hard",
        "leetCodeLink": "https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/",
        "solutionLink": ""
    }
]

<Table title="Suggested Problems" data={kadane2DSuggestedProblems} />