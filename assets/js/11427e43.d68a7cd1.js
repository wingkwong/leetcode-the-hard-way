"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[99760],{69574:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"1300-1399/all-elements-in-two-binary-search-trees-medium","title":"1305 - All Elements in Two Binary Search Trees (Medium)","description":"Author: @wingkwong | https://leetcode.com/problems/all-elements-in-two-binary-search-trees/","source":"@site/solutions/1300-1399/1305-all-elements-in-two-binary-search-trees-medium.md","sourceDirName":"1300-1399","slug":"/1300-1399/all-elements-in-two-binary-search-trees-medium","permalink":"/solutions/1300-1399/all-elements-in-two-binary-search-trees-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1300-1399/1305-all-elements-in-two-binary-search-trees-medium.md","tags":[],"version":"current","sidebarPosition":1305,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/all-elements-in-two-binary-search-trees/"},"sidebar":"tutorialSidebar","previous":{"title":"1300 - 1399","permalink":"/solutions/category/1300---1399"},"next":{"title":"1326 - Minimum Number of Taps to Open to Water a Garden (Hard)","permalink":"/solutions/1300-1399/minimum-number-of-taps-to-open-to-water-a-garden-hard"}}');var s=r(74848),o=r(28453);const i={description:"Author: @wingkwong | https://leetcode.com/problems/all-elements-in-two-binary-search-trees/"},l="1305 - All Elements in Two Binary Search Trees (Medium)",a={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS Traversal and Sorting",id:"approach-1-dfs-traversal-and-sorting",level:2},{value:"Approach 2: In-order Traversal + Merging",id:"approach-2-in-order-traversal--merging",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{SolutionAuthor:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"1305---all-elements-in-two-binary-search-trees-medium",children:"1305 - All Elements in Two Binary Search Trees (Medium)"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/all-elements-in-two-binary-search-trees/",children:"https://leetcode.com/problems/all-elements-in-two-binary-search-trees/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["Given two binary search trees ",(0,s.jsx)(n.code,{children:"root1"})," and ",(0,s.jsx)(n.code,{children:"root2"}),", return ",(0,s.jsxs)(n.em,{children:["a list containing all the integers from both trees sorted in ",(0,s.jsx)(n.strong,{children:"ascending"})," order"]}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2019/12/18/q2-e1.png",alt:""})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: root1 = [2,1,4], root2 = [1,0,3]\nOutput: [0,1,1,2,3,4]\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2019/12/18/q2-e5-.png",alt:""})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: root1 = [1,null,8], root2 = [8,1]\nOutput: [1,1,8,8]\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The number of nodes in each tree is in the range ",(0,s.jsx)(n.code,{children:"[0, 5000]"}),"."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"-10^5 <= Node.val <= 10^5"})}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Prerequisite",type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../../tutorials/graph-theory/binary-tree",children:"Binary Tree"})}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-dfs-traversal-and-sorting",children:"Approach 1: DFS Traversal and Sorting"}),"\n",(0,s.jsx)(n.p,{children:"In this problem, we can use either one to traverse all nodes and put them into a common array. We sort the array at the end."}),"\n",(0,s.jsx)(r,{name:"@wingkwong"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<int> s;\n    \n    void dfs(TreeNode* node) {\n        if (node == NULL) return;\n        dfs(node->left);\n        s.push_back(node->val);\n        dfs(node->right);\n    }\n    \n    vector<int> getAllElements(TreeNode* root1, TreeNode* root2) {\n        dfs(root1);\n        dfs(root2);\n        sort(s.begin(), s.end());\n        return s;\n    }\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"However, we can see the in-order traversal is faster than the other two. This is because the array is already sorted after the traversal for binary tree. In example 1, after the traversal, we will have [1, 2, 4] and [0, 1, 3]."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Traversal"}),(0,s.jsx)(n.th,{children:"Runtime"}),(0,s.jsx)(n.th,{children:"Memory"}),(0,s.jsx)(n.th,{children:"Language"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Pre-order"}),(0,s.jsx)(n.td,{children:"309 ms"}),(0,s.jsx)(n.td,{children:"85.4 MB"}),(0,s.jsx)(n.td,{children:"cpp"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"In-order"}),(0,s.jsx)(n.td,{children:"132 ms"}),(0,s.jsx)(n.td,{children:"85.3 MB"}),(0,s.jsx)(n.td,{children:"cpp"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Post-order"}),(0,s.jsx)(n.td,{children:"211 ms"}),(0,s.jsx)(n.td,{children:"85.4 MB"}),(0,s.jsx)(n.td,{children:"cpp"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"approach-2-in-order-traversal--merging",children:"Approach 2: In-order Traversal + Merging"}),"\n",(0,s.jsx)(n.p,{children:'As we know In-order traversal will make the array sorted, the remaining problem is same as "merging two sorted arrays into one".'}),"\n",(0,s.jsx)(r,{name:"@wingkwong"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    void inorder(TreeNode* node, vector<int>& res) {\n        if (node == NULL) return;\n        inorder(node->left, res);\n        res.push_back(node->val);\n        inorder(node->right, res);\n    }\n    \n    vector<int> merge(vector<int>& a, vector<int>& b) {\n        vector<int> res;\n        int n = (int) a.size(), m = (int) b.size();\n        int i = 0, j = 0;\n        while (i < n && j < m) {\n            if (a[i] < b[j]) res.push_back(a[i++]);\n            else res.push_back(b[j++]);\n        }\n        while (i < n) res.push_back(a[i++]);\n        while (j < m) res.push_back(b[j++]);\n        return res;\n    }\n    \n    vector<int> getAllElements(TreeNode* root1, TreeNode* root2) {\n        vector<int> a, b;\n        inorder(root1, a); inorder(root2, b);\n        return merge(a, b);\n    }\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(96540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);