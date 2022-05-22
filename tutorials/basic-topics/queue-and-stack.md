---
title: 'Queue & Stack'
description: 'Author: @heiheihang'
# hide_table_of_contents: true
---

> This tutorial is written by @heiheihang

### Stack

Stack is the data structure The first item that comes in will be the first to go out. Let's look at this question ([LeetCode Link](https://leetcode.com/problems/valid-parentheses/))

> Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.
>
> An input string is valid if:
>
> 1. Open brackets must be closed by the same type of brackets.
> 2. Open brackets must be closed in the correct order.

To validate a string of parentheses is valid, we must have a corresponding opening bracket when we see a closing bracket. Lets look at some examples:

```python
valid_string_1 = "([])"
```

We can process the string in the following way:

```python
#1st character from valid_string_1
valid_string_1_step_1 = ["("] 
```

We have the first character first. We do not need to do anything if it is an opening bracket.

```python
#2nd character from valid_string_1
valid_string_1_step_2 = ["(", "["] 
```

We have the second character now. Again, we do not need to do anything if it is an opening bracket.

```python
#3rd character from valid_string_1 
valid_string_1_step_3a = ["(", "[", "]"] 
```

Here, we see a matching pair `"["` and `"]"`, so we can cancel them out.

```python
#3rd character from valid_string_1 (removing valid pair)
valid_string_1_step_3b = ["("] 
```

We have removed the two last seen elements form the stack.

```python
#4th character from valid_string_1 (after removing 2nd and 3rd)
valid_string_1_step_4a = ["(", ")"] 
```

After adding the fourth character, we see a matching pair between the 1st character and the 4th character. We can remove it now.

```python
#4th character from valid_string_1 (after removing 1st and 4th)
valid_string_1_step_4a = [] 
```

With no more character to process and with an empty stack, we know that there are no remaining opening and closing brackets. Hence, we can validate this string.

Now let's look at a counter example:

```python
invalid_string_1 = "[()}"
```

Similar to the scenario above, we can skip the first two characters and have:

```python
invalid_string_1_step3a = ["[", "(", ")"]
```

We see a matching pair in the 2nd character and the 3rd character, so we can remove them.

```python
invalid_string_1_step3b = ["["]
```

Now we look at the 4th character:

```python
invalid_string_1_step4 = ["[", "}"]
```

We have a closing bracket, and it is not matching its corresponding opening bracket (`"{"`), so we know that this string is invalid.

Are you able to code the solution out after looking at these two examples?

```python
class Solution:
    def isValid(self, s: str) -> bool:
        
        #we use a stack to keep track of brackets
        stack = []
        
        #iterate the characters in the string
        for c in s:
        
            #we store the character in the stack if it is an opening bracket
            if(c == "(" or c == "[" or c == "{"):
                stack.append(c)
                
            #we check if there is a matching opening bracket 
            #when we see a closing bracket
            elif(c == ")"):
                if(len(stack) == 0 or stack[-1] != "("):
                    return False
                else:
                    stack.pop()
                    
            #we check if there is a matching opening bracket 
            #when we see a closing bracket
            elif(c == "]"):
                if(len(stack) == 0 or stack[-1] != "["):
                    return False
                else:
                    stack.pop()
                    
            #we check if there is a matching opening bracket 
            #when we see a closing bracket
            elif(c == "}"):
                if(len(stack) == 0 or stack[-1] != "{"):
                    return False
                else:
                    stack.pop()
                    
        #if the stack is not empty, there are some unmatched opening brackets
        #this suggests it is not valid
        if(len(stack) != 0):
            return False
        return True
```

### Queue

Queue is the data structure that is First-In-First-Out. The first person who enters the queue should be the first person to leave the queue.

We can look at the following problem ([LeetCode Link](https://leetcode.com/problems/time-needed-to-buy-tickets/))

As the problem statement and examples are quite long, we kindly ask you to read them on LeetCode.

To implement a Queue, we must have a data structure that handles adding element on the left in $$O(1)$$ \_\_ time. These are the options in different languages:

* Python: `queue = deque([]) # queue.appendleft(x) , queue.pop()`
* C++: `queue<int> q; // q.push(x), q.pop()`

We can use these data structures to simulate this problem

```python
class Solution:
    def timeRequiredToBuy(self, tickets: List[int], k: int) -> int:
        
        
        queue = deque([])
        
        #we initialize the queue first
        #as we need to keep track of the kth person, we add the index as well
        for i in range(len(tickets)):
            ticket_needed = tickets[i]
            queue.appendleft([i,ticket_needed])
        
        #keep track of overall time
        time = 0
        
        #we continue until queue is empty
        while(queue):
            
            #each person spends one second for purchase
            time += 1

            #access the first person and her ticket needed from the queue
            first_person_in_queue, tickets_remaining = queue[-1]
            
            #the first person buys one ticket , so she needs one less ticket
            tickets_remaining -= 1
            
            #we remove the first person from the queue
            queue.pop()
            
            #if the first person still needs to buy more tickets, we move her back to the end of the queue
            if(tickets_remaining != 0):
                queue.appendleft([first_person_in_queue, tickets_remaining])
            #if the first person is the target and she has bought all the tickets, we return the time
            else:
                if(first_person_in_queue == k):
                    return time
            
        return time
```

### Suggested Problems

* [0155 - Min Stack (Easy)](../../solutions/0100-0199/min-stack-easy) [(LeetCode Link)](https://leetcode.com/problems/min-stack/)
* [0496 - Next Greater Element I (Easy)](../../solutions/0400-0499/next-greater-element-i-easy) [(LeetCode Link)](https://leetcode.com/problems/next-greater-element-i/)
* [1475 - Final Prices With a Special Discount in a Shop (Easy)](../../solutions/1400-1499/final-prices-with-a-special-discount-in-a-shop-easy) ([LeetCode Link](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/))
