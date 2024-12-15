"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[46211],{84792:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"0100-0199/balanced-binary-tree-easy","title":"0110 - Balanced Binary Tree (Easy)","description":"Author: @SkollRyu, @ColeB2 | https://leetcode.com/problems/balanced-binary-tree/","source":"@site/solutions/0100-0199/0110-balanced-binary-tree-easy.md","sourceDirName":"0100-0199","slug":"/0100-0199/balanced-binary-tree-easy","permalink":"/solutions/0100-0199/balanced-binary-tree-easy","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0110-balanced-binary-tree-easy.md","tags":[],"version":"current","sidebarPosition":110,"frontMatter":{"description":"Author: @SkollRyu, @ColeB2 | https://leetcode.com/problems/balanced-binary-tree/"},"sidebar":"tutorialSidebar","previous":{"title":"0105 - Construct Binary Tree from Preorder and Inorder Traversal (Medium)","permalink":"/solutions/0100-0199/construct-binary-tree-from-preorder-and-inorder-traversal-medium"},"next":{"title":"0112 - Path Sum (Easy)","permalink":"/solutions/0100-0199/path-sum-easy"}}');var r=s(74848),a=s(28453);const l={description:"Author: @SkollRyu, @ColeB2 | https://leetcode.com/problems/balanced-binary-tree/"},i="0110 - Balanced Binary Tree (Easy)",o={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Visualization",id:"visualization",level:2},{value:"Approach 1: Straight forward - Recursion",id:"approach-1-straight-forward---recursion",level:2}];function h(e){const n={a:"a",annotation:"annotation",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{SolutionAuthor:s,TabItem:t,Tabs:l}=n;return s||m("SolutionAuthor",!0),t||m("TabItem",!0),l||m("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"0110---balanced-binary-tree-easy",children:"0110 - Balanced Binary Tree (Easy)"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/balanced-binary-tree/",children:"https://leetcode.com/problems/balanced-binary-tree/"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsx)(n.p,{children:"Given a binary tree, determine if it is height-balanced."}),"\n",(0,r.jsx)(n.p,{children:"For this problem, a height-balanced binary tree is defined as:"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["a binary tree in which the left and right subtrees of ",(0,r.jsx)(n.em,{children:"every"})," node differ in height by no more than 1."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2020/10/06/balance_1.jpg",alt:""})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: root = [3,9,20,null,null,15,7]\nOutput: true\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2020/10/06/balance_2.jpg",alt:""})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: root = [1,2,2,3,3,null,null,4,4]\nOutput: false\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: root = []\nOutput: true \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The number of nodes in the tree is in the range ",(0,r.jsx)(n.code,{children:"[0, 5000]"}),"."]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"-10^4 <= Node.val <= 10^4"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"visualization",children:"Visualization"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:"https://user-images.githubusercontent.com/63882653/152684367-0ea099bd-623c-4d5a-8862-0ec035620c13.jpg",alt:"height-balanced"}),"\n",(0,r.jsx)(n.img,{src:"https://user-images.githubusercontent.com/63882653/152684944-1e774af3-8303-42be-9d7b-20af26221f74.jpg",alt:"Height-unbalanced"})]}),"\n",(0,r.jsx)(n.h2,{id:"approach-1-straight-forward---recursion",children:"Approach 1: Straight forward - Recursion"}),"\n",(0,r.jsx)(n.p,{children:"This solution is strictly following the definition of a balanced binary tree."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["(1) ABS(left sub-tree's height - right sub-tree's height) ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsxs)(n.mrow,{children:[(0,r.jsx)(n.mo,{children:"<"}),(0,r.jsx)(n.mo,{children:"="}),(0,r.jsx)(n.mn,{children:"1"})]}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"<= 1"})]})})}),(0,r.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,r.jsx)(n.span,{className:"mrel",children:"<="}),(0,r.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,r.jsx)(n.span,{className:"mord",children:"1"})]})]})]}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"(2) Every left sub-trees and right sub-trees are also balanced."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"First, we need to set up the base case for the recursion solution. Then we check if the whole left subtree and right subtree are balanced. If so, then we check if every subtrees are balanced."}),"\n",(0,r.jsxs)(n.p,{children:["Time Complexity: ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsxs)(n.mrow,{children:[(0,r.jsx)(n.mi,{children:"O"}),(0,r.jsx)(n.mo,{stretchy:"false",children:"("}),(0,r.jsx)(n.mi,{children:"n"}),(0,r.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,r.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,r.jsx)(n.span,{className:"mopen",children:"("}),(0,r.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(n.span,{className:"mclose",children:")"})]})})]})," as recursively we are going to have to process each node inside the tree at least once using a depth-first approach."]}),"\n",(0,r.jsxs)(n.p,{children:["Space Complexity: ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsxs)(n.mrow,{children:[(0,r.jsx)(n.mi,{children:"O"}),(0,r.jsx)(n.mo,{stretchy:"false",children:"("}),(0,r.jsx)(n.mi,{children:"h"}),(0,r.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(h)"})]})})}),(0,r.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,r.jsx)(n.span,{className:"mopen",children:"("}),(0,r.jsx)(n.span,{className:"mord mathnormal",children:"h"}),(0,r.jsx)(n.span,{className:"mclose",children:")"})]})})]})," as using a recursive DFS solution will only ever hold the current path inside our call stack, which will scale with the height of the tree."]}),"\n",(0,r.jsxs)(l,{children:[(0,r.jsxs)(t,{value:"java",label:"Java",children:[(0,r.jsx)(s,{name:"@SkollRyu"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"class Solution {\n    public boolean isBalanced(TreeNode root) {\n        if (root == null) {\n            return true;\n        }\n        if(Math.abs(height(root.left) - height(root.right)) <= 1){\n            return isBalanced(root.left) && isBalanced(root.right);\n        } else {\n            return false;\n        }\n    }\n    \n    public int height(TreeNode root){\n        if (root == null) return -1;\n        int ld = height(root.left);\n        int rd = height(root.right);\n        return 1 + Math.max(ld,rd);\n    }\n}\n"})})]}),(0,r.jsxs)(t,{value:"python",label:"Python",children:[(0,r.jsx)(s,{name:"@ColeB2"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    # We will use Truthy values for our return here. Meaning if we return any \n    # number that isn't 0, the judge will consider is similar as returning True.\n    # And if we return 0/False, the judge will consider it as a False value.\n    def isBalanced(self, root: Optional[TreeNode]) -> bool:\n        # Base case null node: \n        # We will use 1 as height of null node here as it accomplishes 2 things: \n        # 1. it passes up a height value for child nodes,\n        #    Ex. For a child node. If we calculate the left/right height \n        #    difference, it will come out to 0 regardless if we use 0-0 or 1-1.\n        # 2. it acts as a 'Truthy' value for the 'null tree'\n        #    Ex. if our initial input is null, ie an empty tree. It is considered\n        #    balanced, and the 1 value acts as a 'Truthy' value to return True.\n        if not root:\n            return 1\n        # Find the height of the left sub-tree - recursively.\n        left = self.isBalanced(root.left)\n        # if left sub-tree is ever False, stop. No need to continue.\n        if not left:\n            return False\n        # Find the height of the right sub-tree - recursively.\n        right = self.isBalanced(root.right)\n        # if right sub-tree is ever False, stop. No need to continue\n        if not right:\n            return False\n        # Calculate the height differences. If they are ever > 1: not balanced.\n        if abs(left - right) > 1:\n            return False\n        # Return height of longest subtree up for further calculations.\n        return max(left, right) + 1\n"})})]})]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var t=s(96540);const r={},a=t.createContext(r);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);