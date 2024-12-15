"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[25915],{20071:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"2200-2299/maximum-consecutive-floors-without-special-floors-medium","title":"2274 - Maximum Consecutive Floors Without Special Floors (Medium)","description":"Author: @wingkwong | https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors","source":"@site/solutions/2200-2299/2274-maximum-consecutive-floors-without-special-floors-medium.md","sourceDirName":"2200-2299","slug":"/2200-2299/maximum-consecutive-floors-without-special-floors-medium","permalink":"/solutions/2200-2299/maximum-consecutive-floors-without-special-floors-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2274-maximum-consecutive-floors-without-special-floors-medium.md","tags":[],"version":"current","sidebarPosition":2274,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors"},"sidebar":"tutorialSidebar","previous":{"title":"2273 - Find Resultant Array After Removing Anagrams (Easy)","permalink":"/solutions/2200-2299/find-resultant-array-after-removing-anagrams-easy"},"next":{"title":"2275 - Largest Combination With Bitwise AND Greater Than Zero (Medium)","permalink":"/solutions/2200-2299/largest-combination-with-bitwise-and-greater-than-zero-medium"}}');var i=a(74848),l=a(28453);const t={description:"Author: @wingkwong | https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors"},r="2274 - Maximum Consecutive Floors Without Special Floors (Medium)",m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting",id:"approach-1-sorting",level:2}];function o(s){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.R)(),...s.components},{SolutionAuthor:a}=e;return a||function(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"2274---maximum-consecutive-floors-without-special-floors-medium",children:"2274 - Maximum Consecutive Floors Without Special Floors (Medium)"})}),"\n",(0,i.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors",children:"https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors"})}),"\n",(0,i.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(e.p,{children:["Alice manages a company and has rented some floors of a building as office space. Alice has decided some of these floors should be ",(0,i.jsx)(e.strong,{children:"special floors"}),", used for relaxation only."]}),"\n",(0,i.jsxs)(e.p,{children:["You are given two integers ",(0,i.jsx)(e.code,{children:"bottom"})," and ",(0,i.jsx)(e.code,{children:"top"}),", which denote that Alice has rented all the floors from ",(0,i.jsx)(e.code,{children:"bottom"})," to ",(0,i.jsx)(e.code,{children:"top"})," (",(0,i.jsx)(e.strong,{children:"inclusive"}),"). You are also given the integer array ",(0,i.jsx)(e.code,{children:"special"}),", where ",(0,i.jsx)(e.code,{children:"special[i]"})," denotes a special floor that Alice has designated for relaxation."]}),"\n",(0,i.jsxs)(e.p,{children:["Return ",(0,i.jsxs)(e.em,{children:["the ",(0,i.jsx)(e.strong,{children:"maximum"})," number of consecutive floors without a special floor"]}),"."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: bottom = 2, top = 9, special = [4,6]\nOutput: 3\nExplanation: The following are the ranges (inclusive) of consecutive floors without a special floor:\n- (2, 3) with a total amount of 2 floors.\n- (5, 5) with a total amount of 1 floor.\n- (7, 9) with a total amount of 3 floors.\nTherefore, we return the maximum number which is 3 floors.\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: bottom = 6, top = 8, special = [7,6,8]\nOutput: 0\nExplanation: Every floor rented is a special floor, so we return 0.\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"1 <= special.length <= 10^5"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"1 <= bottom <= special[i] <= top <= 10^9"})}),"\n",(0,i.jsxs)(e.li,{children:["All the values of ",(0,i.jsx)(e.code,{children:"special"})," are ",(0,i.jsx)(e.strong,{children:"unique"}),"."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"approach-1-sorting",children:"Approach 1: Sorting"}),"\n",(0,i.jsxs)(e.p,{children:["We add ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"b"}),(0,i.jsx)(e.mi,{children:"o"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"o"}),(0,i.jsx)(e.mi,{children:"m"}),(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mn,{children:"1"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"bottom - 1"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"b"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"tt"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"})]})]})]})," and ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"o"}),(0,i.jsx)(e.mi,{children:"p"}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsx)(e.mn,{children:"1"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"top + 1"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"})]})]})]})," to the array ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"p"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"c"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsx)(e.mi,{children:"l"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"special"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"ec"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"ia"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"})]})})]})," and sort the array so that we can easily calculate consecutive floors between two special floors."]}),"\n",(0,i.jsxs)(e.p,{children:["The answer would be the maximum result of ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"p"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"c"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsx)(e.mi,{children:"l"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"["}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"p"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"c"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsx)(e.mi,{children:"l"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"["}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mn,{children:"1"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"special[i] - special[i - 1] - 1"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"ec"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"ia"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(e.span,{className:"mopen",children:"["}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mclose",children:"]"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"ec"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"ia"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(e.span,{className:"mopen",children:"["}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsx)(e.span,{className:"mclose",children:"]"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"})]})]})]})," for ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mo,{stretchy:"false",children:"["}),(0,i.jsx)(e.mn,{children:"1.."}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"i = [1 .. n)"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mopen",children:"["}),(0,i.jsx)(e.span,{className:"mord",children:"1.."}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mclose",children:")"})]})]})]}),"."]}),"\n",(0,i.jsx)(a,{name:"@wingkwong"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int maxConsecutive(int bottom, int top, vector<int>& special) {\n        int ans = 0;\n        special.push_back(bottom - 1);\n        special.push_back(top + 1);\n        sort(special.begin(), special.end());\n        for (int i = 1; i < special.size(); i++) {\n            ans = max(ans, special[i] - special[i - 1] - 1);\n        }\n        return ans;\n    }\n};\n"})})]})}function h(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(o,{...s})}):o(s)}},28453:(s,e,a)=>{a.d(e,{R:()=>t,x:()=>r});var n=a(96540);const i={},l=n.createContext(i);function t(s){const e=n.useContext(l);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:t(s.components),n.createElement(l.Provider,{value:e},s.children)}}}]);