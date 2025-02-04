"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[42155],{46696:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"0100-0199/number-of-1-bits-easy","title":"0191 - Number of 1 Bits (Easy)","description":"Author: @wkw, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/number-of-1-bits/","source":"@site/solutions/0100-0199/0191-number-of-1-bits-easy.md","sourceDirName":"0100-0199","slug":"/0100-0199/number-of-1-bits-easy","permalink":"/solutions/0100-0199/number-of-1-bits-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0191-number-of-1-bits-easy.md","tags":[],"version":"current","sidebarPosition":191,"frontMatter":{"description":"Author: @wkw, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/number-of-1-bits/"},"sidebar":"tutorialSidebar","previous":{"title":"0188 - Best Time to Buy and Sell Stock IV (Hard)","permalink":"/solutions/0100-0199/best-time-to-buy-and-sell-stock-iv-hard"},"next":{"title":"0198 - House Robber (Medium)","permalink":"/solutions/0100-0199/house-robber-medium"}}');var t=i(86070),a=i(32790);const r={description:"Author: @wkw, @vigneshshiv, @radojicic23 | https://leetcode.com/problems/number-of-1-bits/"},l="0191 - Number of 1 Bits (Easy)",o={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Built-in Function",id:"approach-1-built-in-function",level:2},{value:"Approach 2: Bit Manipulation",id:"approach-2-bit-manipulation",level:2},{value:"Approach 3: n &amp; (n - 1)",id:"approach-3-n--n---1",level:2}];function h(n){const e={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,a.R)(),...n.components},{SolutionAuthor:i,TabItem:s,Tabs:r}=e;return i||u("SolutionAuthor",!0),s||u("TabItem",!0),r||u("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"0191---number-of-1-bits-easy",children:"0191 - Number of 1 Bits (Easy)"})}),"\n",(0,t.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://leetcode.com/problems/number-of-1-bits/",children:"https://leetcode.com/problems/number-of-1-bits/"})}),"\n",(0,t.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(e.p,{children:["Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the ",(0,t.jsx)(e.a,{href:"http://en.wikipedia.org/wiki/Hamming_weight",children:"Hamming weight"}),")."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Note:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned."}),"\n",(0,t.jsxs)(e.li,{children:["In Java, the compiler represents the signed integers using ",(0,t.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/Two's_complement",children:"2's complement notation"}),". Therefore, in ",(0,t.jsx)(e.strong,{children:"Example 3"}),", the input represents the signed integer. ",(0,t.jsx)(e.code,{children:"-3"}),"."]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"Input: n = 00000000000000000000000000001011\nOutput: 3\nExplanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"Input: n = 00000000000000000000000010000000\nOutput: 1\nExplanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example 3:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"Input: n = 11111111111111111111111111111101\nOutput: 31\nExplanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["The input must be a ",(0,t.jsx)(e.strong,{children:"binary string"})," of length ",(0,t.jsx)(e.code,{children:"32"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Follow up:"})," If this function is called many times, how would you optimize it?"]}),"\n",(0,t.jsx)(e.h2,{id:"approach-1-built-in-function",children:"Approach 1: Built-in Function"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsxs)(s,{value:"cpp",label:"C++",children:[(0,t.jsx)(i,{name:"@wkw"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int hammingWeight(uint32_t n) {\n        // or return bitset<32>(n).count();\n        return __builtin_popcount(n);\n    }\n};\n"})})]}),(0,t.jsxs)(s,{value:"py",label:"Python",children:[(0,t.jsx)(i,{name:"@wkw"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-py",children:"class Solution:\n    def hammingWeight(self, n: int) -> int:\n        return bin(n).count('1')\n"})})]}),(0,t.jsxs)(s,{value:"go",label:"Go",children:[(0,t.jsx)(i,{name:"@wkw"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-go",children:"func hammingWeight(num uint32) int {\n    return bits.OnesCount32(num);\n}\n"})})]}),(0,t.jsxs)(s,{value:"rs",label:"Rust",children:[(0,t.jsx)(i,{name:"@wkw"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rs",children:"impl Solution {\n    pub fn hammingWeight (n: u32) -> i32 {\n        n.count_ones() as i32\n    }\n}\n"})})]}),(0,t.jsxs)(s,{value:"java",label:"Java",children:[(0,t.jsx)(i,{name:"@vigneshshiv"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"public class Solution {\n    // you need to treat n as an unsigned value\n    public int hammingWeight(int n) {\n        return Integer.bitCount(n);\n    }\n}\n"})})]}),(0,t.jsxs)(s,{value:"javascript",label:"JavaScript",children:[(0,t.jsx)(i,{name:"@radojicic23"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"/**\n * @param {number} n - a positive integer\n * @return {number}\n */\nvar hammingWeight = function (n) {\n  return n.toString(2).split('1').length - 1;\n};\n"})})]})]}),"\n",(0,t.jsx)(e.h2,{id:"approach-2-bit-manipulation",children:"Approach 2: Bit Manipulation"}),"\n",(0,t.jsxs)(e.p,{children:["We check each parity of teach bit. Increase ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"a"}),(0,t.jsx)(e.mi,{children:"n"}),(0,t.jsx)(e.mi,{children:"s"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"ans"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"an"}),(0,t.jsx)(e.span,{className:"mord mathnormal",children:"s"})]})})]})," by 1 if the bit is set."]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsxs)(s,{value:"cpp",label:"C++",children:[(0,t.jsx)(i,{name:"@wkw"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int hammingWeight(uint32_t n) {\n        int ans = 0;\n        while (n) {\n            if (n & 1) ans++;\n            n >>= 1; // or n /= 2;\n        }\n        return ans;\n    }\n};\n"})})]}),(0,t.jsxs)(s,{value:"java",label:"Java",children:[(0,t.jsx)(i,{name:"@vigneshshiv"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"public class Solution {\n    // you need to treat n as an unsigned value\n    //\n    public int hammingWeight(int n) {\n        int ones = 0;\n        // n > 0, fails to return the correct the answer because of Integer MAX_VALUE.\n        // Integer.MAX_VALUE + 1 is -2147483648, so it's not greater than 0, so n will not enter into loop\n        while (n != 0) {\n            ones += (n & 1);\n            // Why can't we use n >>= 1?\n            // Since n is 32 bit binary number, >> operator does shift by keeping signed bit position same as before\n            // Take a look at SO reference - https://stackoverflow.com/questions/2811319/difference-between-and\n            n >>>= 1;\n        }\n        return ones;\n    }\n}\n"})})]}),(0,t.jsxs)(s,{value:"python",label:"Python",children:[(0,t.jsx)(i,{name:"@radojicic23"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def hammingWeight(self, n: int) -> int:\n        res = 0\n        while n:\n            if (n & 1): res += 1\n            # same as --\x3e n //= 2\n            n >>= 1\n        return res\n"})})]}),(0,t.jsxs)(s,{value:"javascript",label:"JavaScript",children:[(0,t.jsx)(i,{name:"@radojicic23"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"/**\n * @param {number} n - a positive integer\n * @return {number}\n */\nvar hammingWeight = function (n) {\n  let res = 0;\n  while (n != 0) {\n    if (n & 1) res++;\n    n /= 2;\n  }\n  return res;\n};\n"})})]})]}),"\n",(0,t.jsx)(e.h2,{id:"approach-3-n--n---1",children:"Approach 3: n & (n - 1)"}),"\n",(0,t.jsxs)(e.p,{children:["We can optimise approach 2. Instead of checking all digits, we can use ",(0,t.jsx)(e.code,{children:"n & (n - 1)"})," to remove the rightmost set bit."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"n     n     n - 1  n & (n - 1)\n--   ----   ----   -------\n 0   0000   0111    0000\n 1   0001   0000    0000\n 2   0010   0001    0000\n 3   0011   0010    0010\n 4   0100   0011    0000\n 5   0101   0100    0100\n 6   0110   0101    0100\n 7   0111   0110    0110\n 8   1000   0111    0000\n 9   1001   1000    1000\n10   1010   1001    1000\n11   1011   1010    1010\n12   1100   1011    1000\n13   1101   1100    1100\n14   1110   1101    1100\n15   1111   1110    1110\n"})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsxs)(s,{value:"cpp",label:"C++",children:[(0,t.jsx)(i,{name:"@wkw"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int hammingWeight(uint32_t n) {\n        int ans = 0;\n        for (; n; n = n & (n - 1)) ans++;\n        return ans;\n    }\n};\n"})})]}),(0,t.jsxs)(s,{value:"java",label:"Java",children:[(0,t.jsx)(i,{name:"@vigneshshiv"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"public class Solution {\n    // you need to treat n as an unsigned value\n    public int hammingWeight(int n) {\n        int ones = 0;\n        // Since n is 32 bit binary number, count 1's till that range\n        for (int i = 0; i < 32; i++) {\n            ones += (n & 1);\n            n >>= 1;\n        }\n        return ones;\n    }\n}\n"})})]}),(0,t.jsxs)(s,{value:"python",label:"Python",children:[(0,t.jsx)(i,{name:"@radojicic23"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def hammingWeight(self, n: int) -> int:\n        res = 0\n        while n:\n            n = n & (n - 1)\n            res += 1\n        return res\n"})})]})]})]})}function d(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}function u(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},32790:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>l});var s=i(30758);const t={},a=s.createContext(t);function r(n){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);