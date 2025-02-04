"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[72670],{73763:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"0900-0999/numbers-with-same-consecutive-differences-medium","title":"0967 - Numbers With Same Consecutive Differences (Medium)","description":"Author: @wkw | https://leetcode.com/problems/numbers-with-same-consecutive-differences/","source":"@site/solutions/0900-0999/0967-numbers-with-same-consecutive-differences-medium.md","sourceDirName":"0900-0999","slug":"/0900-0999/numbers-with-same-consecutive-differences-medium","permalink":"/solutions/0900-0999/numbers-with-same-consecutive-differences-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0900-0999/0967-numbers-with-same-consecutive-differences-medium.md","tags":[{"inline":true,"label":"Backtracking","permalink":"/solutions/tags/backtracking"},{"inline":true,"label":"Breadth-First Search","permalink":"/solutions/tags/breadth-first-search"}],"version":"current","sidebarPosition":967,"frontMatter":{"description":"Author: @wkw | https://leetcode.com/problems/numbers-with-same-consecutive-differences/","tags":["Backtracking","Breadth-First Search"]},"sidebar":"tutorialSidebar","previous":{"title":"0952 - Largest Component Size by Common Factor (Hard)","permalink":"/solutions/0900-0999/largest-component-size-by-common-factor-hard"},"next":{"title":"0973 - K Closest Points to Origin (Medium)","permalink":"/solutions/0900-0999/k-closest-points-to-origin-medium"}}');var s=t(86070),r=t(32790);const o={description:"Author: @wkw | https://leetcode.com/problems/numbers-with-same-consecutive-differences/",tags:["Backtracking","Breadth-First Search"]},a="0967 - Numbers With Same Consecutive Differences (Medium)",c={},d=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: BFS",id:"approach-1-bfs",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{SolutionAuthor:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"0967---numbers-with-same-consecutive-differences-medium",children:"0967 - Numbers With Same Consecutive Differences (Medium)"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["Return all ",(0,s.jsx)(n.strong,{children:"non-negative"})," integers of length ",(0,s.jsx)(n.code,{children:"n"})," such that the absolute difference between every two consecutive digits is ",(0,s.jsx)(n.code,{children:"k"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Note that ",(0,s.jsx)(n.strong,{children:"every"})," number in the answer ",(0,s.jsx)(n.strong,{children:"must not"})," have leading zeros. For example, ",(0,s.jsx)(n.code,{children:"01"})," has one leading zero and is invalid."]}),"\n",(0,s.jsxs)(n.p,{children:["You may return the answer in ",(0,s.jsx)(n.strong,{children:"any order"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: n = 3, k = 7\nOutput: [181,292,707,818,929]\nExplanation: Note that 070 is not a valid number, because it has leading zeroes.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: n = 2, k = 1\nOutput: [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"2 <= n <= 9"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"0 <= k <= 9"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-bfs",children:"Approach 1: BFS"}),"\n",(0,s.jsx)(t,{name:"@wkw"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"// Time Complexity: O(2 ^ n)\n// Space Complexity: O(2 ^ n)\nclass Solution {\npublic:\n    // The idea is to use BFS to try appending 0 - 9 to each number\n    // starting from a single digit 1 - 9 until the number has n digits\n    vector<int> numsSameConsecDiff(int n, int k) {\n        // push all numbers with single digit to a deque\n        deque<int> q{ 1, 2, 3, 4, 5, 6, 7, 8, 9 };\n        // do the following logic n - 1 times\n        while (--n > 0) {\n            // get the queue size\n            int sz = q.size();\n            // for each item in the current queue,\n            // do the following logic\n            for (int i = 0; i < sz; i++) {\n                // get the first number from the queue\n                int p = q.front();\n                // pop it\n                q.pop_front();\n                // we can potentially add 0 to 9 to the current number p\n                for (int j = 0; j < 10; j++) {\n                    // we use p % 10 to get the last digit of p\n                    // then get the difference with j\n                    // since (p % 10) - j can be negative and positive\n                    // we use abs to cover both case\n                  if (abs((p % 10) - j) == k) {\n                    // if the difference is equal to k\n                    // we can include digit j\n                    // so multiply the current number by 10 and add j\n                    q.push_back(p * 10 + j);\n                  }\n                }\n          }\n        }\n        // return all numbers in deque, return them in vector<int>\n        return vector<int>{q.begin(), q.end()};\n    }\n};\n"})}),"\n",(0,s.jsx)(t,{name:"@wkw"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"# Time Complexity: O(2 ^ n)\n# Space Complexity: O(2 ^ n)\nclass Solution:\n    # The idea is to use BFS to try appending 0 - 9 to each number\n    # starting from a single digit 1 - 9 until the number has n digits\n    def numsSameConsecDiff(self, n: int, k: int) -> List[int]:\n        # init ans\n        ans = []\n        # push all numbers with single digit to a deque\n        # (1, d) : (current position, number)\n        d = deque((1, d) for d in range(1, 10))\n        # while the queue is not empty\n        while d:\n            # pop the first element from the deque\n            pos, num = d.pop()\n            # if the current position is n,\n            if pos == n:\n                # then we can append num to ans\n                ans.append(num)\n            else:\n                # otherwise, we can iterate 0 to 9\n                for j in range(10):\n                    # and use num % 10 to get the last digit of num\n                    # then get the difference with j\n                    # since (num % 10) - j can be negative and positive\n                    # we use abs to cover both case\n                    if abs(num % 10 - j) == k:\n                        # if the difference is equal to k\n                        # we can include digit j\n                        # so multiply the current number by 10 and add j\n                        d.append((pos + 1, num * 10 + j))\n        # return the final ans\n        return ans\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},32790:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(30758);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);