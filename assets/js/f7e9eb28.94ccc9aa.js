"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[6944],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96e3:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=n(8539),i=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/evaluate-boolean-binary-tree"},u="2331 - Evaluate Boolean Binary Tree (Easy)",s={unversionedId:"2300-2399/evaluate-boolean-binary-tree-easy",id:"2300-2399/evaluate-boolean-binary-tree-easy",title:"2331 - Evaluate Boolean Binary Tree (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/evaluate-boolean-binary-tree",source:"@site/solutions/2300-2399/2331-evaluate-boolean-binary-tree-easy.md",sourceDirName:"2300-2399",slug:"/2300-2399/evaluate-boolean-binary-tree-easy",permalink:"/leetcode-the-hard-way/solutions/2300-2399/evaluate-boolean-binary-tree-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2300-2399/2331-evaluate-boolean-binary-tree-easy.md",tags:[],version:"current",sidebarPosition:2331,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/evaluate-boolean-binary-tree"},sidebar:"tutorialSidebar",previous:{title:"2300 - 2399",permalink:"/leetcode-the-hard-way/solutions/category/2300---2399"},next:{title:"2351 - First Letter to Appear Twice (Easy)",permalink:"/leetcode-the-hard-way/solutions/2300-2399/first-letter-to-appear-twice-easy"}},c={},m=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Recursive",id:"approach-1-recursive",level:2}],d={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2331---evaluate-boolean-binary-tree-easy"},"2331 - Evaluate Boolean Binary Tree (Easy)"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/evaluate-boolean-binary-tree"},"https://leetcode.com/problems/evaluate-boolean-binary-tree")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given the ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," of a ",(0,o.kt)("strong",{parentName:"p"},"full binary tree")," with the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Leaf nodes")," have either the value ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"1"),", where ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," represents ",(0,o.kt)("inlineCode",{parentName:"li"},"False")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," represents ",(0,o.kt)("inlineCode",{parentName:"li"},"True"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Non-leaf nodes")," have either the value ",(0,o.kt)("inlineCode",{parentName:"li"},"2")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"3"),", where ",(0,o.kt)("inlineCode",{parentName:"li"},"2")," represents the boolean ",(0,o.kt)("inlineCode",{parentName:"li"},"OR")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"3")," represents the boolean ",(0,o.kt)("inlineCode",{parentName:"li"},"AND"),".")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"evaluation")," of a node is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the node is a leaf node, the evaluation is the ",(0,o.kt)("strong",{parentName:"li"},"value")," of the node, i.e. ",(0,o.kt)("inlineCode",{parentName:"li"},"True")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"False"),"."),(0,o.kt)("li",{parentName:"ul"},"Otherwise, ",(0,o.kt)("strong",{parentName:"li"},"evaluate")," the node's two children and ",(0,o.kt)("strong",{parentName:"li"},"apply")," the boolean operation of its value with the children's evaluations.")),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the boolean result of ",(0,o.kt)("strong",{parentName:"em"},"evaluating")," the")," ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," ",(0,o.kt)("em",{parentName:"p"},"node.")),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"full binary tree")," is a binary tree where each node has either ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"2")," children."),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"leaf node")," is a node that has zero children."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2022/05/16/example1drawio1.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: root = [2,1,3,null,null,0,1]\nOutput: true\nExplanation: The above diagram illustrates the evaluation process.\nThe AND node evaluates to False AND True = False.\nThe OR node evaluates to True OR False = True.\nThe root node evaluates to True, so we return true.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: root = [0]\nOutput: false\nExplanation: The root node is a leaf node and it evaluates to false, so we return false.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The number of nodes in the tree is in the range ",(0,o.kt)("inlineCode",{parentName:"li"},"[1, 1000]"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= Node.val <= 3")),(0,o.kt)("li",{parentName:"ul"},"Every node has either ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"2")," children."),(0,o.kt)("li",{parentName:"ul"},"Leaf nodes have a value of ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,o.kt)("li",{parentName:"ul"},"Non-leaf nodes have a value of ",(0,o.kt)("inlineCode",{parentName:"li"},"2")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"3"),".")),(0,o.kt)("h2",{id:"approach-1-recursive"},"Approach 1: Recursive"),(0,o.kt)("p",null,"We have four cases:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If the value is 0, then return false"),(0,o.kt)("li",{parentName:"ol"},"If the value is 1, then return true"),(0,o.kt)("li",{parentName:"ol"},"If the value is 2, then call the function on left tree and right tree and apply OR operation on both returned values"),(0,o.kt)("li",{parentName:"ol"},"If the value is 3, then call the function on left tree and right tree and apply AND operation on both returned values ")),(0,o.kt)(l.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    bool evaluateTree(TreeNode* root) {\n        // case 1\n        if (root->val == 0) return false;\n        // case 2\n        else if (root->val == 1) return true;\n        // case 3\n        else if (root->val == 2) return evaluateTree(root->left) || evaluateTree(root->right);\n        // case 4\n        return evaluateTree(root->left) && evaluateTree(root->right);\n    }\n};\n")))}h.isMDXComponent=!0},8539:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.name;return a.createElement("div",{className:"solution-author-wrapper"},a.createElement("span",null,"This solution is written by ",t))}}}]);