"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[64248],{24515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"2200-2299/count-nodes-equal-to-average-of-subtree-medium","title":"2265 - Count Nodes Equal to Average of Subtree (Medium)","description":"Author: @wingkwong | https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/","source":"@site/solutions/2200-2299/2265-count-nodes-equal-to-average-of-subtree-medium.md","sourceDirName":"2200-2299","slug":"/2200-2299/count-nodes-equal-to-average-of-subtree-medium","permalink":"/solutions/2200-2299/count-nodes-equal-to-average-of-subtree-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2265-count-nodes-equal-to-average-of-subtree-medium.md","tags":[],"version":"current","sidebarPosition":2265,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/"},"sidebar":"tutorialSidebar","previous":{"title":"2264 - Largest 3-Same-Digit Number in String (Easy)","permalink":"/solutions/2200-2299/largest-3-same-digit-number-in-string-easy"},"next":{"title":"2266 - Count Number of Texts (Medium)","permalink":"/solutions/2200-2299/count-number-of-texts-medium"}}');var o=n(74848),s=n(28453);const i={description:"Author: @wingkwong | https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/"},l="2265 - Count Nodes Equal to Average of Subtree (Medium)",a={},d=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Post Order Traversal",id:"approach-1-post-order-traversal",level:2}];function u(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{SolutionAuthor:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"2265---count-nodes-equal-to-average-of-subtree-medium",children:"2265 - Count Nodes Equal to Average of Subtree (Medium)"})}),"\n",(0,o.jsx)(t.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/",children:"https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/"})}),"\n",(0,o.jsx)(t.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,o.jsxs)(t.p,{children:["Given the ",(0,o.jsx)(t.code,{children:"root"})," of a binary tree, return ",(0,o.jsxs)(t.em,{children:["the number of nodes where the value of the node is equal to the ",(0,o.jsx)(t.strong,{children:"average"})," of the values in its ",(0,o.jsx)(t.strong,{children:"subtree"})]}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Note:"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.strong,{children:"average"})," of ",(0,o.jsx)(t.code,{children:"n"})," elements is the ",(0,o.jsx)(t.strong,{children:"sum"})," of the ",(0,o.jsx)(t.code,{children:"n"})," elements divided by ",(0,o.jsx)(t.code,{children:"n"})," and ",(0,o.jsx)(t.strong,{children:"rounded down"})," to the nearest integer."]}),"\n",(0,o.jsxs)(t.li,{children:["A ",(0,o.jsx)(t.strong,{children:"subtree"})," of ",(0,o.jsx)(t.code,{children:"root"})," is a tree consisting of ",(0,o.jsx)(t.code,{children:"root"})," and all of its descendants."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Example 1:"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://assets.leetcode.com/uploads/2022/03/15/image-20220315203925-1.png",alt:""})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"Input: root = [4,8,5,0,1,null,6]\nOutput: 5\nExplanation: \nFor the node with value 4: The average of its subtree is (4 + 8 + 5 + 0 + 1 + 6) / 6 = 24 / 6 = 4.\nFor the node with value 5: The average of its subtree is (5 + 6) / 2 = 11 / 2 = 5.\nFor the node with value 0: The average of its subtree is 0 / 1 = 0.\nFor the node with value 1: The average of its subtree is 1 / 1 = 1.\nFor the node with value 6: The average of its subtree is 6 / 1 = 6.\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Example 2:"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://assets.leetcode.com/uploads/2022/03/26/image-20220326133920-1.png",alt:""})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"Input: root = [1]\nOutput: 1\nExplanation: For the node with value 1: The average of its subtree is 1 / 1 = 1.\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Constraints:"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The number of nodes in the tree is in the range ",(0,o.jsx)(t.code,{children:"[1, 1000]"}),"."]}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"0 <= Node.val <= 1000"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"approach-1-post-order-traversal",children:"Approach 1: Post Order Traversal"}),"\n",(0,o.jsx)(n,{name:"@wingkwong"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cpp",children:"/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    int ans = 0;\n    pair<int, int> dfs(TreeNode* node) {\n        if (!node) return {0, 0}; // {sum, cnt}\n        // post order traversal\n        auto l = dfs(node->left);\n        auto r = dfs(node->right);\n        // sum from left tree + sum from right tree + current node value\n        int sum = l.first + r.first + node->val;\n        // cnt from left tree + cnt from right tree + current node value\n        int cnt = l.second + r.second + 1;\n        // check if the avgerage is same as the node value\n        ans += (sum / cnt == node->val);\n        // return the pair\n        return {sum, cnt};\n    }\n    \n    int averageOfSubtree(TreeNode* root) {\n        dfs(root);\n        return ans;\n    }\n};\n"})})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(96540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);