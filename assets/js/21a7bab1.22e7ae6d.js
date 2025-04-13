"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[96484],{81359:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"1900-1999/nearest-exit-from-entrance-in-maze-medium","title":"1926 - Nearest Exit from Entrance in Maze (Medium)","description":"Author: @wkw | https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/","source":"@site/solutions/1900-1999/1926-nearest-exit-from-entrance-in-maze-medium.md","sourceDirName":"1900-1999","slug":"/1900-1999/nearest-exit-from-entrance-in-maze-medium","permalink":"/solutions/1900-1999/nearest-exit-from-entrance-in-maze-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1900-1999/1926-nearest-exit-from-entrance-in-maze-medium.md","tags":[{"inline":true,"label":"Array","permalink":"/solutions/tags/array"},{"inline":true,"label":"Breadth-First Search","permalink":"/solutions/tags/breadth-first-search"},{"inline":true,"label":"Matrix","permalink":"/solutions/tags/matrix"}],"version":"current","sidebarPosition":1926,"frontMatter":{"description":"Author: @wkw | https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/","tags":["Array","Breadth-First Search","Matrix"]},"sidebar":"tutorialSidebar","previous":{"title":"1922 - Count Good Numbers (Medium)","permalink":"/solutions/1900-1999/count-good-numbers-medium"},"next":{"title":"1929 - Concatenation of Array (Easy)","permalink":"/solutions/1900-1999/concatenation-of-array-easy"}}');var i=t(86070),s=t(32790);const a={description:"Author: @wkw | https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/",tags:["Array","Breadth-First Search","Matrix"]},o="1926 - Nearest Exit from Entrance in Maze (Medium)",c={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: BFS",id:"approach-1-bfs",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{SolutionAuthor:t,TabItem:r,Tabs:a}=n;return t||m("SolutionAuthor",!0),r||m("TabItem",!0),a||m("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"1926---nearest-exit-from-entrance-in-maze-medium",children:"1926 - Nearest Exit from Entrance in Maze (Medium)"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/",children:"https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(n.p,{children:["You are given an ",(0,i.jsx)(n.code,{children:"m x n"})," matrix ",(0,i.jsx)(n.code,{children:"maze"})," (",(0,i.jsx)(n.strong,{children:"0-indexed"}),") with empty cells (represented as ",(0,i.jsx)(n.code,{children:"'.'"}),") and walls (represented as ",(0,i.jsx)(n.code,{children:"'+'"}),"). You are also given the ",(0,i.jsx)(n.code,{children:"entrance"})," of the maze, where ",(0,i.jsx)(n.code,{children:"entrance = [entrancerow, entrancecol]"})," denotes the row and column of the cell you are initially standing at."]}),"\n",(0,i.jsxs)(n.p,{children:["In one step, you can move one cell ",(0,i.jsx)(n.strong,{children:"up"}),", ",(0,i.jsx)(n.strong,{children:"down"}),", ",(0,i.jsx)(n.strong,{children:"left"}),", or ",(0,i.jsx)(n.strong,{children:"right"}),". You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the ",(0,i.jsx)(n.strong,{children:"nearest exit"})," from the ",(0,i.jsx)(n.code,{children:"entrance"}),". An ",(0,i.jsx)(n.strong,{children:"exit"})," is defined as an ",(0,i.jsx)(n.strong,{children:"empty cell"})," that is at the ",(0,i.jsx)(n.strong,{children:"border"})," of the ",(0,i.jsx)(n.code,{children:"maze"}),". The ",(0,i.jsx)(n.code,{children:"entrance"})," ",(0,i.jsx)(n.strong,{children:"does not count"})," as an exit."]}),"\n",(0,i.jsxs)(n.p,{children:["Return ",(0,i.jsxs)(n.em,{children:["the ",(0,i.jsx)(n.strong,{children:"number of steps"})," in the shortest path from the"]}),(0,i.jsx)(n.code,{children:"entrance"}),(0,i.jsx)(n.em,{children:"to the nearest exit, or"}),(0,i.jsx)(n.code,{children:"-1"}),(0,i.jsx)(n.em,{children:"if no such path exists"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Input: maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]\nOutput: 1\nExplanation: There are 3 exits in this maze at [1,0], [0,2], and [2,3].\nInitially, you are at the entrance cell [1,2].\n- You can reach [1,0] by moving 2 steps left.\n- You can reach [0,2] by moving 1 step up.\nIt is impossible to reach [2,3] from the entrance.\nThus, the nearest exit is [0,2], which is 1 step away.\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Input: maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0]\nOutput: 2\nExplanation: There is 1 exit in this maze at [1,2].\n[1,0] does not count as an exit since it is the entrance cell.\nInitially, you are at the entrance cell [1,0].\n- You can reach [1,2] by moving 2 steps right.\nThus, the nearest exit is [1,2], which is 2 steps away.\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Input: maze = [[".","+"]], entrance = [0,0]\nOutput: -1\nExplanation: There are no exits in this maze.\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"maze.length == m"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"maze[i].length == n"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= m, n <= 100"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"maze[i][j]"})," is either ",(0,i.jsx)(n.code,{children:"'.'"})," or ",(0,i.jsx)(n.code,{children:"'+'"}),"."]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"entrance.length == 2"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"0 <= entrancerow < m"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"0 <= entrancecol < n"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"entrance"})," will always be an empty cell."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"approach-1-bfs",children:"Approach 1: BFS"}),"\n",(0,i.jsx)(a,{children:(0,i.jsxs)(r,{value:"cpp",label:"C++",children:[(0,i.jsx)(t,{name:"@wkw"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    // 4 directions for x-axis and y-axis\n    int dirx[4] = { -1, 0, 0, 1 };\n    int diry[4] = { 0, 1, -1, 0 };\n    int nearestExit(vector<vector<char>>& maze, vector<int>& entrance) {\n        int m = maze.size(), n = maze[0].size();\n        queue<array<int, 3>> q; // {i, j, steps}\n        // push the starting point (i, j) with initial step 0\n        q.push({entrance[0], entrance[1], 0});\n        // BFS\n        while (!q.empty()) {\n            auto [i, j, steps] = q.front(); q.pop();\n            // handle exit condition, we can exit if\n            // 1. the current position is not the entrance\n            bool isAtTheEntrance = i == entrance[0] && j == entrance[1];\n            // 2. and the current position is at the border\n            bool isAtTheBorder = i == 0 || j == 0 || i == m - 1 || j == n - 1;\n            if (!isAtTheEntrance && isAtTheBorder) return steps;\n            for (int d = 0; d < 4; d++) {\n                int next_i = i + dirx[d];\n                int next_j = j + diry[d];\n                // check if we can move to (next_i, next_j)\n                if (next_i >= 0 && next_j >= 0 && next_i < m && next_j < n && maze[next_i][next_j] == '.') {\n                    // if so, we mark the next cell to `+` so that we won't visit it again\n                    maze[next_i][next_j] = '+';\n                    // add the next position to the queue with steps + 1\n                    q.push({next_i, next_j, steps + 1});\n                }\n            }\n        }\n        return -1;\n    }\n};\n"})})]})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32790:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(30758);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);