"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[84787],{12194:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});a(96540);var s=a(34164),r=a(45500),l=a(17559),n=a(26820),c=a(62557),i=a(41463),o=a(51107),g=a(74848);function h(e){let{title:t}=e;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.be,{title:t}),(0,g.jsx)(i.A,{tag:"doc_tags_list"})]})}function d(e){let{tags:t,title:a}=e;return(0,g.jsx)(r.e3,{className:(0,s.A)(l.G.page.docsTagsListPage),children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsx)("div",{className:"row",children:(0,g.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,g.jsx)(o.A,{as:"h1",children:a}),(0,g.jsx)(c.A,{tags:t})]})})})})}function u(e){const t=(0,n.b)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(h,{...e,title:t}),(0,g.jsx)(d,{...e,title:t})]})}},56133:(e,t,a)=>{a.d(t,{A:()=>c});a(96540);var s=a(34164),r=a(28774);const l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var n=a(74848);function c(e){let{permalink:t,label:a,count:c,description:i}=e;return(0,n.jsxs)(r.A,{href:t,title:i,className:(0,s.A)(l.tag,c?l.tagWithCount:l.tagRegular),children:[a,c&&(0,n.jsx)("span",{children:c})]})}},62557:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var s=a(26820),r=a(56133),l=a(51107);const n={tag:"tag_Nnez"};var c=a(74848);function i(e){let{letterEntry:t}=e;return(0,c.jsxs)("article",{children:[(0,c.jsx)(l.A,{as:"h2",id:t.letter,children:t.letter}),(0,c.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,c.jsx)("li",{className:n.tag,children:(0,c.jsx)(r.A,{...e})},e.permalink)))}),(0,c.jsx)("hr",{})]})}function o(e){let{tags:t}=e;const a=(0,s.Q)(t);return(0,c.jsx)("section",{className:"margin-vert--lg",children:a.map((e=>(0,c.jsx)(i,{letterEntry:e},e.letter)))})}},26820:(e,t,a)=>{a.d(t,{Q:()=>l,b:()=>r});var s=a(21312);const r=()=>(0,s.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function l(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[s]=t;return a.localeCompare(s)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);