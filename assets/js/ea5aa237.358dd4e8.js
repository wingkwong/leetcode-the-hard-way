"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[69128],{94786:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=r(85893),o=r(11151);const i={description:"Author: @wingkwong, @ganajayant, @vigneshshiv, @radojicic23, @jit | https://leetcode.com/problems/binary-tree-inorder-traversal/",tags:["Stack","Tree","Depth-First Search","Binary Tree"]},l="0094 - Binary Tree Inorder Traversal (Easy)",a={id:"0000-0099/binary-tree-inorder-traversal-easy",title:"0094 - Binary Tree Inorder Traversal (Easy)",description:"Author: @wingkwong, @ganajayant, @vigneshshiv, @radojicic23, @jit | https://leetcode.com/problems/binary-tree-inorder-traversal/",source:"@site/solutions/0000-0099/0094-binary-tree-inorder-traversal-easy.md",sourceDirName:"0000-0099",slug:"/0000-0099/binary-tree-inorder-traversal-easy",permalink:"/solutions/0000-0099/binary-tree-inorder-traversal-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0094-binary-tree-inorder-traversal-easy.md",tags:[{inline:!0,label:"Stack",permalink:"/solutions/tags/stack"},{inline:!0,label:"Tree",permalink:"/solutions/tags/tree"},{inline:!0,label:"Depth-First Search",permalink:"/solutions/tags/depth-first-search"},{inline:!0,label:"Binary Tree",permalink:"/solutions/tags/binary-tree"}],version:"current",sidebarPosition:94,frontMatter:{description:"Author: @wingkwong, @ganajayant, @vigneshshiv, @radojicic23, @jit | https://leetcode.com/problems/binary-tree-inorder-traversal/",tags:["Stack","Tree","Depth-First Search","Binary Tree"]},sidebar:"tutorialSidebar",previous:{title:"0093 - Restore IP Addresses (Medium)",permalink:"/solutions/0000-0099/restore-ip-addresses-medium"},next:{title:"0097 - Interleaving String (Medium)",permalink:"/solutions/0000-0099/interleaving-string-medium"}},s={},d=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Inorder Traversal",id:"approach-1-inorder-traversal",level:2},{value:"Approach 2: Iterative",id:"approach-2-iterative",level:2}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{SolutionAuthor:r,TabItem:i,Tabs:l}=n;return r||u("SolutionAuthor",!0),i||u("TabItem",!0),l||u("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"0094---binary-tree-inorder-traversal-easy",children:"0094 - Binary Tree Inorder Traversal (Easy)"}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(n.p,{children:["Given the ",(0,t.jsx)(n.code,{children:"root"})," of a binary tree, return ",(0,t.jsx)(n.em,{children:"the inorder traversal of its nodes' values"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: root = [1,null,2,3]\nOutput: [1,3,2]\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: root = []\nOutput: []\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Input: root = [1]\nOutput: [1]\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The number of nodes in the tree is in the range ",(0,t.jsx)(n.code,{children:"[0, 100]"}),"."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"-100 <= Node.val <= 100"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Follow up:"})," Recursive solution is trivial, could you do it iteratively?"]}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-inorder-traversal",children:"Approach 1: Inorder Traversal"}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsxs)(i,{value:"cpp",label:"C++",children:[(0,t.jsx)(r,{name:"@wingkwong"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\n\n// Time Complexity: O(N)\n// Space Complexity: O(N)\n\n// This is a standard in-order traversal problem, I'd suggest to learn pre-order and post-order as well.\n// Here's a short tutorial if you're interested.\n// https://wingkwong.github.io/leetcode-the-hard-way/tutorials/graph-theory/binary-tree\n// then you may try the following problems \n// 144. Binary Tree Preorder Traversal: https://leetcode.com/problems/binary-tree-preorder-traversal/\n// 145. Binary Tree Postorder Traversal: https://leetcode.com/problems/binary-tree-postorder-traversal/\n\nclass Solution {\npublic:\n    vector<int> ans;\n    void inorder(TreeNode* node) {\n        if (node == NULL) return;\n        // traverse the left node\n        inorder(node->left);\n        // do something with node value here\n        ans.push_back(node->val);\n        // traverse the right node\n        inorder(node->right);\n    }\n    \n    vector<int> inorderTraversal(TreeNode* root) {\n        inorder(root);\n        return ans;\n    }\n};\n"})})]}),(0,t.jsxs)(i,{value:"py",label:"Python",children:[(0,t.jsx)(r,{name:"@wingkwong"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\n\nclass Solution:\n    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\n        # left -> root -> right\n        if root is None: return []\n        return self.inorderTraversal(root.left) + [root.val] + self.inorderTraversal(root.right)\n"})})]}),(0,t.jsxs)(i,{value:"java",label:"Java",children:[(0,t.jsx)(r,{name:"@ganajayant"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public List<Integer> inorderTraversal(TreeNode root) {\n        List<Integer> result = new ArrayList<>();\n        inorder(root, result);\n        return result;\n    }\n    private void inorder(TreeNode node, List<Integer> result){\n        if (node == null) {\n            return;\n        }\n        inorder(node.left, result);\n        result.add(node.val);\n        inorder(node.right, result);\n    }\n}\n"})})]}),(0,t.jsxs)(i,{value:"js",label:"JavaScript",children:[(0,t.jsx)(r,{name:"@radojicic23"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar inorderTraversal = function(root) {\n    let res = [];\n    function inorder(root) {\n        if (!root) {\n            return;\n        }\n        inorder(root.left);\n        res.push(root.val);\n        inorder(root.right);\n    }\n    inorder(root);\n    return res;\n};\n"})})]}),(0,t.jsxs)(i,{value:"rust",label:"Rust",children:[(0,t.jsx)(r,{name:"@jit"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rs",children:"// Definition for a binary tree node.\n// #[derive(Debug, PartialEq, Eq)]\n// pub struct TreeNode {\n//   pub val: i32,\n//   pub left: Option<Rc<RefCell<TreeNode>>>,\n//   pub right: Option<Rc<RefCell<TreeNode>>>,\n// }\n// \n// impl TreeNode {\n//   #[inline]\n//   pub fn new(val: i32) -> Self {\n//     TreeNode {\n//       val,\n//       left: None,\n//       right: None\n//     }\n//   }\n// }\nuse std::rc::Rc;\nuse std::cell::RefCell;\ntype TreeRef = Rc<RefCell<TreeNode>>;\n\nimpl Solution {\n    // A typical recursive implementation...\n    pub fn inorder_traversal(root: Option<TreeRef>) -> Vec<i32> {\n        Self::walk(root.as_ref())\n    }\n\n    fn walk(node: Option<&TreeRef>) -> Vec<i32> {\n        node.map_or_else(|| Vec::new(), |tree_ref| {\n            let TreeNode { val: v, left: l, right: r } = &*tree_ref.borrow();\n            [Self::walk(l.as_ref()), vec![*v], Self::walk(r.as_ref())].concat()\n        })\n    }\n}\n"})})]})]}),"\n",(0,t.jsx)(n.h2,{id:"approach-2-iterative",children:"Approach 2: Iterative"}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsxs)(i,{value:"java",label:"Java",children:[(0,t.jsx)(r,{name:"@vigneshshiv"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\n// Time complexity: O(n), where n - # of nodes in the tree\n// Space complexity: O(n)\nclass Solution {\n    public List<Integer> inorderTraversal(TreeNode root) {\n        List<Integer> result = new LinkedList<>();\n        Stack<TreeNode> stack = new Stack<>();\n        while (root != null || !stack.isEmpty()) {\n            // Keep traversing to left and add it to stack till last\n            if (root != null) {\n                stack.push(root);\n                root = root.left;\n            } else {\n                //   1\n                //  / \\\n                // 2   3\n                // All left tree traversed and currently root is NULL \n                // 2 is added to result, Stack is only having 1\n                // If current node is 2, and it's popped out, 2's right is assigned to root which is NULL\n                // So in the next iteration root still be NULL. \n                // Stack top value 1 added to result and 1 popped out and 1's right 3 assigned to root. \n                result.add(stack.peek().val);\n                root = stack.pop().right;\n            }\n        }\n        return result;\n    }\n}\n"})})]}),(0,t.jsxs)(i,{value:"python",label:"Python",children:[(0,t.jsx)(r,{name:"@radojicic23"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\n        stack = []\n        res = []\n        curr = root\n        \n        # If either of these are not empty\n        while curr or stack:\n            # If our current node is not None\n            while curr:\n                # Add it to the stack\n                stack.append(curr)\n                # Move down to the left and \n                # keep doing it as long as it's possible\n                curr = curr.left\n            \n            curr = stack.pop()\n            res.append(curr.val)\n            # Shift to the right\n            curr = curr.right\n        \n        return res \n"})})]}),(0,t.jsxs)(i,{value:"js",label:"JavaScript",children:[(0,t.jsx)(r,{name:"@radojicic23"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar inorderTraversal = function(root) {\n    let stack = [];\n    let res = [];\n    while (root || stack.length) {\n        while (root) {\n            stack.push(root);\n            root = root.left;\n        }\n        root = stack.pop();\n        res.push(root.val);\n        root = root.right;\n    }\n    return res;\n};\n"})})]}),(0,t.jsxs)(i,{value:"cpp",label:"C++",children:[(0,t.jsx)(r,{name:"@radojicic23"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    vector<int> inorderTraversal(TreeNode* root) {\n        vector<int> res;\n        stack<TreeNode*> stack;\n        TreeNode* curr = root;\n        while (curr || !stack.empty()) {\n            while (curr) {\n                stack.push(curr);\n                curr = curr->left;\n            }\n            curr = stack.top();\n            stack.pop();\n            res.push_back(curr->val);\n            curr = curr->right;\n        }\n        return res;\n    }\n};\n"})})]})]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>l});var t=r(67294);const o={},i=t.createContext(o);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);