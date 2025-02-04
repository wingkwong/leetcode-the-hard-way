"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[20214],{66699:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"2100-2199/count-array-pairs-divisible-by-k-hard","title":"2183 - Count Array Pairs Divisible by K (Hard)","description":"Author: @TBC | https://leetcode.com/problems/count-array-pairs-divisible-by-k/","source":"@site/solutions/2100-2199/2183-count-array-pairs-divisible-by-k-hard.md","sourceDirName":"2100-2199","slug":"/2100-2199/count-array-pairs-divisible-by-k-hard","permalink":"/solutions/2100-2199/count-array-pairs-divisible-by-k-hard","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2183-count-array-pairs-divisible-by-k-hard.md","tags":[],"version":"current","sidebarPosition":2183,"frontMatter":{"description":"Author: @TBC | https://leetcode.com/problems/count-array-pairs-divisible-by-k/"},"sidebar":"tutorialSidebar","previous":{"title":"2180 - Count Integers With Even Digit Sum (Easy)","permalink":"/solutions/2100-2199/count-integers-with-even-digit-sum-easy"},"next":{"title":"2185 - Counting Words With a Given Prefix (Easy)","permalink":"/solutions/2100-2199/counting-words-with-a-given-prefix-easy"}}');var s=i(86070),t=i(32790);const o={description:"Author: @TBC | https://leetcode.com/problems/count-array-pairs-divisible-by-k/"},a="2183 - Count Array Pairs Divisible by K (Hard)",d={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: TBC",id:"approach-1-tbc",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"2183---count-array-pairs-divisible-by-k-hard",children:"2183 - Count Array Pairs Divisible by K (Hard)"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/count-array-pairs-divisible-by-k/",children:"https://leetcode.com/problems/count-array-pairs-divisible-by-k/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["Given a ",(0,s.jsx)(n.strong,{children:"0-indexed"})," integer array ",(0,s.jsx)(n.code,{children:"nums"})," of length ",(0,s.jsx)(n.code,{children:"n"})," and an integer ",(0,s.jsx)(n.code,{children:"k"}),", return ",(0,s.jsxs)(n.em,{children:["the ",(0,s.jsx)(n.strong,{children:"number of pairs"})]})," ",(0,s.jsx)(n.code,{children:"(i, j)"})," ",(0,s.jsx)(n.em,{children:"such that:"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"0 <= i < j <= n - 1"})," ",(0,s.jsx)(n.em,{children:"and"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"nums[i] * nums[j]"})," ",(0,s.jsx)(n.em,{children:"is divisible by"})," ",(0,s.jsx)(n.code,{children:"k"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: nums = [1,2,3,4,5], k = 2\nOutput: 7\nExplanation:\nThe 7 pairs of indices whose corresponding products are divisible by 2 are\n(0, 1), (0, 3), (1, 2), (1, 3), (1, 4), (2, 3), and (3, 4).\nTheir products are 2, 4, 6, 8, 10, 12, and 20 respectively.\nOther pairs such as (0, 2) and (2, 4) have products 3 and 15 respectively, which are not divisible by 2.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: nums = [1,2,3,4], k = 5\nOutput: 0\nExplanation: There does not exist any pair of indices whose corresponding product is divisible by 5.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= nums.length <= 10^5"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= nums[i], k <= 10^5"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-tbc",children:"Approach 1: TBC"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},32790:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var r=i(30758);const s={},t=r.createContext(s);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);