---
title: 'Arrays'
description: 'An array is a data structure consisting of a collection of elements.'
hide_table_of_contents: true
keywords:
  - leetcode
  - tutorial
  - arrays
  - data structure
---

import Authors from '@site/src/components/Authors';

<Authors names="@heiheihang"/>

As there is not much distinction between many data structures in the context of LeetCode. I will use the term `array` to cover the following data structures in these popular languages:

* Python: List
* C++: Array, Vector
* Java: Array, ArrayList
* Javascript: Array

Note that there are differences in all of them in different languages, but these differences are not important in the context of LeetCode. Just be mindful they are different.

The syntax that we are using is `python`, please refer to your own language of preference if needed.

Let's take a look at some examples of array:

```python
scores_of_students = [86, 76, 67, 98, 95]

boys_and_girls_of_classes = [[10,23], [20,20], [15,12], [13,16]]

basketball_matches = [[0, 76, 86, 100],
                       [56, 0, 87, 65],
                       [65, 34, 0, 86],
                       [72, 65, 78, 0]]
```

We have 3 types of arrays.

`scores_of_students`: This array is an 1-d array containing the scores of each student. We can perform the following operations to obtain different information of the scores:

* `max(scores_of_students)`: returns the highest score in the array, which is 98 in this case
* `min(scores_of_students)`: returns the highest score in the array, which is 67 in this case
* `sum(scores_of_students)`: returns the sum of score in the array, which is 422 in this case
* `scores_of_students.sort()`: sort the scores in order, which is `[67, 76, 86, 95, 98`] in this case. Note that it is preferred to use the pre-built sorting function when you are solving a problem NOT TARGETED to teach you sorting. It will speed up your learning.

`boys_and_girls_of_classes`: This array is a 2-d array containing the number of boys and girls of each class. For example, the first class has 10 boys and 23 girls. We can access the number of girls in the 3rd class with `boys_and_girls_of_classes[2][1]` . This is useful to obtain specific information. Let's take a look at several operations on this 2-d array:

* `boys_and_girls_of_classes.sort()`: We have two elements in each entry this time. In `python` the pre-built `sort()` sorts by the first element, then the second element, then the third (if it exists) etc...
* `boys_and_girls_of_classes.sort(key = lambda class : class[1])`: We can use the `key` parameter to change the `sort()` behaviour. We declare that we want to look at the number of girls **FIRST** in each `class` in this case. There are more advanced application of `sort`, and we will learn them in harder problems.
* `list(map(lambda class: class[0] + class[1], boys_and_girls_of_classes))`: This returns the list of the class size of each size. It is useful if we want to know the total number of students in each class.

`basketball_matches` : This array is a 2-d array, but it is special that its dimension is `n x n` . These arrays (or better, matrices) usually have a special meaning. In this case, we have the scores of each team competing with each other. For example, team 1 vs team 2 has the score of `76 - 56` . We will use for-loops to iterate these arrays.

```python
for i in range(len(basketball_matches)):
    for j in range(len(basketball_matches[0])):
        print("Team " + str(i) + " " + basketball_matches[i][j])
        print("Against")
        print("Team " + str(j) + " " + basketball_matches[j][i])
```

### Complexity

| Operation        | Complexity | Explanation                                                                                                                                                                                                                             |
| ---------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Look-up (Access) | $$O(1)$$   | When we do `array[1]`, the program can instantly find the value stored at the first location.                                                                                                                                           |
| Add              | $$O(1)$$   | More accurately this is amortised O(1). When we add to the end of the array, it only takes constant time.                                                                                                                               |
| Pop              | $$O(1)$$   | When we remove the last element of the array, it takes constant time.                                                                                                                                                                   |
| Insert           | $$O(N)$$   | When we insert an element to the middle of the array, it takes O(N) time. The whole array needs to be restructured to accommodate the new element.                                                                                      |
| Remove           | $$O(N)$$   | When we remove an element in the middle of the array, it takes O(N) time. The whole array needs to be restructured to replace the missing gap of the replaced element.                                                                  |
| Len              | $$O(1)$$   | This may seem like to be O(N) as we have to go through the whole array to check its length. However, checking the length of an array in many languages should be pre-computed in their data structures, so it only takes constant time. |
<!-- 
import Highlight from '@site/src/components/SuggestedProblems'; -->

<!-- <SuggestedProblems data={"a": "b"}/> -->

### Suggested Problems

* [1480 - Running Sum of 1d Array (Easy) ](../../solutions/1400-1499/running-sum-of-1d-array-easy)([LeetCode Link](https://leetcode.com/problems/running-sum-of-1d-array/))
* [1929 - Concatenation of Array (Easy) ](../../solutions/1900-1999/concatenation-of-array-easy)([LeetCode Link](https://leetcode.com/problems/concatenation-of-array/))
* [1431 - Kids With the Greatest Number of Candies (Easy)](../../solutions/1400-1499/kids-with-the-greatest-number-of-candies-easy) ([LeetCode Link](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/))
* [1572 - Matrix Diagonal Sum (Easy)](../../solutions/1500-1599/matrix-diagonal-sum-easy) ([LeetCode Link](https://leetcode.com/problems/matrix-diagonal-sum/))
* 0036 - Valid Sudoku (Medium) [(LeetCode Link)](https://leetcode.com/problems/valid-sudoku/)