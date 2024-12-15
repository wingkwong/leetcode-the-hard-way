"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[14204],{82539:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"1200-1299/subtract-the-product-and-sum-of-digits-of-an-integer-easy","title":"1281 - Subtract the Product and Sum of Digits of an Integer (Easy)","description":"Author: @wingkwong | https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/","source":"@site/solutions/1200-1299/1281-subtract-the-product-and-sum-of-digits-of-an-integer-easy.md","sourceDirName":"1200-1299","slug":"/1200-1299/subtract-the-product-and-sum-of-digits-of-an-integer-easy","permalink":"/solutions/1200-1299/subtract-the-product-and-sum-of-digits-of-an-integer-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1200-1299/1281-subtract-the-product-and-sum-of-digits-of-an-integer-easy.md","tags":[],"version":"current","sidebarPosition":1281,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/"},"sidebar":"tutorialSidebar","previous":{"title":"1269 - Number of Ways to Stay in the Same Place After Some Steps (Hard)","permalink":"/solutions/1200-1299/number-of-ways-to-stay-in-the-same-place-after-some-steps-hard"},"next":{"title":"1293 - Shortest Path in a Grid with Obstacles Elimination (Hard)","permalink":"/solutions/1200-1299/shortest-path-in-a-grid-with-obstacles-elimination-hard"}}');var i=e(74848),r=e(28453);const a={description:"Author: @wingkwong | https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/"},o="1281 - Subtract the Product and Sum of Digits of an Integer (Easy)",d={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: <strong>Product &amp; Sum of Digits</strong>",id:"approach-1-product--sum-of-digits",level:2}];function l(n){const t={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...n.components},{SolutionAuthor:e}=t;return e||function(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"1281---subtract-the-product-and-sum-of-digits-of-an-integer-easy",children:"1281 - Subtract the Product and Sum of Digits of an Integer (Easy)"})}),"\n",(0,i.jsx)(t.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/",children:"https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/"})}),"\n",(0,i.jsx)(t.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(t.p,{children:["Given an integer number ",(0,i.jsx)(t.code,{children:"n"}),", return the difference between the product of its digits and the sum of its digits."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Input: n = 234\nOutput: 15 \nExplanation: \nProduct of digits = 2 * 3 * 4 = 24 \nSum of digits = 2 + 3 + 4 = 9 \nResult = 24 - 9 = 15\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Input: n = 4421\nOutput: 21\nExplanation: \nProduct of digits = 4 * 4 * 2 * 1 = 32 \nSum of digits = 4 + 4 + 2 + 1 = 11 \nResult = 32 - 11 = 21\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"1 <= n <= 10^5"})}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"approach-1-product--sum-of-digits",children:["Approach 1: ",(0,i.jsx)(t.strong,{children:"Product & Sum of Digits"})]}),"\n",(0,i.jsxs)(t.p,{children:["If you have done ",(0,i.jsx)(t.a,{href:"../0200-0299/add-digits-easy",children:"0258 - Add Digits (Easy)"}),", then you should know how to calculate the sum of digits. If not, it is recommended to solve 0258 before solving this problem. To recap, here's how to calculate the sum of digits."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",children:"int digitSum(int n) {\n    int sum = 0;\n    while (n > 0) {\n        // get the last digit and add it to sum\n        // e.g. 123 % 10 = 3. Add 3 to sum\n        sum += n % 10;\n        // dividing by 10 for the next run\n        // e.g. 123 / 10 -> 12\n        n /= 10;\n    }\n    return sum;\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["We can use the same idea to calculate the product of each digit. Instead of adding each digit to ",(0,i.jsxs)(t.span,{className:"katex",children:[(0,i.jsx)(t.span,{className:"katex-mathml",children:(0,i.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(t.semantics,{children:[(0,i.jsxs)(t.mrow,{children:[(0,i.jsx)(t.mi,{children:"s"}),(0,i.jsx)(t.mi,{children:"u"}),(0,i.jsx)(t.mi,{children:"m"})]}),(0,i.jsx)(t.annotation,{encoding:"application/x-tex",children:"sum"})]})})}),(0,i.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(t.span,{className:"base",children:[(0,i.jsx)(t.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(t.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(t.span,{className:"mord mathnormal",children:"u"}),(0,i.jsx)(t.span,{className:"mord mathnormal",children:"m"})]})})]}),", we multiply it with ",(0,i.jsxs)(t.span,{className:"katex",children:[(0,i.jsx)(t.span,{className:"katex-mathml",children:(0,i.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(t.semantics,{children:[(0,i.jsxs)(t.mrow,{children:[(0,i.jsx)(t.mi,{children:"p"}),(0,i.jsx)(t.mi,{children:"r"}),(0,i.jsx)(t.mi,{children:"o"}),(0,i.jsx)(t.mi,{children:"d"}),(0,i.jsx)(t.mi,{children:"u"}),(0,i.jsx)(t.mi,{children:"c"}),(0,i.jsx)(t.mi,{children:"t"})]}),(0,i.jsx)(t.annotation,{encoding:"application/x-tex",children:"product"})]})})}),(0,i.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(t.span,{className:"base",children:[(0,i.jsx)(t.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(t.span,{className:"mord mathnormal",children:"p"}),(0,i.jsx)(t.span,{className:"mord mathnormal",children:"ro"}),(0,i.jsx)(t.span,{className:"mord mathnormal",children:"d"}),(0,i.jsx)(t.span,{className:"mord mathnormal",children:"u"}),(0,i.jsx)(t.span,{className:"mord mathnormal",children:"c"}),(0,i.jsx)(t.span,{className:"mord mathnormal",children:"t"})]})})]}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",children:"int digitProduct(int n) {\n    int product = 1;\n    while (n > 0) {\n        // get the last digit and multiply with product\n        // e.g. 123 % 10 = 3. product = product * 3\n        product *= n % 10;\n        // dividing by 10 for the next run\n        // e.g. 123 / 10 -> 12\n        n /= 10;\n    }\n    return product;\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"At the end, we just subtract the product and sum."}),"\n",(0,i.jsx)(e,{name:"@wingkwong"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int digitSum(int n) {\n        int sum = 0;\n        while (n > 0) {\n            // get the last digit and add it to sum\n            // e.g. 123 % 10 = 3. Add 3 to sum\n            sum += n % 10;\n            // dividing by 10 for the next run\n            // e.g. 123 / 10 -> 12\n            n /= 10;\n        }\n        return sum;\n    }\n    \n    int digitProduct(int n) {\n        int product = 1;\n        while (n > 0) {\n            // get the last digit and multiply with product\n            // e.g. 123 % 10 = 3. product = product * 3\n            product *= n % 10;\n            // dividing by 10 for the next run\n            // e.g. 123 / 10 -> 12\n            n /= 10;\n        }\n        return product;\n    }\n    \n    int subtractProductAndSum(int n) {\n        return digitProduct(n) - digitSum(n);\n    }\n};\n"})}),"\n",(0,i.jsx)(t.p,{children:"Once you got the idea, you should realise that they can be combined together."}),"\n",(0,i.jsx)(e,{name:"@wingkwong"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int subtractProductAndSum(int n) {\n        int product = 1, sum = 0;\n        while (n) {\n            product *= n % 10;\n            sum += n % 10;\n            n /= 10;\n        }\n        return product - sum;\n    }\n};\n"})}),"\n",(0,i.jsx)(e,{name:"@wingkwong"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"func subtractProductAndSum(n int) int {\n    product, sum := 1, 0\n    for n > 0 {\n        product *= n % 10\n        sum += n % 10\n        n /= 10\n    }\n    return product - sum\n}\n"})})]})}function u(n={}){const{wrapper:t}={...(0,r.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>a,x:()=>o});var s=e(96540);const i={},r=s.createContext(i);function a(n){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function o(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),s.createElement(r.Provider,{value:t},n.children)}}}]);