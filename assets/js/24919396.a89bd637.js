"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[29674],{50943:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"1800-1899/merge-triplets-to-form-target-triplet-medium","title":"1899 - Merge Triplets to Form Target Triplet (Medium)","description":"Author: @ColeB2 | https://leetcode.com/problems/merge-triplets-to-form-target-triplet/","source":"@site/solutions/1800-1899/1899-merge-triplets-to-form-target-triplet-medium.md","sourceDirName":"1800-1899","slug":"/1800-1899/merge-triplets-to-form-target-triplet-medium","permalink":"/solutions/1800-1899/merge-triplets-to-form-target-triplet-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1800-1899/1899-merge-triplets-to-form-target-triplet-medium.md","tags":[{"inline":true,"label":"Array","permalink":"/solutions/tags/array"},{"inline":true,"label":"Greedy","permalink":"/solutions/tags/greedy"}],"version":"current","sidebarPosition":1899,"frontMatter":{"description":"Author: @ColeB2 | https://leetcode.com/problems/merge-triplets-to-form-target-triplet/","tags":["Array","Greedy"]},"sidebar":"tutorialSidebar","previous":{"title":"1866 - Number of Ways to Rearrange Sticks With K Sticks Visible (Hard)","permalink":"/solutions/1800-1899/number-of-ways-to-rearrange-sticks-with-k-sticks-visible-hard"},"next":{"title":"1900 - 1999","permalink":"/solutions/category/1900---1999"}}');var n=r(74848),s=r(28453);const l={description:"Author: @ColeB2 | https://leetcode.com/problems/merge-triplets-to-form-target-triplet/",tags:["Array","Greedy"]},a="1899 - Merge Triplets to Form Target Triplet (Medium)",o={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy",id:"approach-1-greedy",level:2}];function h(e){const t={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{SolutionAuthor:r,TabItem:i,Tabs:l}=t;return r||p("SolutionAuthor",!0),i||p("TabItem",!0),l||p("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"1899---merge-triplets-to-form-target-triplet-medium",children:"1899 - Merge Triplets to Form Target Triplet (Medium)"})}),"\n",(0,n.jsx)(t.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://leetcode.com/problems/merge-triplets-to-form-target-triplet/",children:"https://leetcode.com/problems/merge-triplets-to-form-target-triplet/"})}),"\n",(0,n.jsx)(t.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.strong,{children:"triplet"})," is an array of three integers. You are given a 2D integer array ",(0,n.jsx)(t.code,{children:"triplets"}),", where ",(0,n.jsx)(t.code,{children:"triplets[i] = [ai, bi, ci]"})," describes the ",(0,n.jsx)(t.code,{children:"ith"})," ",(0,n.jsx)(t.strong,{children:"triplet"}),". You are also given an integer array ",(0,n.jsx)(t.code,{children:"target = [x, y, z]"})," that describes the ",(0,n.jsx)(t.strong,{children:"triplet"})," you want to obtain."]}),"\n",(0,n.jsxs)(t.p,{children:["To obtain ",(0,n.jsx)(t.code,{children:"target"}),", you may apply the following operation on ",(0,n.jsx)(t.code,{children:"triplets"})," ",(0,n.jsx)(t.strong,{children:"any number"})," of times (possibly ",(0,n.jsx)(t.strong,{children:"zero"}),"):"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Choose two indices (",(0,n.jsx)(t.strong,{children:"0-indexed"}),") ",(0,n.jsx)(t.code,{children:"i"})," and ",(0,n.jsx)(t.code,{children:"j"})," (",(0,n.jsx)(t.code,{children:"i != j"}),") and ",(0,n.jsx)(t.strong,{children:"update"})," ",(0,n.jsx)(t.code,{children:"triplets[j]"})," to become ",(0,n.jsx)(t.code,{children:"[max(ai, aj), max(bi, bj), max(ci, cj)]"}),".","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["For example, if ",(0,n.jsx)(t.code,{children:"triplets[i] = [2, 5, 3]"})," and ",(0,n.jsx)(t.code,{children:"triplets[j] = [1, 7, 5]"}),", ",(0,n.jsx)(t.code,{children:"triplets[j]"})," will be updated to ",(0,n.jsx)(t.code,{children:"[max(2, 1), max(5, 7), max(3, 5)] = [2, 7, 5]"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Return ",(0,n.jsx)(t.code,{children:"true"})," ",(0,n.jsx)(t.em,{children:"if it is possible to obtain the"})," ",(0,n.jsx)(t.code,{children:"target"})," ",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"triplet"})})," ",(0,n.jsx)(t.code,{children:"[x, y, z]"})," ",(0,n.jsx)(t.em,{children:"as an element of"})," ",(0,n.jsx)(t.code,{children:"triplets"}),", ",(0,n.jsx)(t.em,{children:"or"})," ",(0,n.jsx)(t.code,{children:"false"})," ",(0,n.jsx)(t.em,{children:"otherwise"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Example 1:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Input: triplets = [[2,5,3],[1,8,4],[1,7,5]], target = [2,7,5]\nOutput: true\nExplanation: Perform the following operations:\n- Choose the first and last triplets [[2,5,3],[1,8,4],[1,7,5]]. Update the last triplet to be [max(2,1), max(5,7), max(3,5)] = [2,7,5]. triplets = [[2,5,3],[1,8,4],[2,7,5]]\nThe target triplet [2,7,5] is now an element of triplets.\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Example 2:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Input: triplets = [[3,4,5],[4,5,6]], target = [3,2,5]\nOutput: false\nExplanation: It is impossible to have [3,2,5] as an element because there is no 2 in any of the triplets.\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Example 3:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Input: triplets = [[2,5,3],[2,3,4],[1,2,5],[5,2,3]], target = [5,5,5]\nOutput: true\nExplanation: Perform the following operations:\n- Choose the first and third triplets [[2,5,3],[2,3,4],[1,2,5],[5,2,3]]. Update the third triplet to be [max(2,1), max(5,2), max(3,5)] = [2,5,5]. triplets = [[2,5,3],[2,3,4],[2,5,5],[5,2,3]].\n- Choose the third and fourth triplets [[2,5,3],[2,3,4],[2,5,5],[5,2,3]]. Update the fourth triplet to be [max(2,5), max(5,2), max(5,3)] = [5,5,5]. triplets = [[2,5,3],[2,3,4],[2,5,5],[5,5,5]].\nThe target triplet [5,5,5] is now an element of triplets.\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Constraints:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"1 <= triplets.length <= 10^5"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"triplets[i].length == target.length == 3"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"1 <= ai, bi, ci, x, y, z <= 1000"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"approach-1-greedy",children:"Approach 1: Greedy"}),"\n",(0,n.jsx)(t.p,{children:"We only need to know that it is possible to create our target triplet given a list of triplets. To create our target triplet, we either need a single triplet, or a combination of triplets, that matches exactly to our target triplet."}),"\n",(0,n.jsx)(t.p,{children:"We can do this by looping through all the triplets and marking down each digit that matches while also maintaining that the other digits in the triplet that don't match are at least less than the digit they are suppose to match too (If any digit is greater than any target triplet digit, then we know we can't use the triplet as it will override the target digit value that we need to match). If we match all 3 digits, then we can return True."}),"\n",(0,n.jsxs)(t.p,{children:["Time Complexity: ",(0,n.jsxs)(t.span,{className:"katex",children:[(0,n.jsx)(t.span,{className:"katex-mathml",children:(0,n.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(t.semantics,{children:[(0,n.jsxs)(t.mrow,{children:[(0,n.jsx)(t.mi,{children:"O"}),(0,n.jsx)(t.mo,{stretchy:"false",children:"("}),(0,n.jsx)(t.mi,{children:"n"}),(0,n.jsx)(t.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(t.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,n.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(t.span,{className:"base",children:[(0,n.jsx)(t.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(t.span,{className:"mopen",children:"("}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(t.span,{className:"mclose",children:")"})]})})]}),". We only need to loop through triplets once, performing constant time work on each iteration."]}),"\n",(0,n.jsxs)(t.p,{children:["Space Complexity: ",(0,n.jsxs)(t.span,{className:"katex",children:[(0,n.jsx)(t.span,{className:"katex-mathml",children:(0,n.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(t.semantics,{children:[(0,n.jsxs)(t.mrow,{children:[(0,n.jsx)(t.mi,{children:"O"}),(0,n.jsx)(t.mo,{stretchy:"false",children:"("}),(0,n.jsx)(t.mn,{children:"1"}),(0,n.jsx)(t.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(t.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,n.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(t.span,{className:"base",children:[(0,n.jsx)(t.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(t.span,{className:"mopen",children:"("}),(0,n.jsx)(t.span,{className:"mord",children:"1"}),(0,n.jsx)(t.span,{className:"mclose",children:")"})]})})]}),", we can finish our algorithm using constant space to track which digits we matched in our target triplet."]}),"\n",(0,n.jsx)(l,{children:(0,n.jsxs)(i,{value:"python",label:"Python",children:[(0,n.jsx)(r,{name:"@ColeB2"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-py",children:"class Solution:\n    def mergeTriplets(self, triplets: List[List[int]], target: List[int]) -> bool:\n        # set x,y,z equal to our target for cleaner digit checking\n        x, y, z = target\n        # initialize a target triplet of all False, each False represents\n        # a digit in target that we matched.\n        target_triplet = [False, False, False]\n        # loop all our triplets:\n        for triplet in triplets:\n            # set a, b, c to be each digit in the triplet for cleaner\n            # digit checking.\n            a, b, c = triplet[0], triplet[1], triplet[2]\n            # if any of a, b, or c are greater than target x, y, z. Then\n            # we know we can't use this triplet as it will override our\n            # corresponding digits.\n            if a > x or b > y or c > z:\n                continue\n            # loop through our triplet to match our digits\n            for i, value in enumerate(triplet):\n                # if the corresponding triplet digit matches our target\n                if value == target[i]:\n                    # set target triplet we matched to True\n                    target_triplet[i] = True\n            # Check early that we matched all 3 digits so we can terminate\n            # early if we found enough matching triplets.\n            if target_triplet == [True, True, True]:\n                return True\n        # Return that our target_triplet has matched all 3 digits.\n        return target_triplet == [True, True, True]\n"})})]})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>a});var i=r(96540);const n={},s=i.createContext(n);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);