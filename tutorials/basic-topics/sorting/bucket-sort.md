---

title: 'Bucket Sort'
description: 'Bucket sort is a sorting algorithm that organizes elements into buckets based on their values and sorts each bucket separately for efficient sorting.'
hide_table_of_contents: true
draft: true
keywords:

- leetcode
- tutorial
- sorting
- algorithm
- bucket sort

---

<TutorialAuthors names="@Sanchita1304"/>
<Contributors names="@wingkwong"/>

## Overview

Bucket sort is a non-comparative sorting algorithm that works by distributing elements into a finite number of buckets, each representing a specific range of values. After distributing the elements, each bucket is sorted individually, typically using another sorting algorithm or recursively applying bucket sort. Finally, the sorted elements are concatenated to produce a fully sorted array. This algorithm is particularly useful when the input data is uniformly distributed across a range of values, making it efficient for certain types of data sets.

## Algorithm

1. Initialization:
    
    Create an array of empty buckets (containers), typically represented as lists or arrays.
    Determine the range of input values and divide this range into equal-sized subranges, each corresponding to a bucket.
    
2. Distribution:
    
    Iterate through the input array and place each element into the appropriate bucket based on its value. This is done by mapping the       element's value to the corresponding bucket.
    
3. Sort Each Bucket:
    
    For each non-empty bucket, sort its contents using a sorting algorithm of your choice (e.g., insertion sort, quicksort, or another       bucket sort recursively).
    
4. Concatenation:
    
    Concatenate all the sorted buckets in order to obtain the final sorted array.
    

We can understand the Bucket Sort by using Scatter-Gather Approach.

![bucket sort example](https://github.com/Sanchita1304/leetcode-the-hard-way/assets/90080911/7045afe4-e20e-4019-acbf-b13dfcb7b886)


In the above example, the unsorted array is given.

- We have to create buckets with a range from 0 to 25.
- The buckets range are 0-5, 5-10, 10-15, 15-20, 20-25.
- After creating buckets we have to sort the buckets using different sorting algorithms of your own choice.
- After sorting, gather the sorted elements from each bucket in order.

## Complexity Analysis

**Time Complexity : $$O(n^2)$$**, where n is the number of elements.

**Space Complexity : $$O(n+k)$$**, where n is the number of elements and k is the number of buckets.


## Example: [912 - Sort an Array](https://leetcode.com/problems/sort-an-array/description/)

> An array of integers in the range [1,n] is given. We have to sort the array in ascending order and return it.

There are two approaches we can use to solve the problem.

### Approach 1: Using Uniform Bucket Sizes


1. Find the Minimum and Maximum Values: 

     The algorithm begins by finding the minimum and maximum values in the input array nums. This is done using the `min_element` and `max_element` functions from the C++ Standard Library. These values are crucial because they determine the range of values that need to be sorted.

2. Create Buckets: 

    Divides the range of input values into a series of "buckets." The number of buckets is determined by the range between the minimum and maximum values plus one `(bucket_range = max_val - min_val + 1)`. Each bucket is initially empty and will be used to count how many times each value appears in the input array.

3. Distribute Elements into Buckets: 

    The algorithm iterates through the input array nums. For each element, it calculates which bucket it belongs to by subtracting the min_val. It then increments the count in that bucket. This step effectively counts the occurrences of each value in the input array.

4. Gather Sorted Elements:

     After counting the occurrences of each value in the buckets, the algorithm reconstructs the sorted array. It iterates through the buckets in order and, for each non-empty bucket, adds the corresponding value back to the sorted array as many times as indicated by the count in the bucket. This process ensures that the values are added to the sorted array in ascending order.

5. Return Sorted Array: 

    Finally, the sorted array is returned as the result of the sortArray function.

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    vector<int> sortArray(vector<int>& nums) {
       // Find the minimum and maximum values in nums
        int min_val = *min_element(nums.begin(), nums.end());
        int max_val = *max_element(nums.begin(), nums.end());

        // Create buckets
        int bucket_range = max_val - min_val + 1;
        vector<int> buckets(bucket_range, 0);

        // Distribute elements into buckets
        for (int num : nums) {
            buckets[num - min_val]++;
        }

        // Gather sorted elements
        vector<int> sorted_array;
        for (int i = 0; i < bucket_range; ++i) {
            while (buckets[i] > 0) {
                sorted_array.push_back(i + min_val);
                buckets[i]--;
            }
        }

        return sorted_array;
    }
};

