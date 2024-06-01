"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[75433],{54070:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var s=t(85893),i=t(11151);const a={description:"Author: @wingkwong | https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",tags:["Array","Dynamic Programming","Backtracking","Bit Manipulation","Memoization","Bitmask"]},o="0698 - Partition to K Equal Sum Subsets (Medium)",r={id:"0600-0699/partition-to-k-equal-sum-subsets-medium",title:"0698 - Partition to K Equal Sum Subsets (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",source:"@site/solutions/0600-0699/0698-partition-to-k-equal-sum-subsets-medium.md",sourceDirName:"0600-0699",slug:"/0600-0699/partition-to-k-equal-sum-subsets-medium",permalink:"/solutions/0600-0699/partition-to-k-equal-sum-subsets-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0600-0699/0698-partition-to-k-equal-sum-subsets-medium.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"},{inline:!0,label:"Backtracking",permalink:"/solutions/tags/backtracking"},{inline:!0,label:"Bit Manipulation",permalink:"/solutions/tags/bit-manipulation"},{inline:!0,label:"Memoization",permalink:"/solutions/tags/memoization"},{inline:!0,label:"Bitmask",permalink:"/solutions/tags/bitmask"}],version:"current",sidebarPosition:698,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",tags:["Array","Dynamic Programming","Backtracking","Bit Manipulation","Memoization","Bitmask"]},sidebar:"tutorialSidebar",previous:{title:"0695 - Max Area of Island (Medium)",permalink:"/solutions/0600-0699/max-area-of-island-medium"},next:{title:"0700 - 0799",permalink:"/solutions/category/0700---0799"}},l={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DP",id:"approach-1-dp",level:2}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{SolutionAuthor:t,TabItem:a,Tabs:o}=n;return t||c("SolutionAuthor",!0),a||c("TabItem",!0),o||c("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"0698---partition-to-k-equal-sum-subsets-medium",children:"0698 - Partition to K Equal Sum Subsets (Medium)"}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",children:"https://leetcode.com/problems/partition-to-k-equal-sum-subsets/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["Given an integer array ",(0,s.jsx)(n.code,{children:"nums"})," and an integer ",(0,s.jsx)(n.code,{children:"k"}),", return ",(0,s.jsx)(n.code,{children:"true"})," if it is possible to divide this array into ",(0,s.jsx)(n.code,{children:"k"})," non-empty subsets whose sums are all equal."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: nums = [4,3,2,3,5,2,1], k = 4\nOutput: true\nExplanation: It is possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: nums = [1,2,3,4], k = 3\nOutput: false\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= k <= nums.length <= 16"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"1 <= nums[i] <= 104"})}),"\n",(0,s.jsxs)(n.li,{children:["The frequency of each element is in the range ",(0,s.jsx)(n.code,{children:"[1, 4]"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-dp",children:"Approach 1: DP"}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsxs)(a,{value:"cpp",label:"C++",children:[(0,s.jsx)(t,{name:"@wingkwong"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool canPartitionKSubsets(vector<int>& nums, int k) {\n        int n = nums.size();\n        int sum = accumulate(nums.begin(), nums.end(), 0);\n        // if we divide nums into k subsets with equal sum,\n        // then the sum must be divided by k\n        // also each subset requires at least 1 element\n        if (n < k || sum % k) return false;\n        // we need sum / k for each subset\n        int target = sum / k;\n        // bitmask dp\n        vector<int> dp(1 << n, -1);\n        // base case\n        dp[0] = 0;\n        for (int mask = 0; mask < (1 << n); mask++) {\n            // if this mask not used, skip it\n            if (dp[mask] == -1) continue;\n            // iterate each number\n            for (int i = 0; i < n; i++) {\n                // if this number is not used, \n                // then include it if dp[mask] + nums[i] is less than or equal to target\n                if (!(mask & (1 << i)) && dp[mask] + nums[i] <= target) {\n                    // set the i-th bit on mask on dp since we include the i-th number\n                    dp[mask | (1 << i)] = (dp[mask] + nums[i]) % target;\n                }\n            }\n        }\n        return dp[(1 << n) - 1] == 0;\n    }\n};\n"})})]}),(0,s.jsxs)(a,{value:"py",label:"Python",children:[(0,s.jsx)(t,{name:"@wingkwong"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"class Solution:\n    def canPartitionKSubsets(self, nums: List[int], k: int) -> bool:\n        n = len(nums)\n        s = sum(nums)\n        # if we divide nums into k subsets with equal sum,\n        # then the sum must be divided by k\n        # also each subset requires at least 1 element\n        if n < k or s % k: return False\n        # we need sum / k for each subset\n        target = s / k\n        # bitmask dp\n        dp = [-1] * (1 << n)\n        # base case\n        dp[0] = 0\n        for mask in range(1 << n):\n            # if this mask not used, skip it\n            if dp[mask] == -1: continue\n            # iterate each number\n            for i in range(n):\n                # if this number is not used, \n                # then include it if dp[mask] + nums[i] is less than or equal to target\n                if not ((1 << i) & mask) and dp[mask] + nums[i] <= target:\n                    # set the i-th bit on mask on dp since we include the i-th number\n                    dp[(1 << i) | mask] = (dp[mask] + nums[i]) % target\n        return dp[(1 << n) - 1] == 0\n"})})]})]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var s=t(67294);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);