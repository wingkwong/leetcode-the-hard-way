"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[36263],{32758:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=t(85893),l=t(11151);const o={description:"Author: @wingkwong, @lonyehan | https://leetcode.com/problems/n-ary-tree-level-order-traversal/",tags:["Tree","Breadth-First Search"]},i="0429 - N-ary Tree Level Order Traversal (Medium)",s={id:"0400-0499/n-ary-tree-level-order-traversal-medium",title:"0429 - N-ary Tree Level Order Traversal (Medium)",description:"Author: @wingkwong, @lonyehan | https://leetcode.com/problems/n-ary-tree-level-order-traversal/",source:"@site/solutions/0400-0499/0429-n-ary-tree-level-order-traversal-medium.md",sourceDirName:"0400-0499",slug:"/0400-0499/n-ary-tree-level-order-traversal-medium",permalink:"/solutions/0400-0499/n-ary-tree-level-order-traversal-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0400-0499/0429-n-ary-tree-level-order-traversal-medium.md",tags:[{inline:!0,label:"Tree",permalink:"/solutions/tags/tree"},{inline:!0,label:"Breadth-First Search",permalink:"/solutions/tags/breadth-first-search"}],version:"current",sidebarPosition:429,frontMatter:{description:"Author: @wingkwong, @lonyehan | https://leetcode.com/problems/n-ary-tree-level-order-traversal/",tags:["Tree","Breadth-First Search"]},sidebar:"tutorialSidebar",previous:{title:"0424 - Longest Repeating Character Replacement (Medium)",permalink:"/solutions/0400-0499/longest-repeating-character-replacement-medium"},next:{title:"0433 - Minimum Genetic Mutation (Medium)",permalink:"/solutions/0400-0499/minimum-genetic-mutation-medium"}},a={},d=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: BFS",id:"approach-1-bfs",level:2}];function u(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components},{SolutionAuthor:t,TabItem:o,Tabs:i}=n;return t||c("SolutionAuthor",!0),o||c("TabItem",!0),i||c("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"0429---n-ary-tree-level-order-traversal-medium",children:"0429 - N-ary Tree Level Order Traversal (Medium)"}),"\n",(0,r.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(n.p,{children:["Given an n-ary tree, return the ",(0,r.jsx)(n.em,{children:"level order"})," traversal of its nodes' values."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples)."})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: root = [1,null,3,2,4,null,5,6]\nOutput: [[1],[3,2,4],[5,6]]\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]\nOutput: [[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The height of the n-ary tree is less than or equal to ",(0,r.jsx)(n.code,{children:"1000"})]}),"\n",(0,r.jsxs)(n.li,{children:["The total number of nodes is between ",(0,r.jsx)(n.code,{children:"[0, 104]"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"approach-1-bfs",children:"Approach 1: BFS"}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsxs)(o,{value:"cpp",label:"C++",children:[(0,r.jsx)(t,{name:"@wingkwong"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"/*\n// Definition for a Node.\nclass Node {\npublic:\n    int val;\n    vector<Node*> children;\n\n    Node() {}\n\n    Node(int _val) {\n        val = _val;\n    }\n\n    Node(int _val, vector<Node*> _children) {\n        val = _val;\n        children = _children;\n    }\n};\n*/\n\n// Time Complexity: O(N) where N is the number of nodes in the tree\n// Space Complexity: O(M): where N is the maximum number in the tree at any level\nclass Solution {\npublic:\n    // The idea is to use BFS, which is a common way to traverse the tree level by level\n    // For a standard BFS, we can use queue to push the first root node into a queue\n    // Then remove the front of the queue, add its children to back of the queue\n    // Do the above steps until the queue is empty\n    // In this question, we need to extra thing which is to push the each value of the nodes level by level\n    // We can simply use `level` to store the values of the nodes at current level, \n    // and add it back to `ans` once we've processed all nodes at that level\n    vector<vector<int>> levelOrder(Node* root) {\n        // the total number of nodes is between [0, 10 ^ 4]\n        // check if root is nullptr to cover 0 node case\n        if(!root)  return {};\n        // init ans\n        vector<vector<int>> ans;\n        // standard bfs approach\n        queue<Node*> q;\n        // start with the root node\n        q.push(root); \n        // do the following logic when the queue is not empty\n        while(!q.empty()) {\n            // get the queue size\n            int n = q.size(); \n            // level is used to store all the node values at the current level\n            vector<int> level;\n            // for each element in the current queue\n            for(int i = 0; i < n; i++){\n                //get the first node from the queue\n                Node* node = q.front();\n                // pop it\n                q.pop();\n                // add it to level\n                level.push_back(node->val);\n                // this node may include other nodes, we add them all to the queue\n                for(auto n : node->children) q.push(n); \n            }\n            // we've processed this level, add it to ans\n            ans.push_back(level);\n        }\n        // return final ans\n        return ans;\n    }\n};\n"})})]}),(0,r.jsxs)(o,{value:"py",label:"Python",children:[(0,r.jsx)(t,{name:"@wingkwong"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'"""\n# Definition for a Node.\nclass Node:\n    def __init__(self, val=None, children=None):\n        self.val = val\n        self.children = children\n"""\n\n# Time Complexity: O(N) where N is the number of nodes in the tree\n# Space Complexity: O(M): where M is the maximum number in the tree at any level\nclass Solution:\n    # The idea is to use BFS, which is a common way to traverse the tree level by level\n    # For a standard BFS, we can use queue to push the first root node into a queue\n    # Then remove the front of the queue, add its children to back of the queue\n    # Do the above steps until the queue is empty\n    # In this question, we need to extra thing which is to push the each value of the nodes level by level\n    # We can simply use `level` to store the values of the nodes at current level, \n    # and add it back to `ans` once we\'ve processed all nodes at that level\n    def levelOrder(self, root: \'Node\') -> List[List[int]]:\n        # the total number of nodes is between [0, 10 ^ 4]\n        # check if root is None to cover 0 node case\n        if not root: return []\n        # init ans\n        ans = []\n        # standard bfs approach\n        # start with the root node\n        q = deque([root])\n        # do the following logic when the queue is not empty\n        while q:\n            # level is used to store all the node values at the current level\n            level = []\n            # for each element in the current queue\n            for i in range(len(q)):\n                #get the first node from the queue and pop it\n                node = q.popleft()\n                # add it to level\n                level += [node.val]\n                # this node may include other nodes, we add them all to the queue\n                for n in node.children: q.append(n)\n            # we\'ve processed this level, add it to ans\n            ans += [level]\n        # return final ans\n        return ans\n'})})]}),(0,r.jsxs)(o,{value:"cs",label:"C#",children:[(0,r.jsx)(t,{name:"@lonyehan"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",children:"/*\n// Definition for a Node.\npublic class Node {\n    public int val;\n    public IList<Node> children;\n\n    public Node() {}\n\n    public Node(int _val) {\n        val = _val;\n    }\n\n    public Node(int _val, IList<Node> _children) {\n        val = _val;\n        children = _children;\n    }\n}\n*/\npublic class Solution {\n    public IList<IList<int>> LevelOrder(Node root) {        \n        if(root == null) return new List<IList<int>>();\n        \n        List<IList<int>> result = new List<IList<int>>();\n        Queue<Node> queue = new Queue<Node>();\n        queue.Enqueue(root);\n        \n        while(queue.Count != 0){\n            int count = queue.Count;\n            List<int> list = new List<int>();\n            for(int i = 0; i < count; i++){\n                Node q = queue.Dequeue();\n                list.Add(q.val);\n                foreach(var c in q.children){\n                    queue.Enqueue(c);\n                }                \n            }\n            \n            result.Add(list);\n        }\n        \n        return result;\n    }\n}\n"})})]})]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var r=t(67294);const l={},o=r.createContext(l);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);