"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[32909],{64364:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"graph-theory/introduction","title":"Introduction","description":"Graphs can solve a plethora of interesting problems!","source":"@site/tutorials/graph-theory/introduction.md","sourceDirName":"graph-theory","slug":"/graph-theory/introduction","permalink":"/tutorials/graph-theory/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/graph-theory/introduction.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Introduction","description":"Graphs can solve a plethora of interesting problems!","hide_table_of_contents":true,"sidebar_position":1,"keywords":["leetcode","tutorial","graphs"]},"sidebar":"tutorialSidebar","previous":{"title":"Graph Theory","permalink":"/tutorials/category/graph-theory"},"next":{"title":"Bellman Ford Algorithm","permalink":"/tutorials/graph-theory/bellman-ford-algorithm"}}');var i=r(86070),o=r(32790);const s={title:"Introduction",description:"Graphs can solve a plethora of interesting problems!",hide_table_of_contents:!0,sidebar_position:1,keywords:["leetcode","tutorial","graphs"]},a=void 0,l={},h=[{value:"Overview",id:"overview",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{TutorialCredits:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TutorialCredits",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{authors:"@heiheihang, @wkw"}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"A graph is made up of a collection of points or objects called vertices and connections between some of those vertices called edges. The edges can be either one-way (can only be traversed in one direction), two-way, have a numerical value associated with traversing them, or without any value. We can use graphs to solve a plethora of interesting problems!"}),"\n",(0,i.jsx)(n.p,{children:"Here is a undirected graph with 4 vertices (or nodes) and 5 edges."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2020/10/21/bi2.jpg",alt:"image"})}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"In real life, we may use graphs. Let's say we have six people:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Alice"}),"\n",(0,i.jsx)(n.li,{children:"Bob"}),"\n",(0,i.jsx)(n.li,{children:"Cathy"}),"\n",(0,i.jsx)(n.li,{children:"Danny"}),"\n",(0,i.jsx)(n.li,{children:"Ethan"}),"\n",(0,i.jsx)(n.li,{children:"Fiona"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"and we are also given a list of friends."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'[["Alice", Bob"], ["Cathy", "Danny"], ["Alice", "Cathy"], ["Ethan", "Fiona"]]\n'})}),"\n",(0,i.jsx)(n.p,{children:"Here, we know that:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Alice and Bob are friends"}),"\n",(0,i.jsx)(n.li,{children:"Cathy and Danny are friends"}),"\n",(0,i.jsx)(n.li,{children:"Alice and Cathy are friends"}),"\n",(0,i.jsx)(n.li,{children:"Ethan and Fiona are friends"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["We say that Alice, Bob, Cathy, and Danny are in ",(0,i.jsx)(n.strong,{children:"Friend Group 1"})," (they are friends or have common friends). Ethan and Fiona are in ",(0,i.jsx)(n.strong,{children:"Friend Group 2"})," (they are friends or have common friends)."]}),"\n",(0,i.jsxs)(n.p,{children:["In this task, we can easily tell the ",(0,i.jsx)(n.strong,{children:"number of friend groups"})," (there are 2 friend groups), as well as the ",(0,i.jsx)(n.strong,{children:"size of the largest friend group"})," (the largest group - Friend Group 1 - has 4 members)."]}),"\n",(0,i.jsx)(n.p,{children:'This seems easy at first glance! We just need to "group them up". However, this is more complicated than you think. There are three potential solutions to this problem :'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Breadth-First Search (BFS)"}),"\n",(0,i.jsx)(n.li,{children:"Depth-First Search (DFS)"}),"\n",(0,i.jsx)(n.li,{children:"Union Find"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"We will learn different strategies for similar problems, and hopefully you know which one to use after learning the key concepts in graph theory."})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},32790:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var t=r(30758);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);