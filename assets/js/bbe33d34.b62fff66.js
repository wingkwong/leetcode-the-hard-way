"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[9393],{46089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(85893),r=n(11151);const i={title:"Two Pointers",description:"",hide_table_of_contents:!1,keywords:["leetcode","template","two pointers"]},s=void 0,a={id:"two-pointers",title:"Two Pointers",description:"",source:"@site/templates/two-pointers.md",sourceDirName:".",slug:"/two-pointers",permalink:"/templates/two-pointers",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/templates/two-pointers.md",tags:[],version:"current",frontMatter:{title:"Two Pointers",description:"",hide_table_of_contents:!1,keywords:["leetcode","template","two pointers"]},sidebar:"tutorialSidebar",previous:{title:"Sparse Table",permalink:"/templates/sparse-table"}},l={},c=[];function d(e){const t={code:"code",pre:"pre",...(0,r.a)(),...e.components},{TabItem:n,Tabs:i}=t;return n||u("TabItem",!0),i||u("Tabs",!0),(0,o.jsxs)(i,{children:[(0,o.jsx)(n,{value:"cpp",label:"C++",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cpp",children:"int f(vector<int>& v) {\n    int ans = 0;\n    int l = 0, r = (int) v.size() - 1;\n    while (l < r) {\n        // do some logic here\n        if (/* condition */) {\n            l += 1;\n        } else {\n            r -= 1;\n        }\n    }\n    return ans;\n}\n"})})}),(0,o.jsx)(n,{value:"java",label:"Java",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"int f(int[] v) {\n    int ans = 0;\n    int l = 0, r = v.length - 1;\n    while (l < r) {\n        // do some logic here\n        if (/* condition */) {\n            l += 1;\n        } else {\n            r -= 1;\n        }\n    }\n    return ans;\n}\n"})})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var o=n(67294);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);