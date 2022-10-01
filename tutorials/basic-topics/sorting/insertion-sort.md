---
title: 'Insertion Sort'
description: 'An sorting algorithm based on picking one element at a time and inserting it in sorted order.'
hide_table_of_contents: true
draft: true
keywords:
  - leetcode
  - tutorial
  - sorting
  - algorithm
  - insertion sort
---

<TutorialAuthors names="@Shivashish-rwt"/>

## Overview

Insertion sort is one of the sorting algorithms that sort the elements by placing an unsorted element in correct sorted order one at a time.

First of all, let us understand how an sorted `array` (If you don't what an array is. Please refer to `tutorials/basic-topics/arrays.md`) looks like. Understanding an sorted array will give us the overview of the insertion sort.

In a sorted `array` all the elements to the left any element are smaller than that. That, means to make the `array` sorted we have to place an element in such a position, so that every element to the left are smaller than that. That is pretty much what we do in a insertion sort.

I'll be providing the code in following language:

* C++
* Java
* Python

If you don't know any of the above mentioned languages. Don't worry you can easily code insertion sort, in your choice of programming language, once you understand the logic behind it.

## Algorithm

The following are the steps that we are going to follow:-

1. Pick an element from the array, and store it in a variable `nums`.
2. Now, start comparing the `nums` with all the elements to the left of it.
3. If the `nums` is less than the current element shift the current element to right until you find an element smaller than `nums`.
4. Place the `nums` in current position.
5. Repeat all the above steps until the `array` is sorted.

Let's achieve the sorted `array` by applying above steps in an example.

### Example

Let's apply the insertion sort in an example the You'll get more understanding of the insertion sort algorithm.

We are given with an `array` of height of 5 students (in cm) from a class and we have to sort it.

```python
height_of_students = [175,180,171,160,168]
```

1. Let's assume the first element is sorted.Take the second Element store it in `nums`. Now, `175` is smaller than `nums`(`185`) so we'll place `nums` in current position and pick next element. The array would look like this:
```python
height_of_students = [175,180,171,160,168]
```
2. Now the pick next element assign it to `nums` which in this case is `171`. Now `180` is greater than `nums` so it should be at the right of nums, move `180` to right. Again `175` is greater than `nums` so move `175` to the right. Currently there is no element remain to the left so we will place `nums` in the beginning. The array would look like this:
```python
height_of_students = [171,175,180,160,168]
```
3. We'll assign the next element to `nums` which is `160` . Till now you have already guessed what is the next step. If your answer is same as step number 3 mentioned above, then you are absolutely correct which is compare the elements to the left of `nums` with it. Now, `180` is greater than `nums`, so move `180` to right. Again `175` is greater than `nums` also move it to the right. Again `171` is smaller than `nums` also move it to right. Now there is no element remains to compare with `nums`, so put `nums` in the beginning of the array. The array would look like this:
```python
height_of_students = [160,171,175,180,168]
```
4. Now assign `168` to `nums` . And compare with all the elements to the left of it and do the operations according to it. Now, I'm sure you already know what the array would look like:
```python
height_of_students = [160,168,171,175,180]
```

Congrats, You have finally achieved the sorted array with the help of insertion sort algorithm.

## Implementation

Following are the implementation of insertion sort:-

### C++ Implementation

```cpp
#include<iostream>
using namespace std;

void insertionSort(int height_of_students[], int size_of_arary) {
    for (int i = 1; i < size_of_arary; i++) {
        int nums = height_of_students[i];
        int j = i - 1;

        while (j >= 0 and height_of_students[j] > nums) {
            height_of_students[j + 1] = height_of_students[j];
            j--;
        }
        height_of_students[j + 1] = nums;
    }
}

int main()
{
    int height_of_students[] = {175, 180, 171, 160, 168};
    int size_of_arary = sizeof(height_of_students) / sizeof(height_of_students[0]);

    insertionSort(height_of_students, size_of_arary);

    for (auto it : height_of_students) {
        cout << it << " ";
    }
}
```

### Java Implementation

```java
import java.util.Arrays;
class InsertionSort {
	void insertion_sort(int height_of_students[],int size_of_arary) {
		for (int i = 1; i < size_of_arary; ++i) {
			int nums = height_of_students[i];
			int j = i - 1;

			while (j >= 0 && height_of_students[j] > nums) {
				height_of_students[j + 1] = height_of_students[j];
				j = j - 1;
			}
			height_of_students[j + 1] = nums;
		}
	}

	public static void main(String args[]) {
		int height_of_students[] = {175, 180, 171, 160, 168};
        int size_of_arary = height_of_students.length;

		InsertionSort obj = new InsertionSort();
		obj.insertion_sort(height_of_students,size_of_arary);

		for(int element : height_of_students){
			System.out.print(element + " ");
		}
	}
}
```

### Python Implementation

```python
def insertionSort(height_of_students,size_of_array):

    for i in range(1, size_of_array):
        nums = height_of_students[i]
        j = i - 1
              
        while j >= 0 and height_of_students[j] > nums:
            height_of_students[j + 1] = height_of_students[j]
            j = j - 1
        
        height_of_students[j + 1] = nums


height_of_students = [175, 180, 171, 160, 168]
size_of_array = len(height_of_students)
insertionSort(height_of_students,size_of_array)
print(height_of_students)
```

## Time Complexity

### Worst Case Complexity

The worst case would be when we have to compare `nums` with every element in the left of it that would we `(n-1)` comparisons for `n` elements. Means the array would be in descending order.

So, the complexity is = $\mathcal{O}(n^2)$

### Best Case Complexity

The best case would be when the comparisons with `nums` be zero. Means the array already is in sorted order. So, Only outer loop over array would run.

So, the complexity is = $\mathcal{O}(n)$

### Average Case Complexity

The average case would be when the array is neither in ascending order nor in descending order.

So, the complexity is = $\mathcal{O}(n^2)$

## Space Complexity

We are not using any extra space apart from the array we have to sort. So, the space complexity is = $\mathcal{O}(1)$

export const suggestedProblems = [
  {
    "problemName": "1365 - How Many Numbers Are Smaller Than the Current Number",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/",
    "solutionLink": "https://leetcode.com/submissions/detail/812551570/"
  },
  {
    "problemName": "2037 - Minimum Number of Moves to Seat Everyone",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/",
    "solutionLink": "https://leetcode.com/submissions/detail/812554474/"
  },
  {
    "problemName": "1913 - Maximum Product Difference Between Two Pairs",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/maximum-product-difference-between-two-pairs/",
    "solutionLink": "https://leetcode.com/submissions/detail/812555513/"
  },
  {
    "problemName": "1464 - Maximum Product of Two Elements in an Array",
    "difficulty": "Easy",
    "leetCodeLink": "https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/",
    "solutionLink": "https://leetcode.com/submissions/detail/812556563/"
  },
]

<Table title="Suggested Problems" data={suggestedProblems} />