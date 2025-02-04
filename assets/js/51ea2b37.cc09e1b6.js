"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[50897],{82575:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"0400-0499/pacific-atlantic-water-flow-medium","title":"0417 - Pacific Atlantic Water Flow (Medium)","description":"Author: @wkw, @radojicic23, @ColeB2 | https://leetcode.com/problems/pacific-atlantic-water-flow/","source":"@site/solutions/0400-0499/0417-pacific-atlantic-water-flow-medium.md","sourceDirName":"0400-0499","slug":"/0400-0499/pacific-atlantic-water-flow-medium","permalink":"/solutions/0400-0499/pacific-atlantic-water-flow-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0400-0499/0417-pacific-atlantic-water-flow-medium.md","tags":[{"inline":true,"label":"Array","permalink":"/solutions/tags/array"},{"inline":true,"label":"Depth-First Search","permalink":"/solutions/tags/depth-first-search"},{"inline":true,"label":"Breadth-First Search","permalink":"/solutions/tags/breadth-first-search"},{"inline":true,"label":"Matrix","permalink":"/solutions/tags/matrix"}],"version":"current","sidebarPosition":417,"frontMatter":{"description":"Author: @wkw, @radojicic23, @ColeB2 | https://leetcode.com/problems/pacific-atlantic-water-flow/","tags":["Array","Depth-First Search","Breadth-First Search","Matrix"]},"sidebar":"tutorialSidebar","previous":{"title":"0416 - Partition Equal Subset Sum (Medium)","permalink":"/solutions/0400-0499/partition-equal-subset-sum-medium"},"next":{"title":"0421 - Maximum XOR of Two Numbers in an Array","permalink":"/solutions/0400-0499/maximum-xor-of-two-numbers-in-an-array"}}');var s=t(86070),a=t(32790);const r={description:"Author: @wkw, @radojicic23, @ColeB2 | https://leetcode.com/problems/pacific-atlantic-water-flow/",tags:["Array","Depth-First Search","Breadth-First Search","Matrix"]},c="0417 - Pacific Atlantic Water Flow (Medium)",l={},o=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS",id:"approach-1-dfs",level:2},{value:"Approach 2: Breadth-First Search",id:"approach-2-breadth-first-search",level:2}];function h(e){const n={annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{SolutionAuthor:t,TabItem:i,Tabs:r}=n;return t||m("SolutionAuthor",!0),i||m("TabItem",!0),r||m("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"0417---pacific-atlantic-water-flow-medium",children:"0417 - Pacific Atlantic Water Flow (Medium)"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["There is an ",(0,s.jsx)(n.code,{children:"m x n"})," rectangular island that borders both the ",(0,s.jsx)(n.strong,{children:"Pacific Ocean"})," and ",(0,s.jsx)(n.strong,{children:"Atlantic Ocean"}),". The ",(0,s.jsx)(n.strong,{children:"Pacific Ocean"})," touches the island's left and top edges, and the ",(0,s.jsx)(n.strong,{children:"Atlantic Ocean"})," touches the island's right and bottom edges."]}),"\n",(0,s.jsxs)(n.p,{children:["The island is partitioned into a grid of square cells. You are given an ",(0,s.jsx)(n.code,{children:"m x n"})," integer matrix ",(0,s.jsx)(n.code,{children:"heights"})," where ",(0,s.jsx)(n.code,{children:"heights[r][c]"})," represents the ",(0,s.jsx)(n.strong,{children:"height above sea level"})," of the cell at coordinate ",(0,s.jsx)(n.code,{children:"(r, c)"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is ",(0,s.jsx)(n.strong,{children:"less than or equal to"})," the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean."]}),"\n",(0,s.jsxs)(n.p,{children:["Return ",(0,s.jsxs)(n.em,{children:["a ",(0,s.jsx)(n.strong,{children:"2D list"})," of grid coordinates"]}),(0,s.jsx)(n.code,{children:"result"}),(0,s.jsx)(n.em,{children:"where"}),(0,s.jsx)(n.code,{children:"result[i] = [ri, ci]"}),(0,s.jsx)(n.em,{children:"denotes that rain water can flow from cell"}),(0,s.jsx)(n.code,{children:"(ri, ci)"}),(0,s.jsxs)(n.em,{children:["to ",(0,s.jsx)(n.strong,{children:"both"})," the Pacific and Atlantic oceans"]}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]\nOutput: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]\nExplanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:\n[0,4]: [0,4] -> Pacific Ocean\n\xa0      [0,4] -> Atlantic Ocean\n[1,3]: [1,3] -> [0,3] -> Pacific Ocean\n\xa0      [1,3] -> [1,4] -> Atlantic Ocean\n[1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean\n\xa0      [1,4] -> Atlantic Ocean\n[2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean\n\xa0      [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean\n[3,0]: [3,0] -> Pacific Ocean\n\xa0      [3,0] -> [4,0] -> Atlantic Ocean\n[3,1]: [3,1] -> [3,0] -> Pacific Ocean\n\xa0      [3,1] -> [4,1] -> Atlantic Ocean\n[4,0]: [4,0] -> Pacific Ocean\n       [4,0] -> Atlantic Ocean\nNote that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: heights = [[1]]\nOutput: [[0,0]]\nExplanation: The water can flow from the only cell to the Pacific and Atlantic oceans.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"m == heights.length"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"n == heights[r].length"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= m, n <= 200"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"0 <= heights[r][c] <= 10^5"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-dfs",children:"Approach 1: DFS"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsxs)(i,{value:"cpp",label:"C++",children:[(0,s.jsx)(t,{name:"@wingkwonmg"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    void dfs(vector<vector<int>>& M, vector<vector<int>>& vis, int i, int j) {\n        int m = M.size(), n = M[0].size();\n        // marked this cell (i, j) as visited\n        // so that we won't visit it again\n        vis[i][j] = 1;\n        // perform DFS on the left cell\n        if (i - 1 >= 0 && !vis[i - 1][j] && M[i - 1][j] >= M[i][j]) dfs(M, vis, i - 1, j);\n        // perform DFS on the right cell\n        if (i + 1 < m && !vis[i + 1][j] && M[i + 1][j] >= M[i][j]) dfs(M, vis, i + 1, j);\n        // perform DFS on the top cell\n        if (j - 1 >= 0 && !vis[i][j - 1] && M[i][j - 1] >= M[i][j]) dfs(M, vis, i, j - 1);\n        // perform DFS on the bottom cell\n        if (j + 1 < n && !vis[i][j + 1] && M[i][j + 1] >= M[i][j]) dfs(M, vis, i, j + 1);\n    }\n\n    vector<vector<int>> pacificAtlantic(vector<vector<int>>& M) {\n        vector<vector<int>> ans;\n        int m = M.size(), n = M[0].size();\n        // P[i][j] = 1 means it is able to flow to pacific ocean\n        vector<vector<int>> P(m, vector<int>(n));\n        // A[i][j] = 1 means it is able to flow to atlantic ocean\n        vector<vector<int>> A(m, vector<int>(n));\n        for(int i = 0; i < m; i++) {\n            // perform dfs starting from the left-most column\n            dfs(M, P, i, 0);\n            // perform dfs starting from the right-most column\n            dfs(M, A, i, n - 1);\n        }\n        for(int i = 0; i < n; i++) {\n            // perform dfs starting from the top-most row\n            dfs(M, P, 0, i);\n            // perform dfs starting from the bottom-most row\n            dfs(M, A, m - 1, i);\n        }\n        // iterate each row\n        for(int i = 0; i < m; i++) {\n            // iterate each column\n            for(int j = 0; j < n; j++) {\n                // if both P[i][j] & A[i][j] are visited\n                // that means this cell can flow to both ocean\n                if(P[i][j] && A[i][j]) {\n                    // then put the coordinate (i, j) to answer\n                    ans.push_back(vector<int>{i, j});\n                }\n            }\n        }\n        return ans;\n    }\n};\n"})})]}),(0,s.jsxs)(i,{value:"python",label:"Python",children:[(0,s.jsx)(t,{name:"@radojicic23"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:\n        rows, cols = len(heights), len(heights[0])\n        # 2 hashsets to maintain all the positions that can reach two oceans\n        pac, atl = set(), set()\n\n        def dfs(r, c, visit, prev_height):\n            # if position is already been visited or\n            # if it's out of bounds or if height is to small\n            if ((r, c) in visit or\n                r < 0 or c < 0 or r == rows or c == cols or\n                heights[r][c] < prev_height):\n                return\n            # visit new cell\n            visit.add((r, c))\n            # run dfs on all four of those neighbours\n            dfs(r + 1, c, visit, heights[r][c])\n            dfs(r - 1, c, visit, heights[r][c])\n            dfs(r, c + 1, visit, heights[r][c])\n            dfs(r, c - 1, visit, heights[r][c])\n\n        # go through every single column in the first row\n        # for the first row and the last row\n        for c in range(cols):\n            dfs(0, c, pac, heights[0][c])\n            dfs(rows - 1, c, atl, heights[rows - 1][c])\n        # for the first column and the last column\n        for r in range(rows):\n            dfs(r, 0, pac, heights[r][0])\n            dfs(r, cols - 1, atl, heights[r][cols - 1])\n\n        res = []\n        for r in range(rows):\n            for c in range(cols):\n                if (r, c) in pac and (r, c) in atl:\n                    res.append([r, c])\n        return res\n"})})]})]}),"\n",(0,s.jsx)(n.h2,{id:"approach-2-breadth-first-search",children:"Approach 2: Breadth-First Search"}),"\n",(0,s.jsx)(n.p,{children:'We will start at the "beaches" of each ocean, and find the highest point they reach using BFS. By storing those values in a set and doing it for both oceans, we can return the intersecting points of each set as we know if it rained, those high points will run off into both oceans.'}),"\n",(0,s.jsx)(n.p,{children:"Note: Since we are finding the highest point we can reach from the beaches, we need to check that the cell we are looking at is either taller, or even in height than the cell we came from. If it is shorter, we would avoid continuing."}),"\n",(0,s.jsxs)(n.p,{children:["Time Complexity: ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"O"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mi,{children:"m"}),(0,s.jsx)(n.mo,{children:"\u2217"}),(0,s.jsx)(n.mi,{children:"n"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(m*n)"})]})})}),(0,s.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"m"}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.jsx)(n.span,{className:"mbin",children:"\u2217"}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})]})]})," where m is the number of rows, and n is the number of columns. Our BFS will traverse each cell, check where they can reach, and will use a set to avoid repeated work."]}),"\n",(0,s.jsxs)(n.p,{children:["Space Complexity: ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"O"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mi,{children:"m"}),(0,s.jsx)(n.mo,{children:"\u2217"}),(0,s.jsx)(n.mi,{children:"n"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(m*n)"})]})})}),(0,s.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"m"}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.jsx)(n.span,{className:"mbin",children:"\u2217"}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})]})]}),". We will maintain 2 hash sets of points we can reach, as well as our queue will take up to ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"O"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mi,{children:"m"}),(0,s.jsx)(n.mo,{children:"\u2217"}),(0,s.jsx)(n.mi,{children:"n"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(m*n)"})]})})}),(0,s.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"m"}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.jsx)(n.span,{className:"mbin",children:"\u2217"}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})]})]})," space."]}),"\n",(0,s.jsx)(r,{children:(0,s.jsxs)(i,{value:"python",label:"Python",children:[(0,s.jsx)(t,{name:"@ColeB2"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'class Solution:\n    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:\n        # initialize the number of rows, cols and our visited sets.\n        ROWS, COLS = len(heights), len(heights[0])\n        pacific = set()\n        atlantic = set()\n        # BFS algorithm, takes an initial row, column starting point\n        # as well as a reference to which visited set we are using.\n        def bfs(r, c, visited):\n            # initialize q with starting row, col and the height\n            # of the current cell.\n            q = deque([(r,c, heights[r][c])])\n\n            while q:\n                # get row, col of current cell, and height of prev cell.\n                row, col, height = q.popleft()\n                # check we are in bounds, that we haven\'t visited the\n                # cell before and that if the current cells height\n                # is shorter than the previous cells height.\n                if (row < 0 or row >= ROWS\n                    or col < 0 or col >= COLS\n                    or (row,col) in visited\n                    or heights[row][col] < height):\n                    continue\n                # passed our check above we can add cell to visited\n                visited.add((row,col))\n                # check 4 adjacent cells to add to the queue.\n                for dr, dc in ((1,0), (-1,0), (0,1), (0,-1)):\n                    q.append((row + dr, col + dc, heights[row][col]))\n        # Our 2 loops here start our algorithm only from  the "beach squares.\n        # Every column in the first/last rows\n        for col in range(COLS):\n            # BFS for each column at the pacific and atlantic "beach".\n            # Pass a reference of the set we are starting our bfs from\n            # to our algorithm.\n            bfs(0, col, pacific)\n            bfs(ROWS - 1, col, atlantic)\n        # Every row in the first and last columns.\n        for row in range(ROWS):\n            # BFS for each row at the pacific and atlantic "beach."\n            bfs(row, 0, pacific)\n            bfs(row, COLS - 1, atlantic)\n        # Return the intersection of points inside our row.\n        # If they both reached the same high point, we know rain would\n        # run off into either ocean.\n        return pacific.intersection(atlantic)\n'})})]})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32790:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(30758);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);