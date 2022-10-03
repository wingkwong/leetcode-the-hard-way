---
title: 'Kadane 2D Algorithm'
description: 'Kadane 2D algorithm is a elegant way of finding maximum sum submatrix in a matrix using the logic of Kadane 1D algorithm'
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - Kadane's 2D
  - algorithm
---

<!-- import TutorialAuthors from '@site/src/components/TutorialAuthors'; -->

<TutorialAuthors names="@ShivaRapolu01"/>

## Overview

We know about Kadane's algorithm which is a O(N) algorithm that finds the maximum sum of a contiguous subarray in an array. Now consider the below problem statement:

> Given a 2D array, find the maximum sum submatrix in it
>
> You must write an algorithm with `O(rows*cols^2)` runtime complexity.

For example, given the input:

```C++
grid= [
        [-1   -2   -3],
        [ 4    5    6],
        [ 7    8    9],
        [-10  -11  -12]
      ]
```

It is easy to notice that the maximum sum submatrix is the 39. Which is the submatrix enclosed by vertices (1,0),(1,2),(2,0),(2,2).

> Hint: The problem statement resonates with Kadane's algorithm. The main thing is how to extend the 1D Kadane's algorithm to 2D. General Kadane's algorithm works on a 1D array, so first we need to convert the submatrix into 1D array in such a way that we can uniquely identify the boundaries of maximum sum submatrix. Then we can apply Kadane's algorithm on the 1D array to find this maximum sum subarray.

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

> For grid given in example finalLeft=0, finalRight=2, finalTop=1, finalBottom=2.

## Code Flow

1. Any submatrix has 4 sides so we need 4 variables to uniquely identify and store the boundaries of the maximum sum submatrix.
2. Using the 1D kadane's algorithm we can find the maximum sum subarray in a 1D array and with some modifications we can retrieve the boundaries of this maximum sum subarray.
3. We need to convert the submatrix into 1D array in such a way that we can identify the boundaries of maximum sum submatrix. For this we can try fixing the left and right boundaries (finalLeft and finalRight) of the submatrix and then we calculate the cummulative sum in each row and store it as 1D array.
4. Now we can apply Modified 1D Kadane's algorithm on this 1D array to find the maximum sum subarray and we retrieve the boundaries of this maximum sum subarray.
5. The boundaries retrieved from this 1D Kadane's algorithm are the final Top and FinalBottom boundaries of the maximum sum submatrix in the original 2D matrix.
