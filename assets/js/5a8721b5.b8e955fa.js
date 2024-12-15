"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[49654],{41451:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"0100-0199/valid-palindrome","title":"0125 - Valid Palindrome (Easy)","description":"Author: @vale-c | https://leetcode.com/problems/valid-palindrome/","source":"@site/solutions/0100-0199/0125-valid-palindrome.md","sourceDirName":"0100-0199","slug":"/0100-0199/valid-palindrome","permalink":"/solutions/0100-0199/valid-palindrome","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0125-valid-palindrome.md","tags":[],"version":"current","sidebarPosition":125,"frontMatter":{"description":"Author: @vale-c | https://leetcode.com/problems/valid-palindrome/"},"sidebar":"tutorialSidebar","previous":{"title":"0124 - Binary Tree Maximum Path Sum (Hard)","permalink":"/solutions/0100-0199/binary-tree-maximum-path-sum-hard"},"next":{"title":"0127 - Word Ladder (Hard)","permalink":"/solutions/0100-0199/word-ladder-hard"}}');var r=a(74848),t=a(28453);const l={description:"Author: @vale-c | https://leetcode.com/problems/valid-palindrome/"},i="0125 - Valid Palindrome (Easy)",o={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach: Two Pointers",id:"approach-two-pointers",level:2},{value:"Time Complexity",id:"time-complexity",level:4},{value:"Space Complexity",id:"space-complexity",level:4}];function d(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{SolutionAuthor:a,TabItem:s,Tabs:l}=n;return a||m("SolutionAuthor",!0),s||m("TabItem",!0),l||m("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"0125---valid-palindrome-easy",children:"0125 - Valid Palindrome (Easy)"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/valid-palindrome/",children:"https://leetcode.com/problems/valid-palindrome/"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsx)(n.p,{children:"A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers."}),"\n",(0,r.jsxs)(n.p,{children:["Given a string ",(0,r.jsx)(n.code,{children:"s"}),", return ",(0,r.jsx)(n.code,{children:"true"})," if it is a palindrome, or ",(0,r.jsx)(n.code,{children:"false"})," otherwise."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"1 <= s.length <= 2 * 10 ^ 5"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"s"})," consists only of printable ASCII characters."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"approach-two-pointers",children:"Approach: Two Pointers"}),"\n",(0,r.jsx)(n.p,{children:"We can use two pointers to check if the string is a palindrome. We start from the beginning and the end of the string and move progressively towards the middle of the string."}),"\n",(0,r.jsxs)(n.p,{children:["We use a variable ",(0,r.jsx)(n.code,{children:"alpha"})," to perform the following operations:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Converting all uppercase letters to lowercase"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Ignoring all non-alphanumeric characters"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If the characters at the two pointers are ",(0,r.jsx)(n.em,{children:"not"})," the same, we return ",(0,r.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If we reach the middle of the string, we return ",(0,r.jsx)(n.em,{children:"true"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"time-complexity",children:"Time Complexity"}),"\n",(0,r.jsxs)(n.p,{children:["The time complexity for this solution is ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsxs)(n.mrow,{children:[(0,r.jsx)(n.mi,{children:"O"}),(0,r.jsx)(n.mo,{stretchy:"false",children:"("}),(0,r.jsx)(n.mi,{children:"n"}),(0,r.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,r.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,r.jsx)(n.span,{className:"mopen",children:"("}),(0,r.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(n.span,{className:"mclose",children:")"})]})})]}),", where ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsx)(n.mrow,{children:(0,r.jsx)(n.mi,{children:"n"})}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,r.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,r.jsx)(n.span,{className:"mord mathnormal",children:"n"})]})})]})," is the length of the string."]}),"\n",(0,r.jsx)(n.h4,{id:"space-complexity",children:"Space Complexity"}),"\n",(0,r.jsxs)(n.p,{children:["The space complexity is ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsxs)(n.mrow,{children:[(0,r.jsx)(n.mi,{children:"O"}),(0,r.jsx)(n.mo,{stretchy:"false",children:"("}),(0,r.jsx)(n.mn,{children:"1"}),(0,r.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,r.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,r.jsx)(n.span,{className:"mopen",children:"("}),(0,r.jsx)(n.span,{className:"mord",children:"1"}),(0,r.jsx)(n.span,{className:"mclose",children:")"})]})})]})," since we only use a constant amount of space."]}),"\n",(0,r.jsxs)(l,{children:[(0,r.jsxs)(s,{value:"py",label:"Python",children:[(0,r.jsx)(a,{name:"@vale-c"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"class Solution:\n    def isPalindrome(self, s: str) -> bool:\n        # discard all non-alphanumeric characters and \n        # convert all uppercase letters to lowercase\n        alpha = ''.join(char for char in s.lower() if char.isalnum()) \n\n        # start pointer from the beginning\n        # end pointer from the end\n        start, end = 0, len(alpha) - 1\n\n        while (start < end):\n            if alpha[start] != alpha[end]:\n                return False\n            else:\n                # move start pointer to the right\n                start += 1\n                # move end pointer to the left\n                end -= 1\n        return True\n"})})]}),(0,r.jsxs)(s,{value:"cpp",label:"C++",children:[(0,r.jsx)(a,{name:"@vale-c"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'class Solution {\npublic:\n    bool isPalindrome(string s) {\n        /* discard all non-alphanumeric characters and convert all uppercase letters to lowercase */\n        string alpha = "";\n        for (char c : s) {\n            if (isalnum(c)) {\n                alpha += tolower(c);\n            }\n        }\n\n        int start = 0;\n        int end = alpha.length() - 1;\n\n        while (start < end) {\n            if (alpha[start] != alpha[end]) {\n                return false;\n            } else {\n                start += 1;\n                end -= 1;\n            }\n        }\n        return true;\n    }\n};\n'})})]}),(0,r.jsxs)(s,{value:"java",label:"Java",children:[(0,r.jsx)(a,{name:"@vale-c"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'class Solution {\n    public boolean isPalindrome(String s) {\n        /* discard all non-alphanumeric characters and convert all uppercase letters to lowercase */\n        String alpha = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();\n        \n        int start = 0;\n        int end = alpha.length() - 1;\n\n        while (start < end) {\n            if (alpha.charAt(start) != alpha.charAt(end)) {\n                return false;\n            } else {\n                start += 1;\n                end -= 1;\n            }\n        }\n        return true;\n    }\n}\n'})})]}),(0,r.jsxs)(s,{value:"javascript",label:"JavaScript",children:[(0,r.jsx)(a,{name:"@vale-c"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"/**\n * @param {string} s\n * @return {boolean}\n */\nvar isPalindrome = function(s) {\n    /* discard all non-alphanumeric characters and convert all uppercase letters to lowercase */\n    const alpha = s.toLowerCase().replace(/[^a-z0-9]/g, ''); \n    \n    let start = 0;\n    let end = alpha.length - 1;\n\n    while (start < end) {\n        if (alpha[start] != alpha[end]) {\n            return false;\n        } else {\n            start += 1;\n            end -= 1;\n        }\n    }\n    return true;\n};\n"})})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>i});var s=a(96540);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);