"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[1636],{42063:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"2100-2199/design-bitset-medium","title":"2166 - Design Bitset (Medium)","description":"Author: @heiheihang | https://leetcode.com/problems/design-bitset/","source":"@site/solutions/2100-2199/2166-design-bitset-medium.md","sourceDirName":"2100-2199","slug":"/2100-2199/design-bitset-medium","permalink":"/solutions/2100-2199/design-bitset-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2100-2199/2166-design-bitset-medium.md","tags":[],"version":"current","sidebarPosition":2166,"frontMatter":{"description":"Author: @heiheihang | https://leetcode.com/problems/design-bitset/"},"sidebar":"tutorialSidebar","previous":{"title":"2165 - Smallest Value of the Rearranged Number (Medium)","permalink":"/solutions/2100-2199/smallest-value-of-the-rearranged-number-medium"},"next":{"title":"2167 - Minimum Time to Remove All Cars Containing Illegal Goods (Hard)","permalink":"/solutions/2100-2199/minimum-time-to-remove-all-cars-containing-illegal-goods-hard"}}');var s=t(74848),l=t(28453);const o={description:"Author: @heiheihang | https://leetcode.com/problems/design-bitset/"},r="2166 - Design Bitset (Medium)",d={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Class Implementation",id:"approach-1-class-implementation",level:2}];function a(e){const n={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.R)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"2166---design-bitset-medium",children:"2166 - Design Bitset (Medium)"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/design-bitset/",children:"https://leetcode.com/problems/design-bitset/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.strong,{children:"Bitset"})," is a data structure that compactly stores bits."]}),"\n",(0,s.jsxs)(n.p,{children:["Implement the ",(0,s.jsx)(n.code,{children:"Bitset"})," class:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Bitset(int size)"})," Initializes the Bitset with ",(0,s.jsx)(n.code,{children:"size"})," bits, all of which are ",(0,s.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"void fix(int idx)"})," Updates the value of the bit at the index ",(0,s.jsx)(n.code,{children:"idx"})," to ",(0,s.jsx)(n.code,{children:"1"}),". If the value was already ",(0,s.jsx)(n.code,{children:"1"}),", no change occurs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"void unfix(int idx)"})," Updates the value of the bit at the index ",(0,s.jsx)(n.code,{children:"idx"})," to ",(0,s.jsx)(n.code,{children:"0"}),". If the value was already ",(0,s.jsx)(n.code,{children:"0"}),", no change occurs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"void flip()"})," Flips the values of each bit in the Bitset. In other words, all bits with value ",(0,s.jsx)(n.code,{children:"0"})," will now have value ",(0,s.jsx)(n.code,{children:"1"})," and vice versa."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"boolean all()"})," Checks if the value of ",(0,s.jsx)(n.strong,{children:"each"})," bit in the Bitset is ",(0,s.jsx)(n.code,{children:"1"}),". Returns ",(0,s.jsx)(n.code,{children:"true"})," if it satisfies the condition, ",(0,s.jsx)(n.code,{children:"false"})," otherwise."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"boolean one()"})," Checks if there is ",(0,s.jsx)(n.strong,{children:"at least one"})," bit in the Bitset with value ",(0,s.jsx)(n.code,{children:"1"}),". Returns ",(0,s.jsx)(n.code,{children:"true"})," if it satisfies the condition, ",(0,s.jsx)(n.code,{children:"false"})," otherwise."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"int count()"})," Returns the ",(0,s.jsx)(n.strong,{children:"total number"})," of bits in the Bitset which have value ",(0,s.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"String toString()"})," Returns the current composition of the Bitset. Note that in the resultant string, the character at the ",(0,s.jsx)(n.code,{children:"ith"})," index should coincide with the value at the ",(0,s.jsx)(n.code,{children:"ith"})," bit of the Bitset."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Input\n["Bitset", "fix", "fix", "flip", "all", "unfix", "flip", "one", "unfix", "count", "toString"]\n[[5], [3], [1], [], [], [0], [], [], [0], [], []]\nOutput\n[null, null, null, null, false, null, null, true, null, 2, "01010"]\n\nExplanation\nBitset bs = new Bitset(5); // bitset = "00000".\nbs.fix(3);     // the value at idx = 3 is updated to 1, so bitset = "00010".\nbs.fix(1);     // the value at idx = 1 is updated to 1, so bitset = "01010". \nbs.flip();     // the value of each bit is flipped, so bitset = "10101". \nbs.all();      // return False, as not all values of the bitset are 1.\nbs.unfix(0);   // the value at idx = 0 is updated to 0, so bitset = "00101".\nbs.flip();     // the value of each bit is flipped, so bitset = "11010". \nbs.one();      // return True, as there is at least 1 index with value 1.\nbs.unfix(0);   // the value at idx = 0 is updated to 0, so bitset = "01010".\nbs.count();    // return 2, as there are 2 bits with value 1.\nbs.toString(); // return "01010", which is the composition of bitset.\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= size <= 105"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"0 <= idx <= size - 1"})}),"\n",(0,s.jsxs)(n.li,{children:["At most ",(0,s.jsx)(n.code,{children:"105"})," calls will be made ",(0,s.jsx)(n.strong,{children:"in total"})," to ",(0,s.jsx)(n.code,{children:"fix"}),", ",(0,s.jsx)(n.code,{children:"unfix"}),", ",(0,s.jsx)(n.code,{children:"flip"}),", ",(0,s.jsx)(n.code,{children:"all"}),", ",(0,s.jsx)(n.code,{children:"one"}),", ",(0,s.jsx)(n.code,{children:"count"}),", and ",(0,s.jsx)(n.code,{children:"toString"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["At least one call will be made to ",(0,s.jsx)(n.code,{children:"all"}),", ",(0,s.jsx)(n.code,{children:"one"}),", ",(0,s.jsx)(n.code,{children:"count"}),", or ",(0,s.jsx)(n.code,{children:"toString"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["At most ",(0,s.jsx)(n.code,{children:"5"})," calls will be made to ",(0,s.jsx)(n.code,{children:"toString"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-class-implementation",children:"Approach 1: Class Implementation"}),"\n",(0,s.jsx)(n.p,{children:"In general, we need to keep track of 3 things:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The state of the bits"}),"\n",(0,s.jsx)(n.li,{children:"The number of 1s"}),"\n",(0,s.jsx)(n.li,{children:"Flipped or not"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["We first consider the ",(0,s.jsx)(n.code,{children:"flip"})," function first. The naive way to perform ",(0,s.jsx)(n.code,{children:"flip"})," is to iterate over the ",(0,s.jsx)(n.code,{children:"bits"})," and change all the bits. This takes ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"O"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mi,{children:"N"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(N)"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})})]})," time and is too slow. We instead use a state called ",(0,s.jsx)(n.code,{children:"flipped"})," to store the state whether the ",(0,s.jsx)(n.code,{children:"bits"})," are flipped or not. When we call ",(0,s.jsx)(n.code,{children:"flip"}),", the new number of 1s in ",(0,s.jsx)(n.code,{children:"bits"})," becomes the old number of 0s in ",(0,s.jsx)(n.code,{children:"bits"}),", which can be calculated by ",(0,s.jsx)(n.code,{children:"len(bits) - ones"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["We then consider ",(0,s.jsx)(n.code,{children:"fix"})," and ",(0,s.jsx)(n.code,{children:"unfix"}),". These two functions require certain condition of the target bit to activate. If we want to check a bit is ",(0,s.jsx)(n.code,{children:"1"})," or not, we have two possibilities"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["target bit is ",(0,s.jsx)(n.code,{children:"0"}),", and ",(0,s.jsx)(n.code,{children:"flipped = True"})]}),"\n",(0,s.jsxs)(n.li,{children:["target bit is ",(0,s.jsx)(n.code,{children:"1"}),", and ",(0,s.jsx)(n.code,{children:"flipped = False"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Then we update the target bit and ",(0,s.jsx)(n.code,{children:"ones"})," accordingly."]}),"\n",(0,s.jsxs)(n.p,{children:["Similar logic applies to ",(0,s.jsx)(n.code,{children:"toString"})," that we need to accommodate the state of ",(0,s.jsx)(n.code,{children:"flipped"})]}),"\n",(0,s.jsx)(t,{name:"@heiheihang"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'class Bitset:\n\n    def __init__(self, size: int):\n        \n        #record the state of the bit\n        self.bits = [0] * size\n        \n        #record the number of ones\n        self.ones = 0\n        \n        #record if flip is called\n        self.flipped = False\n        \n\n    def fix(self, idx: int) -> None:\n        \n        #we need to check if the target bit is 0 (if not flipped -> 0) or 1 (if flipped -> 0)\n        if(self.bits[idx] == 0 and not self.flipped or self.bits[idx] == 1 and self.flipped):\n            \n            #add 1 to ones if it is 0 (after considering flip)\n            self.ones += 1\n            \n            #change its state\n            self.bits[idx] = (self.bits[idx] + 1) % 2\n    \n    \n    def unfix(self, idx: int) -> None:\n        \n        #we need to check if the target bit is 1 (if not flipped -> 1) or 0 (if flipped -> 1)\n        if(self.bits[idx] == 1 and not self.flipped or self.bits[idx] == 0 and self.flipped):\n            \n            #decrease 1 to ones if it is 1 (after considering flip)\n            self.ones -= 1\n            \n            #change its state\n            self.bits[idx] = (self.bits[idx] + 1) % 2\n\n    #this needs to be O(1)!\n    def flip(self) -> None:\n        \n        #we reverse the number of ones after flip\n        self.ones = len(self.bits) - self.ones\n        \n        #update the state of flipped\n        if(self.flipped):\n            self.flipped = False\n        else:\n            self.flipped = True\n    \n    def all(self) -> bool:\n        \n        #check if number of ones equals to the length of bits\n        if(self.ones == len(self.bits)):\n            return True\n        return False\n\n    def one(self) -> bool:\n        \n        #check if there is at least one 1\n        if(self.ones > 0):\n            return True\n        return False\n\n    def count(self) -> int:\n        \n        #return the number of ones\n        return self.ones\n\n    def toString(self) -> str:\n        \n        #initialize the result\n        res = []\n        \n        if(self.flipped):\n            \n            for i in range(len(self.bits)):\n                \n                #if flipped, we need to put the reverse of the bit to result\n                res.append(str((self.bits[i] + 1) % 2))\n        else:\n            for i in range(len(self.bits)):\n                \n                #put the bit to result\n                res.append(str(self.bits[i]))\n                \n        #return the string of list\n        return "".join(res)\n'})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(96540);const s={},l=i.createContext(s);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);