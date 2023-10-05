"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[72187],{3905:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>d});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),o=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},i=function(e){var a=o(e.components);return n.createElement(l.Provider,{value:a},e.children)},N="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),N=o(t),c=r,d=N["".concat(l,".").concat(c)]||N[c]||h[c]||s;return t?n.createElement(d,p(p({ref:a},i),{},{components:t})):n.createElement(d,p({ref:a},i))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,p=new Array(s);p[0]=c;var m={};for(var l in a)hasOwnProperty.call(a,l)&&(m[l]=a[l]);m.originalType=e,m[N]="string"==typeof e?e:r,p[1]=m;for(var o=2;o<s;o++)p[o]=t[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},88288:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>m,toc:()=>o});var n=t(87462),r=(t(67294),t(3905));const s={title:"Binary Tree",description:"Binary Tree is a tree structure in which eacho node only contains at most two children",keywords:["leetcode","tutorial","binary tree","data structure"]},p=void 0,m={unversionedId:"graph-theory/binary-tree",id:"graph-theory/binary-tree",title:"Binary Tree",description:"Binary Tree is a tree structure in which eacho node only contains at most two children",source:"@site/tutorials/graph-theory/binary-tree.md",sourceDirName:"graph-theory",slug:"/graph-theory/binary-tree",permalink:"/tutorials/graph-theory/binary-tree",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/graph-theory/binary-tree.md",tags:[],version:"current",frontMatter:{title:"Binary Tree",description:"Binary Tree is a tree structure in which eacho node only contains at most two children",keywords:["leetcode","tutorial","binary tree","data structure"]},sidebar:"tutorialSidebar",previous:{title:"Binary Search Tree",permalink:"/tutorials/graph-theory/binary-search-tree"},next:{title:"Breadth First Search (BFS)",permalink:"/tutorials/graph-theory/breadth-first-search"}},l={},o=[{value:"Overview",id:"overview",level:2},{value:"Properties",id:"properties",level:2},{value:"Traversal",id:"traversal",level:2},{value:"Pre-order",id:"pre-order",level:3},{value:"In-order",id:"in-order",level:3},{value:"Post-order",id:"post-order",level:3},{value:"Summary",id:"summary",level:2}],i=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)},N=i("TutorialAuthors"),h=i("Tabs"),c=i("TabItem"),d={toc:o},k="wrapper";function u(e){let{components:a,...t}=e;return(0,r.kt)(k,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(N,{names:"@wingkwong",mdxType:"TutorialAuthors"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"A binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child. The root node is the topmost node in the tree and the leaf nodes are the nodes at the bottom with no children. Binary trees are commonly used to implement data structures such as binary search trees, which are used for efficient searching and sorting. The height of the binary tree is the number of edges from the root to the deepest leaf node. The depth of a node is the number of edges from the root to that node."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The number of nodes on level ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"l")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"l")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l")))))," is equal to the ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mn",{parentName:"msup"},"2"),(0,r.kt)("mi",{parentName:"msup"},"l"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^l")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8491em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8491em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.01968em"}},"l")))))))))))),", like on level ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"0")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"0")))))," (root node) we got ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mn",{parentName:"msup"},"2"),(0,r.kt)("mn",{parentName:"msup"},"0")),(0,r.kt)("mo",{parentName:"mrow"},">"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mn",{parentName:"mrow"},"1")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2 ^ 0 >= 1")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8532em",verticalAlign:"-0.0391em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"0")))))))),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},">="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1")))))," node only."),(0,r.kt)("li",{parentName:"ul"},"The Maximum number of nodes in a binary tree of height ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"h")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"h")))))," is ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mn",{parentName:"msup"},"2"),(0,r.kt)("mi",{parentName:"msup"},"h")),(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("mn",{parentName:"mrow"},"1")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^h - 1")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.9324em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8491em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"h")))))))),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"))))),". ")),(0,r.kt)("h2",{id:"traversal"},"Traversal"),(0,r.kt)("p",null,"There are different ways to traverse trees - In-order, Pre-order, and Post-order. Supposing we have a binary tree with ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"5")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"5")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"5")))))," nodes,"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35857179/180000691-7634f6e6-1c2b-4e6e-a52a-83f3218e2d6b.png",alt:"image"})),(0,r.kt)("h3",{id:"pre-order"},"Pre-order"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Visit the root"),(0,r.kt)("li",{parentName:"ul"},"Traverse the left sub-tree"),(0,r.kt)("li",{parentName:"ul"},"Traverse the right sub-tree")),(0,r.kt)(h,{mdxType:"Tabs"},(0,r.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void preorder(TreeNode* node) {\n    if (node == NULL) return;\n    s.push_back(node->val);\n    preorder(node->left);\n    preorder(node->right);\n}\n"))),(0,r.kt)(c,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def preorder(node):\n    if (node == None): return\n    s.append(node.val)    \n    preorder(node.left)\n    preorder(node.right)\n")))),(0,r.kt)("h3",{id:"in-order"},"In-order"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Traverse the left sub-tree"),(0,r.kt)("li",{parentName:"ul"},"Visit the root"),(0,r.kt)("li",{parentName:"ul"},"Traverse the right sub-tree")),(0,r.kt)(h,{mdxType:"Tabs"},(0,r.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void inorder(TreeNode* node) {\n    if (node == NULL) return;\n    inorder(node->left);\n    s.push_back(node->val);\n    inorder(node->right);\n}\n"))),(0,r.kt)(c,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def inorder(node):\n    if (node == None): return\n    inorder(node.left)\n    s.append(node.val)\n    inorder(node.right)\n")))),(0,r.kt)("h3",{id:"post-order"},"Post-order"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Traverse the left sub-tree"),(0,r.kt)("li",{parentName:"ul"},"Traverse the right sub-tree"),(0,r.kt)("li",{parentName:"ul"},"Visit the root")),(0,r.kt)(h,{mdxType:"Tabs"},(0,r.kt)(c,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void postorder(TreeNode* node) {\n    if (node == NULL) return;\n    postorder(node->left);\n    postorder(node->right);\n    s.push_back(node->val);\n}\n"))),(0,r.kt)(c,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def postorder(node):\n    if (node == None): return\n    postorder(node.left)\n    postorder(node.right)\n    s.append(node.val)  \n")))),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Traversal"),(0,r.kt)("th",{parentName:"tr",align:null},"Path"),(0,r.kt)("th",{parentName:"tr",align:null},"Order"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pre-order"),(0,r.kt)("td",{parentName:"tr",align:null},"1 -> 2 -> 4 -> 5 -> 3"),(0,r.kt)("td",{parentName:"tr",align:null},"Root -> Left -> Right")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"In-order"),(0,r.kt)("td",{parentName:"tr",align:null},"4 -> 2 -> 5 -> 1 -> 3"),(0,r.kt)("td",{parentName:"tr",align:null},"Left -> Root -> Right")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Post-order"),(0,r.kt)("td",{parentName:"tr",align:null},"4 -> 5 -> 2 -> 3 -> 1"),(0,r.kt)("td",{parentName:"tr",align:null},"Left -> Right -> Root")))))}u.isMDXComponent=!0}}]);