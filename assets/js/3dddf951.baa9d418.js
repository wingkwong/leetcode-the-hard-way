"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[68439],{44930:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"1900-1999/largest-odd-number-in-string-easy","title":"1903 - Largest Odd Number in String (Easy)","description":"Author: @wingkwong, @jit | https://leetcode.com/problems/largest-odd-number-in-string/","source":"@site/solutions/1900-1999/1903-largest-odd-number-in-string-easy.md","sourceDirName":"1900-1999","slug":"/1900-1999/largest-odd-number-in-string-easy","permalink":"/solutions/1900-1999/largest-odd-number-in-string-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1900-1999/1903-largest-odd-number-in-string-easy.md","tags":[{"inline":true,"label":"Math","permalink":"/solutions/tags/math"},{"inline":true,"label":"String","permalink":"/solutions/tags/string"},{"inline":true,"label":"Greedy","permalink":"/solutions/tags/greedy"}],"version":"current","sidebarPosition":1903,"frontMatter":{"description":"Author: @wingkwong, @jit | https://leetcode.com/problems/largest-odd-number-in-string/","tags":["Math","String","Greedy"]},"sidebar":"tutorialSidebar","previous":{"title":"1900 - 1999","permalink":"/solutions/category/1900---1999"},"next":{"title":"1913 - Maximum Product Difference Between Two Pairs (Easy)","permalink":"/solutions/1900-1999/maximum-product-difference-between-two-pairs-easy"}}');var a=s(74848),t=s(28453);const i={description:"Author: @wingkwong, @jit | https://leetcode.com/problems/largest-odd-number-in-string/",tags:["Math","String","Greedy"]},l="1903 - Largest Odd Number in String (Easy)",m={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Retain from last odd number",id:"approach-1-retain-from-last-odd-number",level:2}];function o(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{SolutionAuthor:s,TabItem:r,Tabs:i}=n;return s||h("SolutionAuthor",!0),r||h("TabItem",!0),i||h("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"1903---largest-odd-number-in-string-easy",children:"1903 - Largest Odd Number in String (Easy)"})}),"\n",(0,a.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://leetcode.com/problems/largest-odd-number-in-string/",children:"https://leetcode.com/problems/largest-odd-number-in-string/"})}),"\n",(0,a.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(n.p,{children:["You are given a string ",(0,a.jsx)(n.code,{children:"num"}),", representing a large integer. Return ",(0,a.jsxs)(n.em,{children:["the ",(0,a.jsx)(n.strong,{children:"largest-valued odd"})," integer (as a string) that is a ",(0,a.jsx)(n.strong,{children:"non-empty substring"})," of"]}),(0,a.jsx)(n.code,{children:"num"}),(0,a.jsx)(n.em,{children:", or an empty string"}),(0,a.jsx)(n.code,{children:'""'}),(0,a.jsx)(n.em,{children:"if no odd integer exists"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.strong,{children:"substring"})," is a contiguous sequence of characters within a string."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'Input: num = "52"\nOutput: "5"\nExplanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'Input: num = "4206"\nOutput: ""\nExplanation: There are no odd numbers in "4206".\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'Input: num = "35427"\nOutput: "35427"\nExplanation: "35427" is already an odd number.\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mn,{children:"1"}),(0,a.jsx)(n.mo,{children:"<"}),(0,a.jsx)(n.mo,{children:"="}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mi,{children:"u"}),(0,a.jsx)(n.mi,{children:"m"}),(0,a.jsx)(n.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(n.mi,{children:"l"}),(0,a.jsx)(n.mi,{children:"e"}),(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mi,{children:"g"}),(0,a.jsx)(n.mi,{children:"t"}),(0,a.jsx)(n.mi,{children:"h"}),(0,a.jsx)(n.mo,{children:"<"}),(0,a.jsx)(n.mo,{children:"="}),(0,a.jsx)(n.mn,{children:"1"}),(0,a.jsxs)(n.msup,{children:[(0,a.jsx)(n.mn,{children:"0"}),(0,a.jsx)(n.mn,{children:"5"})]})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"1 <= num.length <= 10 ^ 5"})]})})}),(0,a.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,a.jsx)(n.span,{className:"mord",children:"1"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(n.span,{className:"mrel",children:"<="}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(n.span,{className:"mord",children:"."}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"h"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(n.span,{className:"mrel",children:"<="}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.8141em"}}),(0,a.jsx)(n.span,{className:"mord",children:"1"}),(0,a.jsxs)(n.span,{className:"mord",children:[(0,a.jsx)(n.span,{className:"mord",children:"0"}),(0,a.jsx)(n.span,{className:"msupsub",children:(0,a.jsx)(n.span,{className:"vlist-t",children:(0,a.jsx)(n.span,{className:"vlist-r",children:(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(n.span,{className:"mord mtight",children:"5"})})]})})})})})]})]})]})]})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"num"})," only consists of digits and does not contain any leading zeros."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"approach-1-retain-from-last-odd-number",children:"Approach 1: Retain from last odd number"}),"\n",(0,a.jsx)(n.p,{children:"A number is odd as long as the last digit is odd. Therefore, we can search the last odd digit in the string and build the substring."}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsxs)(r,{value:"py",label:"Python",children:[(0,a.jsx)(s,{name:"@wingkwong"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"class Solution:\n    def largestOddNumber(self, num: str) -> str:\n        last = -1\n        for i in range(len(num)):\n            if int(num[i]) & 1:\n                last = i\n        return num[:last + 1]\n"})})]}),(0,a.jsxs)(r,{value:"erlang",label:"Erlang",children:[(0,a.jsx)(s,{name:"@jit"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-erlang",children:'-spec largest_odd_number(Num :: unicode:unicode_binary()) -> unicode:unicode_binary().\n%% Retain from last odd number:\nlargest_odd_number(Num) ->\n  {Leading, _} = string:take(Num, "13579", true, trailing),\n  Leading.\n'})})]})]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var r=s(96540);const a={},t=r.createContext(a);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);