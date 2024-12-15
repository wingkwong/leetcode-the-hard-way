"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[17023],{87818:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"2200-2299/sum-of-scores-of-built-strings-hard","title":"2223 - Sum of Scores of Built Strings (Hard)","description":"Author: @wingkwong | https://leetcode.com/problems/sum-of-scores-of-built-strings/","source":"@site/solutions/2200-2299/2223-sum-of-scores-of-built-strings-hard.md","sourceDirName":"2200-2299","slug":"/2200-2299/sum-of-scores-of-built-strings-hard","permalink":"/solutions/2200-2299/sum-of-scores-of-built-strings-hard","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2223-sum-of-scores-of-built-strings-hard.md","tags":[],"version":"current","sidebarPosition":2223,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/sum-of-scores-of-built-strings/"},"sidebar":"tutorialSidebar","previous":{"title":"2218 - Maximum Value of K Coins From Piles (Hard)","permalink":"/solutions/2200-2299/maximum-value-of-k-coins-from-piles-hard"},"next":{"title":"2224 - Minimum Number of Operations to Convert Time (Easy)","permalink":"/solutions/2200-2299/minimum-number-of-operations-to-convert-time-easy"}}');var r=n(74848),i=n(28453);const o={description:"Author: @wingkwong | https://leetcode.com/problems/sum-of-scores-of-built-strings/"},a="2223 - Sum of Scores of Built Strings (Hard)",l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Z Algorithm",id:"approach-1-z-algorithm",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mrow:"mrow",msub:"msub",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...s.components},{SolutionAuthor:n}=e;return n||function(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"2223---sum-of-scores-of-built-strings-hard",children:"2223 - Sum of Scores of Built Strings (Hard)"})}),"\n",(0,r.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://leetcode.com/problems/sum-of-scores-of-built-strings/",children:"https://leetcode.com/problems/sum-of-scores-of-built-strings/"})}),"\n",(0,r.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(e.p,{children:["You are ",(0,r.jsx)(e.strong,{children:"building"})," a string ",(0,r.jsx)(e.code,{children:"s"})," of length ",(0,r.jsx)(e.code,{children:"n"})," ",(0,r.jsx)(e.strong,{children:"one"})," character at a time, ",(0,r.jsx)(e.strong,{children:"prepending"})," each new character to the ",(0,r.jsx)(e.strong,{children:"front"})," of the string. The strings are labeled from ",(0,r.jsx)(e.code,{children:"1"})," to ",(0,r.jsx)(e.code,{children:"n"}),", where the string with length ",(0,r.jsx)(e.code,{children:"i"})," is labeled ",(0,r.jsx)(e.code,{children:"si"}),"."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["For example, for ",(0,r.jsx)(e.code,{children:'s = "abaca"'}),", ",(0,r.jsx)(e.code,{children:'s1 == "a"'}),", ",(0,r.jsx)(e.code,{children:'s2 == "ca"'}),", ",(0,r.jsx)(e.code,{children:'s3 == "aca"'}),", etc."]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.strong,{children:"score"})," of ",(0,r.jsx)(e.code,{children:"si"})," is the length of the ",(0,r.jsx)(e.strong,{children:"longest common prefix"})," between ",(0,r.jsx)(e.code,{children:"si"})," and ",(0,r.jsx)(e.code,{children:"sn"})," (Note that ",(0,r.jsx)(e.code,{children:"s == sn"}),")."]}),"\n",(0,r.jsxs)(e.p,{children:["Given the final string ",(0,r.jsx)(e.code,{children:"s"}),", return ",(0,r.jsxs)(e.em,{children:["the ",(0,r.jsx)(e.strong,{children:"sum"})," of the ",(0,r.jsx)(e.strong,{children:"score"})," of every"]})," ",(0,r.jsx)(e.code,{children:"si"}),"."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'Input: s = "babab"\nOutput: 9\nExplanation:\nFor s1 == "b", the longest common prefix is "b" which has a score of 1.\nFor s2 == "ab", there is no common prefix so the score is 0.\nFor s3 == "bab", the longest common prefix is "bab" which has a score of 3.\nFor s4 == "abab", there is no common prefix so the score is 0.\nFor s5 == "babab", the longest common prefix is "babab" which has a score of 5.\nThe sum of the scores is 1 + 0 + 3 + 0 + 5 = 9, so we return 9.\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'Input: s = "azbazbzaz"\nOutput: 14\nExplanation: \nFor s2 == "az", the longest common prefix is "az" which has a score of 2.\nFor s6 == "azbzaz", the longest common prefix is "azb" which has a score of 3.\nFor s9 == "azbazbzaz", the longest common prefix is "azbazbzaz" which has a score of 9.\nFor all other si, the score is 0.\nThe sum of the scores is 2 + 3 + 9 = 14, so we return 14.\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"1 <= s.length <= 10^5"})}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"s"})," consists of lowercase English letters."]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"approach-1-z-algorithm",children:"Approach 1: Z Algorithm"}),"\n",(0,r.jsxs)(e.p,{children:["The sum of the score of every ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsx)(e.mrow,{children:(0,r.jsxs)(e.msub,{children:[(0,r.jsx)(e.mi,{children:"s"}),(0,r.jsx)(e.mi,{children:"i"})]})}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"s_i"})]})})}),(0,r.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,r.jsxs)(e.span,{className:"mord",children:[(0,r.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,r.jsx)(e.span,{className:"msupsub",children:(0,r.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,r.jsxs)(e.span,{className:"vlist-r",children:[(0,r.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,r.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,r.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,r.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,r.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,r.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,r.jsx)(e.span,{className:"vlist-r",children:(0,r.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,r.jsx)(e.span,{})})})]})})]})]})})]})," would be the sum of the values in ",(0,r.jsxs)(e.span,{className:"katex",children:[(0,r.jsx)(e.span,{className:"katex-mathml",children:(0,r.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(e.semantics,{children:[(0,r.jsx)(e.mrow,{children:(0,r.jsx)(e.mi,{children:"Z"})}),(0,r.jsx)(e.annotation,{encoding:"application/x-tex",children:"Z"})]})})}),(0,r.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(e.span,{className:"base",children:[(0,r.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,r.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"Z"})]})})]})," array."]}),"\n",(0,r.jsx)(n,{name:"@wingkwong"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    template <typename T>\n    vector<int> z_function(int n, const T &s) {\n      vector<int> z(n, n);\n      int l = 0, r = 0;\n      for (int i = 1; i < n; i++) {\n        z[i] = (i > r ? 0 : min(r - i + 1, z[i - l]));\n        while (i + z[i] < n && s[z[i]] == s[i + z[i]]) {\n          z[i]++;\n        }\n        if (i + z[i] - 1 > r) {\n          l = i;\n          r = i + z[i] - 1;\n        }\n      }\n      return z;\n    }\n\n    template <typename T>\n    vector<int> z_function(const T &s) {\n      return z_function((int)s.size(), s);\n    }\n\n    long long sumScores(string s) {\n        long long ans = 0;\n        vector<int> z = z_function(s);\n        for (auto x : z) ans += x;\n        return ans; \n    }\n};\n"})})]})}function m(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(h,{...s})}):h(s)}},28453:(s,e,n)=>{n.d(e,{R:()=>o,x:()=>a});var t=n(96540);const r={},i=t.createContext(r);function o(s){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function a(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:o(s.components),t.createElement(i.Provider,{value:e},s.children)}}}]);