"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[5613],{97924:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var s=t(85893),r=t(11151);const a={description:"Author: @ColeB2, @radojicic23 | https://leetcode.com/problems/invert-binary-tree/",tags:["Tree","Depth-First Search","Breadth-First Search","Binary Tree"]},i="0226 - Invert Binary Tree (Easy)",l={id:"0200-0299/invert-binary-tree-easy",title:"0226 - Invert Binary Tree (Easy)",description:"Author: @ColeB2, @radojicic23 | https://leetcode.com/problems/invert-binary-tree/",source:"@site/solutions/0200-0299/0226-invert-binary-tree-easy.md",sourceDirName:"0200-0299",slug:"/0200-0299/invert-binary-tree-easy",permalink:"/solutions/0200-0299/invert-binary-tree-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0226-invert-binary-tree-easy.md",tags:[{inline:!0,label:"Tree",permalink:"/solutions/tags/tree"},{inline:!0,label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{inline:!0,label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"},{inline:!0,label:"Binary Tree",permalink:"/solutions/tags/binary-tree"}],version:"current",sidebarPosition:226,frontMatter:{description:"Author: @ColeB2, @radojicic23 | https://leetcode.com/problems/invert-binary-tree/",tags:["Tree","Depth-First Search","Breadth-First Search","Binary Tree"]},sidebar:"tutorialSidebar",previous:{title:"0225 - Implement Stack using Queues (Easy)",permalink:"/solutions/0200-0299/implement-stack-using-queues-easy"},next:{title:"0228 - Summary Ranges (Easy)",permalink:"/solutions/0200-0299/summary-ranges-easy"}},o={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Recursive Depth-First Search",id:"approach-1-recursive-depth-first-search",level:2},{value:"Approach 2: Iterative Depth-First Search",id:"approach-2-iterative-depth-first-search",level:2},{value:"Approach 3: Iterative Breadth-First Search",id:"approach-3-iterative-breadth-first-search",level:2}];function c(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{SolutionAuthor:t,TabItem:a,Tabs:i}=n;return t||m("SolutionAuthor",!0),a||m("TabItem",!0),i||m("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"0226---invert-binary-tree-easy",children:"0226 - Invert Binary Tree (Easy)"}),"\n",(0,s.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/invert-binary-tree/",children:"https://leetcode.com/problems/invert-binary-tree/"})}),"\n",(0,s.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,s.jsxs)(n.p,{children:["Given the ",(0,s.jsx)(n.code,{children:"root"})," of a binary tree, invert the tree, and return ",(0,s.jsx)(n.em,{children:"its root"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg",alt:""})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: root = [4,2,7,1,3,6,9]\nOutput: [4,7,2,9,6,3,1]\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg",alt:""})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: root = [2,1,3]\nOutput: [2,3,1]\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: root = []\nOutput: []\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The number of nodes in the tree is in the range ",(0,s.jsx)(n.code,{children:"[0, 100]"}),"."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"100 <= Node.val <= 100"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"approach-1-recursive-depth-first-search",children:"Approach 1: Recursive Depth-First Search"}),"\n",(0,s.jsx)(n.p,{children:"Like many tree problems, they can often be solved with recursion, and this problem is no exception. When solving problems recursively it helps to think the problem through and think up the base case(s)."}),"\n",(0,s.jsx)(n.p,{children:"So looking at the problem, and the images, it appears that this problem is asking us to swap each child for each node. Then know that we can think about what happens if we reach the end, a node that has a value of null. That is our base case. If we reach a null node, we can just return the node."}),"\n",(0,s.jsx)(n.p,{children:"Knowing that is our base case, all we are left with is understanding how to swap our children nodes. We can do that using a temporary variable to track the left child so we don't lose it. Setting the root node's left pointer to the right child, then setting the root node's right pointer to the temporary variable, which was our left child."}),"\n",(0,s.jsx)(n.p,{children:"Simply that is it, then we can call our algorithm recursively on both the left and right children (or right to left, we will end up with the same answer), and finally return our root."}),"\n",(0,s.jsxs)(n.p,{children:["Time Complexity: ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"O"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mi,{children:"n"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})})]})," where n is the number of nodes in our binary tree, as we have to visit each node at least once."]}),"\n",(0,s.jsxs)(n.p,{children:["Space Complexity: ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"O"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mi,{children:"n"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})})]})," for the size of our recursive call stack. Their will be ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"O"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mi,{children:"h"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(h)"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"h"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})})]})," where h is the height of the tree function calls in our call stack, but in the worst case, ie a tree with only right child nodes, that will reach ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"O"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mi,{children:"n"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})})]}),"."]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsxs)(a,{value:"python",label:"Python",children:[(0,s.jsx)(t,{name:"@ColeB2"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:\n        # Base case\n        if not root:\n            return root\n        # Temp node so as not to lose the left child.\n        tmp = root.left\n        # set root's left pointer to the right child node.\n        root.left = root.right\n        # set root's right pointer to point at the tmp node, which is our left\n        # child node.\n        root.right = tmp\n        # Note in python we could simplify the swapping as:\n        # root.left, root.right = root.right, root.left\n        # call our function recursively on both the left and right children.\n        self.invertTree(root.left)\n        self.invertTree(root.right)\n        # return root node.\n        return root\n"})})]}),(0,s.jsxs)(a,{value:"js",label:"JavaScript",children:[(0,s.jsx)(t,{name:"@radojicic23"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {TreeNode}\n */\nvar invertTree = function(root) {\n    // base case\n    if (!root) {\n        return root;\n    }\n    // swap left and right nodes\n    let tmp = root.left;\n    root.left = root.right;\n    root.right = tmp;\n    // call function recursively on left and right nodes\n    invertTree(root.left);\n    invertTree(root.right);\n    // return root node \n    return root;\n};\n"})})]}),(0,s.jsxs)(a,{value:"cpp",label:"C++",children:[(0,s.jsx)(t,{name:"@radojicic23"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    TreeNode* invertTree(TreeNode* root) {\n        // base case\n        if (!root) {\n            return root;\n        }\n        // swap left and right node\n        TreeNode* tmp = root->left;\n        root->left = root->right;\n        root->right = tmp;\n        // call function recursively on left and right nodes\n        invertTree(root->left);\n        invertTree(root->right);\n        // return root node\n        return root;\n    }\n};\n"})})]})]}),"\n",(0,s.jsx)(n.h2,{id:"approach-2-iterative-depth-first-search",children:"Approach 2: Iterative Depth-First Search"}),"\n",(0,s.jsx)(n.p,{children:"The iterative approach may be a little tricky if you've never seen it done before. To pull it off, we need a stack, and we can initialize it with our root node. Then while the stack contains values, we can pop them off the stack during each iteration. Similar to the recursive, during each iteration, all we have to do is swap our left and right child nodes, then add them to the stack to be processed themselves."}),"\n",(0,s.jsxs)(n.p,{children:["Time Complexity: ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"O"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mi,{children:"n"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})})]})," where n is the number of nodes in our binary tree, as we have to visit each node at least once."]}),"\n",(0,s.jsxs)(n.p,{children:["Space Complexity: ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"O"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mi,{children:"n"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})})]})," for the size of the stack, as the size our stack reaches will be dependent on the number of nodes in the binary tree."]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsxs)(a,{value:"python",label:"Python",children:[(0,s.jsx)(t,{name:"@ColeB2"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:\n        # Given null as a tree, return early.\n        if not root:\n            return root\n        # Initialize our stack with the root node inside.\n        stack = [root]\n        # Iterate through each value in the stack.\n        while stack:\n            # pop the node off the end of the stack. O(1) time\n            node = stack.pop()\n            # Python we can swap left and right children simply like this:\n            node.left, node.right = node.right, node.left\n            # Check if the node has a child before adding it to the stack:\n            # this makes error checking a lot easier, as we don't need to check\n            # whether the node exists before swapping the left and right children\n            # as we won't ever add the None nodes to the stack.\n            if node.left:\n                stack.append(node.left)\n            # repeat for right child\n            if node.right:\n                stack.append(node.right)\n        # return root node.\n        return root\n"})})]}),(0,s.jsxs)(a,{value:"js",label:"JavaScript",children:[(0,s.jsx)(t,{name:"@radojicic23"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {TreeNode}\n */\nvar invertTree = function(root) {\n    // base case\n    if (!root) {\n        return root;\n    }\n    // initialize stack and add root inside\n    stack = [];\n    stack.push(root);\n    // go through every value in stack\n    while (stack.length) {\n        // pop the last node from the stack\n        let node = stack.pop();\n        if (node != null) {\n            // swap left and right nodes\n            let tmp = node.left;\n            node.left = node.right;\n            node.right = tmp;\n            // add left and right nodes in stack\n            stack.push(node.left, node.right);\n        } \n    }\n    // return root node \n    return root;\n};\n"})})]}),(0,s.jsxs)(a,{value:"cpp",label:"C++",children:[(0,s.jsx)(t,{name:"@radojicic23"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    TreeNode* invertTree(TreeNode* root) {\n        // base case \n        if (!root) {\n            return root;\n        }\n        // initialize stack and add root inside \n        stack<TreeNode*> st;\n        st.push(root);\n        // go through every value in stack\n        while (!st.empty()) {\n            // pop the last node from the stack\n            TreeNode* node = st.top();\n            st.pop();\n            // if node exist\n            if (node != NULL) {\n                // swap left and right nodes\n                TreeNode* tmp = node->left;\n                node->left = node->right;\n                node->right = tmp;\n                // insert left and right nodes in stack\n                st.push(node->left);\n                st.push(node->right);\n            }\n        }\n        // return root node\n        return root;\n    }\n};\n"})})]})]}),"\n",(0,s.jsx)(n.h2,{id:"approach-3-iterative-breadth-first-search",children:"Approach 3: Iterative Breadth-First Search"}),"\n",(0,s.jsx)(n.p,{children:"Similarly, in most cases where you can do an iterative DFS, you can also do an iterative BFS using a queue. It will be the same idea as iterative DFS, just using a queue, meaning we will add nodes to the right side of our queue and pop them off the left side of our queue instead."}),"\n",(0,s.jsxs)(n.p,{children:["Time Complexity: ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"O"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mi,{children:"n"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})})]})," where n is the number of nodes in our binary tree, as we have to visit each node at least once."]}),"\n",(0,s.jsxs)(n.p,{children:["Space Complexity: ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"O"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mi,{children:"n"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})})]})," for the size of the queue. In the worst case we will have a full level of nodes inside our queue, which in a full tree, the last level will contain ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsx)(n.mrow,{children:(0,s.jsxs)(n.mfrac,{children:[(0,s.jsx)(n.mi,{children:"n"}),(0,s.jsx)(n.mn,{children:"2"})]})}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\frac {n}{2}"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1.0404em",verticalAlign:"-0.345em"}}),(0,s.jsxs)(n.span,{className:"mord",children:[(0,s.jsx)(n.span,{className:"mopen nulldelimiter"}),(0,s.jsx)(n.span,{className:"mfrac",children:(0,s.jsxs)(n.span,{className:"vlist-t vlist-t2",children:[(0,s.jsxs)(n.span,{className:"vlist-r",children:[(0,s.jsxs)(n.span,{className:"vlist",style:{height:"0.6954em"},children:[(0,s.jsxs)(n.span,{style:{top:"-2.655em"},children:[(0,s.jsx)(n.span,{className:"pstrut",style:{height:"3em"}}),(0,s.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,s.jsx)(n.span,{className:"mord mtight",children:(0,s.jsx)(n.span,{className:"mord mtight",children:"2"})})})]}),(0,s.jsxs)(n.span,{style:{top:"-3.23em"},children:[(0,s.jsx)(n.span,{className:"pstrut",style:{height:"3em"}}),(0,s.jsx)(n.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,s.jsxs)(n.span,{style:{top:"-3.394em"},children:[(0,s.jsx)(n.span,{className:"pstrut",style:{height:"3em"}}),(0,s.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,s.jsx)(n.span,{className:"mord mtight",children:(0,s.jsx)(n.span,{className:"mord mathnormal mtight",children:"n"})})})]})]}),(0,s.jsx)(n.span,{className:"vlist-s",children:"\u200b"})]}),(0,s.jsx)(n.span,{className:"vlist-r",children:(0,s.jsx)(n.span,{className:"vlist",style:{height:"0.345em"},children:(0,s.jsx)(n.span,{})})})]})}),(0,s.jsx)(n.span,{className:"mclose nulldelimiter"})]})]})})]})," nodes, which for our case means ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"O"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mi,{children:"n"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})})]})," space."]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsxs)(a,{value:"python",label:"Python",children:[(0,s.jsx)(t,{name:"@ColeB2"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:\n        # Given None as a root node, we can return early.\n        if not root:\n            return root\n        # initialize our our queue with root node as our first value.\n        q = deque([root])\n        while q:\n            # pop root node off the left side of our queue.\n            node = q.popleft()\n            # swap the children nodes.\n            node.left, node.right = node.right, node.left\n            # only add the node to the q's right side, if the node exists.\n            if node.left:\n                q.append(node.left)\n            # same for the right node.\n            if node.right:\n                q.append(node.right)\n        # return the root.\n        return root\n"})})]}),(0,s.jsxs)(a,{value:"cpp",label:"C++",children:[(0,s.jsx)(t,{name:"@radojicic23"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    TreeNode* invertTree(TreeNode* root) {\n        // base case\n        if (!root) {\n            return root;\n        }\n        // inititalize queue\n        queue<TreeNode*> q;\n        // insert root inside queue\n        q.push(root);\n        // go through all values in queue\n        while (!q.empty()) {\n            // pop the front node from queue\n            TreeNode* node = q.front();\n            q.pop();\n            // if node exist\n            if (node != NULL) {\n                // swap left and right nodes\n                TreeNode* tmp = node->left;\n                node->left = node->right;\n                node->right = tmp;\n                // insert left and right nodes in queue\n                q.push(node->left);\n                q.push(node->right);\n            }\n        }\n        // return root node\n        return root;\n    }\n};\n"})})]}),(0,s.jsxs)(a,{value:"js",label:"JavaScript",children:[(0,s.jsx)(t,{name:"@radojicic23"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {TreeNode}\n */\nvar invertTree = function(root) {\n    // base case\n    if (!root) {\n        return root;\n    }\n    // initialize queue and insert root inside queue\n    let q = new Queue();\n    q.enqueue(root);\n    // go through all elements in queue\n    while (!q.isEmpty()) {\n        // pop the front node from queue\n        let node = q.dequeue();\n        // if node exist\n        if (node) {\n            // swap left and right nodes\n            let tmp = node.left;\n            node.left = node.right;\n            node.right = tmp;\n            // insert left and right nodes in queue\n            q.enqueue(node.left);\n            q.enqueue(node.right);\n        }\n    }\n    // return root node\n    return root;\n};\n"})})]})]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var s=t(67294);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);