"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[22039],{33238:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>t,contentTitle:()=>m,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"1500-1599/count-odd-numbers-in-an-interval-range-easy","title":"1523 - Count Odd Numbers in an Interval Range (Easy)","description":"Author: @wingkwong | https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/","source":"@site/solutions/1500-1599/1523-count-odd-numbers-in-an-interval-range-easy.md","sourceDirName":"1500-1599","slug":"/1500-1599/count-odd-numbers-in-an-interval-range-easy","permalink":"/solutions/1500-1599/count-odd-numbers-in-an-interval-range-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1500-1599/1523-count-odd-numbers-in-an-interval-range-easy.md","tags":[],"version":"current","sidebarPosition":1523,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/"},"sidebar":"tutorialSidebar","previous":{"title":"1519 - Number of Nodes in the Sub-Tree With the Same Label (Medium)","permalink":"/solutions/1500-1599/number-of-nodes-in-the-sub-tree-with-the-same-label-medium"},"next":{"title":"1531 - String Compression II (Hard)","permalink":"/solutions/1500-1599/string-compression-ii-hard"}}');var l=n(74848),i=n(28453);const r={description:"Author: @wingkwong | https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/"},m="1523 - Count Odd Numbers in an Interval Range (Easy)",t={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Brute Force",id:"approach-1-brute-force",level:2},{value:"Approach 2: Math",id:"approach-2-math",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...s.components},{SolutionAuthor:n}=e;return n||function(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"1523---count-odd-numbers-in-an-interval-range-easy",children:"1523 - Count Odd Numbers in an Interval Range (Easy)"})}),"\n",(0,l.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/",children:"https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/"})}),"\n",(0,l.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,l.jsxs)(e.p,{children:["Given two non-negative integers ",(0,l.jsx)(e.code,{children:"low"})," and ",(0,l.jsx)(e.code,{children:"high"}),". Return the ",(0,l.jsx)(e.em,{children:"count of odd numbers between"})," ",(0,l.jsx)(e.code,{children:"low"})," ",(0,l.jsx)(e.em,{children:"and"})," ",(0,l.jsx)(e.code,{children:"high"})," ",(0,l.jsx)(e.em,{children:"(inclusive)"}),"."]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"Input: low = 3, high = 7\nOutput: 3\nExplanation: The odd numbers between 3 and 7 are [3,5,7].\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"Input: low = 8, high = 10\nOutput: 1\nExplanation: The odd numbers between 8 and 10 are [9].\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"0 <= low <= high <= 10^9"})}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"approach-1-brute-force",children:"Approach 1: Brute Force"}),"\n",(0,l.jsxs)(e.p,{children:["Iterate from ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"l"}),(0,l.jsx)(e.mi,{children:"o"}),(0,l.jsx)(e.mi,{children:"w"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"low"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"})]})})]})," to ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"h"}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mi,{children:"g"}),(0,l.jsx)(e.mi,{children:"h"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"high"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"hi"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"h"})]})})]})," and check if ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"i"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]})," is odd."]}),"\n",(0,l.jsx)(n,{name:"@wingkwong"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:"func countOdds(low int, high int) int {\n    ans := 0\n    for i := low; i <= high; i += 1 {\n        ans += i & 1\n    }\n    return ans\n}\n"})}),"\n",(0,l.jsx)(n,{name:"@wingkwong"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn count_odds(low: i32, high: i32) -> i32 {\n        let mut ans = 0;\n        for i in low .. high + 1 {\n            ans += i & 1;\n        }\n        return ans;\n    }\n}\n"})}),"\n",(0,l.jsx)(e.h2,{id:"approach-2-math",children:"Approach 2: Math"}),"\n",(0,l.jsxs)(e.p,{children:["Numbers of odd numbers in ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mi,{children:"l"}),(0,l.jsx)(e.mi,{children:"o"}),(0,l.jsx)(e.mi,{children:"w"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mi,{children:"h"}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mi,{children:"g"}),(0,l.jsx)(e.mi,{children:"h"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"[low, high]"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"hi"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"})]})})]})," is same as ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mi,{children:"h"}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mi,{children:"g"}),(0,l.jsx)(e.mi,{children:"h"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mi,{children:"l"}),(0,l.jsx)(e.mi,{children:"o"}),(0,l.jsx)(e.mi,{children:"w"}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"[1, high] - [1 , low - 1]"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"hi"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"})]})]})]}),". Therefore, we just find out those two numbers to get the answer. There are ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"h"}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mi,{children:"g"}),(0,l.jsx)(e.mi,{children:"h"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"}),(0,l.jsx)(e.mi,{mathvariant:"normal",children:"/"}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"(high + 1) / 2"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"hi"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mclose",children:")"}),(0,l.jsx)(e.span,{className:"mord",children:"/2"})]})]})]})," odd numbers in ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mi,{children:"h"}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mi,{children:"g"}),(0,l.jsx)(e.mi,{children:"h"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"[1, high]"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"hi"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"})]})})]})," and ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"l"}),(0,l.jsx)(e.mi,{children:"o"}),(0,l.jsx)(e.mi,{children:"w"}),(0,l.jsx)(e.mi,{mathvariant:"normal",children:"/"}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"low/2"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,l.jsx)(e.span,{className:"mord",children:"/2"})]})})]})," odd numbers in ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mi,{children:"l"}),(0,l.jsx)(e.mi,{children:"o"}),(0,l.jsx)(e.mi,{children:"w"}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"[1, low - 1]"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"})]})]})]}),"."]}),"\n",(0,l.jsx)(n,{name:"@wingkwong"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:"func countOdds(low int, high int) int {\n    return (high + 1) / 2 - (low / 2);\n}\n"})}),"\n",(0,l.jsx)(n,{name:"@wingkwong"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-rust",children:"impl Solution {\n    pub fn count_odds(low: i32, high: i32) -> i32 {\n        return (high + 1) / 2 - (low / 2);\n    }\n}\n"})})]})}function d(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(h,{...s})}):h(s)}},28453:(s,e,n)=>{n.d(e,{R:()=>r,x:()=>m});var a=n(96540);const l={},i=a.createContext(l);function r(s){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function m(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:r(s.components),a.createElement(i.Provider,{value:e},s.children)}}}]);