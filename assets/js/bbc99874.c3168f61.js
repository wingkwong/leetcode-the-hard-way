"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[68793],{4131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"2800-2899/faulty-keyboard-easy","title":"2810 - Faulty Keyboard (Easy)","description":"Author: @wingkwong | https://leetcode.com/problems/faulty-keyboard/","source":"@site/solutions/2800-2899/2810-faulty-keyboard-easy.md","sourceDirName":"2800-2899","slug":"/2800-2899/faulty-keyboard-easy","permalink":"/solutions/2800-2899/faulty-keyboard-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2800-2899/2810-faulty-keyboard-easy.md","tags":[{"inline":true,"label":"String","permalink":"/solutions/tags/string"},{"inline":true,"label":"Simulation","permalink":"/solutions/tags/simulation"}],"version":"current","sidebarPosition":2810,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/faulty-keyboard/","tags":["String","Simulation"]},"sidebar":"tutorialSidebar","previous":{"title":"2800 - 2899","permalink":"/solutions/category/2800---2899"},"next":{"title":"2811 - Check if it is Possible to Split Array (Medium)","permalink":"/solutions/2800-2899/check-if-it-is-possible-to-split-array-medium"}}');var s=n(74848),i=n(28453);const o={description:"Author: @wingkwong | https://leetcode.com/problems/faulty-keyboard/",tags:["String","Simulation"]},a="2810 - Faulty Keyboard (Easy)",c={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Simulation",id:"approach-1-simulation",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{SolutionAuthor:n,TabItem:r,Tabs:o}=t;return n||u("SolutionAuthor",!0),r||u("TabItem",!0),o||u("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"2810---faulty-keyboard-easy",children:"2810 - Faulty Keyboard (Easy)"})}),"\n",(0,s.jsx)(t.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/faulty-keyboard/",children:"https://leetcode.com/problems/faulty-keyboard/"})}),"\n",(0,s.jsx)(t.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(t.p,{children:["Your laptop keyboard is faulty, and whenever you type a character ",(0,s.jsx)(t.code,{children:"'i'"})," on it, it reverses the string that you have written. Typing other characters works as expected."]}),"\n",(0,s.jsxs)(t.p,{children:["You are given a ",(0,s.jsx)(t.strong,{children:"0-indexed"})," string ",(0,s.jsx)(t.code,{children:"s"}),", and you type each character of ",(0,s.jsx)(t.code,{children:"s"})," using your faulty keyboard."]}),"\n",(0,s.jsxs)(t.p,{children:["Return ",(0,s.jsx)(t.em,{children:"the final string that will be present on your laptop screen."})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'Input: s = "string"\nOutput: "rtsng"\nExplanation: \nAfter typing first character, the text on the screen is "s".\nAfter the second character, the text is "st". \nAfter the third character, the text is "str".\nSince the fourth character is an \'i\', the text gets reversed and becomes "rts".\nAfter the fifth character, the text is "rtsn". \nAfter the sixth character, the text is "rtsng". \nTherefore, we return "rtsng".\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'Input: s = "poiinter"\nOutput: "ponter"\nExplanation: \nAfter the first character, the text on the screen is "p".\nAfter the second character, the text is "po". \nSince the third character you type is an \'i\', the text gets reversed and becomes "op". \nSince the fourth character you type is an \'i\', the text gets reversed and becomes "po".\nAfter the fifth character, the text is "pon".\nAfter the sixth character, the text is "pont". \nAfter the seventh character, the text is "ponte". \nAfter the eighth character, the text is "ponter". \nTherefore, we return "ponter".\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"1 <= s.length <= 100"})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"s"})," consists of lowercase English letters."]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"s[0] != 'i'"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"approach-1-simulation",children:"Approach 1: Simulation"}),"\n",(0,s.jsxs)(t.p,{children:["Just follow the instructure. Whenever we type a character ",(0,s.jsx)(t.code,{children:"i"}),", we reverse the string that we have. Otherwise, we add the current character to the string."]}),"\n",(0,s.jsx)(o,{children:(0,s.jsxs)(r,{value:"cpp",label:"C++",children:[(0,s.jsx)(n,{name:"@wingkwong"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"class Solution {\npublic:\n    string finalString(string s) {\n        string ans;\n        for (auto c : s) {\n            if (c == 'i') reverse(ans.begin(), ans.end());\n            else ans += c;\n        }\n        return ans;\n    }\n};\n"})})]})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);