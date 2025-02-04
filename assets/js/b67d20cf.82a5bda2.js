"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[29871],{66676:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"1000-1099/find-the-town-judge-easy","title":"0997 - Find the Town Judge (Easy)","description":"Author: @wkw | https://leetcode.com/problems/find-the-town-judge/","source":"@site/solutions/1000-1099/0997-find-the-town-judge-easy.md","sourceDirName":"1000-1099","slug":"/1000-1099/find-the-town-judge-easy","permalink":"/solutions/1000-1099/find-the-town-judge-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1000-1099/0997-find-the-town-judge-easy.md","tags":[{"inline":true,"label":"Array","permalink":"/solutions/tags/array"},{"inline":true,"label":"Hash Table","permalink":"/solutions/tags/hash-table"},{"inline":true,"label":"Graph","permalink":"/solutions/tags/graph"}],"version":"current","sidebarPosition":997,"frontMatter":{"description":"Author: @wkw | https://leetcode.com/problems/find-the-town-judge/","tags":["Array","Hash Table","Graph"]},"sidebar":"tutorialSidebar","previous":{"title":"1000 - 1099","permalink":"/solutions/category/1000---1099"},"next":{"title":"1000 - Minimum Cost to Merge Stones (Hard)","permalink":"/solutions/1000-1099/minimum-cost-to-merge-stones-hard"}}');var i=t(86070),o=t(32790);const s={description:"Author: @wkw | https://leetcode.com/problems/find-the-town-judge/",tags:["Array","Hash Table","Graph"]},l="0997 - Find the Town Judge (Easy)",d={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Counting (Two Arrays)",id:"approach-1-counting-two-arrays",level:2},{value:"Approach 2: Counting (One Array)",id:"approach-2-counting-one-array",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{SolutionAuthor:t,TabItem:r,Tabs:s}=n;return t||u("SolutionAuthor",!0),r||u("TabItem",!0),s||u("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"0997---find-the-town-judge-easy",children:"0997 - Find the Town Judge (Easy)"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/find-the-town-judge/",children:"https://leetcode.com/problems/find-the-town-judge/"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(n.p,{children:["In a town, there are ",(0,i.jsx)(n.code,{children:"n"})," people labeled from ",(0,i.jsx)(n.code,{children:"1"})," to ",(0,i.jsx)(n.code,{children:"n"}),". There is a rumor that one of these people is secretly the town judge."]}),"\n",(0,i.jsx)(n.p,{children:"If the town judge exists, then:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The town judge trusts nobody."}),"\n",(0,i.jsx)(n.li,{children:"Everybody (except for the town judge) trusts the town judge."}),"\n",(0,i.jsxs)(n.li,{children:["There is exactly one person that satisfies properties ",(0,i.jsx)(n.strong,{children:"1"})," and ",(0,i.jsx)(n.strong,{children:"2"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You are given an array ",(0,i.jsx)(n.code,{children:"trust"})," where ",(0,i.jsx)(n.code,{children:"trust[i] = [ai, bi]"})," representing that the person labeled ",(0,i.jsx)(n.code,{children:"ai"})," trusts the person labeled ",(0,i.jsx)(n.code,{children:"bi"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Return ",(0,i.jsx)(n.em,{children:"the label of the town judge if the town judge exists and can be identified, or return"}),(0,i.jsx)(n.code,{children:"-1"}),(0,i.jsx)(n.em,{children:"otherwise"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: n = 2, trust = [[1,2]]\nOutput: 2\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: n = 3, trust = [[1,3],[2,3]]\nOutput: 3\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: n = 3, trust = [[1,3],[2,3],[3,1]]\nOutput: -1\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= n <= 1000"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"0 <= trust.length <= 10^4"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"trust[i].length == 2"})}),"\n",(0,i.jsxs)(n.li,{children:["All the pairs of ",(0,i.jsx)(n.code,{children:"trust"})," are ",(0,i.jsx)(n.strong,{children:"unique"}),"."]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ai != bi"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= ai, bi <= n"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"approach-1-counting-two-arrays",children:"Approach 1: Counting (Two Arrays)"}),"\n",(0,i.jsx)(s,{children:(0,i.jsxs)(r,{value:"cpp",label:"C++",children:[(0,i.jsx)(t,{name:"@wkw"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int findJudge(int n, vector<vector<int>>& trust) {\n\t\t// indegree (in) = trusted by others\n\t\t// outdegree (out) = trust others\n        vector<int> in(n + 1), out(n + 1);\n\t\t// calculate the in and out\n        for (auto x : trust) in[x[1]]++, out[x[0]]++;\n\t\t// iterate each person\n        for (int i = 1; i <= n; i++) {\n\t\t\t// the judge will be the one with indegree = n - 1 and outdegree = 0\n            if (in[i] == n - 1 && out[i] == 0) {\n\t\t\t\t// found the judge\n                return i;\n            }\n        }\n        // cannot identify -> return -1\n        return -1;\n    }\n};\n\n"})})]})}),"\n",(0,i.jsx)(n.h2,{id:"approach-2-counting-one-array",children:"Approach 2: Counting (One Array)"}),"\n",(0,i.jsxs)(n.p,{children:["We can further simplify Approach 1 with one array since we know ",(0,i.jsx)(n.code,{children:"indegrees - outdegrees = n - 1"}),"."]}),"\n",(0,i.jsx)(s,{children:(0,i.jsxs)(r,{value:"cpp",label:"C++",children:[(0,i.jsx)(t,{name:"@wkw"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int findJudge(int n, vector<vector<int>>& trust) {\n        // n people\n        vector<int> v(n + 1);\n        for (auto x : trust) {\n            // out: trust other\n            v[x[0]]--;\n            // in: trusted by others\n            v[x[1]]++;\n        }\n        for (int i = 1; i <= n; i++) {\n            // we are looking for indegrees - outdegrees = n - 1\n            if (v[i] == n - 1) {\n                // if so, the i-th person will be the judge\n                return i;\n            }\n        }\n        // cannot identify -> return -1\n        return -1;\n    }\n};\n\n"})})]})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32790:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(30758);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);