"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[14763],{71282:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"2100-2199/cells-in-a-range-on-an-excel-sheet-easy","title":"2194 - Cells in a Range on an Excel Sheet (Easy)","description":"Author: @wkw | https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/","source":"@site/solutions/2100-2199/2194-cells-in-a-range-on-an-excel-sheet-easy.md","sourceDirName":"2100-2199","slug":"/2100-2199/cells-in-a-range-on-an-excel-sheet-easy","permalink":"/solutions/2100-2199/cells-in-a-range-on-an-excel-sheet-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2194-cells-in-a-range-on-an-excel-sheet-easy.md","tags":[],"version":"current","sidebarPosition":2194,"frontMatter":{"description":"Author: @wkw | https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/"},"sidebar":"tutorialSidebar","previous":{"title":"2193 - Minimum Number of Moves to Make Palindrome (Hard)","permalink":"/solutions/2100-2199/minimum-number-of-moves-to-make-palindrome-hard"},"next":{"title":"2195 - Append K Integers With Minimal Sum (Medium)","permalink":"/solutions/2100-2199/append-k-integers-with-minimal-sum-medium"}}');var r=n(86070),t=n(32790);const a={description:"Author: @wkw | https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/"},c="2194 - Cells in a Range on an Excel Sheet (Easy)",i={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Loops",id:"approach-1-loops",level:2}];function h(e){const s={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{SolutionAuthor:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"2194---cells-in-a-range-on-an-excel-sheet-easy",children:"2194 - Cells in a Range on an Excel Sheet (Easy)"})}),"\n",(0,r.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/",children:"https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/"})}),"\n",(0,r.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(s.p,{children:["A cell ",(0,r.jsx)(s.code,{children:"(r, c)"})," of an excel sheet is represented as a string ",(0,r.jsx)(s.code,{children:'"<col><row>"'})," where:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"<col>"})," denotes the column number ",(0,r.jsx)(s.code,{children:"c"})," of the cell. It is represented by ",(0,r.jsx)(s.strong,{children:"alphabetical letters"}),".","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["For example, the ",(0,r.jsx)(s.code,{children:"1st"})," column is denoted by ",(0,r.jsx)(s.code,{children:"'A'"}),", the ",(0,r.jsx)(s.code,{children:"2nd"})," by ",(0,r.jsx)(s.code,{children:"'B'"}),", the ",(0,r.jsx)(s.code,{children:"3rd"})," by ",(0,r.jsx)(s.code,{children:"'C'"}),", and so on."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"<row>"})," is the row number ",(0,r.jsx)(s.code,{children:"r"})," of the cell. The ",(0,r.jsx)(s.code,{children:"rth"})," row is represented by the ",(0,r.jsx)(s.strong,{children:"integer"})," ",(0,r.jsx)(s.code,{children:"r"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["You are given a string ",(0,r.jsx)(s.code,{children:"s"})," in the format ",(0,r.jsx)(s.code,{children:'"<col1><row1>:<col2><row2>"'}),", where ",(0,r.jsx)(s.code,{children:"<col1>"})," represents the column ",(0,r.jsx)(s.code,{children:"c1"}),", ",(0,r.jsx)(s.code,{children:"<row1>"})," represents the row ",(0,r.jsx)(s.code,{children:"r1"}),", ",(0,r.jsx)(s.code,{children:"<col2>"})," represents the column ",(0,r.jsx)(s.code,{children:"c2"}),", and ",(0,r.jsx)(s.code,{children:"<row2>"})," represents the row ",(0,r.jsx)(s.code,{children:"r2"}),", such that ",(0,r.jsx)(s.code,{children:"r1 <= r2"})," and ",(0,r.jsx)(s.code,{children:"c1 <= c2"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Return ",(0,r.jsxs)(s.em,{children:["the ",(0,r.jsx)(s.strong,{children:"list of cells"})]})," ",(0,r.jsx)(s.code,{children:"(x, y)"})," ",(0,r.jsx)(s.em,{children:"such that"})," ",(0,r.jsx)(s.code,{children:"r1 <= x <= r2"})," ",(0,r.jsx)(s.em,{children:"and"})," ",(0,r.jsx)(s.code,{children:"c1 <= y <= c2"}),". The cells should be represented as ",(0,r.jsx)(s.strong,{children:"strings"})," in the format mentioned above and be sorted in ",(0,r.jsx)(s.strong,{children:"non-decreasing"})," order first by columns and then by rows."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://assets.leetcode.com/uploads/2022/02/08/ex1drawio.png",alt:""})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'Input: s = "K1:L2"\nOutput: ["K1","K2","L1","L2"]\nExplanation:\nThe above diagram shows the cells which should be present in the list.\nThe red arrows denote the order in which the cells should be presented.\n'})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:"https://assets.leetcode.com/uploads/2022/02/09/exam2drawio.png",alt:""})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'Input: s = "A1:F1"\nOutput: ["A1","B1","C1","D1","E1","F1"]\nExplanation:\nThe above diagram shows the cells which should be present in the list.\nThe red arrow denotes the order in which the cells should be presented.\n'})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"s.length == 5"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"'A' <= s[0] <= s[3] <= 'Z'"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"'1' <= s[1] <= s[4] <= '9'"})}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"s"})," consists of uppercase English letters, digits and ",(0,r.jsx)(s.code,{children:"':'"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"approach-1-loops",children:"Approach 1: Loops"}),"\n",(0,r.jsxs)(s.p,{children:["Iterate each letter from ",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mi,{children:"s"}),(0,r.jsx)(s.mo,{stretchy:"false",children:"["}),(0,r.jsx)(s.mn,{children:"0"}),(0,r.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"s[0]"})]})})}),(0,r.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,r.jsx)(s.span,{className:"mopen",children:"["}),(0,r.jsx)(s.span,{className:"mord",children:"0"}),(0,r.jsx)(s.span,{className:"mclose",children:"]"})]})})]})," to ",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mi,{children:"s"}),(0,r.jsx)(s.mo,{stretchy:"false",children:"["}),(0,r.jsx)(s.mn,{children:"3"}),(0,r.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"s[3]"})]})})}),(0,r.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,r.jsx)(s.span,{className:"mopen",children:"["}),(0,r.jsx)(s.span,{className:"mord",children:"3"}),(0,r.jsx)(s.span,{className:"mclose",children:"]"})]})})]})," and iterate each number from ",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mi,{children:"s"}),(0,r.jsx)(s.mo,{stretchy:"false",children:"["}),(0,r.jsx)(s.mn,{children:"1"}),(0,r.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"s[1]"})]})})}),(0,r.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,r.jsx)(s.span,{className:"mopen",children:"["}),(0,r.jsx)(s.span,{className:"mord",children:"1"}),(0,r.jsx)(s.span,{className:"mclose",children:"]"})]})})]})," to ",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mi,{children:"s"}),(0,r.jsx)(s.mo,{stretchy:"false",children:"["}),(0,r.jsx)(s.mn,{children:"4"}),(0,r.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"s[4]"})]})})}),(0,r.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,r.jsx)(s.span,{className:"mopen",children:"["}),(0,r.jsx)(s.span,{className:"mord",children:"4"}),(0,r.jsx)(s.span,{className:"mclose",children:"]"})]})})]})," to build the answer."]}),"\n",(0,r.jsx)(n,{name:"@wkw"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<string> cellsInRange(string s) {\n        vector<string> ans;\n        // iterate each letter\n        for (char x = s[0]; x <= s[3]; x++) {\n            // iterate each number\n            for (int y = s[1] - '0'; y <= s[4] - '0'; y++) {\n                // build the answer\n                ans.push_back(x + to_string(y));\n            }\n        }\n        return ans;\n    }\n};\n"})})]})}function d(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},32790:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>c});var l=n(30758);const r={},t=l.createContext(r);function a(e){const s=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),l.createElement(t.Provider,{value:s},e.children)}}}]);