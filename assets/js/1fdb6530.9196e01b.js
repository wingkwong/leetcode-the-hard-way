"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[78597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24921:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={description:"Author: @ColeB2 | https://leetcode.com/problems/rotting-oranges/",tags:["Array","Breadth-First Search","Matrix"]},i="0994 - Rotting Oranges (Medium)",l={unversionedId:"0900-0999/rotting-oranges-medium",id:"0900-0999/rotting-oranges-medium",title:"0994 - Rotting Oranges (Medium)",description:"Author: @ColeB2 | https://leetcode.com/problems/rotting-oranges/",source:"@site/solutions/0900-0999/0994-rotting-oranges-medium.md",sourceDirName:"0900-0999",slug:"/0900-0999/rotting-oranges-medium",permalink:"/solutions/0900-0999/rotting-oranges-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0900-0999/0994-rotting-oranges-medium.md",tags:[{label:"Array",permalink:"/solutions/tags/array"},{label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"},{label:"Matrix",permalink:"/solutions/tags/matrix"}],version:"current",sidebarPosition:994,frontMatter:{description:"Author: @ColeB2 | https://leetcode.com/problems/rotting-oranges/",tags:["Array","Breadth-First Search","Matrix"]},sidebar:"tutorialSidebar",previous:{title:"0992 - Subarrays with K Different Integers (Hard)",permalink:"/solutions/0900-0999/subarrays-with-k-different-integers-hard"},next:{title:"0923 - 3Sum With Multiplicity (Medium)",permalink:"/solutions/0900-0999/0923-3sum-with-multiplicity-medium"}},s={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Breadth-First Search",id:"approach-1-breadth-first-search",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=p("Tabs"),c=p("TabItem"),d=p("SolutionAuthor"),h={toc:u},g="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0994---rotting-oranges-medium"},"0994 - Rotting Oranges (Medium)"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/rotting-oranges/"},"https://leetcode.com/problems/rotting-oranges/")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"You are given an ",(0,a.kt)("inlineCode",{parentName:"p"},"m x n")," ",(0,a.kt)("inlineCode",{parentName:"p"},"grid")," where each cell can have one of three values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0")," representing an empty cell,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1")," representing a fresh orange, or"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2")," representing a rotten orange.")),(0,a.kt)("p",null,"Every minute, any fresh orange that is ",(0,a.kt)("strong",{parentName:"p"},"4-directionally adjacent")," to a rotten orange becomes rotten."),(0,a.kt)("p",null,"Return ",(0,a.kt)("em",{parentName:"p"},"the minimum number of minutes that must elapse until no cell has a fresh orange"),". If ",(0,a.kt)("em",{parentName:"p"},"this is impossible, return -1"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2019/02/16/oranges.png",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: grid = [[2,1,1],[1,1,0],[0,1,1]]\nOutput: 4\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: grid = [[2,1,1],[0,1,1],[1,0,1]]\nOutput: -1\nExplanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: grid = [[0,2]]\nOutput: 0\nExplanation: Since there are already no fresh oranges at minute 0, the answer is just 0.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"m == grid.length")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"n == grid[i].length")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= m, n <= 10")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"grid[i][j]")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),", or ",(0,a.kt)("inlineCode",{parentName:"li"},"2"),".")),(0,a.kt)("h2",{id:"approach-1-breadth-first-search"},"Approach 1: Breadth-First Search"),(0,a.kt)("p",null,"Since we must track time, a breadth-first search approach makes the most sense, as we can track each iteration of our bfs loop, and update the time before moving on to the next."),(0,a.kt)("p",null,"First, we need to iterate our grid looking for rotten oranges to add to our queue. Note, if we also take the time during this iteration to count the number of fresh oranges, we can save a little time in the end."),(0,a.kt)("p",null,"Once we have a queue of oranges, we just need to run our BFS and update our time after we exhaust all current cells in each iteration of it, and finally return the time as long as we have successfully converted all fresh oranges to rotten ones."),(0,a.kt)("p",null,"Time Complexity: $$O(m * n)$$ where m is the number of rows, and n is the number of columns. We must traverse the graph once to find all our fresh/rotten oranges, and then potentially again during our BFS."),(0,a.kt)("p",null,"Space Complexity: $$O(m ",(0,a.kt)("em",{parentName:"p"}," n)$$. In the worst case, all oranges will be rotten, and our queue will be of size $$m ")," n$$."),(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(c,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)(d,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"class Solution:\n    def orangesRotting(self, grid: List[List[int]]) -> int:\n        # Track number of rows and cols\n        ROWS, COLS = len(grid), len(grid[0])\n        # initialize our queue, and number of fresh oranges in the grid.\n        q = deque([])\n        fresh = 0\n        # iterate the grid\n        for r in range(ROWS):\n            for c in range(COLS):\n                # fresh oranges, increment our fresh count\n                if grid[r][c] == 1:\n                    fresh += 1\n                # rotten oranges can be added to the queue.\n                if grid[r][c] == 2:\n                    q.append((r, c))\n        # initialize our time, and directions for our BFS.\n        time = 0\n        dirs = ((1, 0), (0, 1), (-1, 0), (0, -1))\n        # while we have a queue of rotten oranges, and fresh still remaining.\n        while q and fresh > 0:\n            # loop through all the rotten oranges currently in the queue.\n            for _ in range(len(q)):\n                # get their position in the grid\n                row, col = q.popleft()\n                # check the 4 adjacent oranges\n                for (dr, dc) in dirs:\n                    # the position of the adjacent oranges.\n                    r, c = row + dr, col + dc\n                    # check the adjacent oranges are in bounds and fresh.\n                    if (r < 0 or r >= ROWS\n                        or c < 0 or c >= COLS\n                        or grid[r][c] != 1\n                        ):\n                        continue\n                    # They are fresh, make them rotten, \n                    grid[r][c] = 2\n                    fresh -= 1\n                    # add new rotten orange to the queue. We won't reach\n                    # it on this iteration, as we are only iterating\n                    # through the rotten from the last iteration.\n                    q.append((r, c))\n            # Since we only looped through the rotten oranges inside the\n            # queue, and not the adjacent ones, we can increment the time\n            # now, and on the next iteration we will check those adjacent ones.\n            time += 1\n        # If we turned all oranges rotten, return the time, else -1.\n        return time if fresh == 0 else -1\n")))))}f.isMDXComponent=!0}}]);