"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[43835],{81859:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"0300-0399/counting-bits-easy","title":"0338 - Counting Bits (Easy)","description":"Author: @wingkwong | https://leetcode.com/problems/counting-bits/","source":"@site/solutions/0300-0399/0338-counting-bits-easy.md","sourceDirName":"0300-0399","slug":"/0300-0399/counting-bits-easy","permalink":"/solutions/0300-0399/counting-bits-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0300-0399/0338-counting-bits-easy.md","tags":[],"version":"current","sidebarPosition":338,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/counting-bits/"},"sidebar":"tutorialSidebar","previous":{"title":"0334 - Increasing Triplet Subsequence (Medium)","permalink":"/solutions/0300-0399/increasing-triplet-subsequence-medium"},"next":{"title":"0342 - Power of Four (Easy)","permalink":"/solutions/0300-0399/power-of-four-easy"}}');var i=n(74848),l=n(28453);const t={description:"Author: @wingkwong | https://leetcode.com/problems/counting-bits/"},c="0338 - Counting Bits (Easy)",r={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: (n + 1) hammingWeight",id:"approach-1-n--1-hammingweight",level:2},{value:"Approach 2: One Pass",id:"approach-2-one-pass",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.R)(),...s.components},{SolutionAuthor:n}=e;return n||function(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"0338---counting-bits-easy",children:"0338 - Counting Bits (Easy)"})}),"\n",(0,i.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://leetcode.com/problems/counting-bits/",children:"https://leetcode.com/problems/counting-bits/"})}),"\n",(0,i.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(e.p,{children:["Given an integer ",(0,i.jsx)(e.code,{children:"n"}),", return ",(0,i.jsx)(e.em,{children:"an array"})," ",(0,i.jsx)(e.code,{children:"ans"})," ",(0,i.jsx)(e.em,{children:"of length"})," ",(0,i.jsx)(e.code,{children:"n + 1"})," ",(0,i.jsx)(e.em,{children:"such that for each"})," ",(0,i.jsx)(e.code,{children:"i"})," __ (",(0,i.jsx)(e.code,{children:"0 <= i <= n"}),")",(0,i.jsx)(e.em,{children:","})," ",(0,i.jsx)(e.code,{children:"ans[i]"})," ",(0,i.jsxs)(e.em,{children:["is the ",(0,i.jsx)(e.strong,{children:"number of"})]})," ",(0,i.jsx)(e.code,{children:"1"}),(0,i.jsxs)(e.em,{children:[(0,i.jsx)(e.strong,{children:"'s"})," in the binary representation of"]})," ",(0,i.jsx)(e.code,{children:"i"}),"."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: n = 2\nOutput: [0,1,1]\nExplanation:\n0 --\x3e 0\n1 --\x3e 1\n2 --\x3e 10\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: n = 5\nOutput: [0,1,1,2,1,2]\nExplanation:\n0 --\x3e 0\n1 --\x3e 1\n2 --\x3e 10\n3 --\x3e 11\n4 --\x3e 100\n5 --\x3e 101 \n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"0 <= n <= 10^5"})}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Follow up:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["It is very easy to come up with a solution with a runtime of ",(0,i.jsx)(e.code,{children:"O(n log n)"}),". Can you do it in linear time ",(0,i.jsx)(e.code,{children:"O(n)"})," and possibly in a single pass?"]}),"\n",(0,i.jsxs)(e.li,{children:["Can you do it without using any built-in function (i.e., like ",(0,i.jsx)(e.code,{children:"__builtin_popcount"})," in C++)?"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"approach-1-n--1-hammingweight",children:"Approach 1: (n + 1) hammingWeight"}),"\n",(0,i.jsxs)(e.p,{children:["If you've solved ",(0,i.jsx)(e.a,{href:"../0100-0199/number-of-1-bits-easy",children:"0191 - Number of 1 Bits (Easy)"}),", then you can use that solution in this problem. The time complexity is ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"O"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"l"}),(0,i.jsx)(e.mi,{children:"o"}),(0,i.jsx)(e.mi,{children:"g"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n logn)"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mclose",children:")"})]})})]}),"."]}),"\n",(0,i.jsx)(n,{name:"@wingkwong"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    // Check out 0191 - Number of 1 Bits (Easy) - Approach 3 \n    // for detailed explanation\n    int hammingWeight(int n) {\n        int ans = 0;\n        for (; n; n = n & (n - 1)) ans++;\n        return ans;\n    }\n    \n    vector<int> countBits(int n) {\n        vector<int> ans;\n        for (int i = 0; i <= n; i++) {\n            ans.push_back(hammingWeight(i));\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,i.jsx)(e.h2,{id:"approach-2-one-pass",children:"Approach 2: One Pass"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"i"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]})," & ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"(i - 1)"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsx)(e.span,{className:"mclose",children:")"})]})]})]})," is a common trick to turn the rightmost set bit to ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mn,{children:"0"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"0"})]})})]}),". For example, if ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mn,{children:"1000100"}),(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mo,{stretchy:"false",children:")"}),(0,i.jsx)(e.mn,{children:"2"})]})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"i = (1000100)_2"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord",children:"1000100"}),(0,i.jsxs)(e.span,{className:"mclose",children:[(0,i.jsx)(e.span,{className:"mclose",children:")"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,i.jsx)(e.span,{})})})]})})]})]})]})]}),", then ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"i"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]})," & ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"(i  - 1)"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsx)(e.span,{className:"mclose",children:")"})]})]})]})," would be ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mn,{children:"1000000"}),(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mo,{stretchy:"false",children:")"}),(0,i.jsx)(e.mn,{children:"2"})]})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"(1000000)_2"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord",children:"1000000"}),(0,i.jsxs)(e.span,{className:"mclose",children:[(0,i.jsx)(e.span,{className:"mclose",children:")"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,i.jsx)(e.span,{})})})]})})]})]})})]}),". We can iterate each number and calculate the number of 1s by adding 1 from the previous state."]}),"\n",(0,i.jsxs)(e.p,{children:["The transition function is simply ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"["}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mi,{children:"a"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"["}),(0,i.jsx)(e.mi,{children:"i"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"ans[i] = ans[i"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"an"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mopen",children:"["}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mclose",children:"]"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"an"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mopen",children:"["}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})]})]})," & ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsx)(e.mn,{children:"1"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"(i - 1)] + 1"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsx)(e.span,{className:"mclose",children:")]"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"})]})]})]}),"."]}),"\n",(0,i.jsx)(n,{name:"@wingkwong"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> countBits(int num) {\n        vector<int> ans(num + 1, 0);\n        for(int i = 1; i <= num; i++) {\n            // no. of 1s in (1000100) = no. of 1s in (1000000) + 1\n            ans[i] = ans[i & (i - 1)] + 1;\n        }\n        return ans; \n    }\n};\n"})})]})}function d(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(h,{...s})}):h(s)}},28453:(s,e,n)=>{n.d(e,{R:()=>t,x:()=>c});var a=n(96540);const i={},l=a.createContext(i);function t(s){const e=a.useContext(l);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:t(s.components),a.createElement(l.Provider,{value:e},s.children)}}}]);