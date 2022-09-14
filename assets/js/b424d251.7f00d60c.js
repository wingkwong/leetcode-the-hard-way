"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[7744],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=p(n),c=a,m=h["".concat(s,".").concat(c)]||h[c]||u[c]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},54993:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={description:"Author: @wingkwong | https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/",tags:["Bit Manipulation","Tree","Depth-First Search","Breadth-First Search","Binary Tree"]},s="1457 - Pseudo-Palindromic Paths in a Binary Tree (Medium)",p={unversionedId:"1400-1499/pseudo-palindromic-paths-in-a-binary-tree-medium",id:"1400-1499/pseudo-palindromic-paths-in-a-binary-tree-medium",title:"1457 - Pseudo-Palindromic Paths in a Binary Tree (Medium)",description:"Author: @wingkwong | https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/",source:"@site/solutions/1400-1499/1457-pseudo-palindromic-paths-in-a-binary-tree-medium.md",sourceDirName:"1400-1499",slug:"/1400-1499/pseudo-palindromic-paths-in-a-binary-tree-medium",permalink:"/leetcode-the-hard-way/solutions/1400-1499/pseudo-palindromic-paths-in-a-binary-tree-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1400-1499/1457-pseudo-palindromic-paths-in-a-binary-tree-medium.md",tags:[{label:"Bit Manipulation",permalink:"/leetcode-the-hard-way/solutions/tags/bit-manipulation"},{label:"Tree",permalink:"/leetcode-the-hard-way/solutions/tags/tree"},{label:"Depth-First Search",permalink:"/leetcode-the-hard-way/solutions/tags/depth-first-search"},{label:"Breadth-First Search",permalink:"/leetcode-the-hard-way/solutions/tags/breadth-first-search"},{label:"Binary Tree",permalink:"/leetcode-the-hard-way/solutions/tags/binary-tree"}],version:"current",sidebarPosition:1457,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/",tags:["Bit Manipulation","Tree","Depth-First Search","Breadth-First Search","Binary Tree"]},sidebar:"tutorialSidebar",previous:{title:"1448 - Count Good Nodes in Binary Tree (Medium)",permalink:"/leetcode-the-hard-way/solutions/1400-1499/count-good-nodes-in-binary-tree-medium"},next:{title:"1475 - Final Prices With a Special Discount in a Shop (Easy)",permalink:"/leetcode-the-hard-way/solutions/1400-1499/final-prices-with-a-special-discount-in-a-shop-easy"}},d={},u=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Preorder Traversal + Bit Manipulation",id:"approach-1-preorder-traversal--bit-manipulation",level:2}],h=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},c=h("Tabs"),m=h("TabItem"),f=h("SolutionAuthor"),b={toc:u};function y(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1457---pseudo-palindromic-paths-in-a-binary-tree-medium"},"1457 - Pseudo-Palindromic Paths in a Binary Tree (Medium)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/"},"https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Given a binary tree where node values are digits from 1 to 9. A path in the binary tree is said to be ",(0,i.kt)("strong",{parentName:"p"},"pseudo-palindromic")," if at least one permutation of the node values in the path is a palindrome."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Return the number of ",(0,i.kt)("strong",{parentName:"em"},"pseudo-palindromic")," paths going from the root node to leaf nodes.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: root = [2,3,1,3,1,null,1]\nOutput: 2 \nExplanation: The figure above represents the given binary tree. There are three paths going from the root node to leaf nodes: the red path [2,3,3], the green path [2,1,1], and the path [2,3,1]. Among these paths only red path and green path are pseudo-palindromic paths since the red path [2,3,3] can be rearranged in [3,2,3] (palindrome) and the green path [2,1,1] can be rearranged in [1,2,1] (palindrome).\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: root = [2,1,1,1,3,null,null,null,null,null,1]\nOutput: 1 \nExplanation: The figure above represents the given binary tree. There are three paths going from the root node to leaf nodes: the green path [2,1,1], the path [2,1,3,1], and the path [2,1]. Among these paths only the green path is pseudo-palindromic since [2,1,1] can be rearranged in [1,2,1] (palindrome).\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 3:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: root = [9]\nOutput: 1\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The number of nodes in the tree is in the range ",(0,i.kt)("inlineCode",{parentName:"li"},"[1, 105]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= Node.val <= 9"))),(0,i.kt)("h2",{id:"approach-1-preorder-traversal--bit-manipulation"},"Approach 1: Preorder Traversal + Bit Manipulation"),(0,i.kt)(c,{mdxType:"Tabs"},(0,i.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)(f,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\n\n// Time Complexity: O(N) where N is the number of nodes\n// Space Complexity: O(H) where H is the tree height\nclass Solution {\npublic:\n    int ans = 0;\n    \n    // the idea is that there is at most one digit with odd frequency in pseudo-palindromic path\n    // e.g. [2, 3, 3] - digit 2 has odd frequency\n    // e.g. [9] - digit 9 has odd frequency\n    // so that the digit with odd frequency can be put in the middle, e.g. 323, 9, etc\n    int pseudoPalindromicPaths (TreeNode* root) {\n        preorder(root, 0);\n        return ans;\n    }\n    \n    // if you don't know preorder traversal, try 144. Binary Tree Preorder Traversal first\n    // Problem Link: https://leetcode.com/problems/binary-tree-preorder-traversal/\n    // Explanation Link: https://leetcode.com/problems/binary-tree-preorder-traversal/discuss/2549333/LeetCode-The-Hard-Way-DFS-or-Pre-Order-or-Explained-Line-By-Line\n    void preorder(TreeNode* node, int cnt) {\n        // preorder traversal step 1: if node is null, then return\n        if (node == NULL) return;\n        // preorder traversal step 2: do something with node value here\n        \n        // first let's understand what (x << y) means \n        // (x << y): shifting `x` `y` bits to the left\n        // e.g. 1 << 0 = 1 (shift 0 bit - stay as it is)\n        // e.g. 1 << 1 = 0b10 (shift 1 bit - becomes 2)\n        // e.g. 1 << 2 = 0b100 (shift 2 bits to the left - becomes 4)\n        // you may find that (1 << n) is actually just power of 2. i.e. 2 ^ n\n        \n        // second let's understand three properties of XOR\n        // 1. XOR is self-inverse which means x ^ x = 0 (number XOR number evaluates to 0)\n        // 2. 0 is identity element which means x ^ 0 = x (number XOR 0 remains unchanged)\n        // 3. XOR is commutative, which means x ^ y = y ^ x (order doesn't matter)\n        \n        // we can use (1 << i) to set the appearance of digit i\n        // but how to count the odd frequency? \n        // we can use above XOR properties to achieve the following \n        // if the i-bit is set, then digit i has an odd frequency\n        // how? remember XOR property #1, #2, and #3?\n        // if a digit appears even number of times, the bit at the end will be 0. (x ^ x = 0)\n        // if a digit appears odd number of times, the bit at the will be 1. (x ^ x ^ x = (x ^ x) ^ x = 0 ^ x = x)\n        cnt ^= (1 << node->val);\n        // do something at the leaf\n        if (!node->left && !node->right) {\n            // if i-bit is set in `cnt`, that means digit `i` has an odd frequency\n            // therefore, the number of 1 in `cnt` = the number of digits with an odd frequency\n            // however, we only want at most one digit that has an odd frequency\n            // we can use a bit trick (n & (n - 1)) to remove the rightmost set bit.\n            // e.g. \n            // n     n     n - 1  n & (n - 1)\n            // --   ----   ----   -------\n            //  0   0000   0111    0000\n            //  1   0001   0000    0000\n            //  2   0010   0001    0000\n            //  3   0011   0010    0010\n            //  4   0100   0011    0000\n            //  5   0101   0100    0100\n            //  6   0110   0101    0100\n            //  7   0111   0110    0110\n            //  8   1000   0111    0000 \n            //  9   1001   1000    1000\n            // 10   1010   1001    1000\n            // 11   1011   1010    1010\n            // 12   1100   1011    1000\n            // 13   1101   1100    1100\n            // 14   1110   1101    1100\n            // 15   1111   1110    1110\n            \n            // if the result is 0, that means we have at most one digit that has an odd frequncy \n            // hence, add one to ans\n            ans += (cnt & (cnt - 1)) == 0;\n        }\n        // preorder traversal step 3: traverse the left node\n        preorder(node->left, cnt);\n        // preorder traversal step 4: traverse the right node\n        preorder(node->right, cnt);\n    }\n};\n")))))}y.isMDXComponent=!0}}]);