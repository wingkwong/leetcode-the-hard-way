"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[73143],{49607:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>t,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"0600-0699/max-area-of-island-medium","title":"0695 - Max Area of Island (Medium)","description":"Author: @ColeB2, wingkwong | https://leetcode.com/problems/max-area-of-island/","source":"@site/solutions/0600-0699/0695-max-area-of-island-medium.md","sourceDirName":"0600-0699","slug":"/0600-0699/max-area-of-island-medium","permalink":"/solutions/0600-0699/max-area-of-island-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0600-0699/0695-max-area-of-island-medium.md","tags":[{"inline":true,"label":"Array","permalink":"/solutions/tags/array"},{"inline":true,"label":"Depth-First Search","permalink":"/solutions/tags/depth-first-search"},{"inline":true,"label":"Breadth-First Search","permalink":"/solutions/tags/breadth-first-search"},{"inline":true,"label":"Union Find","permalink":"/solutions/tags/union-find"},{"inline":true,"label":"Matrix","permalink":"/solutions/tags/matrix"}],"version":"current","sidebarPosition":695,"frontMatter":{"description":"Author: @ColeB2, wingkwong | https://leetcode.com/problems/max-area-of-island/","tags":["Array","Depth-First Search","Breadth-First Search","Union Find","Matrix"]},"sidebar":"tutorialSidebar","previous":{"title":"0692 - Top K Frequent Words (Medium)","permalink":"/solutions/0600-0699/top-k-frequent-words-medium"},"next":{"title":"0698 - Partition to K Equal Sum Subsets (Medium)","permalink":"/solutions/0600-0699/partition-to-k-equal-sum-subsets-medium"}}');var r=n(74848),i=n(28453);const t={description:"Author: @ColeB2, wingkwong | https://leetcode.com/problems/max-area-of-island/",tags:["Array","Depth-First Search","Breadth-First Search","Union Find","Matrix"]},l="0695 - Max Area of Island (Medium)",c={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Breadth-First Search",id:"approach-1-breadth-first-search",level:2},{value:"Approach 2: Depth-First Search",id:"approach-2-depth-first-search",level:2}];function d(e){const s={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{SolutionAuthor:n,TabItem:a,Tabs:t}=s;return n||h("SolutionAuthor",!0),a||h("TabItem",!0),t||h("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"0695---max-area-of-island-medium",children:"0695 - Max Area of Island (Medium)"})}),"\n",(0,r.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://leetcode.com/problems/max-area-of-island/",children:"https://leetcode.com/problems/max-area-of-island/"})}),"\n",(0,r.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(s.p,{children:["You are given an ",(0,r.jsx)(s.code,{children:"m x n"})," binary matrix ",(0,r.jsx)(s.code,{children:"grid"}),". An island is a group of ",(0,r.jsx)(s.code,{children:"1"}),"'s (representing land) connected ",(0,r.jsx)(s.strong,{children:"4-directionally"})," (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water."]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:"area"})," of an island is the number of cells with a value ",(0,r.jsx)(s.code,{children:"1"})," in the island."]}),"\n",(0,r.jsxs)(s.p,{children:["Return ",(0,r.jsxs)(s.em,{children:["the maximum ",(0,r.jsx)(s.strong,{children:"area"})," of an island in"]})," ",(0,r.jsx)(s.code,{children:"grid"}),". If there is no island, return ",(0,r.jsx)(s.code,{children:"0"}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://assets.leetcode.com/uploads/2021/05/01/maxarea1-grid.jpg",alt:""})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]\nOutput: 6\nExplanation: The answer is not 11, because the island must be connected 4-directionally.\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"Input: grid = [[0,0,0,0,0,0,0,0]]\nOutput: 0\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"m == grid.length"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"n == grid[i].length"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"1 <= m, n <= 50"})}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"grid[i][j]"})," is either ",(0,r.jsx)(s.code,{children:"0"})," or ",(0,r.jsx)(s.code,{children:"1"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"approach-1-breadth-first-search",children:"Approach 1: Breadth-First Search"}),"\n",(0,r.jsxs)(s.p,{children:["We can traverse the grid, and when we find an island, run our BFS on the island. For every ",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsx)(s.mrow,{children:(0,r.jsx)(s.mn,{children:"1"})}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,r.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,r.jsx)(s.span,{className:"mord",children:"1"})]})})]})," we find we can increment our area counter, as well as update a global max area variable."]}),"\n",(0,r.jsxs)(s.p,{children:["Time Complexity: ",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mi,{children:"O"}),(0,r.jsx)(s.mo,{stretchy:"false",children:"("}),(0,r.jsx)(s.mi,{children:"m"}),(0,r.jsx)(s.mo,{children:"\u2217"}),(0,r.jsx)(s.mi,{children:"n"}),(0,r.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(m * n)"})]})})}),(0,r.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,r.jsx)(s.span,{className:"mopen",children:"("}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.jsx)(s.span,{className:"mbin",children:"\u2217"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(s.span,{className:"mclose",children:")"})]})]})]})," must traverse each cell in the grid."]}),"\n",(0,r.jsxs)(s.p,{children:["Space Complexity: ",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mi,{children:"O"}),(0,r.jsx)(s.mo,{stretchy:"false",children:"("}),(0,r.jsx)(s.mi,{children:"m"}),(0,r.jsx)(s.mo,{children:"\u2217"}),(0,r.jsx)(s.mi,{children:"n"}),(0,r.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(m * n)"})]})})}),(0,r.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,r.jsx)(s.span,{className:"mopen",children:"("}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.jsx)(s.span,{className:"mbin",children:"\u2217"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(s.span,{className:"mclose",children:")"})]})]})]}),". For the size of our queue."]}),"\n",(0,r.jsx)(t,{children:(0,r.jsxs)(a,{value:"python",label:"Python",children:[(0,r.jsx)(n,{name:"@ColeB2"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-py",children:"class Solution:\n    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:\n        # intiialize rows, cols, and a global max area to track\n        # the size of the largest island.\n        ROWS, COLS = len(grid), len(grid[0])\n        self.max_area = 0\n        # BFS function, takes to parameters, row, r and column, c.\n        def bfs(r, c):\n            # initialize our queue with current row, r and column, c\n            q = deque([(r,c)])\n            # initialize area starting at 0.\n            area = 0\n\n            while q:\n                # pop row and col off the queue\n                row, col = q.popleft()\n                # check that it is inbounds, and a 1/land\n                if (row < 0 or row >= ROWS\n                    or col < 0 or col >= COLS\n                    or grid[row][col] != 1\n                    ):\n                    continue\n                # It is in bounds and land, we will mark it as visited\n                # we can re-use the grid by just setting the spot to -1.\n                grid[row][col] = -1\n                # update our area and global max area.\n                area += 1\n                self.max_area = max(area, self.max_area)\n                # loop through 4 adjacent directions\n                for dr, dc in ((1,0), (0,1), (-1,0), (0, -1)):\n                    # add 4 adjacent cells to our queue.\n                    q.append((row + dr, col + dc))\n        # Loop through our board\n        for r in range(ROWS):\n            for c in range(COLS):\n                # find land, run bfs at that position\n                if grid[r][c] == 1:\n                    bfs(r, c)\n        return self.max_area\n"})})]})}),"\n",(0,r.jsx)(s.h2,{id:"approach-2-depth-first-search",children:"Approach 2: Depth-First Search"}),"\n",(0,r.jsx)(s.p,{children:"For each land, we can run DFS to calculate the area of the current island. We set the visited cell to other value so that it won't re-calculate. Get the maximum area and return it."}),"\n",(0,r.jsxs)(s.p,{children:["Time Complexity: ",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mi,{children:"O"}),(0,r.jsx)(s.mo,{stretchy:"false",children:"("}),(0,r.jsx)(s.mi,{children:"m"}),(0,r.jsx)(s.mo,{children:"\u2217"}),(0,r.jsx)(s.mi,{children:"n"}),(0,r.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(m * n)"})]})})}),(0,r.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,r.jsx)(s.span,{className:"mopen",children:"("}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.jsx)(s.span,{className:"mbin",children:"\u2217"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(s.span,{className:"mclose",children:")"})]})]})]})," must traverse each cell in the grid."]}),"\n",(0,r.jsxs)(s.p,{children:["Space Complexity: ",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mi,{children:"O"}),(0,r.jsx)(s.mo,{stretchy:"false",children:"("}),(0,r.jsx)(s.mi,{children:"m"}),(0,r.jsx)(s.mo,{children:"\u2217"}),(0,r.jsx)(s.mi,{children:"n"}),(0,r.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(m * n)"})]})})}),(0,r.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,r.jsx)(s.span,{className:"mopen",children:"("}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.jsx)(s.span,{className:"mbin",children:"\u2217"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(s.span,{className:"mclose",children:")"})]})]})]}),"."]}),"\n",(0,r.jsx)(t,{children:(0,r.jsxs)(a,{value:"cpp",label:"C++",children:[(0,r.jsx)(n,{name:"@wingkwong"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int ans = 0;\n    int maxAreaOfIsland(vector<vector<int>>& grid) {\n        for(int i = 0; i < grid.size(); i++) {\n            for(int j = 0; j < grid[0].size(); j++) {\n                if(grid[i][j] == 1) {\n                    // if it is 1, then we can start from this cell\n                    ans = max(ans, dfs(grid, i, j));\n                }\n            }\n        }\n        return ans;\n    }\n    \n    int dfs(vector<vector<int>>& grid, int i, int j) {\n        // if it is 0 or out of bound, return 0\n        if(i < 0 || j < 0 || i > grid.size() - 1 || j > grid[0].size() - 1 || grid[i][j] != 1) return 0;\n        // set it to 0 so that we won't visit it again\n        grid[i][j] = 0;\n        // 1 (current cell) + the result from four directions\n        return 1 +\n            dfs(grid, i + 1, j) +\n            dfs(grid, i, j + 1) +\n            dfs(grid, i - 1, j) +\n            dfs(grid, i, j - 1);\n    }\n};\n"})})]})})]})}function m(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function h(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>l});var a=n(96540);const r={},i=a.createContext(r);function t(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);