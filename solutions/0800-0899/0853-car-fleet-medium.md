---
description: "Author: @ColeB2 | https://leetcode.com/problems/car-fleet/"
tags: [Array, Stack, Sorting, Monotonic Stack]
---

# 0853 - Car Fleet (Medium)

## Problem Link

https://leetcode.com/problems/car-fleet/

## Problem Statement

There are `n` cars going to the same destination along a one-lane road. The destination is `target` miles away.

You are given two integer array `position` and `speed`, both of length `n`, where `position[i]` is the position of the `ith` car and `speed[i]` is the speed of the `ith` car (in miles per hour).

A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper **at the same speed**. The faster car will **slow down** to match the slower car's speed. The distance between these two cars is ignored (i.e., they are assumed to have the same position).

A **car fleet** is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.

If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.

Return _the **number of car** fleets that will arrive at the destination_.

**Example 1:**

```
Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
Output: 3
Explanation:
The cars starting at 10 (speed 2) and 8 (speed 4) become a fleet, meeting each other at 12.
The car starting at 0 does not catch up to any other car, so it is a fleet by itself.
The cars starting at 5 (speed 1) and 3 (speed 3) become a fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.
Note that no other cars meet these fleets before the destination, so the answer is 3.
```

**Example 2:**

```
Input: target = 10, position = [3], speed = [3]
Output: 1
Explanation: There is only one car, hence there is only one fleet.
```

**Example 3:**

```
Input: target = 100, position = [0,2,4], speed = [4,2,1]
Output: 1
Explanation:
The cars starting at 0 (speed 4) and 2 (speed 2) become a fleet, meeting each other at 4. The fleet moves at speed 2.
Then, the fleet (speed 2) and the car starting at 4 (speed 1) become one fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.
```

**Constraints:**

- `n == position.length == speed.length`
- `1 <= n <= 10^5`
- `0 < target <= 10^6`
- `0 <= position[i] < target`
- All the values of `position` are unique.
- `0 < speed[i] <= 10^6`


## Approach 1: Monotonic Stack

We are given a bunch of cars, on the same road, starting at different positions, going at different speeds, all trying to reach the same destination. Know this we are trying to figure out, how many groups, or fleets will reach the destination. Meaning some cars are going to have to slow down and follow bumper-to-bumper for some of their drive to the destination. Knowing that we are going to solve this using 2 main steps.

1. We are going to have to get the position, and speed of each car, in sorted order. We need to know the position because a faster car, stuck behind a slower car, can't pass.

2. Knowing their position, we can use a monotonic decreasing stack and a little math to find out how many fleets will cross the finish line. 

A quick refresher, a monotonic decreasing stack, is a stack, where every item inside the stack is going to be ordered by largest, to smallest. In our case, we are going to use a little math to order the items in our stack from largest to smallest based on the lead car of a fleet's time to reach the destination. We don't care about cars stuck behind the fleet, just about when the lead car is going to finish.

We can calculate a car's time to finish, by taking the `target` distance, minus the car's `position` and dividing it by the car's `speed`.

$$time = (target - position) / speed$$

So while looping through a sorted list of cars based on position, we can solve for each car's $$time$$ to finish and check to see if the car's $$time$$ of the car we want to add onto our stack is $$>=$$ to the car's $$time$$ on top of the stack. While that is true, we can pop the cars from the stack, as we have a new fleet leader, and eventually add the car to the stack when our condition is met.

When we finish, our stack will be filled with the lead car of all the fleets, finishing $$time$$. So we can return the length of our stack to answer our question.

Time Complexity: $$O(nlogn)$$. The time of this will be dominated by the sorting, the creation of our cars array, and looping through it will take $$O(n)$$, but we still need to sort it.

Space Complexity: $$O(n)$$. We need to create an array, cars, and a stack.


<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        # Here we will utilize a monotonic decreasing stack, meaning everything
        # in the stack will be ordered by a car fleet's leading car's 
        # "time to destination". This means, any element, with a time larger/slower
        # than the top of our stack, will force us to remove the faster/smaller times
        # until the incoming car is no longer slower than the top.
        # First we initialize an array, cars. We do this by zipping together
        # the position and speed of our cars - zip(position, speed)
        # then sorting the array of tuples, python will sort by the first value
        # first, and second value for ties. Since the question doesn't have cars
        # starting at the same position, we will only have cars ordered by position. 
        cars = sorted(zip(position,speed))
        stack = []
        # Loop through every car in cars.
        for car in cars:
            # get the position and speed of the car
            pos, spe = car[0], car[1]
            # calculate time to finish
            time = (target-pos) / spe
            # Check, if the incoming cars time to finish, is >= top of the stack
            # we can pop that car, as we have a new fleet leader.
            while stack and stack[-1] <= time:
                stack.pop()
            # No longer have cars to pop, we can add our car to the stack as the
            # new fleet leader.
            stack.append(time)
        # return the length of the stack, which will be the number of fleet
        # leaders inside our stack.
        return len(stack)
```

</TabItem>
</Tabs>


## Approach 2: Reverse Sorting

Similar to approach 1, we will need a cars array, but by sorting it in reverse order, and instead, tracking the time to complete of the last fleet of cars, and number of car fleets, we can remove the need to use a stack.

This works, by checking the incoming car's $$time$$ to finish, with a variable $$last\_time$$ which tracks the time of the fleet that is going to finish next. If incoming cars $$time$$ to finish is greater, that means it is going to take longer to finish than the fleet ahead of it. If it is less than $$last\_time$$ that means it is going to catch the fleet before it finishes. In that case we do nothing, as we already counted the fleet it is going to catch.


Time Complexity: $$O(nlogn)$$. The time of this will still be dominated by the sorting, and we also need to create a cars array and loop through it in $$O(n)$$.

Space Complexity: $$O(n)$$. We still need a cars array, but no longer need a stack, which will be a slight improvement in space requirements.


<Tabs>
<TabItem value="python" label="Python">
<SolutionAuthor name="@ColeB2"/>

```py
class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        # Start by creating a cars array. We will do it by zipping together
        # the position and speed arrays, then sorting it, setting reverse to true
        # to get the cars in reverse sorted order. This means the cars closest to
        # the destination will be first, and the cars further away from the
        # destination be last.
        cars = sorted(zip(position,speed), reverse=True)
        # Here we will track the time of last car to cross destination. By
        # initializing it to 0, we assure that the first car's time will be 
        # greater than it, triggering our count of fleets to increment by one.
        last_time = 0
        # track number of car fleets
        car_fleets = 0
        # loop through each car, starting from cars closest to the finish line.
        for car in cars:
            # get position and speed of the car.
            pos, spe = car[0], car[1]
            # calculate the time it takes to finish. 
            time = (target-pos) / spe
            # Check, if the time the car is going to finish is greater. There are
            # 2 conditions here.
            # 1. It is greater, that means that the last car fleet finished before
            # this car so it will be apart of a different fleet.
            # 2. It is less than, thats means it will catch up with the fleets,
            # We are only tracking car fleets, by leader, so we do nothing here.
            if time > last_time:
                # Condition 1, last fleet finished before the car could catch it.
                # So we update last_time to match time of current car, which will
                # be our next fleet leader.
                last_time = time
                # increment the number of fleets as we are creating a new fleet
                # with this car being slower than the last.
                car_fleets += 1
        return car_fleets
```

</TabItem>
</Tabs>

