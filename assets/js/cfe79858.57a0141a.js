"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[33440],{39900:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"2500-2599/maximal-score-after-applying-k-operations-medium","title":"2530 - Maximal Score After Applying K Operations (Medium)","description":"Author: @wkw | https://leetcode.com/problems/maximal-score-after-applying-k-operations/","source":"@site/solutions/2500-2599/2530-maximal-score-after-applying-k-operations-medium.md","sourceDirName":"2500-2599","slug":"/2500-2599/maximal-score-after-applying-k-operations-medium","permalink":"/solutions/2500-2599/maximal-score-after-applying-k-operations-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2500-2599/2530-maximal-score-after-applying-k-operations-medium.md","tags":[{"inline":true,"label":"Array","permalink":"/solutions/tags/array"},{"inline":true,"label":"Greedy","permalink":"/solutions/tags/greedy"},{"inline":true,"label":"Heap (Priority Queue)","permalink":"/solutions/tags/heap-priority-queue"}],"version":"current","sidebarPosition":2530,"frontMatter":{"description":"Author: @wkw | https://leetcode.com/problems/maximal-score-after-applying-k-operations/","tags":["Array","Greedy","Heap (Priority Queue)"]},"sidebar":"tutorialSidebar","previous":{"title":"2529 - Maximum Count of Positive Integer and Negative Integer (Easy)","permalink":"/solutions/2500-2599/maximum-count-of-positive-integer-and-negative-integer-easy"},"next":{"title":"2531 - Make Number of Distinct Characters Equal (Medium)","permalink":"/solutions/2500-2599/make-number-of-distinct-characters-equal-medium"}}');var t=s(86070),i=s(32790);const r={description:"Author: @wkw | https://leetcode.com/problems/maximal-score-after-applying-k-operations/",tags:["Array","Greedy","Heap (Priority Queue)"]},o="2530 - Maximal Score After Applying K Operations (Medium)",l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Priority Queue",id:"approach-1-priority-queue",level:2}];function h(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{SolutionAuthor:s,TabItem:a,Tabs:r}=n;return s||d("SolutionAuthor",!0),a||d("TabItem",!0),r||d("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"2530---maximal-score-after-applying-k-operations-medium",children:"2530 - Maximal Score After Applying K Operations (Medium)"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/maximal-score-after-applying-k-operations/",children:"https://leetcode.com/problems/maximal-score-after-applying-k-operations/"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(n.p,{children:["You are given a ",(0,t.jsx)(n.strong,{children:"0-indexed"})," integer array ",(0,t.jsx)(n.code,{children:"nums"})," and an integer ",(0,t.jsx)(n.code,{children:"k"}),". You have a ",(0,t.jsx)(n.strong,{children:"starting score"})," of ",(0,t.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In one ",(0,t.jsx)(n.strong,{children:"operation"}),":"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["choose an index ",(0,t.jsx)(n.code,{children:"i"})," such that ",(0,t.jsx)(n.code,{children:"0 <= i < nums.length"}),","]}),"\n",(0,t.jsxs)(n.li,{children:["increase your ",(0,t.jsx)(n.strong,{children:"score"})," by ",(0,t.jsx)(n.code,{children:"nums[i]"}),", and"]}),"\n",(0,t.jsxs)(n.li,{children:["replace ",(0,t.jsx)(n.code,{children:"nums[i]"})," with ",(0,t.jsx)(n.code,{children:"ceil(nums[i] / 3)"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Return *the maximum possible ",(0,t.jsx)(n.strong,{children:"score"})," you can attain after applying ",(0,t.jsx)(n.strong,{children:"exactly*"})," ",(0,t.jsx)(n.code,{children:"k"})," ",(0,t.jsx)(n.em,{children:"operations"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ceiling function ",(0,t.jsx)(n.code,{children:"ceil(val)"})," is the least integer greater than or equal to ",(0,t.jsx)(n.code,{children:"val"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: nums = [10,10,10,10,10], k = 5\nOutput: 50\nExplanation: Apply the operation to each array element exactly once. The final score is 10 + 10 + 10 + 10 + 10 = 50.\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: nums = [1,10,3,3,3], k = 3\nOutput: 17\nExplanation: You can do the following operations:\nOperation 1: Select i = 1, so nums becomes [1,4,3,3,3]. Your score increases by 10.\nOperation 2: Select i = 1, so nums becomes [1,2,3,3,3]. Your score increases by 4.\nOperation 3: Select i = 2, so nums becomes [1,1,1,3,3]. Your score increases by 3.\nThe final score is 10 + 4 + 3 = 17.\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1 <= nums.length, k <= 10^5"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1 <= nums[i] <= 10^9"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-priority-queue",children:"Approach 1: Priority Queue"}),"\n",(0,t.jsxs)(n.p,{children:["When you see a question asking you to find something maximum / minimum after ",(0,t.jsx)(n.code,{children:"K"})," operations. It's a hint that this could be solved by priority queue."]}),"\n",(0,t.jsxs)(n.p,{children:["In this question, it is easy to see that we should apply the operation on the largest number each time (i.e. greedy approach). If we just write a brute force solution, after each operation, we need to iterate ",(0,t.jsx)(n.code,{children:"nums"})," again to find out the largest number which costs ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mi,{children:"n"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]})," where ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"n"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"n"})]})})]})," is the number of elements in ",(0,t.jsx)(n.code,{children:"nums"})," and this happens ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mi,{children:"K"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"K"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"})]})})]})," times, which is not efficient."]}),"\n",(0,t.jsxs)(n.p,{children:["To optimise the solution, we can apply priority queue / heap (in python) so that we could find the largest number efficiently, which takes ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"O"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mn,{children:"1"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord",children:"1"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})})]})," for finding the max number."]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsxs)(a,{value:"cpp",label:"C++",children:[(0,t.jsx)(s,{name:"@wkw"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    long long maxKelements(vector<int>& nums, int k) {\n        long long ans = 0;\n        // we want to take the max one in each round\n        priority_queue<int> pq(nums.begin(), nums.end());\n        // perform k rounds\n        while (k--) {\n            // get the max one\n            int t = pq.top();\n            // pop it out\n            pq.pop();\n            // add to answer\n            ans += t;\n            // add the ceil value\n            // ceil(x / y) = (x + y - 1) / y\n            // ceil(t / 3) = (t + 3 - 1) / 3 = (t + 2) / 3\n            pq.push((t + 2) / 3);\n        }\n        return ans;\n    }\n};\n"})})]}),(0,t.jsxs)(a,{value:"py",label:"Python",children:[(0,t.jsx)(s,{name:"@wkw"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"class Solution:\n    def maxKelements(self, nums: List[int], k: int) -> int:\n        res = 0\n        # we want to take the max one in each round\n        # create a max heap by pushing negative values\n        mx_heap = [-num for num in nums]\n        heapq.heapify(mx_heap)\n        # perform k rounds\n        while k > 0:\n            k -= 1\n            # get the max one (negative because of max-heap simulation)\n            t = -heapq.heappop(mx_heap)\n            # add to answer\n            res += t\n            # push the ceil value of t / 3 back into the heap\n            # ceil(x / y) = (x + y - 1) / y\n            # ceil(t / 3) = (t + 3 - 1) / 3 = (t + 2) / 3\n            heapq.heappush(mx_heap, -((t + 2) // 3))\n        return res\n"})})]})]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}function d(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32790:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var a=s(30758);const t={},i=a.createContext(t);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);