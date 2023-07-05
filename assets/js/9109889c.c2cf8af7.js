"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[96886],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={description:"Author: @ColeB2, @radojicic23 | https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",tags:["Tree","Depth-First Search","Binary Search Tree","Binary Tree"]},l="0235 - Lowest Common Ancestor of a Binary Search Tree (Medium)",i={unversionedId:"0200-0299/lowest-common-ancestor-of-a-binary-search-tree-medium",id:"0200-0299/lowest-common-ancestor-of-a-binary-search-tree-medium",title:"0235 - Lowest Common Ancestor of a Binary Search Tree (Medium)",description:"Author: @ColeB2, @radojicic23 | https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",source:"@site/solutions/0200-0299/0235-lowest-common-ancestor-of-a-binary-search-tree-medium.md",sourceDirName:"0200-0299",slug:"/0200-0299/lowest-common-ancestor-of-a-binary-search-tree-medium",permalink:"/solutions/0200-0299/lowest-common-ancestor-of-a-binary-search-tree-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0235-lowest-common-ancestor-of-a-binary-search-tree-medium.md",tags:[{label:"Tree",permalink:"/solutions/tags/tree"},{label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{label:"Binary Search Tree",permalink:"/solutions/tags/binary-search-tree"},{label:"Binary Tree",permalink:"/solutions/tags/binary-tree"}],version:"current",sidebarPosition:235,frontMatter:{description:"Author: @ColeB2, @radojicic23 | https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",tags:["Tree","Depth-First Search","Binary Search Tree","Binary Tree"]},sidebar:"tutorialSidebar",previous:{title:"0234 - Palindrome Linked List (Easy)",permalink:"/solutions/0200-0299/palindrome-linked-list-easy"},next:{title:"0239 - Sliding Window Maximum (Hard)",permalink:"/solutions/0200-0299/sliding-maximum-window-hard"}},s={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Iterative",id:"approach-1-iterative",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},m=p("Tabs"),d=p("TabItem"),u=p("SolutionAuthor"),h={toc:c},f="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0235---lowest-common-ancestor-of-a-binary-search-tree-medium"},"0235 - Lowest Common Ancestor of a Binary Search Tree (Medium)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"},"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST."),(0,o.kt)("p",null,"According to the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lowest_common_ancestor"},"definition of LCA on Wikipedia"),": \u201cThe lowest common ancestor is defined between two nodes ",(0,o.kt)("inlineCode",{parentName:"p"},"p")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"q")," as the lowest node in ",(0,o.kt)("inlineCode",{parentName:"p"},"T")," that has both ",(0,o.kt)("inlineCode",{parentName:"p"},"p")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"q")," as descendants (where we allow ",(0,o.kt)("strong",{parentName:"p"},"a node to be a descendant of itself"),").\u201d"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2018/12/14/binarysearchtree_improved.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8\nOutput: 6\nExplanation: The LCA of nodes 2 and 8 is 6.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2018/12/14/binarysearchtree_improved.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4\nOutput: 2\nExplanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: root = [2,1], p = 2, q = 1\nOutput: 2\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The number of nodes in the tree is in the range ",(0,o.kt)("inlineCode",{parentName:"li"},"[2, 10^5]"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-10^9 <= Node.val <= 10^9")),(0,o.kt)("li",{parentName:"ul"},"All ",(0,o.kt)("inlineCode",{parentName:"li"},"Node.val")," are ",(0,o.kt)("strong",{parentName:"li"},"unique"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"p != q")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"p")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"q")," will exist in the BST.")),(0,o.kt)("h2",{id:"approach-1-iterative"},"Approach 1: Iterative"),(0,o.kt)("p",null,"The biggest thing to remember is a BST(Binary Search Tree) is a data structure, where all nodes in the left subtree are less than the root and all nodes in the right subtree are greater than the root. Knowing that we can easily leverage this idea using 3 simple conditions."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If $p$ and $q$ are both greater than the $node$ we are looking at, then the LCA(Lowest Common Ancestor) must be in the right subtree."),(0,o.kt)("li",{parentName:"ol"},"If $p$ and $q$ are both less than the $node$ we are looking at, then the LCA must be in the left subtree."),(0,o.kt)("li",{parentName:"ol"},"Finally, if the above are not true, it means 1 node must be in the left, and 1 must be in the right, or 1 of them are equal, and 1 of them are in the left/right subtree. Which in both cases, means the current node is the LCA.")),(0,o.kt)("p",null,"Time Complexity: $$O(log n)$$ since we are using a BST, and only ever check the subtree we know both will be in, we know in the worst case that means we will only ever have to check through $$log n$$ nodes."),(0,o.kt)("p",null,"Space Complexity: $$O(1)$$. We only need pointers to track the current node."),(0,o.kt)(m,{mdxType:"Tabs"},(0,o.kt)(d,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(u,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\nclass Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n        # initalize a current node variable to trace through our BST.\n        node = root\n        # while the node has not reached a null node.\n        while node:\n            # if both p and q are > than node, LCA must be in the right subtree.\n            if p.val > node.val and q.val > node.val:\n                node = node.right\n            # if both p and q are < than node, LCA must be in the left subtree.\n            elif p.val < node.val and q.val < node.val:\n                node = node.left\n            # Else will cover 2 cases:\n            # 1. node == p or q -- since we are traversing top down, it means\n            # the other must be a child, thus making node the LCA.\n            # 2. p is in one subtree and q is in the other subtree, making the \n            # current node the LCA.\n            else:\n                return node\n"))),(0,o.kt)(d,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)(u,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n\n/**\n * @param {TreeNode} root\n * @param {TreeNode} p\n * @param {TreeNode} q\n * @return {TreeNode}\n */\nvar lowestCommonAncestor = function(root, p, q) {\n    let curr = root;\n    while (curr) {\n        if (p.val < curr.val && q.val < curr.val) {\n            curr = curr.left;\n        } else if (p.val > curr.val && q.val > curr.val) {\n            curr = curr.right;\n        } else {\n            return curr;\n        }\n    }\n};\n"))),(0,o.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)(u,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n * };\n */\n\nclass Solution {\npublic:\n    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {\n        TreeNode* curr = root;\n        while (curr) {\n            if (p->val < curr->val && q->val < curr->val) {\n                curr = curr->left;\n            } else if (p->val > curr->val && q->val > curr->val) {\n                curr = curr->right;\n            } else {\n                return curr;\n            }\n        }\n        return root;\n    }\n};\n")))))}b.isMDXComponent=!0}}]);