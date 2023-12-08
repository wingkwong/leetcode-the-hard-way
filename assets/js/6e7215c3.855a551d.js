"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[32323],{14909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(85893),o=n(11151);const s={description:"Author: @wingkwong, @lonyehan, @jit | https://leetcode.com/problems/construct-string-from-binary-tree/",tags:["String","Tree","Depth-First Search","Binary Tree"]},i="0606 - Construct String from Binary Tree (Easy)",l={id:"0600-0699/construct-string-from-binary-tree-easy",title:"0606 - Construct String from Binary Tree (Easy)",description:"Author: @wingkwong, @lonyehan, @jit | https://leetcode.com/problems/construct-string-from-binary-tree/",source:"@site/solutions/0600-0699/0606-construct-string-from-binary-tree-easy.md",sourceDirName:"0600-0699",slug:"/0600-0699/construct-string-from-binary-tree-easy",permalink:"/solutions/0600-0699/construct-string-from-binary-tree-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0600-0699/0606-construct-string-from-binary-tree-easy.md",tags:[{label:"String",permalink:"/solutions/tags/string"},{label:"Tree",permalink:"/solutions/tags/tree"},{label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{label:"Binary Tree",permalink:"/solutions/tags/binary-tree"}],version:"current",sidebarPosition:606,frontMatter:{description:"Author: @wingkwong, @lonyehan, @jit | https://leetcode.com/problems/construct-string-from-binary-tree/",tags:["String","Tree","Depth-First Search","Binary Tree"]},sidebar:"tutorialSidebar",previous:{title:"0605 - Can Place Flowers (Easy)",permalink:"/solutions/0600-0699/can-place-flowers-easy"},next:{title:"0609 - Find Duplicate File in System (Medium)",permalink:"/solutions/0600-0699/find-duplicate-file-in-system-medium"}},a={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: DFS",id:"approach-1-dfs",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{SolutionAuthor:n,TabItem:s,Tabs:i}=t;return n||u("SolutionAuthor",!0),s||u("TabItem",!0),i||u("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"0606---construct-string-from-binary-tree-easy",children:"0606 - Construct String from Binary Tree (Easy)"}),"\n",(0,r.jsx)(t.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/construct-string-from-binary-tree/",children:"https://leetcode.com/problems/construct-string-from-binary-tree/"})}),"\n",(0,r.jsx)(t.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(t.p,{children:["Given the ",(0,r.jsx)(t.code,{children:"root"})," of a binary tree, construct a string consisting of parenthesis and integers from a binary tree with the preorder traversal way, and return it."]}),"\n",(0,r.jsx)(t.p,{children:"Omit all the empty parenthesis pairs that do not affect the one-to-one mapping relationship between the string and the original binary tree."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'Input: root = [1,2,3,4]\nOutput: "1(2(4))(3)"\nExplanation: Originally, it needs to be "1(2(4)())(3()())", but you need to omit all the unnecessary empty parenthesis pairs. And it will be "1(2(4))(3)"\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'Input: root = [1,2,3,null,4]\nOutput: "1(2()(4))(3)"\nExplanation: Almost the same as the first example, except we cannot omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The number of nodes in the tree is in the range ",(0,r.jsx)(t.code,{children:"[1, 10^4]"}),"."]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"-1000 <= Node.val <= 1000"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"approach-1-dfs",children:"Approach 1: DFS"}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsxs)(s,{value:"cpp",label:"C++",children:[(0,r.jsx)(n,{name:"@wingkwong"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:'/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\n\n// Time Complexity: O(N) where N is the number of the nodes in the tree\n// Space Complexity: O(H) where H is the height of the tree. \n// In worse case, H can be N when it is a left skewed binary tree / right skewed binary tree\nclass Solution {\npublic:\n    // case 1: root is nullptr -> ""\n    // case 2: root doesn\'t have left sub tree and right sub tree -> root->val\n    // case 3: root->left is not nullptr -> root->val + (dfs result from left sub tree)\n    // case 4: root->left is nullptr but root->right is not nullptr -> root->val + () \n    // case 5: root->right is not nullptr -> root->val + (dfs result from right sub tree)\n    string tree2str(TreeNode* root) {\n        // handle case 1\n        if (!root) return "";\n        // we convert root->val to string here, then append results from different cases\n        string s = to_string(root->val);\n        // handle case 2\n        // this line is obviously not necessary\n        if (!root->left && !root->right) s += "";  \n        // handle case 3\n        if (root->left) s += "(" + tree2str(root->left) + ")";\n        // handle case 4\n        // alternatively, you can use `else if (root->right) s += "()";`\n        if (!root->left && root->right) s += "()";\n        // handle case 5\n        if (root->right) s += "(" + tree2str(root->right) + ")";\n        return s;\n    }\n};\n'})})]}),(0,r.jsxs)(s,{value:"py",label:"Python",children:[(0,r.jsx)(n,{name:"@wingkwong"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-py",children:"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\n\n# Time Complexity: O(N) where N is the number of the nodes in the tree\n# Space Complexity: O(H) where H is the height of the tree. \n# In worse case, H can be N when it is a left skewed binary tree / right skewed binary tree\nclass Solution:\n    # case 1: root is nullptr -> \"\"\n    # case 2: root doesn't have left sub tree and right sub tree -> root.val\n    # case 3: root.left is not nullptr -> root.val + (dfs result from left sub tree)\n    # case 4: root.left is nullptr but root.right is not nullptr -> root.val + () \n    # case 5: root.right is not nullptr -> root.val + (dfs result from right sub tree)\n    def tree2str(self, root: Optional[TreeNode]) -> str:\n        # handle case 1\n        if root is None:\n            return ''\n        # we convert root.val to string here, then append results from different cases\n        s = str(root.val)\n        # handle case 2\n        # this line is obviously not necessary\n        if root.left is None and root.right is None:\n            s += ''\n        # handle case 3\n        if root.left:\n            s += '({})'.format(self.tree2str(root.left))\n        # handle case 4\n        # alternatively, you can use `elif root.right: s += '()'`\n        if root.left is None and root.right:\n            s += '()'\n        # handle case 5\n        if root.right:\n            s += '({})'.format(self.tree2str(root.right))\n        return s        \n"})})]}),(0,r.jsxs)(s,{value:"cs",label:"C#",children:[(0,r.jsx)(n,{name:"@lonyehan"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cs",children:'public class Solution {\n    public string Tree2str(TreeNode root) {\n        if(root == null) return null;\n        \n        string left = Tree2str(root.left);\n        string right = Tree2str(root.right);\n        \n        string result = "";\n        \n        if(left == null && right == null) {\n            result = $"{root.val}";\n        }\n        else if(left != null && right == null) {\n            result = $"{root.val}({left})";\n        }\n        else {\n            result = $"{root.val}({left})({right})";\n        }\n        \n        return result;        \n    }\n}\n'})})]}),(0,r.jsxs)(s,{value:"elixir",label:"Elixir",children:[(0,r.jsx)(n,{name:"@jit"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-elixir",children:'defmodule Solution do\n  # Enumerate the cases:\n  @spec tree2str(root :: TreeNode.t | nil) :: String.t\n  def tree2str(%TreeNode{val: v, left: nil, right: nil}), do:\n    "#{v}"\n\n  def tree2str(%TreeNode{val: v, left: lch, right: nil}), do:\n    "#{v}(#{tree2str(lch)})"\n  \n  def tree2str(%TreeNode{val: v, left: nil, right: rch}), do:\n    "#{v}()(#{tree2str(rch)})"\n\n  def tree2str(%TreeNode{val: v, left: lch, right: rch}), do:\n    "#{v}(#{tree2str(lch)})(#{tree2str(rch)})"\nend\n'})})]})]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var r=n(67294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);