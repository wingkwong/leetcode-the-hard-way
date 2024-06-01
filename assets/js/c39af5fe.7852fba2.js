"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[58833],{99314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(85893),s=n(11151);const a={description:"Author: @wingkwong | https://leetcode.com/problems/first-letter-to-appear-twice",tags:["Hash Map"]},o="2351 - First Letter to Appear Twice (Easy)",i={id:"2300-2399/first-letter-to-appear-twice-easy",title:"2351 - First Letter to Appear Twice (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/first-letter-to-appear-twice",source:"@site/solutions/2300-2399/2351-first-letter-to-appear-twice-easy.md",sourceDirName:"2300-2399",slug:"/2300-2399/first-letter-to-appear-twice-easy",permalink:"/solutions/2300-2399/first-letter-to-appear-twice-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2300-2399/2351-first-letter-to-appear-twice-easy.md",tags:[{inline:!0,label:"Hash Map",permalink:"/solutions/tags/hash-map"}],version:"current",sidebarPosition:2351,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/first-letter-to-appear-twice",tags:["Hash Map"]},sidebar:"tutorialSidebar",previous:{title:"2331 - Evaluate Boolean Binary Tree (Easy)",permalink:"/solutions/2300-2399/evaluate-boolean-binary-tree-easy"},next:{title:"2352 - Equal Row and Column Pairs (Medium)",permalink:"/solutions/2300-2399/equal-row-and-column-pairs-medium"}},c={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map",id:"approach-1-hash-map",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{SolutionAuthor:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"2351---first-letter-to-appear-twice-easy",children:"2351 - First Letter to Appear Twice (Easy)"}),"\n",(0,r.jsx)(t.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/first-letter-to-appear-twice",children:"https://leetcode.com/problems/first-letter-to-appear-twice"})}),"\n",(0,r.jsx)(t.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(t.p,{children:["Given a string ",(0,r.jsx)(t.code,{children:"s"})," consisting of lowercase English letters, return ",(0,r.jsxs)(t.em,{children:["the first letter to appear ",(0,r.jsx)(t.strong,{children:"twice"})]}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["A letter ",(0,r.jsx)(t.code,{children:"a"})," appears twice before another letter ",(0,r.jsx)(t.code,{children:"b"})," if the ",(0,r.jsx)(t.strong,{children:"second"})," occurrence of ",(0,r.jsx)(t.code,{children:"a"})," is before the ",(0,r.jsx)(t.strong,{children:"second"})," occurrence of ",(0,r.jsx)(t.code,{children:"b"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"s"})," will contain at least one letter that appears twice. "]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Input: s = \"abccbaacz\"\nOutput: \"c\"\nExplanation:\nThe letter 'a' appears on the indexes 0, 5 and 6.\nThe letter 'b' appears on the indexes 1 and 4.\nThe letter 'c' appears on the indexes 2, 3 and 7.\nThe letter 'z' appears on the index 8.\nThe letter 'c' is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest.\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Input: s = \"abcdd\"\nOutput: \"d\"\nExplanation:\nThe only letter that appears twice is 'd' so we return 'd'.\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"2 <= s.length <= 100"})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"s"})," consists of lowercase English letters."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"s"})," has at least one repeated letter."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"approach-1-hash-map",children:"Approach 1: Hash Map"}),"\n",(0,r.jsx)(n,{name:"@wingkwong"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"class Solution {\npublic:\n    char repeatedCharacter(string s) {\n      // store the frequency of each character\n      // alternatively, we can use int cnt[26];\n      unordered_map<char, int> m;\n      // for each character, check the frequency\n      // if it appears twice, return that character\n      for (auto& c: s) if (++m[c] == 2) return c;\n      // return the last one\n      return s.back();\n    }\n};\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(67294);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);