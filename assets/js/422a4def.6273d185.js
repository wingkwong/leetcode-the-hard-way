"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[32087],{60509:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"0400-0499/optimal-account-balancing-hard","title":"0465 - Optimal Account Balancing (Hard)","description":"Author: @TBC | https://leetcode.com/problems/optimal-account-balancing/","source":"@site/solutions/0400-0499/0465-optimal-account-balancing-hard.md","sourceDirName":"0400-0499","slug":"/0400-0499/optimal-account-balancing-hard","permalink":"/solutions/0400-0499/optimal-account-balancing-hard","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0400-0499/0465-optimal-account-balancing-hard.md","tags":[],"version":"current","sidebarPosition":465,"frontMatter":{"description":"Author: @TBC | https://leetcode.com/problems/optimal-account-balancing/"},"sidebar":"tutorialSidebar","previous":{"title":"0464 - Can I Win (Medium)","permalink":"/solutions/0400-0499/can-i-win-medium"},"next":{"title":"0472 - Concatenated Words (Hard)","permalink":"/solutions/0400-0499/concatenated-words-hard"}}');var r=t(74848),a=t(28453);const i={description:"Author: @TBC | https://leetcode.com/problems/optimal-account-balancing/"},c="0465 - Optimal Account Balancing (Hard)",s={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: TBC",id:"approach-1-tbc",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"0465---optimal-account-balancing-hard",children:"0465 - Optimal Account Balancing (Hard)"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/optimal-account-balancing/",children:"https://leetcode.com/problems/optimal-account-balancing/"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(n.p,{children:["You are given an array of transactions ",(0,r.jsx)(n.code,{children:"transactions"})," where ",(0,r.jsx)(n.code,{children:"transactions[i] = [fromi, toi, amounti]"})," indicates that the person with ",(0,r.jsx)(n.code,{children:"ID = fromi"})," gave ",(0,r.jsx)(n.code,{children:"amounti $"})," to the person with ",(0,r.jsx)(n.code,{children:"ID = toi"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Return ",(0,r.jsx)(n.em,{children:"the minimum number of transactions required to settle the debt"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: transactions = [[0,1,10],[2,0,5]]\nOutput: 2\nExplanation:\nPerson #0 gave person #1 $10.\nPerson #2 gave person #0 $5.\nTwo transactions are needed. One way to settle the debt is person #1 pays person #0 and #2 $5 each.\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: transactions = [[0,1,10],[1,0,1],[1,2,5],[2,0,5]]\nOutput: 1\nExplanation:\nPerson #0 gave person #1 $10.\nPerson #1 gave person #0 $1.\nPerson #1 gave person #2 $5.\nPerson #2 gave person #0 $5.\nTherefore, person #1 only need to give person #0 $4, and all debt is settled.\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"1 <= transactions.length <= 8"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"transactions[i].length == 3"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"0 <= fromi, toi < 12"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"fromi != toi"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"1 <= amounti <= 100"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"approach-1-tbc",children:"Approach 1: TBC"})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(96540);const r={},a=o.createContext(r);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);