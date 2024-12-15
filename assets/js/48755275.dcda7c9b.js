"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[67078],{97995:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>t,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"0000-0099/jump-game-medium","title":"0055 - Jump Game (Medium)","description":"Author: @ColeB2 | https://leetcode.com/problems/jump-game/","source":"@site/solutions/0000-0099/0055-jump-game-medium.md","sourceDirName":"0000-0099","slug":"/0000-0099/jump-game-medium","permalink":"/solutions/0000-0099/jump-game-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0055-jump-game-medium.md","tags":[{"inline":true,"label":"Array","permalink":"/solutions/tags/array"},{"inline":true,"label":"Dynamic Programming","permalink":"/solutions/tags/dynamic-programming"},{"inline":true,"label":"Greedy","permalink":"/solutions/tags/greedy"}],"version":"current","sidebarPosition":55,"frontMatter":{"description":"Author: @ColeB2 | https://leetcode.com/problems/jump-game/","tags":["Array","Dynamic Programming","Greedy"]},"sidebar":"tutorialSidebar","previous":{"title":"0054 - Spiral Matrix (Medium)","permalink":"/solutions/0000-0099/spiral-matrix-medium"},"next":{"title":"0056 - Merge Intervals (Medium)","permalink":"/solutions/0000-0099/merge-intervals-medium"}}');var i=n(74848),l=n(28453);const r={description:"Author: @ColeB2 | https://leetcode.com/problems/jump-game/",tags:["Array","Dynamic Programming","Greedy"]},t="0055 - Jump Game (Medium)",m={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2}];function c(s){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.R)(),...s.components},{SolutionAuthor:n,TabItem:a,Tabs:r}=e;return n||o("SolutionAuthor",!0),a||o("TabItem",!0),r||o("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"0055---jump-game-medium",children:"0055 - Jump Game (Medium)"})}),"\n",(0,i.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://leetcode.com/problems/jump-game/",children:"https://leetcode.com/problems/jump-game/"})}),"\n",(0,i.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(e.p,{children:["You are given an integer array ",(0,i.jsx)(e.code,{children:"nums"}),". You are initially positioned at the array's ",(0,i.jsx)(e.strong,{children:"first index"}),", and each element in the array represents your maximum jump length at that position."]}),"\n",(0,i.jsxs)(e.p,{children:["Return ",(0,i.jsx)(e.code,{children:"true"})," ",(0,i.jsx)(e.em,{children:"if you can reach the last index, or"})," ",(0,i.jsx)(e.code,{children:"false"})," ",(0,i.jsx)(e.em,{children:"otherwise"}),"."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: nums = [2,3,1,1,4]\nOutput: true\nExplanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: nums = [3,2,1,0,4]\nOutput: false\nExplanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"1 <= nums.length <= 10^4"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"0 <= nums[i] <= 10^5"})}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"approach-1-greedy",children:"Approach 1: Greedy"}),"\n",(0,i.jsx)(e.p,{children:"We can solve this backwards by tracking the furthest position we can jump, and moving it backwards if we can reach that position from the current position."}),"\n",(0,i.jsxs)(e.p,{children:["By initializing a ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"f"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"h"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"finish"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"ini"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"h"})]})})]})," at ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"u"}),(0,i.jsx)(e.mi,{children:"m"}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,i.jsx)(e.mi,{children:"l"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"g"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"h"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"nums.length"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mord",children:"."}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"h"})]})})]})," and iterating backwards through the numbers and setting our ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"f"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"h"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"finish"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"ini"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"h"})]})})]})," to ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"i"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]})," if the current number plus ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"i"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]})," is greater than or equal to our finish, we can find the answer if we can eventually get our ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"f"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"h"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"finish"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"ini"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"h"})]})})]})," to reach 0."]}),"\n",(0,i.jsxs)(e.p,{children:["Time Complexity: ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"O"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mclose",children:")"})]})})]})," where ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"n"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]})," is the length of ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"u"}),(0,i.jsx)(e.mi,{children:"m"}),(0,i.jsx)(e.mi,{children:"s"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"nums"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"})]})})]}),". We only need to iterate through each number in the ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"u"}),(0,i.jsx)(e.mi,{children:"m"}),(0,i.jsx)(e.mi,{children:"s"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"nums"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"})]})})]})," array once."]}),"\n",(0,i.jsxs)(e.p,{children:["Space Compelxity: ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"O"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsx)(e.span,{className:"mclose",children:")"})]})})]}),". We only need constant space to track our ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"f"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"h"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"finish"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"ini"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"h"})]})})]})," line."]}),"\n",(0,i.jsx)(r,{children:(0,i.jsxs)(a,{value:"python",label:"Python",children:[(0,i.jsx)(n,{name:"@ColeB2"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-py",children:"class Solution:\n    def canJump(self, nums: List[int]) -> bool:\n        # initialize a finish line\n        finish = len(nums) - 1\n        # loop through numbers backwards\n        for i in range(len(nums) - 1, -1, -1):\n            # if we can jump past our finish line from current position:\n            if nums[i] + i >= finish:\n                # move our finish line to current position, as we know\n                # if we ever reach this position, we can reach the finish\n                finish = i\n        # if our finish reaches 0, we know we can successfully reach\n        # the finish line, if not, this will return False.\n        return finish == 0\n"})})]})})]})}function d(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(c,{...s})}):c(s)}function o(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(s,e,n)=>{n.d(e,{R:()=>r,x:()=>t});var a=n(96540);const i={},l=a.createContext(i);function r(s){const e=a.useContext(l);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:r(s.components),a.createElement(l.Provider,{value:e},s.children)}}}]);