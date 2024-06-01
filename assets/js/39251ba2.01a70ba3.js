"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[31388],{34240:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=t(85893),r=t(11151);const s={description:"Author: @wingkwong | https://leetcode.com/problems/range-sum-query-mutable/",tags:["Array","Design","Binary Indexed Tree","Segment Tree"]},l="0307 - Range Sum Query - Mutable (Medium)",o={id:"0300-0399/range-sum-query-mutable-medium",title:"0307 - Range Sum Query - Mutable (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/range-sum-query-mutable/",source:"@site/solutions/0300-0399/0307-range-sum-query-mutable-medium.md",sourceDirName:"0300-0399",slug:"/0300-0399/range-sum-query-mutable-medium",permalink:"/solutions/0300-0399/range-sum-query-mutable-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0300-0399/0307-range-sum-query-mutable-medium.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Design",permalink:"/solutions/tags/design"},{inline:!0,label:"Binary Indexed Tree",permalink:"/solutions/tags/binary-indexed-tree"},{inline:!0,label:"Segment Tree",permalink:"/solutions/tags/segment-tree"}],version:"current",sidebarPosition:307,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/range-sum-query-mutable/",tags:["Array","Design","Binary Indexed Tree","Segment Tree"]},sidebar:"tutorialSidebar",previous:{title:"0300 - Longest Increasing Subsequence (Medium)",permalink:"/solutions/0300-0399/longest-increasing-subsequence-medium"},next:{title:"0309 - Best Time to Buy and Sell Stock with Cooldown (Medium)",permalink:"/solutions/0300-0399/best-time-to-buy-and-sell-stock-with-cooldown-medium"}},u={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Segment Tree",id:"approach-1-segment-tree",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{SolutionAuthor:t,TabItem:s,Tabs:l}=n;return t||c("SolutionAuthor",!0),s||c("TabItem",!0),l||c("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"0307---range-sum-query---mutable-medium",children:"0307 - Range Sum Query - Mutable (Medium)"}),"\n",(0,i.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/range-sum-query-mutable/",children:"https://leetcode.com/problems/range-sum-query-mutable/"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(n.p,{children:["Given an integer array ",(0,i.jsx)(n.code,{children:"nums"}),", handle multiple queries of the following types:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Update"})," the value of an element in ",(0,i.jsx)(n.code,{children:"nums"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Calculate the ",(0,i.jsx)(n.strong,{children:"sum"})," of the elements of ",(0,i.jsx)(n.code,{children:"nums"})," between indices ",(0,i.jsx)(n.code,{children:"left"})," and ",(0,i.jsx)(n.code,{children:"right"})," ",(0,i.jsx)(n.strong,{children:"inclusive"})," where ",(0,i.jsx)(n.code,{children:"left <= right"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Implement the ",(0,i.jsx)(n.code,{children:"NumArray"})," class:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"NumArray(int[] nums)"})," Initializes the object with the integer array ",(0,i.jsx)(n.code,{children:"nums"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"void update(int index, int val)"})," ",(0,i.jsx)(n.strong,{children:"Updates"})," the value of ",(0,i.jsx)(n.code,{children:"nums[index]"})," to be ",(0,i.jsx)(n.code,{children:"val"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"int sumRange(int left, int right)"})," Returns the ",(0,i.jsx)(n.strong,{children:"sum"})," of the elements of ",(0,i.jsx)(n.code,{children:"nums"})," between indices ",(0,i.jsx)(n.code,{children:"left"})," and ",(0,i.jsx)(n.code,{children:"right"})," ",(0,i.jsx)(n.strong,{children:"inclusive"})," (i.e. ",(0,i.jsx)(n.code,{children:"nums[left] + nums[left + 1] + ... + nums[right]"}),")."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Input\n["NumArray", "sumRange", "update", "sumRange"]\n[[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]\nOutput\n[null, 9, null, 8]\n\nExplanation\nNumArray numArray = new NumArray([1, 3, 5]);\nnumArray.sumRange(0, 2); // return 1 + 3 + 5 = 9\nnumArray.update(1, 2);   // nums = [1, 2, 5]\nnumArray.sumRange(0, 2); // return 1 + 2 + 5 = 8\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= nums.length <= 3 * 10^4"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"-100 <= nums[i] <= 100"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"0 <= index < nums.length"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"-100 <= val <= 100"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"0 <= left <= right < nums.length"})}),"\n",(0,i.jsxs)(n.li,{children:["At most ",(0,i.jsx)(n.code,{children:"3 * 10^4"})," calls will be made to ",(0,i.jsx)(n.code,{children:"update"})," and ",(0,i.jsx)(n.code,{children:"sumRange"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"approach-1-segment-tree",children:"Approach 1: Segment Tree"}),"\n",(0,i.jsx)(l,{children:(0,i.jsxs)(s,{value:"cpp",label:"C++",children:[(0,i.jsx)(t,{name:"@wingkwong"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"struct segtree {\n    vector<long long> sums;\n    int size;\n    \n    void init(int n) {\n        size = 1;\n        while (size < n) size *= 2;\n        sums.assign(size * 2, 0LL);\n    }\n    \n    void set(int i, int v, int x, int lx, int rx) {\n        if (rx - lx == 1) {\n            sums[x] = v;\n            return;\n        }\n        int m = (lx + rx) / 2;\n        if (i < m) {\n            set(i, v, 2 * x + 1, lx, m);\n        } else {\n            set(i, v, 2 * x + 2, m, rx);\n        }\n        sums[x] = sums[2 * x + 1] + sums[2 * x + 2];\n    }\n    \n    void set(int i, int v) {\n        set(i, v, 0, 0, size);\n    }\n    \n    long long sum(int l, int r, int x, int lx, int rx) {\n        // no intersection\n        if (lx >= r || l >= rx) return 0;\n        // inside\n        if (lx >= l && rx <= r) return sums[x];\n        int m = (lx + rx) / 2;\n        long long s1 = sum(l, r, 2 * x + 1, lx, m);\n        long long s2 = sum(l, r, 2 * x + 2, m, rx);\n        return s1 + s2;\n    }\n    \n    \n    long long sum(int l, int r) {\n        return sum(l, r, 0, 0, size);\n    }\n};\n\nclass NumArray {\npublic:\n    NumArray(vector<int>& nums) {\n        n = nums.size();\n        st.init(n);\n        for (int i = 0; i < n; i++) {\n            st.set(i, nums[i]);\n        }\n    }\n    \n    void update(int index, int val) {\n        st.set(index, val);\n    }\n    \n    int sumRange(int left, int right) {\n        return st.sum(left, right + 1);\n    }\n\nprivate: \n    segtree st;\n    int n;\n};\n\n/**\n * Your NumArray object will be instantiated and called as such:\n * NumArray* obj = new NumArray(nums);\n * obj->update(index,val);\n * int param_2 = obj->sumRange(left,right);\n */\n"})})]})})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var i=t(67294);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);