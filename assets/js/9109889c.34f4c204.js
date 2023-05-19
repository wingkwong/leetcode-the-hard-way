"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[96886],{3905:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>k});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),l=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},i=function(e){var a=l(e.components);return n.createElement(p.Provider,{value:a},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),c=l(t),N=r,k=c["".concat(p,".").concat(N)]||c[N]||h[N]||s;return t?n.createElement(k,m(m({ref:a},i),{},{components:t})):n.createElement(k,m({ref:a},i))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,m=new Array(s);m[0]=N;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[c]="string"==typeof e?e:r,m[1]=o;for(var l=2;l<s;l++)m[l]=t[l];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},15411:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>m,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=t(87462),r=(t(67294),t(3905));const s={description:"Author: @ColeB2, @radojicic23 | https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",tags:["Tree","Depth-First Search","Binary Search Tree","Binary Tree"]},m="0235 - Lowest Common Ancestor of a Binary Search Tree (Medium)",o={unversionedId:"0200-0299/lowest-common-ancestor-of-a-binary-search-tree-medium",id:"0200-0299/lowest-common-ancestor-of-a-binary-search-tree-medium",title:"0235 - Lowest Common Ancestor of a Binary Search Tree (Medium)",description:"Author: @ColeB2, @radojicic23 | https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",source:"@site/solutions/0200-0299/0235-lowest-common-ancestor-of-a-binary-search-tree-medium.md",sourceDirName:"0200-0299",slug:"/0200-0299/lowest-common-ancestor-of-a-binary-search-tree-medium",permalink:"/solutions/0200-0299/lowest-common-ancestor-of-a-binary-search-tree-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0235-lowest-common-ancestor-of-a-binary-search-tree-medium.md",tags:[{label:"Tree",permalink:"/solutions/tags/tree"},{label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{label:"Binary Search Tree",permalink:"/solutions/tags/binary-search-tree"},{label:"Binary Tree",permalink:"/solutions/tags/binary-tree"}],version:"current",sidebarPosition:235,frontMatter:{description:"Author: @ColeB2, @radojicic23 | https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",tags:["Tree","Depth-First Search","Binary Search Tree","Binary Tree"]},sidebar:"tutorialSidebar",previous:{title:"0234 - Palindrome Linked List (Easy)",permalink:"/solutions/0200-0299/palindrome-linked-list-easy"},next:{title:"0239 - Sliding Window Maximum (Hard)",permalink:"/solutions/0200-0299/sliding-maximum-window-hard"}},p={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Iterative",id:"approach-1-iterative",level:2}],i=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)},c=i("Tabs"),h=i("TabItem"),N=i("SolutionAuthor"),k={toc:l},d="wrapper";function u(e){let{components:a,...t}=e;return(0,r.kt)(d,(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0235---lowest-common-ancestor-of-a-binary-search-tree-medium"},"0235 - Lowest Common Ancestor of a Binary Search Tree (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"},"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST."),(0,r.kt)("p",null,"According to the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lowest_common_ancestor"},"definition of LCA on Wikipedia"),": \u201cThe lowest common ancestor is defined between two nodes ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"q")," as the lowest node in ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," that has both ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"q")," as descendants (where we allow ",(0,r.kt)("strong",{parentName:"p"},"a node to be a descendant of itself"),").\u201d"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2018/12/14/binarysearchtree_improved.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8\nOutput: 6\nExplanation: The LCA of nodes 2 and 8 is 6.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2018/12/14/binarysearchtree_improved.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4\nOutput: 2\nExplanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 3:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: root = [2,1], p = 2, q = 1\nOutput: 2\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The number of nodes in the tree is in the range ",(0,r.kt)("inlineCode",{parentName:"li"},"[2, 10^5]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-10^9 <= Node.val <= 10^9")),(0,r.kt)("li",{parentName:"ul"},"All ",(0,r.kt)("inlineCode",{parentName:"li"},"Node.val")," are ",(0,r.kt)("strong",{parentName:"li"},"unique"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"p != q")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"p")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"q")," will exist in the BST.")),(0,r.kt)("h2",{id:"approach-1-iterative"},"Approach 1: Iterative"),(0,r.kt)("p",null,"The biggest thing to remember is a BST(Binary Search Tree) is a data structure, where all nodes in the left subtree are less than the root and all nodes in the right subtree are greater than the root. Knowing that we can easily leverage this idea using 3 simple conditions."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"p")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))," and ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"q")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"q")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"q")))))," are both greater than the ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mi",{parentName:"mrow"},"e")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"node")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e")))))," we are looking at, then the LCA(Lowest Common Ancestor) must be in the right subtree."),(0,r.kt)("li",{parentName:"ol"},"If ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"p")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))," and ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"q")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"q")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"q")))))," are both less than the ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mi",{parentName:"mrow"},"e")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"node")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e")))))," we are looking at, then the LCA must be in the left subtree."),(0,r.kt)("li",{parentName:"ol"},"Finally, if the above are not true, it means 1 node must be in the left, and 1 must be in the right, or 1 of them are equal, and 1 of them are in the left/right subtree. Which in both cases, means the current node is the LCA.")),(0,r.kt)("p",null,"Time Complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"g"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(log n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," since we are using a BST, and only ever check the subtree we know both will be in, we know in the worst case that means we will only ever have to check through ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"g"),(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"log n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," nodes."),(0,r.kt)("p",null,"Space Complexity: ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),". We only need pointers to track the current node."),(0,r.kt)(c,{mdxType:"Tabs"},(0,r.kt)(h,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)(N,{name:"@ColeB2",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\nclass Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n        # initalize a current node variable to trace through our BST.\n        node = root\n        # while the node has not reached a null node.\n        while node:\n            # if both p and q are > than node, LCA must be in the right subtree.\n            if p.val > node.val and q.val > node.val:\n                node = node.right\n            # if both p and q are < than node, LCA must be in the left subtree.\n            elif p.val < node.val and q.val < node.val:\n                node = node.left\n            # Else will cover 2 cases:\n            # 1. node == p or q -- since we are traversing top down, it means\n            # the other must be a child, thus making node the LCA.\n            # 2. p is in one subtree and q is in the other subtree, making the \n            # current node the LCA.\n            else:\n                return node\n"))),(0,r.kt)(h,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)(N,{name:"@radojicic23",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */\n\n/**\n * @param {TreeNode} root\n * @param {TreeNode} p\n * @param {TreeNode} q\n * @return {TreeNode}\n */\nvar lowestCommonAncestor = function(root, p, q) {\n    let curr = root;\n    while (curr) {\n        if (p.val < curr.val && q.val < curr.val) {\n            curr = curr.left;\n        } else if (p.val > curr.val && q.val > curr.val) {\n            curr = curr.right;\n        } else {\n            return curr;\n        }\n    }\n};\n")))))}u.isMDXComponent=!0}}]);