"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[68523],{41978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"0100-0199/path-sum-easy","title":"0112 - Path Sum (Easy)","description":"Author: @wingkwong | https://leetcode.com/problems/path-sum/","source":"@site/solutions/0100-0199/0112-path-sum-easy.md","sourceDirName":"0100-0199","slug":"/0100-0199/path-sum-easy","permalink":"/solutions/0100-0199/path-sum-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0112-path-sum-easy.md","tags":[{"inline":true,"label":"Tree","permalink":"/solutions/tags/tree"},{"inline":true,"label":"Depth-First Search","permalink":"/solutions/tags/depth-first-search"},{"inline":true,"label":"Breadth-First Search","permalink":"/solutions/tags/breadth-first-search"},{"inline":true,"label":"Binary Tree","permalink":"/solutions/tags/binary-tree"}],"version":"current","sidebarPosition":112,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/path-sum/","tags":["Tree","Depth-First Search","Breadth-First Search","Binary Tree"]},"sidebar":"tutorialSidebar","previous":{"title":"0110 - Balanced Binary Tree (Easy)","permalink":"/solutions/0100-0199/balanced-binary-tree-easy"},"next":{"title":"0113 - Path Sum II (Medium)","permalink":"/solutions/0100-0199/path-sum-ii-medium"}}');var o=n(74848),s=n(28453);const a={description:"Author: @wingkwong | https://leetcode.com/problems/path-sum/",tags:["Tree","Depth-First Search","Breadth-First Search","Binary Tree"]},l="0112 - Path Sum (Easy)",i={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS",id:"approach-1-dfs",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{SolutionAuthor:n,TabItem:r,Tabs:a}=t;return n||c("SolutionAuthor",!0),r||c("TabItem",!0),a||c("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"0112---path-sum-easy",children:"0112 - Path Sum (Easy)"})}),"\n",(0,o.jsx)(t.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://leetcode.com/problems/path-sum/",children:"https://leetcode.com/problems/path-sum/"})}),"\n",(0,o.jsx)(t.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,o.jsxs)(t.p,{children:["Given the ",(0,o.jsx)(t.code,{children:"root"})," of a binary tree and an integer ",(0,o.jsx)(t.code,{children:"targetSum"}),", return ",(0,o.jsx)(t.code,{children:"true"})," if the tree has a ",(0,o.jsx)(t.strong,{children:"root-to-leaf"})," path such that adding up all the values along the path equals ",(0,o.jsx)(t.code,{children:"targetSum"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["A ",(0,o.jsx)(t.strong,{children:"leaf"})," is a node with no children."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Example 1:"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22\nOutput: true\nExplanation: The root-to-leaf path with the target sum is shown.\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Example 2:"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"Input: root = [1,2,3], targetSum = 5\nOutput: false\nExplanation: There two root-to-leaf paths in the tree:\n(1 --\x3e 2): The sum is 3.\n(1 --\x3e 3): The sum is 4.\nThere is no root-to-leaf path with sum = 5.\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Example 3:"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"Input: root = [], targetSum = 0\nOutput: false\nExplanation: Since the tree is empty, there are no root-to-leaf paths.\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Constraints:"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The number of nodes in the tree is in the range ",(0,o.jsx)(t.code,{children:"[0, 5000]"}),"."]}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"-1000 <= Node.val <= 1000"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"-1000 <= targetSum <= 1000"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"approach-1-dfs",children:"Approach 1: DFS"}),"\n",(0,o.jsx)(a,{children:(0,o.jsxs)(r,{value:"cpp",label:"C++",children:[(0,o.jsx)(n,{name:"@wingkwong"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cpp",children:"/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    bool hasPathSum(TreeNode* root, int targetSum) {\n        // return false if the root is nullptr\n        if(!root) return false;\n        // if it reaches to the end and the val is equal to the sum, return true\n        if(!root->left && !root->right && root->val == targetSum) return true;\n        // otherwise, we traverse left node and right node with targetSum `sum - root->val`\n        return hasPathSum(root->left, targetSum - root->val) || hasPathSum(root->right, targetSum-root->val);\n    }\n};\n"})})]})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}function c(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var r=n(96540);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);