```

</TabItem>
</Tabs>


### Approach 2: Using Non Uniform Bucket Sizes


1. Find Minimum and Maximum Values:

     The first step is to find the minimum `(min_val)` and maximum `(max_val)` values in the input array nums. These values are needed to determine the range of values in the array.

2. Calculate Minimum Gap: 

    Calculate a minimum possible gap `(min_gap)` between two elements in the sorted array. This gap is determined by the range of values divided by the number of elements minus 1 `((max_val - min_val) / (n - 1))`. It ensures that the buckets are created based on the distribution of values.

3. Determine the Number of Buckets: 

    Calculate the number of buckets `(num_buckets)` by dividing the range of values `(max_val - min_val)` by the calculated min_gap. The +1 is added to ensure that the maximum value is included in a bucket.

4. Create and Initialize the Buckets: 

    Create an empty vector called buckets with a size equal to num_buckets. Each element of this vector will represent a bucket for storing numbers within a specific range.

5. Distribute Elements into Buckets: 

    Iterate through the elements of the input array nums. For each element num, calculate its position in the buckets vector by using the formula `(num - min_val) / min_gap`. This determines which bucket the element belongs to, considering its value and the min_gap. Add the element to the corresponding bucket.

6. Sort Individual Buckets: 

    For each bucket, sort its elements in ascending order. This ensures that elements within each bucket are correctly ordered.

7. Concatenate Sorted Buckets: 

    Iterate through the buckets vector in order and concatenate the sorted elements from each bucket into a single sorted_array.

8. Return Sorted Array: 
    After processing all buckets, the sorted_array will contain all elements from the input array nums sorted in ascending order. Return this sorted array as the result.


<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    vector<int> sortArray(vector<int>& nums) {
        int n = nums.size();
        int min_val = *min_element(nums.begin(), nums.end());
        int max_val = *max_element(nums.begin(), nums.end());

        // Calculate a minimum possible gap between two elements in the sorted array.
        double min_gap = max(1.0, static_cast<double>(max_val - min_val) / (n - 1));

        // Determine the number of buckets.
        int num_buckets = static_cast<int>((max_val - min_val) / min_gap) + 1;

        // Create and initialize the buckets.
        vector<vector<int>> buckets(num_buckets);

        // Distribute elements into buckets.
        for (int num : nums) {
            int bucket_index = static_cast<int>((num - min_val) / min_gap);
            buckets[bucket_index].push_back(num);
        }

        // Sort individual buckets and concatenate them.
        vector<int> sorted_array;
        for (int i = 0; i < num_buckets; ++i) {
            sort(buckets[i].begin(), buckets[i].end());
            for (int num : buckets[i]) {
                sorted_array.push_back(num);
            }
        }

        return sorted_array;
    }
};

```

</TabItem>
</Tabs>


Here, "n" is the number of elements in the input array 'nums' and "k" is the range of values in the array.

**Difference between above approaches:**  Uniform Bucket Sort uses fixed-size buckets suitable for uniformly distributed data, while Non-Uniform Bucket Sort adapts bucket sizes to handle data with varying value densities, making it more suitable for non-uniformly distributed data. The choice between them depends on the characteristics of the data being sorted.

## Example: [791 - Custom Sort String](https://leetcode.com/problems/custom-sort-string/)

> You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.

>Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before 
y in the permuted string.

>Return any permutation of s that satisfies this property.


1. Initialization:

    charCount is a vector of size 26, initialized with all elements set to 0. This vector will be used to count the occurrences of each character in the input string s.
    buckets is a vector of strings, also of size 26. Each string represents a bucket for a specific character in the custom order order.

2. Counting Occurrences:

    The code begins by iterating through the characters in the input string s.
    For each character c in s, it increments the count in the charCount vector at the corresponding index. For example, if c is 'a', it increments charCount[0] because 'a' corresponds to index 0.
3. Distribute Characters into Buckets:

    The next step is to distribute characters from s into their respective buckets based on the custom order order.
    It iterates through the characters in order. For each character c in order, it calculates its index in the buckets vector (e.g., 'a' maps to index 0).
    It appends c to the corresponding bucket as many times as its count in the charCount vector. This effectively sorts the characters within each bucket according to their counts.

4. Resetting Character Counts:

    After distributing characters into buckets, it resets the character count in the charCount vector to 0. This is done to ensure that any characters not present in order are not added again in the next step.

5. Concatenating Buckets:

    After processing all characters in order, the code concatenates the characters from all the buckets.
    It appends the characters in the order specified by order, ensuring that characters are arranged as per the custom order.
    Any characters not present in order are included in their original order at the end.
    
6. Return Result:

    The final sorted string is stored in the result variable and is returned as the output of the function.

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    string customSortString(string order, string s) {
        vector<int> charCount(26, 0); // Count of each character
        vector<string> buckets(26);   // Buckets for each character in order
        
        // Count occurrences of each character in string s
        for (char c : s) {
            charCount[c - 'a']++;
        }
        
        // Distribute characters into buckets based on custom order
        for (char c : order) {
            int index = c - 'a';
            buckets[index].append(charCount[index], c); // Append 'c' 'charCount' times
            charCount[index] = 0; // Reset count
        }
        
        // Append remaining characters (not in custom order) to result
        string result;
        for (int i = 0; i < 26; i++) {
            result += buckets[i];
        }
        
        return result;
    }
};

```

</TabItem>
</Tabs>



Bucket Sort is useful for sorting when the input data is uniformly distributed across a range of values.

export const suggestedProblems = [
      {
          "problemName": "451. Sort Characters By Frequency",
          "difficulty": "Medium",
          "leetCodeLink": "https://leetcode.com/problems/sort-characters-by-frequency/",
          "solutionLink": "../../../solutions/0400-0499/sort-characters-by-frequency-medium"
      },
      {
          "problemName": "164. Maximum Gap",
          "difficulty": "Medium",
          "leetCodeLink": "https://leetcode.com/problems/maximum-gap/",
          "solutionLink": "../../../solutions/0100-0199/maximum-gap-medium"
      },
      {
          "problemName": "220. Contains Duplicate III",
          "difficulty": "Hard",
          "leetCodeLink": "https://leetcode.com/problems/contains-duplicate-iii/",
          "solutionLink": "../../../solutions/0200-0299/contains-duplicate-iii-hard"
      },
]

<Table title="Suggested Problems" data={suggestedProblems} />
