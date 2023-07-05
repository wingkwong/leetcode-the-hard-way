"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[39156],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,m=d["".concat(l,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(m,s(s({ref:t},h),{},{components:n})):a.createElement(m,s({ref:t},h))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/shortest-path-visiting-all-nodes/"},s="0847 - Shortest Path Visiting All Nodes (Hard)",o={unversionedId:"0800-0899/shortest-path-visiting-all-nodes-hard",id:"0800-0899/shortest-path-visiting-all-nodes-hard",title:"0847 - Shortest Path Visiting All Nodes (Hard)",description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/shortest-path-visiting-all-nodes/",source:"@site/solutions/0800-0899/0847-shortest-path-visiting-all-nodes-hard.md",sourceDirName:"0800-0899",slug:"/0800-0899/shortest-path-visiting-all-nodes-hard",permalink:"/solutions/0800-0899/shortest-path-visiting-all-nodes-hard",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0800-0899/0847-shortest-path-visiting-all-nodes-hard.md",tags:[],version:"current",sidebarPosition:847,frontMatter:{description:"Author: @heiheihang, @wingkwong | https://leetcode.com/problems/shortest-path-visiting-all-nodes/"},sidebar:"tutorialSidebar",previous:{title:"0846 - Hand of Straights (Medium)",permalink:"/solutions/0800-0899/hand-of-straights-medium"},next:{title:"0852 - Peak Index in a Mountain Array (Easy)",permalink:"/solutions/0800-0899/peak-index-in-a-mountain-array-easy"}},l={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: BFS",id:"approach-1-bfs",level:2},{value:"Approach 2: Floyd-Warshall &amp; TSP",id:"approach-2-floyd-warshall--tsp",level:2}],h=(d="SolutionAuthor",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var d;const c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0847---shortest-path-visiting-all-nodes-hard"},"0847 - Shortest Path Visiting All Nodes (Hard)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/shortest-path-visiting-all-nodes/"},"https://leetcode.com/problems/shortest-path-visiting-all-nodes/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"You have an undirected, connected graph of ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," nodes labeled from ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"n - 1"),". You are given an array ",(0,i.kt)("inlineCode",{parentName:"p"},"graph")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"graph[i]")," is a list of all the nodes connected with node ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," by an edge."),(0,i.kt)("p",null,"Return ",(0,i.kt)("em",{parentName:"p"},"the length of the shortest path that visits every node"),". You may start and stop at any node, you may revisit nodes multiple times, and you may reuse edges."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/05/12/shortest1-graph.jpg",alt:null})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: graph = [[1,2,3],[0],[0],[0]]\nOutput: 4\nExplanation: One possible path is [1,0,2,0,3]\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/05/12/shortest2-graph.jpg",alt:null})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: graph = [[1],[0,2,4],[1,3,4],[2],[1,2]]\nOutput: 4\nExplanation: One possible path is [0,1,4,2,3]\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"n == graph.length")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= n <= 12")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= graph[i].length < n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"graph[i]")," does not contain ",(0,i.kt)("inlineCode",{parentName:"li"},"i"),"."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"graph[a]")," contains ",(0,i.kt)("inlineCode",{parentName:"li"},"b"),", then ",(0,i.kt)("inlineCode",{parentName:"li"},"graph[b]")," contains ",(0,i.kt)("inlineCode",{parentName:"li"},"a"),"."),(0,i.kt)("li",{parentName:"ul"},"The input graph is always connected.")),(0,i.kt)("h2",{id:"approach-1-bfs"},"Approach 1: BFS"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This approach is prepared by @heiheihang.")),(0,i.kt)("p",null,"There are two key observations in this question"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We can use a bitmask to represent visited nodes as there are at most 12 nodes"),(0,i.kt)("li",{parentName:"ul"},"We should use BFS as we want to find the shortest path that visits all nodes")),(0,i.kt)("p",null,"We then need to figure out how to keep track of duplication. We can simply store the (currentNode, visitedBitMask) tuple in a set to prevent duplication."),(0,i.kt)("p",null,"We can start at any node in the graph initially, and we should update the bitmask accordingly."),(0,i.kt)(h,{name:"@heiheihang",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def shortestPathLength(self, graph: List[List[int]]) -> int:\n        \n        #a visited set to prevent duplication\n        visited = set()\n        \n        #number of nodes in the graph\n        n = len(graph)\n        \n        #we want to visit all nodes (1111...1111)\n        target = (1 << n) - 1\n        \n        #a level set to keep the states at the current depth\n        level = set()\n        \n        #we can start at any node initially\n        for i in range(n):\n            level.add((i, 1 << i))\n        \n        #keep track of the distance of the path\n        depth = 0\n        \n        while(level):\n            \n            #store the states in the next level\n            new_level = set()\n            \n            for node, mask in level:\n    \n                #continue if state is visited before\n                if (node,mask) in visited:\n                    continue\n                \n                #return depth if all nodes have been visited\n                if(mask == target):\n                    return depth\n                \n                #add the current state to visited\n                visited.add((node,mask))\n                \n                #add the visiting neighbour state to the next level\n                for neighbour in graph[node]:\n                    new_level.add((neighbour, mask | (1 << neighbour)))\n            \n            #go to the next level\n            level = new_level\n            \n            #increase distance by 1\n            depth += 1\n        \n        #should never reach here\n        return -1\n")),(0,i.kt)("h2",{id:"approach-2-floyd-warshall--tsp"},"Approach 2: Floyd-Warshall & TSP"),(0,i.kt)("p",null,"Since $$n$$ is small, we can use Floyd\u2013Warshall algorithm to calculate the shortest distances between all pairs of nodes in $$O(n ^ 3)$$. Let $$d","[i][j]","$$ be the distance between node $$i$$ and node $$j$$. First we initialise each distance to be infinity or a large number. Then for each edge, we can set the weight (i.e. distance in this case) to $$0$$ if $$i$$ is same as $$j$$, else we can build $$d$$ based on the input."),(0,i.kt)("p",null,"Then, we use the below recursive formula to calculate the shortest distances. For details, please check out ",(0,i.kt)("a",{parentName:"p",href:"https://cp-algorithms.com/graph/all-pair-shortest-path-floyd-warshall.html"},"Floyd-Warshall Algorithm"),".$$shortestPath(i, j, k) = min(shortestPath(i, j, k - 1), shortestPath(i, k, k - 1) + shortestPath(k, j, k - 1))$$"),(0,i.kt)("p",null,"What's left is similar to TSP, which is Traveling Salesman Problem. Given a set of nodes and weight between every pair, what is the shortest possible path that visits all nodes exactly once and returns to the starting point? The only difference is that a node is allowed to be visited multiple times and the starting point and the ending point may not be same."),(0,i.kt)("p",null,"Let $$dp","[i][mask]","$$ be the shortest distances with visited nodes (marked as $$1$$ in $$mask$$) from the starting point $$i$$. In our function, first we check if $$dp","[src][mask]","$$ has been calculated before. If so, we can return it immediately. Otherwise, let's set this node in $$mask$$ and compare it with the target mask, which is $$(1 << n) - 1$$, i.e. all 1s with $$n$$ digits. If it matches with target mask, that means we visited all the nodes. Hence, we return $$0$$. Otherwise, we look for the next possible node to visit and calculate the distances recursively. At the end, we memoize the shortest distance at the current state and return it."),(0,i.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func min(x, y int) int {\n    if x < y {\n        return x\n    }\n    return y\n}\n\n// Traveling Salesman Problem (TSP)\nfunc tsp(mask int, src int, n int, d [][]int, dp [][]int) int {\n    // if dp[src][mask] has been calculated before\n    // then just return it\n    if dp[src][mask] != -1 {\n        return dp[src][mask]\n    }\n    // mark src visited\n    now := mask | (1 << src)\n    // the dest is all 1s - meaning all nodes have been visited\n    dest := (1 << n) - 1\n    // if we viste all nodes, then return 0\n    if now == dest {\n        return 0\n    }\n    // init mi as a large number\n    mi := 10000000\n    for i := 0; i < n; i++ {\n        // check for the next possible node to move\n        if ((mask & (1 << i)) == 0) {\n            // the distance from node src to node i \n            // plus the shortest distance starting from node i\n            mi = min(mi, d[src][i] + tsp(now, i, n, d, dp))\n        }\n    }\n    // memoize the shortest distance\n    dp[src][mask] = mi\n    return dp[src][mask]\n}\n\nfunc shortestPathLength(graph [][]int) int {\n    n := len(graph)\n    // use floyd-warshall algo to calcuate the shortest distances \n    // between all pairs of nodes\n    // d[i][j]: shortest distance between node i and node j\n    d := make([][]int, 1 << n)\n    // preparing initial d\n    for i := 0; i < n; i++ {\n        d[i] = make([]int, n)\n        for j := 0; j < n; j++ {\n            // set the initial weight (distance) to a large number / inf\n            d[i][j] = 10000000\n        }\n    }\n    for i := 0; i < n; i++ {\n        // if source is same as dest, then the shortest distance is 0\n        d[i][i] = 0\n        for _, j := range graph[i] {\n            // iterate the input to build the distances for each pair\n            d[i][j] = 1\n        }\n    }\n    // recusively calculate the shortest distances\n    for k := 0; k < n; k++ {\n        for i := 0; i < n; i++ {\n            for j := 0; j < n; j++ {\n                d[i][j] = min(d[i][j], d[i][k] + d[k][j])\n            }\n        }\n    }\n    // preparing dp for TSP\n    dp := make([][]int, n)\n    for i := 0; i < n; i++ {\n        dp[i] = make([]int, 1 << n)\n        for j := 0; j < (1 << n); j++ {\n            dp[i][j] = -1\n        }\n    }\n    ans := 10000000\n    for i := 0; i < n; i++ {\n        // try each i as starting node\n        // to find out the min distance\n        ans = min(ans, tsp(1 << i, i, n, d, dp))\n    }\n    return ans\n }\n")))}m.isMDXComponent=!0}}]);