"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[31676],{15755:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"0300-0399/valid-perfect-square-easy","title":"0367 - Valid Perfect Square (Easy)","description":"Author: @wingkwong, @deepanshu-rawat6, @radojicic23 | https://leetcode.com/problems/valid-perfect-square/","source":"@site/solutions/0300-0399/0367-valid-perfect-square-easy.md","sourceDirName":"0300-0399","slug":"/0300-0399/valid-perfect-square-easy","permalink":"/solutions/0300-0399/valid-perfect-square-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0300-0399/0367-valid-perfect-square-easy.md","tags":[],"version":"current","sidebarPosition":367,"frontMatter":{"description":"Author: @wingkwong, @deepanshu-rawat6, @radojicic23 | https://leetcode.com/problems/valid-perfect-square/"},"sidebar":"tutorialSidebar","previous":{"title":"0365 - Water and Jug Problem (Medium)","permalink":"/solutions/0300-0399/water-and-jug-problem-medium"},"next":{"title":"0374 - Guess Number Higher or Lower (Easy)","permalink":"/solutions/0300-0399/guess-number-higher-or-lower-easy"}}');var r=s(74848),i=s(28453);const l={description:"Author: @wingkwong, @deepanshu-rawat6, @radojicic23 | https://leetcode.com/problems/valid-perfect-square/"},t="0367 - Valid Perfect Square (Easy)",c={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Binary Search",id:"approach-1-binary-search",level:2}];function o(e){const n={a:"a",admonition:"admonition",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{SolutionAuthor:s,TabItem:a,Tabs:l}=n;return s||d("SolutionAuthor",!0),a||d("TabItem",!0),l||d("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"0367---valid-perfect-square-easy",children:"0367 - Valid Perfect Square (Easy)"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/valid-perfect-square/",children:"https://leetcode.com/problems/valid-perfect-square/"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(n.p,{children:["Given a ",(0,r.jsx)(n.strong,{children:"positive"})," integer ",(0,r.jsx)(n.em,{children:"num"}),", write a function which returns True if ",(0,r.jsx)(n.em,{children:"num"})," is a perfect square else False."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Follow up:"})," ",(0,r.jsx)(n.strong,{children:"Do not"})," use any built-in library function such as ",(0,r.jsx)(n.code,{children:"sqrt"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: num = 16\nOutput: true\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: num = 14\nOutput: false\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"1 <= num <= 2^31 - 1"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"approach-1-binary-search",children:"Approach 1: Binary Search"}),"\n",(0,r.jsx)(n.admonition,{title:"Prerequisite",type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../../tutorials/basic-topics/binary-search",children:"Binary Search"})}),"\n"]})}),"\n",(0,r.jsxs)(n.p,{children:["This approach is similar to Standard Binary Search, just need check for ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsxs)(n.mrow,{children:[(0,r.jsx)(n.mi,{children:"m"}),(0,r.jsx)(n.mi,{children:"i"}),(0,r.jsx)(n.mi,{children:"d"}),(0,r.jsx)(n.mo,{children:"\u2217"}),(0,r.jsx)(n.mi,{children:"m"}),(0,r.jsx)(n.mi,{children:"i"}),(0,r.jsx)(n.mi,{children:"d"})]}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"mid*mid"})]})})}),(0,r.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"0.6944em"}}),(0,r.jsx)(n.span,{className:"mord mathnormal",children:"mi"}),(0,r.jsx)(n.span,{className:"mord mathnormal",children:"d"}),(0,r.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.jsx)(n.span,{className:"mbin",children:"\u2217"}),(0,r.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"0.6944em"}}),(0,r.jsx)(n.span,{className:"mord mathnormal",children:"mi"}),(0,r.jsx)(n.span,{className:"mord mathnormal",children:"d"})]})]})]})," and ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsxs)(n.mrow,{children:[(0,r.jsx)(n.mi,{children:"n"}),(0,r.jsx)(n.mi,{children:"u"}),(0,r.jsx)(n.mi,{children:"m"})]}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"num"})]})})}),(0,r.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,r.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(n.span,{className:"mord mathnormal",children:"u"}),(0,r.jsx)(n.span,{className:"mord mathnormal",children:"m"})]})})]})," . Finally, we also need to check for overflow, for that its better to use long long in Cpp or long in Java.\nThis solution gives ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsxs)(n.mrow,{children:[(0,r.jsx)(n.mi,{children:"O"}),(0,r.jsx)(n.mo,{stretchy:"false",children:"("}),(0,r.jsx)(n.mi,{children:"l"}),(0,r.jsx)(n.mi,{children:"o"}),(0,r.jsx)(n.mi,{children:"g"}),(0,r.jsx)(n.mi,{children:"n"}),(0,r.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"O( log n )"})]})})}),(0,r.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,r.jsx)(n.span,{className:"mopen",children:"("}),(0,r.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,r.jsx)(n.span,{className:"mord mathnormal",children:"o"}),(0,r.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,r.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(n.span,{className:"mclose",children:")"})]})})]})," time complexity and ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsxs)(n.mrow,{children:[(0,r.jsx)(n.mi,{children:"O"}),(0,r.jsx)(n.mo,{stretchy:"false",children:"("}),(0,r.jsx)(n.mn,{children:"1"}),(0,r.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"O( 1 )"})]})})}),(0,r.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,r.jsx)(n.span,{className:"mopen",children:"("}),(0,r.jsx)(n.span,{className:"mord",children:"1"}),(0,r.jsx)(n.span,{className:"mclose",children:")"})]})})]})," space complexity."]}),"\n",(0,r.jsxs)(l,{children:[(0,r.jsxs)(a,{value:"cpp",label:"C++",children:[(0,r.jsx)(s,{name:"@wingkwong"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool isPerfectSquare(int num) {\n        // init possible range\n        // for num > 2, the range is actually [2 .. num / 2]\n        long long l = 1, r = num;\n        while (l < r) {\n            long long m = l + (r - l) / 2;\n            // exclude m\n            if (num > m * m) l = m + 1;\n            // include m\n            else r = m;\n        }\n        // check if it is a perfect square\n        return l * l == num;\n    }\n};\n"})})]}),(0,r.jsxs)(a,{value:"java",label:"Java",children:[(0,r.jsx)(s,{name:"@deepanshu-rawat6"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"class Solution {\n    public boolean isPerfectSquare(int num) {\n        // Binary Search \n        // choosing long because of overflow \n        long s = 0, e = num;\n        while (s <= e) {\n            long mid = s + (e - s) / 2;\n            // check if it's a perfect square\n            if (mid * mid == num) { \n                return true;\n            }\n            // checks where num lies above or below mid*mid\n            // then change the values of s or e accordingly\n            if (mid * mid < num) s = mid + 1;\n            else e = mid - 1;\n        }\n        // return false if no result found\n        return false;\n    }\n}\n"})})]}),(0,r.jsxs)(a,{value:"py",label:"Python",children:[(0,r.jsx)(s,{name:"@radojicic23"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"class Solution:\n    def isPerfectSquare(self, num: int) -> bool:\n        left = 0\n        right = num\n        while left <= right:\n            mid = (left + right) // 2\n            if mid ** 2 == num:\n                return True\n            elif mid ** 2 < num:\n                left = mid + 1\n            else:\n                right = mid - 1\n        return False\n"})})]}),(0,r.jsxs)(a,{value:"js",label:"JavaScript",children:[(0,r.jsx)(s,{name:"@radojicic23"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"/**\n * @param {number} num\n * @return {boolean}\n */\nvar isPerfectSquare = function(num) {\n    let left = 0;\n    let right = num;\n    while (left <= right) {\n        let mid = Math.floor((left + right) / 2);\n        if (mid ** 2 === num) {\n            return true;\n        } else if (mid ** 2 > num) {\n            right = mid - 1;\n        } else {\n            left = mid + 1;\n        }\n    }\n    return false;\n}\n"})})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>t});var a=s(96540);const r={},i=a.createContext(r);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);