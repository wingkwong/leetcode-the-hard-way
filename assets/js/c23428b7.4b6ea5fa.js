"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[21826],{25448:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"1200-1299/replace-elements-with-greatest-element-on-right-side-easy","title":"1299 - Replace Elements with Greatest Element on Right Side","description":"Author: @ColeB2 | https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/","source":"@site/solutions/1200-1299/1299-replace-elements-with-greatest-element-on-right-side-easy.md","sourceDirName":"1200-1299","slug":"/1200-1299/replace-elements-with-greatest-element-on-right-side-easy","permalink":"/solutions/1200-1299/replace-elements-with-greatest-element-on-right-side-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1200-1299/1299-replace-elements-with-greatest-element-on-right-side-easy.md","tags":[{"inline":true,"label":"Array","permalink":"/solutions/tags/array"}],"version":"current","sidebarPosition":1299,"frontMatter":{"description":"Author: @ColeB2 | https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/","tags":["Array"]},"sidebar":"tutorialSidebar","previous":{"title":"1293 - Shortest Path in a Grid with Obstacles Elimination (Hard)","permalink":"/solutions/1200-1299/shortest-path-in-a-grid-with-obstacles-elimination-hard"},"next":{"title":"1300 - 1399","permalink":"/solutions/category/1300---1399"}}');var t=a(74848),r=a(28453);const l={description:"Author: @ColeB2 | https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/",tags:["Array"]},i="1299 - Replace Elements with Greatest Element on Right Side",m={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Iterate Backwards",id:"approach-1-iterate-backwards",level:2}];function c(e){const s={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{SolutionAuthor:a,TabItem:n,Tabs:l}=s;return a||o("SolutionAuthor",!0),n||o("TabItem",!0),l||o("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"1299---replace-elements-with-greatest-element-on-right-side",children:"1299 - Replace Elements with Greatest Element on Right Side"})}),"\n",(0,t.jsx)(s.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/",children:"https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/"})}),"\n",(0,t.jsx)(s.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(s.p,{children:["Given an array ",(0,t.jsx)(s.code,{children:"arr"}),", replace every element in that array with the greatest element among the elements to its right, and replace the last element with ",(0,t.jsx)(s.code,{children:"-1"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"After doing so, return the array."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"Input: arr = [17,18,5,4,6,1]\nOutput: [18,6,6,6,1,-1]\nExplanation: \n- index 0 --\x3e the greatest element to the right of index 0 is index 1 (18).\n- index 1 --\x3e the greatest element to the right of index 1 is index 4 (6).\n- index 2 --\x3e the greatest element to the right of index 2 is index 4 (6).\n- index 3 --\x3e the greatest element to the right of index 3 is index 4 (6).\n- index 4 --\x3e the greatest element to the right of index 4 is index 5 (1).\n- index 5 --\x3e there are no elements to the right of index 5, so we put -1.\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"Input: arr = [400]\nOutput: [-1]\nExplanation: There are no elements to the right of index 0.\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"1 <= arr.length <= 10^4"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"1 <= arr[i] <= 10^5"})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"approach-1-iterate-backwards",children:"Approach 1: Iterate Backwards"}),"\n",(0,t.jsxs)(s.p,{children:["By initializing a ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"g"}),(0,t.jsx)(s.mi,{children:"r"}),(0,t.jsx)(s.mi,{children:"e"}),(0,t.jsx)(s.mi,{children:"a"}),(0,t.jsx)(s.mi,{children:"t"}),(0,t.jsx)(s.mi,{children:"e"}),(0,t.jsx)(s.mi,{children:"s"}),(0,t.jsx)(s.mi,{children:"t"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"greatest"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"re"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"es"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"t"})]})})]})," variable, which tracks the greatest number found so far, we can iterate backwards, and store the current number in a ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"t"}),(0,t.jsx)(s.mi,{children:"e"}),(0,t.jsx)(s.mi,{children:"m"}),(0,t.jsx)(s.mi,{children:"p"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"temp"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"p"})]})})]})," variable. From there all we need to do is update the current position in the array with the value from our ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"g"}),(0,t.jsx)(s.mi,{children:"r"}),(0,t.jsx)(s.mi,{children:"e"}),(0,t.jsx)(s.mi,{children:"a"}),(0,t.jsx)(s.mi,{children:"t"}),(0,t.jsx)(s.mi,{children:"e"}),(0,t.jsx)(s.mi,{children:"s"}),(0,t.jsx)(s.mi,{children:"t"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"greatest"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"re"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"es"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"t"})]})})]})," variable, update the greatest variable with the larger of ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"g"}),(0,t.jsx)(s.mi,{children:"r"}),(0,t.jsx)(s.mi,{children:"e"}),(0,t.jsx)(s.mi,{children:"a"}),(0,t.jsx)(s.mi,{children:"t"}),(0,t.jsx)(s.mi,{children:"e"}),(0,t.jsx)(s.mi,{children:"s"}),(0,t.jsx)(s.mi,{children:"t"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"greatest"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"re"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"es"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"t"})]})})]})," and ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"t"}),(0,t.jsx)(s.mi,{children:"e"}),(0,t.jsx)(s.mi,{children:"m"}),(0,t.jsx)(s.mi,{children:"p"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"temp"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"p"})]})})]})," and continue."]}),"\n",(0,t.jsxs)(s.p,{children:["Time Complexity: ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"n"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]}),". Where ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"n"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})})]})," is the number of numbers in ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"a"}),(0,t.jsx)(s.mi,{children:"r"}),(0,t.jsx)(s.mi,{children:"r"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"arr"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"rr"})]})})]}),". We perform a single pass, backwards."]}),"\n",(0,t.jsxs)(s.p,{children:["Space Complexity: ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mn,{children:"1"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord",children:"1"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]}),", we only need to track variables throughout the algorithm."]}),"\n",(0,t.jsx)(l,{children:(0,t.jsxs)(n,{value:"python",label:"Python",children:[(0,t.jsx)(a,{name:"@ColeB2"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-py",children:"class Solution:\n    def replaceElements(self, arr: List[int]) -> List[int]:\n        # initialize a greatest variable, to track greatest number found so far.\n        greatest = -1\n        # iterate the array, arr, backwards.\n        for i in range(len(arr) - 1, -1, -1):\n            # set the temp variable, to the current value of the arr[i].\n            # set current value of the arr, arr[i] to the greatest.\n            temp, arr[i] = arr[i], greatest\n            # update our greatest variable.\n            greatest = max(greatest, temp)\n        return arr\n"})})]})})]})}function d(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function o(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,s,a)=>{a.d(s,{R:()=>l,x:()=>i});var n=a(96540);const t={},r=n.createContext(t);function l(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);