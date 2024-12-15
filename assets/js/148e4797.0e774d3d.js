"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[77158],{75154:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"0000-0099/n-queens-hard","title":"0051 - N-Queens (Hard)","description":"Author: @ColeB2 | https://leetcode.com/problems/n-queens/","source":"@site/solutions/0000-0099/0051-n-queens-hard.md","sourceDirName":"0000-0099","slug":"/0000-0099/n-queens-hard","permalink":"/solutions/0000-0099/n-queens-hard","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0051-n-queens-hard.md","tags":[{"inline":true,"label":"Array","permalink":"/solutions/tags/array"},{"inline":true,"label":"Backtracking","permalink":"/solutions/tags/backtracking"}],"version":"current","sidebarPosition":51,"frontMatter":{"description":"Author: @ColeB2 | https://leetcode.com/problems/n-queens/","tags":["Array","Backtracking"]},"sidebar":"tutorialSidebar","previous":{"title":"0050 - Pow(x, n) (Medium)","permalink":"/solutions/0000-0099/pow-x-n-medium"},"next":{"title":"0053 - Maximum Subarray (Medium)","permalink":"/solutions/0000-0099/maximum-subarray-medium"}}');var t=s(74848),r=s(28453);const i={description:"Author: @ColeB2 | https://leetcode.com/problems/n-queens/",tags:["Array","Backtracking"]},l="0051 - N-Queens (Hard)",c={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Backtracking",id:"approach-1-backtracking",level:2}];function h(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",...(0,r.R)(),...e.components},{SolutionAuthor:s,TabItem:a,Tabs:i}=n;return s||m("SolutionAuthor",!0),a||m("TabItem",!0),i||m("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"0051---n-queens-hard",children:"0051 - N-Queens (Hard)"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/n-queens/",children:"https://leetcode.com/problems/n-queens/"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"n-queens"})," puzzle is the problem of placing ",(0,t.jsx)(n.code,{children:"n"})," queens on an ",(0,t.jsx)(n.code,{children:"n x n"})," chessboard such that no two queens attack each other."]}),"\n",(0,t.jsxs)(n.p,{children:["Given an integer ",(0,t.jsx)(n.code,{children:"n"}),", return ",(0,t.jsxs)(n.em,{children:["all distinct solutions to the ",(0,t.jsx)(n.strong,{children:"n-queens puzzle"})]}),". You may return the answer in ",(0,t.jsx)(n.strong,{children:"any"})," order."]}),"\n",(0,t.jsxs)(n.p,{children:["Each solution contains a distinct board configuration of the n-queens' placement, where ",(0,t.jsx)(n.code,{children:"'Q'"})," and ",(0,t.jsx)(n.code,{children:"'.'"})," both indicate a queen and an empty space, respectively."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2020/11/13/queens.jpg",alt:""})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Input: n = 4\nOutput: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]\nExplanation: There exist two distinct solutions to the 4-queens puzzle as shown above\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Input: n = 1\nOutput: [["Q"]]\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"1 <= n <= 9"})}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-backtracking",children:"Approach 1: Backtracking"}),"\n",(0,t.jsx)(n.p,{children:"Once you understand how the queen moves, which is straight in both the orthogonal and diagonal directions, then it becomes a fairly straightforward backtracking problem."}),"\n",(0,t.jsx)(n.p,{children:"Knowing how a queen moves, we know we can only place one queen per row, so for each row we have to find a valid square to place the queen. So the backtracking comes in by trying to place a queen on all valid squares and continuing, and if it ever doesn't work, we backtrack and try the next valid square in that row."}),"\n",(0,t.jsxs)(n.p,{children:["How do we track valid squares? We can use sets for ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mn,{children:"1"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord",children:"1"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]})," access, to see if the square is valid. We know we can only ever place one queen in any row, so no need to use a set there as we can track our row during our backtracking and just move on to the next row. We can also easily use a set to track valid columns, by just adding the current column of the queen we just placed into the set. How do we track diagonals?"]}),"\n",(0,t.jsx)(n.p,{children:"We will use 2 sets, one for diagonal going forward, and one for diagonal going backwards. That is any diagonal going from left to right, bottom to top will all have the same coordinate integer if we add the row and columns together. Also any diagonal going from right to left, bottom to top, will also have the same coordinate integer if we subtract the row from the column position. See the below diagram."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"4x4 Board\nDiagonals\nx  0 1 2 3\n  ---------\n0 |0 1 2 3\n1 |1 2 3 4\n2 |2 3 4 5\n3 |3 4 5 6\nBackward Diagonals\nx   0  1  2 3\n  -----------\n0 | 0  1  2 3\n1 |-1  0  1 2 \n2 |-2 -1  0 1\n3 |-3 -2 -1 0\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Time Complexity: ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"!"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n!)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(n.span,{className:"mclose",children:"!)"})]})})]})," where n is the size of the board. You can imagine we have n choice to make for the first row, then after that for each choice we have ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mo,{children:"\u2212"}),(0,t.jsx)(n.mn,{children:"1"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"n-1"})]})})}),(0,t.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(n.span,{className:"mbin",children:"\u2212"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"1"})]})]})]})," choices for the 2nd row, and ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mo,{children:"\u2212"}),(0,t.jsx)(n.mn,{children:"2"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"n-2"})]})})}),(0,t.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(n.span,{className:"mbin",children:"\u2212"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"2"})]})]})]})," for the 3rd, etc. as placing a queen removes that column from each row."]}),"\n",(0,t.jsxs)(n.p,{children:["Space Complexity: ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsxs)(n.msup,{children:[(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mn,{children:"2"})]}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n^2)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsxs)(n.span,{className:"mord",children:[(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(n.span,{className:"msupsub",children:(0,t.jsx)(n.span,{className:"vlist-t",children:(0,t.jsx)(n.span,{className:"vlist-r",children:(0,t.jsx)(n.span,{className:"vlist",style:{height:"0.8141em"},children:(0,t.jsxs)(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(n.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]})," our board will be of size ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mo,{children:"\u2217"}),(0,t.jsx)(n.mi,{children:"n"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"n*n"})]})})}),(0,t.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.4653em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(n.span,{className:"mbin",children:"\u2217"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"})]})]})]}),"."]}),"\n",(0,t.jsx)(i,{children:(0,t.jsxs)(a,{value:"python",label:"Python",children:[(0,t.jsx)(s,{name:"@ColeB2"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"class Solution:\n    def solveNQueens(self, n: int) -> List[List[str]]:\n        # initialize our return list and our board\n        n_queens = []\n        # Note our board will be a list of lists where each cell is\n        # a list containing a string character. As this gives us \n        # more efficient access to each cell to replace it with\n        # either a 'Q' or a '.'\n        board = [['.'] * n for _ in range(n)]\n        # Our sets to track valid squares.\n        col, dia, dia_b = set(), set(), set()\n        # recursive backtracking algorithm\n        def backtracking(r):\n            # if our row, r every reaches n. It means we successfully\n            # placed a queen in all n rows.\n            if r == n:\n                # create a copy of the board, join method will join\n                # all our list of strings, into a single string for that\n                # row. ie: ['.']['.']['.']['Q'] => ['...Q']\n                board_copy = [''.join(row) for row in board]\n                n_queens.append(board_copy)\n                return\n            # check all our columns in current row.\n            for c in range(n):\n                # check if square is valid, if it isn't backtrack.\n                if c in col or (r + c) in dia or (c - r) in dia_b:\n                    continue\n                # found valid square, add the squares queen touches\n                # to the proper sets.\n                col.add(c)\n                dia.add(r + c)\n                dia_b.add(c - r)\n                # update board to reflect\n                board[r][c] = 'Q'\n                # continue down the decision tree onto the next row.\n                backtracking(r + 1)\n                # Backtrack from previous call-> remove all values\n                # from the sets\n                col.remove(c)\n                dia.remove(r + c)\n                dia_b.remove(c - r)\n                # reset that board position for the next iteration.\n                board[r][c] = '.'\n        # call the algorithm starting at 0, and return our answer.\n        backtracking(0)\n        return n_queens\n\n"})})]})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var a=s(96540);const t={},r=a.createContext(t);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);