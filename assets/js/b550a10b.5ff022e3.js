"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[28487],{99061:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"2200-2299/largest-combination-with-bitwise-and-greater-than-zero-medium","title":"2275 - Largest Combination With Bitwise AND Greater Than Zero (Medium)","description":"Author: @wingkwong | https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero","source":"@site/solutions/2200-2299/2275-largest-combination-with-bitwise-and-greater-than-zero-medium.md","sourceDirName":"2200-2299","slug":"/2200-2299/largest-combination-with-bitwise-and-greater-than-zero-medium","permalink":"/solutions/2200-2299/largest-combination-with-bitwise-and-greater-than-zero-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2275-largest-combination-with-bitwise-and-greater-than-zero-medium.md","tags":[],"version":"current","sidebarPosition":2275,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero"},"sidebar":"tutorialSidebar","previous":{"title":"2274 - Maximum Consecutive Floors Without Special Floors (Medium)","permalink":"/solutions/2200-2299/maximum-consecutive-floors-without-special-floors-medium"},"next":{"title":"2276 - Count Integers in Intervals (Hard)","permalink":"/solutions/2200-2299/count-integers-in-intervals-hard"}}');var s=t(74848),a=t(28453);const r={description:"Author: @wingkwong | https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero"},o="2275 - Largest Combination With Bitwise AND Greater Than Zero (Medium)",c={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Counting",id:"approach-1-counting",level:2}];function h(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"2275---largest-combination-with-bitwise-and-greater-than-zero-medium",children:"2275 - Largest Combination With Bitwise AND Greater Than Zero (Medium)"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero",children:"https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"bitwise AND"})," of an array ",(0,s.jsx)(n.code,{children:"nums"})," is the bitwise AND of all integers in ",(0,s.jsx)(n.code,{children:"nums"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For example, for ",(0,s.jsx)(n.code,{children:"nums = [1, 5, 3]"}),", the bitwise AND is equal to ",(0,s.jsx)(n.code,{children:"1 & 5 & 3 = 1"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Also, for ",(0,s.jsx)(n.code,{children:"nums = [7]"}),", the bitwise AND is ",(0,s.jsx)(n.code,{children:"7"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You are given an array of positive integers ",(0,s.jsx)(n.code,{children:"candidates"}),". Evaluate the ",(0,s.jsx)(n.strong,{children:"bitwise AND"})," of every ",(0,s.jsx)(n.strong,{children:"combination"})," of numbers of ",(0,s.jsx)(n.code,{children:"candidates"}),". Each number in ",(0,s.jsx)(n.code,{children:"candidates"})," may only be used ",(0,s.jsx)(n.strong,{children:"once"})," in each combination."]}),"\n",(0,s.jsxs)(n.p,{children:["Return ",(0,s.jsxs)(n.em,{children:["the size of the ",(0,s.jsx)(n.strong,{children:"largest"})," combination of"]})," ",(0,s.jsx)(n.code,{children:"candidates"})," ",(0,s.jsxs)(n.em,{children:["with a bitwise AND ",(0,s.jsx)(n.strong,{children:"greater"})," than"]})," ",(0,s.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: candidates = [16,17,71,62,12,24,14]\nOutput: 4\nExplanation: The combination [16,17,62,24] has a bitwise AND of 16 & 17 & 62 & 24 = 16 > 0.\nThe size of the combination is 4.\nIt can be shown that no combination with a size greater than 4 has a bitwise AND greater than 0.\nNote that more than one combination may have the largest size.\nFor example, the combination [62,12,24,14] has a bitwise AND of 62 & 12 & 24 & 14 = 8 > 0.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: candidates = [8,8]\nOutput: 2\nExplanation: The largest combination [8,8] has a bitwise AND of 8 & 8 = 8 > 0.\nThe size of the combination is 2, so we return 2.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= candidates.length <= 10^5"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= candidates[i] <= 10^7"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-counting",children:"Approach 1: Counting"}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsx)(n.mrow,{children:(0,s.jsx)(n.mi,{children:"i"})}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.6595em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"i"})]})})]}),"-th bit is set after performing AND operation on ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsx)(n.mrow,{children:(0,s.jsx)(n.mi,{children:"k"})}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.6944em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]})," candidates, it means the ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsx)(n.mrow,{children:(0,s.jsx)(n.mi,{children:"i"})}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.6595em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"i"})]})})]}),"-th of all ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsx)(n.mrow,{children:(0,s.jsx)(n.mi,{children:"k"})}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.6944em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]})," candidates must be 1. Therefore, we check each bit to see which bit has the most candidates with the bit set."]}),"\n",(0,s.jsx)(t,{name:"@wingkwong"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int largestCombination(vector<int>& candidates) {\n        int n = candidates.size(), ans = 0;\n        for (int i = 0; i < 32; i++) {\n            // init bits to  0 for each index\n            int bits = 0;\n            // iterate each candidate\n            for (int j = 0; j < n; j++) {\n                // i-th bit is set for candidates[j]\n                if ((1 << i) & candidates[j]) {\n                    // count the bit\n                    bits += 1;\n                }\n            }\n            // update the ans \n            ans = max(ans, bits);\n        }\n        return ans;\n    }\n};\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);