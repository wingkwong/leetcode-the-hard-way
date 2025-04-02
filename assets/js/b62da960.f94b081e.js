"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[81893],{31666:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"2800-2899/maximum-odd-binary-number-easy","title":"2864 - Maximum Odd Binary Number (Easy)","description":"Author: @heder, @wkw | https://leetcode.com/problems/maximum-odd-binary-number/","source":"@site/solutions/2800-2899/2864-maximum-odd-binary-number-easy.md","sourceDirName":"2800-2899","slug":"/2800-2899/maximum-odd-binary-number-easy","permalink":"/solutions/2800-2899/maximum-odd-binary-number-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2800-2899/2864-maximum-odd-binary-number-easy.md","tags":[{"inline":true,"label":"Math","permalink":"/solutions/tags/math"},{"inline":true,"label":"String","permalink":"/solutions/tags/string"},{"inline":true,"label":"Greedy","permalink":"/solutions/tags/greedy"}],"version":"current","sidebarPosition":2864,"frontMatter":{"description":"Author: @heder, @wkw | https://leetcode.com/problems/maximum-odd-binary-number/","tags":["Math","String","Greedy"]},"sidebar":"tutorialSidebar","previous":{"title":"2859 - Sum of Values at Indices With K Set Bits (Easy)","permalink":"/solutions/2800-2899/sum-of-values-at-indices-with-k-set-bits-easy"},"next":{"title":"2873 - Maximum Value of an Ordered Triplet I (Easy)","permalink":"/solutions/2800-2899/maximum-value-of-an-ordered-triplet-i-easy"}}');var t=n(86070),i=n(32790);const r={description:"Author: @heder, @wkw | https://leetcode.com/problems/maximum-odd-binary-number/",tags:["Math","String","Greedy"]},l="2864 - Maximum Odd Binary Number (Easy)",c={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Count and create a new string",id:"approach-1-count-and-create-a-new-string",level:2},{value:"Approach 2: Count and rewrite in-place",id:"approach-2-count-and-rewrite-in-place",level:2},{value:"Approach 3: Partation and swap the last 1 in place",id:"approach-3-partation-and-swap-the-last-1-in-place",level:2}];function m(e){const s={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{SolutionAuthor:n,TabItem:a,Tabs:r}=s;return n||o("SolutionAuthor",!0),a||o("TabItem",!0),r||o("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"2864---maximum-odd-binary-number-easy",children:"2864 - Maximum Odd Binary Number (Easy)"})}),"\n",(0,t.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://leetcode.com/problems/maximum-odd-binary-number/",children:"https://leetcode.com/problems/maximum-odd-binary-number/"})}),"\n",(0,t.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(s.p,{children:["You are given a ",(0,t.jsx)(s.strong,{children:"binary"})," string ",(0,t.jsx)(s.code,{children:"s"})," that contains at least one ",(0,t.jsx)(s.code,{children:"'1'"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["You have to ",(0,t.jsx)(s.strong,{children:"rearrange"})," the bits in such a way that the resulting binary number is the ",(0,t.jsx)(s.strong,{children:"maximum odd binary number"})," that can be created from this combination."]}),"\n",(0,t.jsxs)(s.p,{children:["Return ",(0,t.jsx)(s.em,{children:"a string representing the maximum odd binary number that can be created from the given combination."})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"}),"that the resulting string ",(0,t.jsx)(s.strong,{children:"can"})," have leading zeros."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'Input: s = "010"\nOutput: "001"\nExplanation: Because there is just one \'1\', it must be in the last position. So the answer is "001".\n'})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'Input: s = "0101"\nOutput: "1001"\nExplanation: One of the \'1\'s must be in the last position. The maximum number that can be made with the remaining digits is "100". So the answer is "1001".\n'})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"1 <= s.length <= 100"})}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"s"})," consists only of ",(0,t.jsx)(s.code,{children:"'0'"})," and ",(0,t.jsx)(s.code,{children:"'1'"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"s"})," contains at least one ",(0,t.jsx)(s.code,{children:"'1'"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"approach-1-count-and-create-a-new-string",children:"Approach 1: Count and create a new string"}),"\n",(0,t.jsx)(s.p,{children:"This is the simplest approach. We count the number of '1's and stich together a new string as answer."}),"\n",(0,t.jsxs)(s.p,{children:["Let ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"n"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})})]})," be the length of the input string, then the"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Time complexity is ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"n"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})," as we need to scan the input and then stich together the input, to be fair I need to research of stiching the string together here will actually yield a ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"n"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})," solution, let me know if you have thoughts on this. The"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Space comlexity is ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"n"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]}),", if we count the size of the output."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsxs)(a,{value:"cpp",label:"C++",children:[(0,t.jsx)(n,{name:"@header"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"string maximumOddBinaryNumber(const string& s) {\n    const int ones = count(begin(s), end(s), '1');\n    return string(ones - 1, '1') + string(size(s) - ones, '0') + \"1\";\n}\n"})})]}),(0,t.jsxs)(a,{value:"py",label:"Python",children:[(0,t.jsx)(n,{name:"@wkw"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:"class Solution:\n    def maximumOddBinaryNumber(self, s: str) -> str:\n        n = len(s)\n        cnt1 = s.count('1')\n        cnt0 = n - cnt1\n        return '1' * (cnt1 - 1) + '0' * cnt0 + '1'\n"})})]})]}),"\n",(0,t.jsx)(s.h2,{id:"approach-2-count-and-rewrite-in-place",children:"Approach 2: Count and rewrite in-place"}),"\n",(0,t.jsx)(s.p,{children:"This is like approach 1, but instead of creating a new string, we are rewriting it in-place."}),"\n",(0,t.jsxs)(s.p,{children:["Let ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"n"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})})]})," be the length of the input string, then the"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Time complexity is ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"n"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})," as we need to scan the input and rewrite it, and the"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Space comlexity is ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mn,{children:"1"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord",children:"1"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r,{children:(0,t.jsxs)(a,{value:"cpp",label:"C++",children:[(0,t.jsx)(n,{name:"@heder"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"string maximumOddBinaryNumber(string& s) {\n    const int ones = count(begin(s), end(s), '1');\n    int w = 0;\n    for (; w < ones - 1; ++w) s[w] = '1';\n    for (; w + 1 < size(s); ++w) s[w] = '0';\n    s[w] = '1';\n    return s;\n}\n"})})]})}),"\n",(0,t.jsx)(s.h2,{id:"approach-3-partation-and-swap-the-last-1-in-place",children:"Approach 3: Partation and swap the last 1 in place"}),"\n",(0,t.jsxs)(s.p,{children:["We are writing the string in place in a single pass, all that's left to do after ",(0,t.jsx)(s.code,{children:"std::partition"})," is to swap the last '1' to the last position."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Time complexity is ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"n"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})," as we need to scan the input and rewrite it, and the"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Space comlexity is ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mn,{children:"1"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord",children:"1"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r,{children:(0,t.jsxs)(a,{value:"cpp",label:"C++",children:[(0,t.jsx)(n,{name:"@heder"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"string maximumOddBinaryNumber(string& s) {\n    auto it = partition(begin(s), end(s), [](char ch) { return ch == '1'; });\n    iter_swap(prev(it), prev(end(s)));\n    return s;\n}\n"})})]})})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}function o(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32790:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var a=n(30758);const t={},i=a.createContext(t);function r(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);