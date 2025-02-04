"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[1743],{53109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"0600-0699/construct-string-from-binary-tree-easy","title":"0606 - Construct String from Binary Tree (Easy)","description":"Author: @wkw, @lonyehan, @jit, @kesava-karri | https://leetcode.com/problems/construct-string-from-binary-tree/","source":"@site/solutions/0600-0699/0606-construct-string-from-binary-tree-easy.md","sourceDirName":"0600-0699","slug":"/0600-0699/construct-string-from-binary-tree-easy","permalink":"/solutions/0600-0699/construct-string-from-binary-tree-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0600-0699/0606-construct-string-from-binary-tree-easy.md","tags":[{"inline":true,"label":"String","permalink":"/solutions/tags/string"},{"inline":true,"label":"Tree","permalink":"/solutions/tags/tree"},{"inline":true,"label":"Depth-First Search","permalink":"/solutions/tags/depth-first-search"},{"inline":true,"label":"Binary Tree","permalink":"/solutions/tags/binary-tree"}],"version":"current","sidebarPosition":606,"frontMatter":{"description":"Author: @wkw, @lonyehan, @jit, @kesava-karri | https://leetcode.com/problems/construct-string-from-binary-tree/","tags":["String","Tree","Depth-First Search","Binary Tree"]},"sidebar":"tutorialSidebar","previous":{"title":"0605 - Can Place Flowers (Easy)","permalink":"/solutions/0600-0699/can-place-flowers-easy"},"next":{"title":"0609 - Find Duplicate File in System (Medium)","permalink":"/solutions/0600-0699/find-duplicate-file-in-system-medium"}}');var o=n(86070),s=n(32790);const i={description:"Author: @wkw, @lonyehan, @jit, @kesava-karri | https://leetcode.com/problems/construct-string-from-binary-tree/",tags:["String","Tree","Depth-First Search","Binary Tree"]},l="0606 - Construct String from Binary Tree (Easy)",a={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS",id:"approach-1-dfs",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{SolutionAuthor:n,TabItem:r,Tabs:i}=t;return n||u("SolutionAuthor",!0),r||u("TabItem",!0),i||u("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"0606---construct-string-from-binary-tree-easy",children:"0606 - Construct String from Binary Tree (Easy)"})}),"\n",(0,o.jsx)(t.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://leetcode.com/problems/construct-string-from-binary-tree/",children:"https://leetcode.com/problems/construct-string-from-binary-tree/"})}),"\n",(0,o.jsx)(t.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,o.jsxs)(t.p,{children:["Given the ",(0,o.jsx)(t.code,{children:"root"})," of a binary tree, construct a string consisting of parenthesis and integers from a binary tree with the preorder traversal way, and return it."]}),"\n",(0,o.jsx)(t.p,{children:"Omit all the empty parenthesis pairs that do not affect the one-to-one mapping relationship between the string and the original binary tree."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Example 1:"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'Input: root = [1,2,3,4]\nOutput: "1(2(4))(3)"\nExplanation: Originally, it needs to be "1(2(4)())(3()())", but you need to omit all the unnecessary empty parenthesis pairs. And it will be "1(2(4))(3)"\n'})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Example 2:"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'Input: root = [1,2,3,null,4]\nOutput: "1(2()(4))(3)"\nExplanation: Almost the same as the first example, except we cannot omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.\n'})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Constraints:"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The number of nodes in the tree is in the range ",(0,o.jsx)(t.code,{children:"[1, 10^4]"}),"."]}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"-1000 <= Node.val <= 1000"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"approach-1-dfs",children:"Approach 1: DFS"}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsxs)(r,{value:"cpp",label:"C++",children:[(0,o.jsx)(n,{name:"@wkw"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cpp",children:'/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\n\n// Time Complexity: O(N) where N is the number of the nodes in the tree\n// Space Complexity: O(H) where H is the height of the tree.\n// In worse case, H can be N when it is a left skewed binary tree / right skewed binary tree\nclass Solution {\npublic:\n    // case 1: root is nullptr -> ""\n    // case 2: root doesn\'t have left sub tree and right sub tree -> root->val\n    // case 3: root->left is not nullptr -> root->val + (dfs result from left sub tree)\n    // case 4: root->left is nullptr but root->right is not nullptr -> root->val + ()\n    // case 5: root->right is not nullptr -> root->val + (dfs result from right sub tree)\n    string tree2str(TreeNode* root) {\n        // handle case 1\n        if (!root) return "";\n        // we convert root->val to string here, then append results from different cases\n        string s = to_string(root->val);\n        // handle case 2\n        // this line is obviously not necessary\n        if (!root->left && !root->right) s += "";\n        // handle case 3\n        if (root->left) s += "(" + tree2str(root->left) + ")";\n        // handle case 4\n        // alternatively, you can use `else if (root->right) s += "()";`\n        if (!root->left && root->right) s += "()";\n        // handle case 5\n        if (root->right) s += "(" + tree2str(root->right) + ")";\n        return s;\n    }\n};\n'})})]}),(0,o.jsxs)(r,{value:"py",label:"Python",children:[(0,o.jsx)(n,{name:"@wkw"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-py",children:"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\n\n# Time Complexity: O(N) where N is the number of the nodes in the tree\n# Space Complexity: O(H) where H is the height of the tree.\n# In worse case, H can be N when it is a left skewed binary tree / right skewed binary tree\nclass Solution:\n    # case 1: root is nullptr -> \"\"\n    # case 2: root doesn't have left sub tree and right sub tree -> root.val\n    # case 3: root.left is not nullptr -> root.val + (dfs result from left sub tree)\n    # case 4: root.left is nullptr but root.right is not nullptr -> root.val + ()\n    # case 5: root.right is not nullptr -> root.val + (dfs result from right sub tree)\n    def tree2str(self, root: Optional[TreeNode]) -> str:\n        # handle case 1\n        if root is None:\n            return ''\n        # we convert root.val to string here, then append results from different cases\n        s = str(root.val)\n        # handle case 2\n        # this line is obviously not necessary\n        if root.left is None and root.right is None:\n            s += ''\n        # handle case 3\n        if root.left:\n            s += '({})'.format(self.tree2str(root.left))\n        # handle case 4\n        # alternatively, you can use `elif root.right: s += '()'`\n        if root.left is None and root.right:\n            s += '()'\n        # handle case 5\n        if root.right:\n            s += '({})'.format(self.tree2str(root.right))\n        return s\n"})})]}),(0,o.jsxs)(r,{value:"cs",label:"C#",children:[(0,o.jsx)(n,{name:"@lonyehan"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cs",children:'public class Solution {\n    public string Tree2str(TreeNode root) {\n        if(root == null) return null;\n\n        string left = Tree2str(root.left);\n        string right = Tree2str(root.right);\n\n        string result = "";\n\n        if(left == null && right == null) {\n            result = $"{root.val}";\n        }\n        else if(left != null && right == null) {\n            result = $"{root.val}({left})";\n        }\n        else {\n            result = $"{root.val}({left})({right})";\n        }\n\n        return result;\n    }\n}\n'})})]}),(0,o.jsxs)(r,{value:"elixir",label:"Elixir",children:[(0,o.jsx)(n,{name:"@jit"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-elixir",children:'defmodule Solution do\n  # Enumerate the cases:\n  @spec tree2str(root :: TreeNode.t | nil) :: String.t\n  def tree2str(%TreeNode{val: v, left: nil, right: nil}), do:\n    "#{v}"\n\n  def tree2str(%TreeNode{val: v, left: lch, right: nil}), do:\n    "#{v}(#{tree2str(lch)})"\n\n  def tree2str(%TreeNode{val: v, left: nil, right: rch}), do:\n    "#{v}()(#{tree2str(rch)})"\n\n  def tree2str(%TreeNode{val: v, left: lch, right: rch}), do:\n    "#{v}(#{tree2str(lch)})(#{tree2str(rch)})"\nend\n'})})]}),(0,o.jsxs)(r,{value:"java",label:"Java",children:[(0,o.jsx)(n,{name:"@kesava-karri"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:'/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    /**Approach\n     * Access the elements in preorder dfs as we usually do and\n     * a simple add-on is the parenthesis for each child.\n     * Add the parenthesis to right child if:\n     * 1. right child is present [the case when both children exist]\n     * 2. left is null [the case when only right child exist]\n     * Note: parenthesis will not be added if child doesn\'t exist,\n     * why? -> \'cause null wouldn\'t be appended to our string\n     */\n    StringBuilder sb = new StringBuilder();\n    public String tree2str(TreeNode root) {\n        f(root);\n        return sb.toString();\n    }\n    private void f(TreeNode root) {\n        if (root == null) return;\n        sb.append(root.val);\n        if (root.left == null && root.right == null) return;\n        sb.append("(");\n        f(root.left);\n        sb.append(")");\n        // Add the parenthesis to right child if\n        // 1. right child is present [the case when both children exist]\n        // 2. left is null [the case when only right child exist]\n        // Note: parenthesis will not be added if child doesn\'t exist,\n        // why? -> \'cause null wouldn\'t be appended to our string\n        if (root.left == null || root.right != null) {\n            sb.append("(");\n        }\n        f(root.right);\n        if (root.left == null || root.right != null) {\n            sb.append(")");\n        }\n    }\n}\n'})})]})]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32790:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(30758);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);