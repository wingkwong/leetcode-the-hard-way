"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[1677],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=l(n),h=i,u=d["".concat(s,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(u,o(o({ref:t},m),{},{components:n})):r.createElement(u,o({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68864:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=n(8539),p=["components"],s={description:"Author: @wingkwong | https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/"},l="2146 - K Highest Ranked Items Within a Price Range (Medium)",m={unversionedId:"2100-2199/k-highest-ranked-items-within-a-price-range-medium",id:"2100-2199/k-highest-ranked-items-within-a-price-range-medium",title:"2146 - K Highest Ranked Items Within a Price Range (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/",source:"@site/solutions/2100-2199/2146-k-highest-ranked-items-within-a-price-range-medium.md",sourceDirName:"2100-2199",slug:"/2100-2199/k-highest-ranked-items-within-a-price-range-medium",permalink:"/leetcode-the-hard-way/solutions/2100-2199/k-highest-ranked-items-within-a-price-range-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2146-k-highest-ranked-items-within-a-price-range-medium.md",tags:[],version:"current",sidebarPosition:2146,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/"},sidebar:"tutorialSidebar",previous:{title:"2145 - Count the Hidden Sequences (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/count-the-hidden-sequences-medium"},next:{title:"2147 - Number of Ways to Divide a Long Corridor (Hard)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/number-of-ways-to-divide-a-long-corridor-hard"}},c={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: BFS",id:"approach-1-bfs",level:2}],h={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2146---k-highest-ranked-items-within-a-price-range-medium"},"2146 - K Highest Ranked Items Within a Price Range (Medium)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/"},"https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"You are given a ",(0,a.kt)("strong",{parentName:"p"},"0-indexed")," 2D integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"grid")," of size ",(0,a.kt)("inlineCode",{parentName:"p"},"m x n")," that represents a map of the items in a shop. The integers in the grid represent the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0")," represents a wall that you cannot pass through."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1")," represents an empty cell that you can freely move to and from."),(0,a.kt)("li",{parentName:"ul"},"All other positive integers represent the price of an item in that cell. You may also freely move to and from these item cells.")),(0,a.kt)("p",null,"It takes ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," step to travel between adjacent grid cells."),(0,a.kt)("p",null,"You are also given integer arrays ",(0,a.kt)("inlineCode",{parentName:"p"},"pricing")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"pricing = [low, high]")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"start = [row, col]")," indicates that you start at the position ",(0,a.kt)("inlineCode",{parentName:"p"},"(row, col)")," and are interested only in items with a price in the range of ",(0,a.kt)("inlineCode",{parentName:"p"},"[low, high]")," (",(0,a.kt)("strong",{parentName:"p"},"inclusive"),"). You are further given an integer ",(0,a.kt)("inlineCode",{parentName:"p"},"k"),"."),(0,a.kt)("p",null,"You are interested in the ",(0,a.kt)("strong",{parentName:"p"},"positions")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," ",(0,a.kt)("strong",{parentName:"p"},"highest-ranked")," items whose prices are ",(0,a.kt)("strong",{parentName:"p"},"within")," the given price range. The rank is determined by the ",(0,a.kt)("strong",{parentName:"p"},"first")," of these criteria that is different:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Distance, defined as the length of the shortest path from the ",(0,a.kt)("inlineCode",{parentName:"li"},"start")," (",(0,a.kt)("strong",{parentName:"li"},"shorter")," distance has a higher rank)."),(0,a.kt)("li",{parentName:"ol"},"Price (",(0,a.kt)("strong",{parentName:"li"},"lower")," price has a higher rank, but it must be ",(0,a.kt)("strong",{parentName:"li"},"in the price range"),")."),(0,a.kt)("li",{parentName:"ol"},"The row number (",(0,a.kt)("strong",{parentName:"li"},"smaller")," row number has a higher rank)."),(0,a.kt)("li",{parentName:"ol"},"The column number (",(0,a.kt)("strong",{parentName:"li"},"smaller")," column number has a higher rank).")),(0,a.kt)("p",null,"Return ",(0,a.kt)("em",{parentName:"p"},"the")," ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," ",(0,a.kt)("em",{parentName:"p"},"highest-ranked items within the price range ",(0,a.kt)("strong",{parentName:"em"},"sorted")," by their rank (highest to lowest)"),". If there are fewer than ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," reachable items within the price range, return ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"all")," of them"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/12/16/example1drawio.png",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: grid = [[1,2,0,1],[1,3,0,1],[0,2,5,1]], pricing = [2,5], start = [0,0], k = 3\nOutput: [[0,1],[1,1],[2,1]]\nExplanation: You start at (0,0).\nWith a price range of [2,5], we can take items from (0,1), (1,1), (2,1) and (2,2).\nThe ranks of these items are:\n- (0,1) with distance 1\n- (1,1) with distance 2\n- (2,1) with distance 3\n- (2,2) with distance 4\nThus, the 3 highest ranked items in the price range are (0,1), (1,1), and (2,1).\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/12/16/example2drawio1.png",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: grid = [[1,2,0,1],[1,3,3,1],[0,2,5,1]], pricing = [2,3], start = [2,3], k = 2\nOutput: [[2,1],[1,2]]\nExplanation: You start at (2,3).\nWith a price range of [2,3], we can take items from (0,1), (1,1), (1,2) and (2,1).\nThe ranks of these items are:\n- (2,1) with distance 2, price 2\n- (1,2) with distance 2, price 3\n- (1,1) with distance 3\n- (0,1) with distance 4\nThus, the 2 highest ranked items in the price range are (2,1) and (1,2).\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/12/30/example3.png",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: grid = [[1,1,1],[0,0,1],[2,3,4]], pricing = [2,3], start = [0,0], k = 3\nOutput: [[2,1],[2,0]]\nExplanation: You start at (0,0).\nWith a price range of [2,3], we can take items from (2,0) and (2,1). \nThe ranks of these items are: \n- (2,1) with distance 5\n- (2,0) with distance 6\nThus, the 2 highest ranked items in the price range are (2,1) and (2,0). \nNote that k = 3 but there are only 2 reachable items within the price range.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"m == grid.length")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"n == grid[i].length")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= m, n <= 10^5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= m * n <= 10^5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= grid[i][j] <= 10^5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pricing.length == 2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2 <= low <= high <= 10^5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"start.length == 2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= row <= m - 1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= col <= n - 1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"grid[row][col] > 0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= k <= m * n"))),(0,a.kt)("h2",{id:"approach-1-bfs"},"Approach 1: BFS"),(0,a.kt)("p",null,"This is a standard BFS problem. It is not difficult to implement but we need to pay attention on the requirements."),(0,a.kt)("p",null,"First we put our starting point to a queue. Then iterate the current queue and check if current cell grid","[","x]","[","y] is within the price range. If so, we can put this cell to a temporary array for further processing. After that, we try to move in four directions. We need to check the new coordinate ",(0,a.kt)("inlineCode",{parentName:"p"},"(next_x, next_y)")," is within boundary or not. Also we don't want to visit the same cell that we have already visited so we use ",(0,a.kt)("inlineCode",{parentName:"p"},"vis[next_x][next_y]")," to check it. If it is not visited, we add the next cell to the queue and mark it as visited."),(0,a.kt)("p",null,"After we have the maximum ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," items, we need to sort them based on their rank from highest to lowest. We can apply a custom sorting comparator here. At the end, we output the coordinate of each cell. One thing to note that the reachable items can be less than ",(0,a.kt)("inlineCode",{parentName:"p"},"k"),", hence we need to take the minimum one of ",(0,a.kt)("inlineCode",{parentName:"p"},"tmp.size()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"k"),"."),(0,a.kt)(o.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<vector<int>> highestRankedKItems(vector<vector<int>>& grid, vector<int>& pricing, vector<int>& start, int k) {\n        int n = grid.size(), m = grid[0].size();\n        vector<vector<int>> vis(n, vector<int>(m, 0));\n        vector<array<int, 3>> tmp;\n        queue<vector<int>> q;\n        q.push(start);\n        int dirx[4] = { -1, 0, 0, 1 };\n        int diry[4] = { 0, 1, -1, 0 };\n        vis[start[0]][start[1]] = 1;\n        int step = 0;\n        while (!q.empty() && tmp.size() < k) {\n            step++;\n            int sz = q.size();\n            for (int it = 0; it < sz; it++) {\n                vector<int> p = q.front(); q.pop();\n                int x = p[0],  y = p[1];\n                if (0 <= x && x < n && 0 <= y && y < m && grid[x][y] != 0) {\n                    if (pricing[0] <= grid[x][y] && grid[x][y] <= pricing[1]) {\n                        tmp.push_back({x, y, step});\n                    } \n                    for (int d = 0; d < 4; d++) {\n                        int next_x = x + dirx[d];\n                        int next_y = y + diry[d];\n                        if (0 <= next_x && next_x < n && 0 <= next_y && next_y < m && !vis[next_x][next_y]) {\n                            vis[next_x][next_y] = 1;\n                            q.push({next_x, next_y});\n                        }\n                    }\n                }\n            }\n        }\n        sort(tmp.begin(), tmp.end(), [&](const array<int, 3>& x, const array<int, 3>& y) {\n            return (x[2] < y[2]) || \n                   (x[2] == y[2] && grid[x[0]][x[1]] < grid[y[0]][y[1]]) ||\n                   (x[2] == y[2] && grid[x[0]][x[1]] ==  grid[y[0]][y[1]] && x[0] < y[0]) ||\n                   (x[2] == y[2] && grid[x[0]][x[1]] ==  grid[y[0]][y[1]] && x[0] == y[0] && x[1] < y[1]);\n        });\n        vector<vector<int>> ans;\n        for (int i = 0; i < min((int) tmp.size(), k); i++) {\n            ans.push_back({tmp[i][0], tmp[i][1]});\n        }\n        return ans;\n    }\n};\n")),(0,a.kt)("p",null,"In fact, a custom comparator is not necessary if we push the criteria in the same order to ",(0,a.kt)("inlineCode",{parentName:"p"},"tmp"),", i.e. distance, price, row number and column number. This is because the ",(0,a.kt)("inlineCode",{parentName:"p"},"sort()")," will sort them based on this order."),(0,a.kt)(o.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    vector<vector<int>> highestRankedKItems(vector<vector<int>>& grid, vector<int>& pricing, vector<int>& start, int k) {\n        int n = grid.size(), m = grid[0].size();\n        vector<vector<int>> vis(n, vector<int>(m, 0));\n        // vector<array<int, 3>> tmp;\n        vector<array<int, 4>> tmp;\n        queue<vector<int>> q;\n        q.push(start);\n        int dirx[4] = { -1, 0, 0, 1 };\n        int diry[4] = { 0, 1, -1, 0 };\n        vis[start[0]][start[1]] = 1;\n        int step = 0;\n        while (!q.empty() && tmp.size() < k) {\n            step++;\n            int sz = q.size();\n            for (int it = 0; it < sz; it++) {\n                vector<int> p = q.front(); q.pop();\n                int x = p[0],  y = p[1];\n                if (0 <= x && x < n && 0 <= y && y < m && grid[x][y] != 0) {\n                    if (pricing[0] <= grid[x][y] && grid[x][y] <= pricing[1]) {\n                        // tmp.push_back({x, y, step});\n                        tmp.push_back({step, grid[x][y], x, y});\n                    } \n                    for (int d = 0; d < 4; d++) {\n                        int next_x = x + dirx[d];\n                        int next_y = y + diry[d];\n                        if (0 <= next_x && next_x < n && 0 <= next_y && next_y < m && !vis[next_x][next_y]) {\n                            vis[next_x][next_y] = 1;\n                            q.push({next_x, next_y});\n                        }\n                    }\n                }\n            }\n        }\n        sort(tmp.begin(), tmp.end());\n        // sort(tmp.begin(), tmp.end(), [&](const array<int, 3>& x, const array<int, 3>& y) {\n        //     return (x[2] < y[2]) || \n        //            (x[2] == y[2] && grid[x[0]][x[1]] < grid[y[0]][y[1]]) ||\n        //            (x[2] == y[2] && grid[x[0]][x[1]] ==  grid[y[0]][y[1]] && x[0] < y[0]) ||\n        //            (x[2] == y[2] && grid[x[0]][x[1]] ==  grid[y[0]][y[1]] && x[0] == y[0] && x[1] < y[1]);\n        // });\n        vector<vector<int>> ans;\n        for (int i = 0; i < min((int) tmp.size(), k); i++) {\n            ans.push_back({tmp[i][2], tmp[i][3]});\n        }\n        return ans;\n    }\n};\n")),(0,a.kt)("p",null,"Time Complexity: O(m ","*"," n ","*"," logk)"),(0,a.kt)("p",null,"Space Complexity: O(m ","*"," n)"))}u.isMDXComponent=!0},8539:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294);function i(e){var t=e.name;return r.createElement("div",{className:"solution-author-wrapper"},r.createElement("span",null,"This solution is written by ",t))}}}]);