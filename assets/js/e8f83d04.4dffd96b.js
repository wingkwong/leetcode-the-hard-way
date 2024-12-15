"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[97919],{55138:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"1700-1799/check-if-one-string-swap-can-make-strings-equal-easy","title":"1790 - Check if One String Swap Can Make Strings Equal (Easy)","description":"Author: @wingkwong | https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/","source":"@site/solutions/1700-1799/1790-check-if-one-string-swap-can-make-strings-equal-easy.md","sourceDirName":"1700-1799","slug":"/1700-1799/check-if-one-string-swap-can-make-strings-equal-easy","permalink":"/solutions/1700-1799/check-if-one-string-swap-can-make-strings-equal-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1700-1799/1790-check-if-one-string-swap-can-make-strings-equal-easy.md","tags":[],"version":"current","sidebarPosition":1790,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/"},"sidebar":"tutorialSidebar","previous":{"title":"1779 - Find Nearest Point That Has the Same X or Y Coordinate (Easy)","permalink":"/solutions/1700-1799/find-nearest-point-that-has-the-same-x-or-y-coordinate-easy"},"next":{"title":"1791 - Find Center of Star Graph (Easy)","permalink":"/solutions/1700-1799/find-center-of-star-graph-easy"}}');var t=n(74848),i=n(28453);const r={description:"Author: @wingkwong | https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/"},l="1790 - Check if One String Swap Can Make Strings Equal (Easy)",c={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Simulation",id:"approach-1-simulation",level:2}];function o(e){const s={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{SolutionAuthor:n,TabItem:a,Tabs:r}=s;return n||d("SolutionAuthor",!0),a||d("TabItem",!0),r||d("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"1790---check-if-one-string-swap-can-make-strings-equal-easy",children:"1790 - Check if One String Swap Can Make Strings Equal (Easy)"})}),"\n",(0,t.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/",children:"https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/"})}),"\n",(0,t.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(s.p,{children:["You are given two strings ",(0,t.jsx)(s.code,{children:"s1"})," and ",(0,t.jsx)(s.code,{children:"s2"})," of equal length. A ",(0,t.jsx)(s.strong,{children:"string swap"})," is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices."]}),"\n",(0,t.jsxs)(s.p,{children:["Return ",(0,t.jsx)(s.code,{children:"true"})," ",(0,t.jsxs)(s.em,{children:["if it is possible to make both strings equal by performing ",(0,t.jsx)(s.strong,{children:"at most one string swap"})," on ",(0,t.jsx)(s.strong,{children:"exactly one"})," of the strings."]})," Otherwise, return ",(0,t.jsx)(s.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'Input: s1 = "bank", s2 = "kanb"\nOutput: true\nExplanation: For example, swap the first character with the last character of s2 to make "bank".\n'})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'Input: s1 = "attack", s2 = "defend"\nOutput: false\nExplanation: It is impossible to make them equal with one string swap.\n'})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Example 3:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'Input: s1 = "kelb", s2 = "kelb"\nOutput: true\nExplanation: The two strings are already equal, so no string swap operation is required.\n'})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"1 <= s1.length, s2.length <= 100"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"s1.length == s2.length"})}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"s1"})," and ",(0,t.jsx)(s.code,{children:"s2"})," consist of only lowercase English letters."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"approach-1-simulation",children:"Approach 1: Simulation"}),"\n",(0,t.jsxs)(s.p,{children:["We iterate each index ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"i"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6595em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"i"})]})})]})," and look for the first difference, mark the index as ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"l"}),(0,t.jsx)(s.mi,{children:"a"}),(0,t.jsx)(s.mi,{children:"s"}),(0,t.jsx)(s.mi,{children:"t"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"last"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"t"})]})})]}),". If we have another difference at index ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"j"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]}),", then swap ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"s"}),(0,t.jsx)(s.mn,{children:"1"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"["}),(0,t.jsx)(s.mi,{children:"j"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"s1[j]"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,t.jsx)(s.span,{className:"mord",children:"1"}),(0,t.jsx)(s.span,{className:"mopen",children:"["}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,t.jsx)(s.span,{className:"mclose",children:"]"})]})})]})," with ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"s"}),(0,t.jsx)(s.mn,{children:"1"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"["}),(0,t.jsx)(s.mi,{children:"l"}),(0,t.jsx)(s.mi,{children:"a"}),(0,t.jsx)(s.mi,{children:"s"}),(0,t.jsx)(s.mi,{children:"t"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"]"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"s1[last]"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,t.jsx)(s.span,{className:"mord",children:"1"}),(0,t.jsx)(s.span,{className:"mopen",children:"["}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(s.span,{className:"mclose",children:"]"})]})})]})," and check if it is same as ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"s"}),(0,t.jsx)(s.mn,{children:"2"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"s2"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,t.jsx)(s.span,{className:"mord",children:"2"})]})})]})," (as we can only make at most one swap). At the end, check if both string is equal to handle the case that we don't swap."]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsxs)(a,{value:"cpp",label:"C++",children:[(0,t.jsx)(n,{name:"@wingkwong"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool areAlmostEqual(string s1, string s2) {\n        int n = s1.size(), last = -1;\n        for (int i = 0; i < n; i++) {\n            // potentially need to swap\n            if (s1[i] != s2[i]) {\n                // any previous character to swap?\n                if (last == -1) {\n                    // if not found, mark the current index as last\n                    last = i;\n                } else {\n                    // if found, swap it and check if they are same\n                    swap(s1[last], s1[i]);\n                    return s1 == s2;\n                }\n            }\n        }\n        // no swap is needed\n        return s1 == s2;\n    }\n};\n"})})]}),(0,t.jsxs)(a,{value:"rs",label:"Rust",children:[(0,t.jsx)(n,{name:"@wingkwong"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-rs",children:"impl Solution {\n    pub fn are_almost_equal(s1: String, s2: String) -> bool {\n        let n = s1.len();\n        let mut last = usize::MAX;\n        let mut c1: Vec<_> = s1.chars().collect();\n        let c2: Vec<_> = s2.chars().collect();\n        for i in 0 .. n { \n            if c1[i] != c2[i] {\n                if last == usize::MAX {\n                    last = i;\n                } else {\n                    c1.swap(i, last);\n                    return c1 == c2;\n                }\n            }\n        }\n        c1 == c2\n    }\n}\n"})})]})]})]})}function m(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}function d(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var a=n(96540);const t={},i=a.createContext(t);function r(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);