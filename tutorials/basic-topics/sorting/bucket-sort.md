# The Bucket Sort Algorithm

Bucket sort, sometimes known as bin sort, is a sorting algorithm that divides an array's items into a number of buckets. The next step is to sort each bucket separately, either by employing a different sorting method or by repeatedly utilising the bucket sorting technique. In the most-to-least significant digit flavour, it is a distribution sort, a generalisation of pigeonhole sort, and a relative of radix sort. Since comparisons can be used to implement bucket sort, it can also be categorised as a comparison sort algorithm. The number of buckets to employ, the algorithm used to sort each bucket, and whether or not the input is distributed uniformly all affect how hard the computation is.

## Characteristics

- Uses hashing
- Makes assumptions about the data, like radix and counting sort
- Because it makes assumptions, can sort in O(n) time
- Performs best when hashed values of items being sorted are evenly distributed, so there aren't many collisions 
- Not in-place
- Stability will depend on sort algorithm used to sort the buckets - ideally, you want a stable sort
- Insertion sort is often used to sort the buckets, because it is fast when the number of items is small

## Time complexity

Worst-case performance: O(n^2)<br>
Average performance: O(n + n^2 / k + k), where k is the number of buckets. O(n), when k ~ n<br>
Worst-case space complexity: O(n * k)

## Implementation

* Distribute the items into buckets based on their hashed values (scattering phase)
* Sort the items in each bucket 
* Merge the buckets - can just concatenate them (gathering phase)

A generalization of counting sort

The values in bucket X must be greater than the values in bucket X - 1 and less than the values in bucket X + 1  

This means that the hash function we use must meet this requirement

```java
static int[] sort(final int[] in) {
    final List<Integer>[] buckets = new List[10];
    for (var i = 0; i < buckets.length; i++) {
        // using linked lists for the buckets
           // buckets[i] = new LinkedList<Integer>();

           // using arraylists as the buckets
           buckets[i] = new ArrayList<>();
    }

    for (var item : in) {
        buckets[hash(item)].add(item);
    }

    for (final var bucket : buckets) {
        Collections.sort(bucket);
    }

    var j = 0;
    for (final var bucket : buckets) {
        for (final var value : bucket) {
            in[j++] = value;
        }
    }

    return in;
}

private static int hash(final int value) {
    return value / 10;
}
```

## Links

* [Bucket Sort Algorithm](https://en.wikipedia.org/wiki/Bucket_sort)
