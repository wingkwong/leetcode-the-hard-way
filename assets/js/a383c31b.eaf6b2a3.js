"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[10211],{28210:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"0400-0499/reverse-pairs-hard","title":"0493 - Reverse Pairs (Hard)","description":"Author: @wkw | https://leetcode.com/problems/reverse-pairs/","source":"@site/solutions/0400-0499/0493-reverse-pairs-hard.md","sourceDirName":"0400-0499","slug":"/0400-0499/reverse-pairs-hard","permalink":"/solutions/0400-0499/reverse-pairs-hard","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0400-0499/0493-reverse-pairs-hard.md","tags":[],"version":"current","sidebarPosition":493,"frontMatter":{"description":"Author: @wkw | https://leetcode.com/problems/reverse-pairs/"},"sidebar":"tutorialSidebar","previous":{"title":"0491 - Non-decreasing Subsequences (Medium)","permalink":"/solutions/0400-0499/non-decreasing-subsequences-medium"},"next":{"title":"0494 - Target Sum (Medium)","permalink":"/solutions/0400-0499/target-sum-medium"}}');var t=r(86070),i=r(32790);const o={description:"Author: @wkw | https://leetcode.com/problems/reverse-pairs/"},d="0493 - Reverse Pairs (Hard)",l={},a=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Ordered Set",id:"approach-1-ordered-set",level:2},{value:"Approach 2: BIT",id:"approach-2-bit",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:r,SolutionAuthor:s}=n;return r||p("Details",!0),s||p("SolutionAuthor",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"0493---reverse-pairs-hard",children:"0493 - Reverse Pairs (Hard)"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/reverse-pairs/",children:"https://leetcode.com/problems/reverse-pairs/"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(n.p,{children:["Given an integer array ",(0,t.jsx)(n.code,{children:"nums"}),", return ",(0,t.jsxs)(n.em,{children:["the number of ",(0,t.jsx)(n.strong,{children:"reverse pairs"})," in the array"]}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["A reverse pair is a pair ",(0,t.jsx)(n.code,{children:"(i, j)"})," where ",(0,t.jsx)(n.code,{children:"0 <= i < j < nums.length"})," and ",(0,t.jsx)(n.code,{children:"nums[i] > 2 * nums[j]"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: nums = [1,3,2,3,1]\nOutput: 2\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: nums = [2,4,3,5,1]\nOutput: 3\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1 <= nums.length <= 5 * 10^4"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"-231 <= nums[i] <= 231 - 1"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-ordered-set",children:"Approach 1: Ordered Set"}),"\n",(0,t.jsx)(s,{name:"@wkw"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"#include <ext/pb_ds/assoc_container.hpp>\n#include <ext/pb_ds/tree_policy.hpp>\nusing namespace __gnu_pbds;\n\nclass Solution {\npublic:\n    tree<long long, null_type, greater_equal<long long>, rb_tree_tag, tree_order_statistics_node_update> T;\n    int reversePairs(vector<int>& nums) {\n        int ans = 0;\n        for (auto x : nums) {\n            // number of elements >= (2LL * x)\n            ans += T.order_of_key(2LL * x);\n            T.insert(x);\n        }\n        return ans;\n    }\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"approach-2-bit",children:"Approach 2: BIT"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"BIT Template"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"template <class T>\n    struct BIT { //1-indexed\n      int n; vector<T> t;\n      BIT() {}\n      BIT(int _n) {\n        n = _n; t.assign(n + 1, 0);\n      }\n      T query(int i) {\n        T ans = 0;\n        for (; i >= 1; i -= (i & -i)) ans += t[i];\n        return ans;\n      }\n      void upd(int i, T val) {\n        if (i <= 0) return;\n        for (; i <= n; i += (i & -i)) t[i] += val;\n      }\n      void upd(int l, int r, T val) {\n        upd(l, val);\n        upd(r + 1, -val);\n      }\n      T query(int l, int r) {\n        return query(r) - query(l - 1);\n      }\n    };\n"})})]}),"\n",(0,t.jsx)(s,{name:"@wkw"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    // BIT Template goes here\n    // ...\n\n    int reversePairs(vector<int>& nums) {\n        int n = nums.size(), pos = -1, inversions = 0;\n        vector<int> sorted_nums = nums;\n        sort(sorted_nums.begin(), sorted_nums.end());\n        BIT bit = BIT<int>(n);\n        for(int i = 0; i < n; i++) {\n            // take the last pos of (2 * nums[i]) in sorted_nums\n            pos = upper_bound(sorted_nums.begin(), sorted_nums.end(), 2L * nums[i]) - sorted_nums.begin();\n            // ans += i - number of visited elements that are smaller or equal to 2 * nums[i]\n            inversions += i - bit.query(pos);\n            // find out where nums[i] should reside\n            pos = upper_bound(sorted_nums.begin(), sorted_nums.end(), nums[i]) - sorted_nums.begin();\n            // update it in BIT\n            bit.upd(pos, 1);\n        }\n        return inversions;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32790:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var s=r(30758);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);