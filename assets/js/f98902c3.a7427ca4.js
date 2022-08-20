"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[3442],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=u(r),d=a,f=h["".concat(p,".").concat(d)]||h[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},44668:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return h}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=r(78735),l=["components"],p={title:"Introduction",description:"Graphs can solve a plethora of interesting problems!",hide_table_of_contents:!0,sidebar_position:1,keywords:["leetcode","tutorial","graphs"]},u=void 0,s={unversionedId:"graph-theory/introduction",id:"graph-theory/introduction",title:"Introduction",description:"Graphs can solve a plethora of interesting problems!",source:"@site/tutorials/graph-theory/introduction.md",sourceDirName:"graph-theory",slug:"/graph-theory/introduction",permalink:"/leetcode-the-hard-way/tutorials/graph-theory/introduction",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/graph-theory/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",description:"Graphs can solve a plethora of interesting problems!",hide_table_of_contents:!0,sidebar_position:1,keywords:["leetcode","tutorial","graphs"]},sidebar:"tutorialSidebar",previous:{title:"Graph Theory",permalink:"/leetcode-the-hard-way/tutorials/category/graph-theory"},next:{title:"Binary Tree",permalink:"/leetcode-the-hard-way/tutorials/graph-theory/binary-tree"}},c={},h=[{value:"Overview",id:"overview",level:2}],d={toc:h};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{names:"@heiheihang",mdxType:"TutorialAuthors"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Graphs can solve a plethora of interesting problems!"),(0,o.kt)("p",null,"For example, we have five people :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Alice"),(0,o.kt)("li",{parentName:"ul"},"Bob"),(0,o.kt)("li",{parentName:"ul"},"Cathy"),(0,o.kt)("li",{parentName:"ul"},"Danny"),(0,o.kt)("li",{parentName:"ul"},"Ethan"),(0,o.kt)("li",{parentName:"ul"},"Fiona")),(0,o.kt)("p",null,"We are also given a list of friends. For example:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'[["Alice", Bob"], ["Cathy", "Danny"], ["Alice", "Cathy"], ["Ethan", "Fiona"]]')),(0,o.kt)("p",null,"Here, we know that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Alice and Bob are friends"),(0,o.kt)("li",{parentName:"ul"},"Cathy and Danny are friends"),(0,o.kt)("li",{parentName:"ul"},"Alice and Cathy are friends"),(0,o.kt)("li",{parentName:"ul"},"Ethan and Fiona are friends")),(0,o.kt)("p",null,"We say that Alice, Bob, Cathy, and Danny are in ",(0,o.kt)("strong",{parentName:"p"},"Friend Group 1")," (they are friends or have common friends). Ethan and Fiona are in ",(0,o.kt)("strong",{parentName:"p"},"Friend Group 2")," (they are friends or have common friends)."),(0,o.kt)("p",null,"In this task, we can easily tell the ",(0,o.kt)("strong",{parentName:"p"},"number of friend groups")," (there are 2 friend groups), as well as the ",(0,o.kt)("strong",{parentName:"p"},"size of the largest friend group")," (the largest group - Friend Group 1 - has 4 members)."),(0,o.kt)("p",null,'This seems easy at first glance! We just need to "group them up". However, this is more complicated than you think. There are three potential solutions to this problem :'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Breadth-First Search (BFS)"),(0,o.kt)("li",{parentName:"ul"},"Depth-First Search (DFS)"),(0,o.kt)("li",{parentName:"ul"},"Union Find")),(0,o.kt)("p",null,"We will learn different strategies for similar problems, and hopefully you know which one to use after learning the key concepts in graph theory."))}f.isMDXComponent=!0},78735:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(67294);function a(e){var t=e.names.split(",");return n.createElement("div",{className:"tutorial-author-wrapper"},"This tutorial is written by",t.map((function(e,t){return n.createElement("span",{key:t,className:"author-tag"},e)})))}}}]);