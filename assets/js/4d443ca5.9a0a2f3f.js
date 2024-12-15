"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[16123],{94877:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>o,frontMatter:()=>i,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"0000-0099/valid-sudoku-easy","title":"0036 - Valid Sudoku (Easy)","description":"Author: @vigneshshiv, @radojicic23 | https://leetcode.com/problems/valid-sudoku/","source":"@site/solutions/0000-0099/0036-valid-sudoku-easy.md","sourceDirName":"0000-0099","slug":"/0000-0099/valid-sudoku-easy","permalink":"/solutions/0000-0099/valid-sudoku-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0036-valid-sudoku-easy.md","tags":[],"version":"current","sidebarPosition":36,"frontMatter":{"description":"Author: @vigneshshiv, @radojicic23 | https://leetcode.com/problems/valid-sudoku/"},"sidebar":"tutorialSidebar","previous":{"title":"0035 - Search Insert Position (Easy)","permalink":"/solutions/0000-0099/search-insert-position-easy"},"next":{"title":"0037 - Sudoku Solver (Hard)","permalink":"/solutions/0000-0099/sudoku-solver-hard"}}');var l=n(74848),r=n(28453);const i={description:"Author: @vigneshshiv, @radojicic23 | https://leetcode.com/problems/valid-sudoku/"},t="0036 - Valid Sudoku (Easy)",c={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: HashSet",id:"approach-1-hashset",level:2},{value:"Approach 2: Standard",id:"approach-2-standard",level:2}];function d(s){const e={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...s.components},{SolutionAuthor:n,TabItem:a,Tabs:i}=e;return n||m("SolutionAuthor",!0),a||m("TabItem",!0),i||m("Tabs",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"0036---valid-sudoku-easy",children:"0036 - Valid Sudoku (Easy)"})}),"\n",(0,l.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://leetcode.com/problems/valid-sudoku/",children:"https://leetcode.com/problems/valid-sudoku/"})}),"\n",(0,l.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,l.jsxs)(e.p,{children:["Determine if a ",(0,l.jsx)(e.code,{children:"9 x 9"})," Sudoku board is valid. Only the filled cells need to be validated ",(0,l.jsx)(e.strong,{children:"according to the following rules:"})]}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["Each row must contain the digits ",(0,l.jsx)(e.code,{children:"1-9"})," without repetition."]}),"\n",(0,l.jsxs)(e.li,{children:["Each column must contain the digits ",(0,l.jsx)(e.code,{children:"1-9"})," without repetition."]}),"\n",(0,l.jsxs)(e.li,{children:["Each of the nine ",(0,l.jsx)(e.code,{children:"3 x 3"})," sub-boxes of the grid must contain the digits ",(0,l.jsx)(e.code,{children:"1-9"})," without repetition."]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Note:"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"A Sudoku board (partially filled) could be valid but is not necessarily solvable."}),"\n",(0,l.jsx)(e.li,{children:"Only the filled cells need to be validated according to the mentioned rules."}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"5 3 .  . 7 .  . . .  \n6 . .  1 9 5  . . .  \n. 9 8  . . .  . 6 .  \n\n8 . .  . 6 .  . . 3  \n4 . .  8 . 3  . . 1  \n7 . .  . 2 .  . . 6  \n\n. 6 .  . . .  2 8 .  \n. . .  4 1 9  . . 5  \n. . .  . 8 .  . 7 9 \n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'Input: board = \n[["5","3",".",".","7",".",".",".","."]\n,["6",".",".","1","9","5",".",".","."]\n,[".","9","8",".",".",".",".","6","."]\n,["8",".",".",".","6",".",".",".","3"]\n,["4",".",".","8",".","3",".",".","1"]\n,["7",".",".",".","2",".",".",".","6"]\n,[".","6",".",".",".",".","2","8","."]\n,[".",".",".","4","1","9",".",".","5"]\n,[".",".",".",".","8",".",".","7","9"]]\nOutput: true\n'})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'Input: board = \n[["8","3",".",".","7",".",".",".","."]\n,["6",".",".","1","9","5",".",".","."]\n,[".","9","8",".",".",".",".","6","."]\n,["8",".",".",".","6",".",".",".","3"]\n,["4",".",".","8",".","3",".",".","1"]\n,["7",".",".",".","2",".",".",".","6"]\n,[".","6",".",".",".",".","2","8","."]\n,[".",".",".","4","1","9",".",".","5"]\n,[".",".",".",".","8",".",".","7","9"]]\nOutput: false\nExplanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8\'s in the top left 3x3 sub-box, it is invalid.\n'})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"board.length == 9"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"board[i].length == 9"})}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"board[i][j]"})," is a digit ",(0,l.jsx)(e.code,{children:"1-9"})," or ",(0,l.jsx)(e.code,{children:"'.'"}),"."]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"approach-1-hashset",children:"Approach 1: HashSet"}),"\n",(0,l.jsxs)(e.p,{children:["Every value in the row or column or ",(0,l.jsx)(e.code,{children:"3 x 3"})," block, the value is unique, With the help of this simple logic, add the Numbers in the HashSet, Add ",(0,l.jsx)(e.code,{children:"num"})," value for ",(0,l.jsx)(e.code,{children:"m"}),"th row and for ",(0,l.jsx)(e.code,{children:"n"}),"th column and the same for ",(0,l.jsx)(e.code,{children:"3 x 3"})," matrix."]}),"\n",(0,l.jsxs)(e.p,{children:["If the same value repeat again for the same row or column or ",(0,l.jsx)(e.code,{children:"3 x 3"})," block, then the given sudoku is not valid, otherwise is valid."]}),"\n",(0,l.jsxs)(e.p,{children:["Time Complexity: ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"O"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"m"}),(0,l.jsx)(e.mo,{children:"\u2217"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(m * n)"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})]})]}),", where ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"m"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"m"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"m"})]})})]})," - # of rows, ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"n"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]})," - # of columns,"]}),"\n",(0,l.jsxs)(e.p,{children:["Space complexity: ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"O"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})})]}),", since the values are fixed for ",(0,l.jsx)(e.code,{children:"9 x 9"})," board"]}),"\n",(0,l.jsxs)(i,{children:[(0,l.jsxs)(a,{value:"java",label:"Java",children:[(0,l.jsx)(n,{name:"@vigneshshiv"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-java",children:'class Solution {\n    public boolean isValidSudoku(char[][] board) {\n        Set<String> seen = new HashSet<>();\n        for (int r = 0; r < 9; r++) {\n            for (int c = 0; c < 9; c++) {\n                int num = board[r][c];\n                if (num != \'.\') {\n                    if (!seen.add(num + " in row " + r) || !seen.add(num + " in column " + c)\n                            || !seen.add(num + " in block " + (r / 3) + "-" + (c / 3))) {\n                        return false;\n                    }\n                }\n            }\n        }\n        return true;\n    }\n}\n'})})]}),(0,l.jsxs)(a,{value:"python",label:"Python",children:[(0,l.jsx)(n,{name:"@radojicic23"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'class Solution:\n    def isValidSudoku(self, board: List[List[str]]) -> bool:\n        cols = collections.defaultdict(set)\n        rows = collections.defaultdict(set)\n        squares = collections.defaultdict(set)\n        \n        for r in range(9):\n            for c in range(9):\n                # if it\'s empty skip it\n                if board[r][c] == ".":\n                    continue\n                # have we found a duplicate \n                if (board[r][c] in rows[r] or \n                    board[r][c] in cols[c] or \n                    board[r][c] in squares[(r // 3, c // 3)]):\n                    return False\n                # if it is valid\n                cols[c].add(board[r][c])\n                rows[r].add(board[r][c])\n                squares[(r // 3, c // 3)].add(board[r][c])\n        # if we never detect duplicates\n        return True\n'})})]})]}),"\n",(0,l.jsx)(e.h2,{id:"approach-2-standard",children:"Approach 2: Standard"}),"\n",(0,l.jsxs)(e.p,{children:["Iterate over rows and columns and ",(0,l.jsx)(e.code,{children:"3 x 3"})," block to check if the number is repeats."]}),"\n",(0,l.jsxs)(e.p,{children:["Since, it's easier to find the duplicate number on the same row or column. But how to find the ",(0,l.jsx)(e.code,{children:"3 x 3"})," block for any given index in the grid."]}),"\n",(0,l.jsxs)(e.p,{children:["For example, first ",(0,l.jsx)(e.code,{children:"3 x 3"})," starts and end in the range of ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mn,{children:"0"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mn,{children:"0"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"(0, 0)"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord",children:"0"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord",children:"0"}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})})]})," to ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"(2, 2)"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})})]}),". Suppose, if we are in the cell of ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"(1, 2)"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})})]}),", how to find the start range of this cell which is same above mentioned."]}),"\n",(0,l.jsxs)(e.p,{children:["It's simple, just ",(0,l.jsx)(e.code,{children:"row - row % sqrt(board.length)"}),", Either we can use ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"s"}),(0,l.jsx)(e.mi,{children:"q"}),(0,l.jsx)(e.mi,{children:"r"}),(0,l.jsx)(e.mi,{children:"t"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"sqrt"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"t"})]})})]})," approach or just use 3, since we know here Sudoku is ",(0,l.jsx)(e.code,{children:"9 x 9"})," matrix."]}),"\n",(0,l.jsxs)(e.p,{children:["For the above said cell ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"(1, 2)"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})})]}),", start range of this block is ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mn,{children:"0"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mn,{children:"0"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"(0, 0)"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord",children:"0"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord",children:"0"}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})})]}),", since the start is clear, end is always within ",(0,l.jsx)(e.code,{children:"3 x 3"})," from the start index."]}),"\n",(0,l.jsxs)(e.p,{children:["Time complexity: ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"O"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n^2)"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["Space complexity: ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"O"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,l.jsx)(i,{children:(0,l.jsxs)(a,{value:"java",label:"Java",children:[(0,l.jsx)(n,{name:"@vigneshshiv"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-java",children:"class Solution {\n    public boolean isValidSudoku(char[][] board) {\n        for (int row = 0; row < board.length; row++) {\n            for (int col = 0; col < board[0].length; col++) {\n                if (board[row][col] != '.' && !isValid(board, row, col, board[row][col])) {\n                    return false;\n                }\n            }\n        }\n        return true;\n    }\n    \n    public boolean isValid(char[][] board, int row, int col, int num) {\n        // Check the row, from col 0 to 8\n        for (int i = 0; i < board.length; i++) {\n            if (i != col && board[row][i] == num) {\n                return false;\n            }\n        }\n        // Check the column, from row 0 to row 8\n        for (int i = 0; i < board[0].length; i++) {\n            if (i != row && board[i][col] == num) {\n                return false;\n            }\n        }\n        //\n        int sqrt = (int) Math.sqrt(board.length);\n        int rowStart = row - row % sqrt;\n        int colStart = col - col % sqrt;\n        for (int r = rowStart; r < rowStart + sqrt; r++) {\n            for (int c = colStart; c < colStart + sqrt; c++) {\n                if (row != r && col != c && board[r][c] == num) {\n                    return false;\n                }\n            }\n        }\n        return true;\n    }\n}\n"})})]})})]})}function o(s={}){const{wrapper:e}={...(0,r.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(d,{...s})}):d(s)}function m(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(s,e,n)=>{n.d(e,{R:()=>i,x:()=>t});var a=n(96540);const l={},r=a.createContext(l);function i(s){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:i(s.components),a.createElement(r.Provider,{value:e},s.children)}}}]);