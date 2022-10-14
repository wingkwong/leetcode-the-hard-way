## Connected Components <br> 
In a graph, sometimes all nodes might not be connected with each other. Let's take an example of a graph with 5 nodes-

![image](https://user-images.githubusercontent.com/89146189/195824494-2476426d-1f1b-4079-b098-b7db371c5cef.png)

Here you can see that 1-2-3 are connected and 4-5 are connected. <br>
Here , 1-2-3 is called one connected component.

## How to determine if a connected component is present ?
1. Start a BFS or DFS from any node of the graph.
2. If you are able to visit all the other nodes from that single node that means the all nodes in the graph are connected.
3. If you are unable to reach a particular node or a group of nodes, then that group of nodes might be a different connected component.

## How to find connected components?
1. Let's an adjacency list based graph is given.
2. Traverse the adjacency list and for every node do a BFS or DFS on the node and mark all the nodes you visit in this way as visited.
3. While traversing the list do not do BFS on the nodes which have already been visited.
4. Hence everytime you do a BFS/DFS you are traversing a connected component so you can count the number of times you do a BFS/DFS.

## Sample question:
https://leetcode.com/problems/number-of-provinces/

Solution:
class Solution {
    
    //bfs function
    public void bfs(int isConnected[][],int visited[],int node){
 
        Queue<Integer> q=new LinkedList<>();
        q.offer(node);
        
        while(!q.isEmpty()){
            int current=q.poll();
            visited[current]=1;
            
           for(int i=0;i<isConnected[0].length;i++){
               if(isConnected[current][i]!=0 && visited[i]!=1){
                   q.offer(i);
                   visited[i]=1;
               }
           }
        }
        
        
    }
    
    public int findCircleNum(int[][] isConnected) {
        
        int i,j,provincecount=0;
        int visited[]=new int[isConnected.length];
        
        
        //traverse through the adjacency array
        for(i=0;i<isConnected.length;i++){
            
            if(visited[i]==1){
                continue;
            }
            for(j=0;j<isConnected[0].length;j++){
                
                //if not visited and is connected
                if(visited[j]==0 && isConnected[i][j]==1){
                    //everytime u do a bfs u complete one connected component
                     bfs(isConnected,visited,j);
                    provincecount++;
                }
               
            }
        }
        
        return provincecount;
    }
}

## Similar problems on leetcode:
1. Number of Islands - https://leetcode.com/problems/number-of-islands/
2. Number of Connected Components- https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/

