"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[43380],{62346:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"2100-2199/find-first-palindromic-string-in-the-array-easy","title":"2108 - Find First Palindromic String in the Array (Easy)","description":"Author: @wingkwong | https://leetcode.com/problems/find-first-palindromic-string-in-the-array/","source":"@site/solutions/2100-2199/2108-find-first-palindromic-string-in-the-array-easy.md","sourceDirName":"2100-2199","slug":"/2100-2199/find-first-palindromic-string-in-the-array-easy","permalink":"/solutions/2100-2199/find-first-palindromic-string-in-the-array-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2108-find-first-palindromic-string-in-the-array-easy.md","tags":[],"version":"current","sidebarPosition":2108,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/find-first-palindromic-string-in-the-array/"},"sidebar":"tutorialSidebar","previous":{"title":"2100 - 2199","permalink":"/solutions/category/2100---2199"},"next":{"title":"2109 - Adding Spaces to a String (Medium)","permalink":"/solutions/2100-2199/adding-spaces-to-a-string-medium"}}');var r=i(74848),s=i(28453);const a={description:"Author: @wingkwong | https://leetcode.com/problems/find-first-palindromic-string-in-the-array/"},o="2108 - Find First Palindromic String in the Array (Easy)",c={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Check each word",id:"approach-1-check-each-word",level:2},{value:"Long and Efficient <a></a>",id:"long-and-efficient-",level:4},{value:"Shorter but not efficient <a></a>",id:"shorter-but-not-efficient-",level:4},{value:"Shortest but not efficient <a></a>",id:"shortest-but-not-efficient-",level:4},{value:"Shortest but efficient <a></a>",id:"shortest-but-efficient-",level:4}];function d(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",math:"math",mi:"mi",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{SolutionAuthor:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"2108---find-first-palindromic-string-in-the-array-easy",children:"2108 - Find First Palindromic String in the Array (Easy)"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/find-first-palindromic-string-in-the-array/",children:"https://leetcode.com/problems/find-first-palindromic-string-in-the-array/"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(n.p,{children:["Given an array of strings ",(0,r.jsx)(n.code,{children:"words"}),", return ",(0,r.jsxs)(n.em,{children:["the first ",(0,r.jsx)(n.strong,{children:"palindromic"})," string in the array"]}),". If there is no such string, return _an ",(0,r.jsx)(n.strong,{children:"empty string"})," _ ",(0,r.jsx)(n.code,{children:'""'}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["A string is ",(0,r.jsx)(n.strong,{children:"palindromic"})," if it reads the same forward and backward."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'Input: words = ["abc","car","ada","racecar","cool"]\nOutput: "ada"\nExplanation: The first string that is palindromic is "ada".\nNote that "racecar" is also palindromic, but it is not the first.\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'Input: words = ["notapalindrome","racecar"]\nOutput: "racecar"\nExplanation: The first and only string that is palindromic is "racecar".\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'Input: words = ["def","ghi"]\nOutput: ""\nExplanation: There are no palindromic strings, so the empty string is returned.\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"1 <= words.length <= 100"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"1 <= words[i].length <= 100"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"words[i]"})," consists only of lowercase English letters."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"approach-1-check-each-word",children:"Approach 1: Check each word"}),"\n",(0,r.jsx)(n.p,{children:"There are several ways to check if a string is a palindrome or not."}),"\n",(0,r.jsxs)(n.h4,{id:"long-and-efficient-",children:["Long and Efficient ",(0,r.jsx)("a",{href:"#longandefficient",id:"longandefficient"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"bool isPalindrome(const string& s) {\n    for (int i = 0; i < s.size() / 2; i++) {\n        if (s[i] != s[s.size() - i - 1])\n            return false;\n    }\n    return true;\n}\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"shorter-but-not-efficient-",children:["Shorter but not efficient ",(0,r.jsx)("a",{href:"#shorterbutnotefficient",id:"shorterbutnotefficient"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"bool isPalindrome(const string& s) {\n    string t = s;\n    reverse(t.begin(), t.end());\n    return s == t;\n}\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"shortest-but-not-efficient-",children:["Shortest but not efficient ",(0,r.jsx)("a",{href:"#shortestbutnotefficient",id:"shortestbutnotefficient"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"bool isPalindrome(const string& s) {\n    return s == string(s.rbegin(), s.rend());\n}\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"shortest-but-efficient-",children:["Shortest but efficient ",(0,r.jsx)("a",{href:"#shortestbutefficient",id:"shortestbutefficient"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"bool isPalindrome(const string &s) {\n    return equal(s.begin(), s.begin() + s.size() / 2, s.rbegin());\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["We just need to iterate each string and check if the target ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsx)(n.mrow,{children:(0,r.jsx)(n.mi,{children:"s"})}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"s"})]})})}),(0,r.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,r.jsx)(n.span,{className:"mord mathnormal",children:"s"})]})})]}),"s is a palindrome, return the string if so."]}),"\n",(0,r.jsx)(i,{name:"@wingkwong"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'class Solution {\npublic:\n    bool isPalindrome(const string& s) {\n        return equal(s.begin(), s.begin() + s.size() / 2, s.rbegin());\n    }\n    \n    string firstPalindrome(vector<string>& words) {\n        for (auto s : words) {\n            if (isPalindrome(s)) {\n                return s;\n            }\n        }\n        return "";\n    }\n};\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(96540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);