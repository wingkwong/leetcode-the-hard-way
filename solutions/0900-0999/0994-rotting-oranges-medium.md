<!-- Question goes here -->

## Approach 1: Breadth First Search

<!-- Intuition -->
The line "any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten." hints towards a very efficient Breadth First Search based solution as BFS algorithm also first visits the immediate neighbours of any given node. The code is provided below.

<Tabs>
<TabItem value="py" label="Python">
<SolutionAuthor name="@pranathi_kodich"/>

```py
from collections import deque

class Solution:
    def isSafe(self, x, y, m, n): # checks for the boundry conditions
        return x >= 0 and x < m and y >= 0 and y < n
    
    def orangesRotting(self, grid: List[List[int]]) -> int:
        q = deque()
        m = len(grid)
        n = len(grid[0])
        
        # indicates the number of fresh oranges remaining
        fresh = 0 
        
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 2:
                    # adding all the initially rotten oranges to the queue
                    q.append((i, j)) 
                elif grid[i][j] == 1:
                    # finding the number of fresh oranges initially
                    fresh += 1 

        #list has the x_shift, y_shift required to move in all 4 directions (Left, Right, Up, Down). For eg: If current position is 0, 0, to move to the cell on the right I need to shift 1 unit in +ve x direction and 0 units in the y direction. 
        dirs = [(-1, 0), (1, 0), (0, 1), (0, -1)] 

        # the required answer
        time_elapsed = 0

        # There are 2 possibe outcomes - either all oranges become rotton or some of them still remain fresh and we have visited all cells. Checking both conditions.
        while fresh and len(q):

            # each cycle of BFS corresponds to one minute as per the question 
            time_elapsed += 1 

            for i in range(len(q)):
                curr_x, curr_y = q.popleft()

                # considering all 4 directions
                for j in dirs: 
                    # calculating new coordinates
                    new_x, new_y = curr_x + j[0], curr_y + j[1]

                    # checking boundry conditions
                    if self.isSafe(new_x, new_y, m, n): 
                        if grid[new_x][new_y] == 1:
                            # changing fresh to rotten if initially fresh
                            grid[new_x][new_y] = 2 

                            # adding the rotten orange to queue as it can rot other oranges in next iteration
                            q.append((new_x, new_y))

                             # updating count of remaining fresh fruit 
                            fresh -= 1
        
         # as per question, if some fresh oranges remain, return -1
        if fresh > 0:
            return -1
        
        # if all oranges have rotten, returning the time taken
        else: 
            return time_elapsed
                        
```

</TabItem>
</Tabs>
