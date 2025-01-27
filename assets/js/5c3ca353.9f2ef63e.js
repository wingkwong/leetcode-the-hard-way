"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[97897],{83189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,suggestedProblems:()=>h,toc:()=>d});const r=JSON.parse('{"id":"graph-theory/breadth-first-search","title":"Breadth First Search (BFS)","description":"In BFS, we explore all the closest nodes first before going one step further.","source":"@site/tutorials/graph-theory/breadth-first-search.md","sourceDirName":"graph-theory","slug":"/graph-theory/breadth-first-search","permalink":"/tutorials/graph-theory/breadth-first-search","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/graph-theory/breadth-first-search.md","tags":[],"version":"current","frontMatter":{"title":"Breadth First Search (BFS)","description":"In BFS, we explore all the closest nodes first before going one step further.","hide_table_of_contents":true,"keywords":["leetcode","tutorial","breadth first search","bfs","algorithm"]},"sidebar":"tutorialSidebar","previous":{"title":"Binary Tree","permalink":"/tutorials/graph-theory/binary-tree"},"next":{"title":"Depth First Search (DFS)","permalink":"/tutorials/graph-theory/depth-first-search"}}');var o=n(74848),s=n(28453);const i={title:"Breadth First Search (BFS)",description:"In BFS, we explore all the closest nodes first before going one step further.",hide_table_of_contents:!0,keywords:["leetcode","tutorial","breadth first search","bfs","algorithm"]},l=void 0,a={},h=[{problemName:"0199 -  Binary Tree Right Side View",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/binary-tree-right-side-view/",solutionLink:"../../solutions/0100-0199/binary-tree-right-side-view-medium"},{problemName:"0103 - Binary Tree Zigzag Level Order Traversal",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",solutionLink:"../../solutions/0100-0199/binary-tree-zigzag-level-order-traversal-medium"},{problemName:"0101 - Symmetric Tree",difficulty:"Easy",leetCodeLink:"https://leetcode.com/problems/symmetric-tree/",solutionLink:"../../solutions/0100-0199/symmetric-tree-easy"}],d=[{value:"Overview",id:"overview",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Table:n,TutorialAuthors:r}=t;return n||p("Table",!0),r||p("TutorialAuthors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{names:"@heiheihang"}),"\n",(0,o.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(t.p,{children:["In Breadth-First Search (BFS), we explore ",(0,o.jsx)(t.strong,{children:"all"})," the closest nodes first before going one step further. A good example would be:"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Given a binary tree, find the ",(0,o.jsx)(t.strong,{children:"closest node"})," from ",(0,o.jsx)(t.strong,{children:"root"})," that has the ",(0,o.jsx)(t.strong,{children:"value 3"})]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Of course, you may use DFS to find the solution by iterating all nodes. However, as you can imagine, if the target node is the right child of the root, we have wasted so much time iterating the entire left branch of the root!"}),"\n",(0,o.jsx)(t.p,{children:"BFS would immediately locate the closest target node without wasting time iterating deeper nodes."}),"\n",(0,o.jsx)(t.p,{children:"We will introduce the following template for BFS:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"def findTargetNode(root, targetValue):\n    if(root is None):\n        return None\n    \n    #currentLevel contains the nodes with the same distance to root (closest so far)\n    currentLevel = [root]\n    \n    #we increase our depth one by one as long as there is still node\n    while(len(currentLevel) > 0):\n    \n        #we store the current level node's children in nextLevel\n        nextLevel = []\n        \n        for node in currentLevel:\n            #skip if the node is None\n            if(node is None):\n                continue\n            #we can be sure the target node is the CLOSEST so we can return\n            #because we are traversing the tree level by level\n            if(node.val == targetValue):\n                return node\n                \n            #add the children to nextLevel\n            nextLevel.append(node.left)\n            nextLevel.append(node.right)\n        #change the currentLevel to nextLevel (no target node in this level, go next)\n        currentLevel = nextLevel\n    \n    #if no target node has been returned    \n    return None\n    \n    \n"})}),"\n",(0,o.jsxs)(t.p,{children:["In general, we use a ",(0,o.jsx)(t.strong,{children:"queue"})," to model ",(0,o.jsx)(t.strong,{children:"BFS."})," As the head of the queue represents the closest nodes, and the tail of the queue represents the furthest nodes. We look at the head of the queue, and add new nodes to the end of the queue."]}),"\n",(0,o.jsxs)(t.p,{children:["We can start applying this template to the following problem (",(0,o.jsx)(t.a,{href:"https://leetcode.com/problems/average-of-levels-in-binary-tree/",children:"LeetCode Link"}),")."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Given the ",(0,o.jsx)(t.code,{children:"root"})," of a binary tree, return ",(0,o.jsx)(t.em,{children:"the average value of the nodes on each level in the form of an array"}),". Answers within ",(0,o.jsx)(t.code,{children:"10-5"})," of the actual answer will be accepted."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"In this problem, our primary goal is to separate the tree into different levels. For example, we have these following levels:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"[1]"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"[2,3]"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"[4, _, 3, 5]"})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"When we can separate the tree into different levels, we are just one step before obtaining the solution (which is just getting the averages of each list)"}),"\n",(0,o.jsxs)(t.p,{children:["The challenge here is how can we separate the tree into different levels. We can use the template above with ",(0,o.jsx)(t.code,{children:"currentLevel"})," and ",(0,o.jsx)(t.code,{children:"nextLevel"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:\n        answer = []\n\n        #saves the nodes in the currentLevel\n        currentLevel = [root]\n\n        #continue traversing as long as there is still unexplored nodes\n        while(len(currentLevel) > 0):\n\n            #stores the children of the nodes in the currentLevel\n            nextLevel = []\n\n            #stores the total sum of the currentLevel nodes\n            currentLevelNodeCount = 0\n            \n            currentLevelSum = 0\n            for node in currentLevel:\n                if(node is None):\n                    continue\n                currentLevelSum += node.val\n                nextLevel.append(node.left)\n                nextLevel.append(node.right)\n                currentLevelNodeCount += 1\n            #calculate the level average\n            if currentLevelNodeCount:\n                currentLevelAverage = currentLevelSum / currentLevelNodeCount\n                \n                answer.append(currentLevelAverage)\n\n            #explore the nextLevel\n            currentLevel = nextLevel\n        return answer\n"})}),"\n",(0,o.jsx)(t.p,{children:"We should keep practising the this template of BFS in these similar problems."}),"\n","\n",(0,o.jsx)(n,{title:"Suggested Problems",data:h})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(96540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);