"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[31403],{19449:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"2300-2399/evaluate-boolean-binary-tree-easy","title":"2331 - Evaluate Boolean Binary Tree (Easy)","description":"Author: @wingkwong | https://leetcode.com/problems/evaluate-boolean-binary-tree","source":"@site/solutions/2300-2399/2331-evaluate-boolean-binary-tree-easy.md","sourceDirName":"2300-2399","slug":"/2300-2399/evaluate-boolean-binary-tree-easy","permalink":"/solutions/2300-2399/evaluate-boolean-binary-tree-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2300-2399/2331-evaluate-boolean-binary-tree-easy.md","tags":[],"version":"current","sidebarPosition":2331,"frontMatter":{"description":"Author: @wingkwong | https://leetcode.com/problems/evaluate-boolean-binary-tree"},"sidebar":"tutorialSidebar","previous":{"title":"2302 - Count Subarrays With Score Less Than K (Hard)","permalink":"/solutions/2300-2399/count-subarrays-with-score-less-than-k"},"next":{"title":"2351 - First Letter to Appear Twice (Easy)","permalink":"/solutions/2300-2399/first-letter-to-appear-twice-easy"}}');var o=r(74848),l=r(28453);const s={description:"Author: @wingkwong | https://leetcode.com/problems/evaluate-boolean-binary-tree"},a="2331 - Evaluate Boolean Binary Tree (Easy)",i={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Recursive",id:"approach-1-recursive",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components},{SolutionAuthor:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SolutionAuthor",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"2331---evaluate-boolean-binary-tree-easy",children:"2331 - Evaluate Boolean Binary Tree (Easy)"})}),"\n",(0,o.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/evaluate-boolean-binary-tree",children:"https://leetcode.com/problems/evaluate-boolean-binary-tree"})}),"\n",(0,o.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,o.jsxs)(n.p,{children:["You are given the ",(0,o.jsx)(n.code,{children:"root"})," of a ",(0,o.jsx)(n.strong,{children:"full binary tree"})," with the following properties:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Leaf nodes"})," have either the value ",(0,o.jsx)(n.code,{children:"0"})," or ",(0,o.jsx)(n.code,{children:"1"}),", where ",(0,o.jsx)(n.code,{children:"0"})," represents ",(0,o.jsx)(n.code,{children:"False"})," and ",(0,o.jsx)(n.code,{children:"1"})," represents ",(0,o.jsx)(n.code,{children:"True"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Non-leaf nodes"})," have either the value ",(0,o.jsx)(n.code,{children:"2"})," or ",(0,o.jsx)(n.code,{children:"3"}),", where ",(0,o.jsx)(n.code,{children:"2"})," represents the boolean ",(0,o.jsx)(n.code,{children:"OR"})," and ",(0,o.jsx)(n.code,{children:"3"})," represents the boolean ",(0,o.jsx)(n.code,{children:"AND"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"evaluation"})," of a node is as follows:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If the node is a leaf node, the evaluation is the ",(0,o.jsx)(n.strong,{children:"value"})," of the node, i.e. ",(0,o.jsx)(n.code,{children:"True"})," or ",(0,o.jsx)(n.code,{children:"False"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Otherwise, ",(0,o.jsx)(n.strong,{children:"evaluate"})," the node's two children and ",(0,o.jsx)(n.strong,{children:"apply"})," the boolean operation of its value with the children's evaluations."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Return ",(0,o.jsxs)(n.em,{children:["the boolean result of ",(0,o.jsx)(n.strong,{children:"evaluating"})," the"]})," ",(0,o.jsx)(n.code,{children:"root"})," ",(0,o.jsx)(n.em,{children:"node."})]}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.strong,{children:"full binary tree"})," is a binary tree where each node has either ",(0,o.jsx)(n.code,{children:"0"})," or ",(0,o.jsx)(n.code,{children:"2"})," children."]}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.strong,{children:"leaf node"})," is a node that has zero children."]}),"\n",(0,o.jsx)(n.p,{children:" "}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2022/05/16/example1drawio1.png",alt:""})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input: root = [2,1,3,null,null,0,1]\nOutput: true\nExplanation: The above diagram illustrates the evaluation process.\nThe AND node evaluates to False AND True = False.\nThe OR node evaluates to True OR False = True.\nThe root node evaluates to True, so we return true.\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Input: root = [0]\nOutput: false\nExplanation: The root node is a leaf node and it evaluates to false, so we return false.\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The number of nodes in the tree is in the range ",(0,o.jsx)(n.code,{children:"[1, 1000]"}),"."]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"0 <= Node.val <= 3"})}),"\n",(0,o.jsxs)(n.li,{children:["Every node has either ",(0,o.jsx)(n.code,{children:"0"})," or ",(0,o.jsx)(n.code,{children:"2"})," children."]}),"\n",(0,o.jsxs)(n.li,{children:["Leaf nodes have a value of ",(0,o.jsx)(n.code,{children:"0"})," or ",(0,o.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Non-leaf nodes have a value of ",(0,o.jsx)(n.code,{children:"2"})," or ",(0,o.jsx)(n.code,{children:"3"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"approach-1-recursive",children:"Approach 1: Recursive"}),"\n",(0,o.jsx)(n.p,{children:"We have four cases:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"If the value is 0, then return false"}),"\n",(0,o.jsx)(n.li,{children:"If the value is 1, then return true"}),"\n",(0,o.jsx)(n.li,{children:"If the value is 2, then call the function on left tree and right tree and apply OR operation on both returned values"}),"\n",(0,o.jsx)(n.li,{children:"If the value is 3, then call the function on left tree and right tree and apply AND operation on both returned values"}),"\n"]}),"\n",(0,o.jsx)(r,{name:"@wingkwong"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool evaluateTree(TreeNode* root) {\n        // case 1\n        if (root->val == 0) return false;\n        // case 2\n        else if (root->val == 1) return true;\n        // case 3\n        else if (root->val == 2) return evaluateTree(root->left) || evaluateTree(root->right);\n        // case 4\n        return evaluateTree(root->left) && evaluateTree(root->right);\n    }\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var t=r(96540);const o={},l=t.createContext(o);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);