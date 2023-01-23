"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[54343],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,d=c["".concat(s,".").concat(h)]||c[h]||m[h]||l;return a?n.createElement(d,o(o({ref:t},u),{},{components:a})):n.createElement(d,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},59471:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={description:"Author: @SkollRyu, @ColeB2 | https://leetcode.com/problems/balanced-binary-tree/"},s="0110 - Balanced Binary Tree (Easy)",p={unversionedId:"0100-0199/balanced-binary-tree-easy",id:"0100-0199/balanced-binary-tree-easy",title:"0110 - Balanced Binary Tree (Easy)",description:"Author: @SkollRyu, @ColeB2 | https://leetcode.com/problems/balanced-binary-tree/",source:"@site/solutions/0100-0199/0110-balanced-binary-tree-easy.md",sourceDirName:"0100-0199",slug:"/0100-0199/balanced-binary-tree-easy",permalink:"/solutions/0100-0199/balanced-binary-tree-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0100-0199/0110-balanced-binary-tree-easy.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{description:"Author: @SkollRyu, @ColeB2 | https://leetcode.com/problems/balanced-binary-tree/"},sidebar:"tutorialSidebar",previous:{title:"0104 - Maximum Depth of Binary Tree (Easy)",permalink:"/solutions/0100-0199/maximum-depth-of-binary-tree-easy"},next:{title:"0113 - Path Sum II (Medium)",permalink:"/solutions/0100-0199/path-sum-ii-medium"}},u={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Visualization",id:"visualization",level:2},{value:"Approach 1: Straight forward - Recursion",id:"approach-1-straight-forward---recursion",level:2}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)}},h=c("Tabs"),d=c("TabItem"),f=c("SolutionAuthor"),b={toc:m};function k(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"0110---balanced-binary-tree-easy"},"0110 - Balanced Binary Tree (Easy)"),(0,l.kt)("h2",{id:"problem-link"},"Problem Link"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/balanced-binary-tree/"},"https://leetcode.com/problems/balanced-binary-tree/")),(0,l.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,l.kt)("p",null,"Given a binary tree, determine if it is height-balanced."),(0,l.kt)("p",null,"For this problem, a height-balanced binary tree is defined as:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"a binary tree in which the left and right subtrees of ",(0,l.kt)("em",{parentName:"p"},"every")," node differ in height by no more than 1.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 1:")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/10/06/balance_1.jpg",alt:null})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Input: root = [3,9,20,null,null,15,7]\nOutput: true\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 2:")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/10/06/balance_2.jpg",alt:null})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Input: root = [1,2,2,3,3,null,null,4,4]\nOutput: false\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example 3:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Input: root = []\nOutput: true \n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Constraints:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The number of nodes in the tree is in the range ",(0,l.kt)("inlineCode",{parentName:"li"},"[0, 5000]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-10^4 <= Node.val <= 10^4"))),(0,l.kt)("h2",{id:"visualization"},"Visualization"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/63882653/152684367-0ea099bd-623c-4d5a-8862-0ec035620c13.jpg",alt:"height-balanced"}),"\n",(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/63882653/152684944-1e774af3-8303-42be-9d7b-20af26221f74.jpg",alt:"Height-unbalanced"})),(0,l.kt)("h2",{id:"approach-1-straight-forward---recursion"},"Approach 1: Straight forward - Recursion"),(0,l.kt)("p",null,"This solution is strictly following the definition of a balanced binary tree.  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"(1) ABS(left sub-tree's height - right sub-tree's height) <= 1.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"(2) Every left sub-trees and right sub-trees are also balanced."))),(0,l.kt)("p",null,"First, we need to set up the base case for the recursion solution. Then we check if the whole left subtree and right subtree are balanced. If so, then we check if every subtrees are balanced."),(0,l.kt)("p",null,"Time Complexity: ",(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")")))))," as recursively we are going to have to process each node inside the tree at least once using a depth-first approach."),(0,l.kt)("p",null,"Space Complexity: ",(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"h"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(h)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")")))))," as using a recursive DFS solution will only ever hold the current path inside our call stack, which will scale with the height of the tree."),(0,l.kt)(h,{mdxType:"Tabs"},(0,l.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)(f,{name:"@SkollRyu",mdxType:"SolutionAuthor"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n    public boolean isBalanced(TreeNode root) {\n        if (root == null) {\n            return true;\n        }\n        if(Math.abs(height(root.left) - height(root.right)) <= 1){\n            return isBalanced(root.left) && isBalanced(root.right);\n        } else {\n            return false;\n        }\n    }\n    \n    public int height(TreeNode root){\n        if (root == null) return -1;\n        int ld = height(root.left);\n        int rd = height(root.right);\n        return 1 + Math.max(ld,rd);\n    }\n}\n"))),(0,l.kt)(d,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)(f,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    # We will use Truthy values for our return here. Meaning if we return any \n    # number that isn't 0, the judge will consider is similar as returning True.\n    # And if we return 0/False, the judge will consider it as a False value.\n    def isBalanced(self, root: Optional[TreeNode]) -> bool:\n        # Base case null node: \n        # We will use 1 as height of null node here as it accomplishes 2 things: \n        # 1. it passes up a height value for child nodes,\n        #    Ex. For a child node. If we calculate the left/right height \n        #    difference, it will come out to 0 regardless if we use 0-0 or 1-1.\n        # 2. it acts as a 'Truthy' value for the 'null tree'\n        #    Ex. if our initial input is null, ie an empty tree. It is considered\n        #    balanced, and the 1 value acts as a 'Truthy' value to return True.\n        if not root:\n            return 1\n        # Find the height of the left sub-tree - recursively.\n        left = self.isBalanced(root.left)\n        # if left sub-tree is ever False, stop. No need to continue.\n        if not left:\n            return False\n        # Find the height of the right sub-tree - recursively.\n        right = self.isBalanced(root.right)\n        # if right sub-tree is ever False, stop. No need to continue\n        if not right:\n            return False\n        # Calculate the height differences. If they are ever > 1: not balanced.\n        if abs(left - right) > 1:\n            return False\n        # Return height of longest subtree up for further calculations.\n        return max(left, right) + 1\n")))))}k.isMDXComponent=!0}}]);