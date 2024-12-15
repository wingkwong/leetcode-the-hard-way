"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[39967],{56240:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"0800-0899/backspace-string-compare-easy","title":"0844 - Backspace String Compare (Easy)","description":"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/backspace-string-compare/","source":"@site/solutions/0800-0899/0844-backspace-string-compare-easy.md","sourceDirName":"0800-0899","slug":"/0800-0899/backspace-string-compare-easy","permalink":"/solutions/0800-0899/backspace-string-compare-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0800-0899/0844-backspace-string-compare-easy.md","tags":[{"inline":true,"label":"Two Pointers","permalink":"/solutions/tags/two-pointers"},{"inline":true,"label":"String","permalink":"/solutions/tags/string"},{"inline":true,"label":"Stack","permalink":"/solutions/tags/stack"},{"inline":true,"label":"Simulation","permalink":"/solutions/tags/simulation"}],"version":"current","sidebarPosition":844,"frontMatter":{"description":"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/backspace-string-compare/","tags":["Two Pointers","String","Stack","Simulation"]},"sidebar":"tutorialSidebar","previous":{"title":"0841 - Keys and Rooms (Medium)","permalink":"/solutions/0800-0899/keys-and-rooms-medium"},"next":{"title":"0846 - Hand of Straights (Medium)","permalink":"/solutions/0800-0899/hand-of-straights-medium"}}');var a=s(74848),r=s(28453);const i={description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/backspace-string-compare/",tags:["Two Pointers","String","Stack","Simulation"]},c="0844 - Backspace String Compare (Easy)",o={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Simulation",id:"approach-1-simulation",level:2}];function p(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{SolutionAuthor:s,TabItem:t,Tabs:i}=n;return s||h("SolutionAuthor",!0),t||h("TabItem",!0),i||h("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"0844---backspace-string-compare-easy",children:"0844 - Backspace String Compare (Easy)"})}),"\n",(0,a.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://leetcode.com/problems/backspace-string-compare/",children:"https://leetcode.com/problems/backspace-string-compare/"})}),"\n",(0,a.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(n.p,{children:["Given two strings ",(0,a.jsx)(n.code,{children:"s"})," and ",(0,a.jsx)(n.code,{children:"t"}),", return ",(0,a.jsx)(n.code,{children:"true"})," ",(0,a.jsx)(n.em,{children:"if they are equal when both are typed into empty text editors"}),". ",(0,a.jsx)(n.code,{children:"'#'"})," means a backspace character."]}),"\n",(0,a.jsx)(n.p,{children:"Note that after backspacing an empty text, the text will continue empty."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'Input: s = "ab#c", t = "ad#c"\nOutput: true\nExplanation: Both s and t become "ac".\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'Input: s = "ab##", t = "c#d#"\nOutput: true\nExplanation: Both s and t become "".\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'Input: s = "a#c", t = "b"\nOutput: false\nExplanation: s becomes "c" while t becomes "b".\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"1 <= s.length, t.length <= 200"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"s"})," and ",(0,a.jsx)(n.code,{children:"t"})," only contain lowercase letters and ",(0,a.jsx)(n.code,{children:"'#'"})," characters."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"approach-1-simulation",children:"Approach 1: Simulation"}),"\n",(0,a.jsxs)(n.p,{children:["We build the final string for ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"s"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"s"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"s"})]})})]})," and ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"t"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"t"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6151em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"t"})]})})]}),". If we see #, then we can only backspace if the final string is not empty. Otherwise, we add the character to the final string. Since we need to do the same thing on both string, it's better to write a function to build the string."]}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsxs)(t,{value:"cpp",label:"C++",children:[(0,a.jsx)(s,{name:"@wingkwong"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    string process(string s) {\n        string res;\n        for (auto x : s) {\n            // include this character to final string\n            if (x != '#') res.push_back(x);\n            // pop the previous character if possible\n            else if (res.size()) res.pop_back();\n        }\n        return res;\n    }\n    bool backspaceCompare(string s, string t) {\n        // check if both are same after processed\n        return process(s) == process(t);\n    }\n};\n"})})]}),(0,a.jsxs)(t,{value:"python",label:"Python",children:[(0,a.jsx)(s,{name:"@radojicic23"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'class Solution:\n    def backspaceCompare(self, s: str, t: str) -> bool:\n        \n        def get_result(st):\n            new_st = []\n            for c in st:\n                if c == "#":\n                    if new_st:\n                        new_st.pop()\n                else:\n                    new_st.append(c)\n            return "".join(new_st)\n        return get_result(s) == get_result(t)\n'})})]}),(0,a.jsxs)(t,{value:"javascript",label:"JavaScript",children:[(0,a.jsx)(s,{name:"@radojicic23"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'/**\n * @param {string} s\n * @param {string} t\n * @return {boolean}\n */\nvar backspaceCompare = function(s, t) {\n    function get_result(st) {\n        let new_st = [];\n        for (c of st) {\n            if (c == "#") {\n                if (new_st != null) new_st.pop();\n            } else new_st.push(c);\n        }\n        return new_st.join("");\n    }\n    return get_result(s) == get_result(t);\n};\n'})})]}),(0,a.jsxs)(t,{value:"kotlin",label:"Kotlin",children:[(0,a.jsx)(s,{name:"@wingkwong"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kt",children:"class Solution {\n    fun process(s: String): String {\n        val res = StringBuilder()\n        for (x in s) {\n            // include this character to final string\n            if (x != '#') res.append(x)\n            // pop the previous character if possible\n            else if (res.isNotEmpty()) res.deleteAt(res.length - 1)\n        }\n        return res.toString()\n    }\n\n    fun backspaceCompare(s: String, t: String): Boolean {\n        // check if both are same after processed\n        return process(s) == process(t)\n    }\n}\n"})})]})]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(96540);const a={},r=t.createContext(a);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);