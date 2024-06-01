"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[94107],{41012:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=t(85893),r=t(11151);const o={description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/jump-game-ii/",tags:["Array","Dynamic Programming","Greedy"]},s="0045 - Jump Game II (Medium)",a={id:"0000-0099/jump-game-ii-medium",title:"0045 - Jump Game II (Medium)",description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/jump-game-ii/",source:"@site/solutions/0000-0099/0045-jump-game-ii-medium.md",sourceDirName:"0000-0099",slug:"/0000-0099/jump-game-ii-medium",permalink:"/solutions/0000-0099/jump-game-ii-medium",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0000-0099/0045-jump-game-ii-medium.md",tags:[{inline:!0,label:"Array",permalink:"/solutions/tags/array"},{inline:!0,label:"Dynamic Programming",permalink:"/solutions/tags/dynamic-programming"},{inline:!0,label:"Greedy",permalink:"/solutions/tags/greedy"}],version:"current",sidebarPosition:45,frontMatter:{description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/jump-game-ii/",tags:["Array","Dynamic Programming","Greedy"]},sidebar:"tutorialSidebar",previous:{title:"0042 - Trapping Rain Water (Hard)",permalink:"/solutions/0000-0099/trapping-rain-water-hard"},next:{title:"0046 - Permutations (Medium)",permalink:"/solutions/0000-0099/permutations-medium"}},d={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: BFS",id:"approach-1-bfs",level:2}];function m(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{SolutionAuthor:t,TabItem:o,Tabs:s}=n;return t||u("SolutionAuthor",!0),o||u("TabItem",!0),s||u("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"0045---jump-game-ii-medium",children:"0045 - Jump Game II (Medium)"}),"\n",(0,i.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/jump-game-ii/",children:"https://leetcode.com/problems/jump-game-ii/"})}),"\n",(0,i.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(n.p,{children:["You are given a ",(0,i.jsx)(n.strong,{children:"0-indexed"})," array of integers ",(0,i.jsx)(n.code,{children:"nums"})," of length ",(0,i.jsx)(n.code,{children:"n"}),". You are initially positioned at ",(0,i.jsx)(n.code,{children:"nums[0]"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Each element ",(0,i.jsx)(n.code,{children:"nums[i]"})," represents the maximum length of a forward jump from index ",(0,i.jsx)(n.code,{children:"i"}),". In other words, if you are at ",(0,i.jsx)(n.code,{children:"nums[i]"}),", you can jump to any ",(0,i.jsx)(n.code,{children:"nums[i + j]"})," where:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"0 <= j <= nums[i]"})," and"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"i + j < n"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Return ",(0,i.jsx)(n.em,{children:"the minimum number of jumps to reach"}),(0,i.jsx)(n.code,{children:"nums[n - 1]"}),". The test cases are generated such that you can reach ",(0,i.jsx)(n.code,{children:"nums[n - 1]"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: nums = [2,3,1,1,4]\nOutput: 2\nExplanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: nums = [2,3,0,1,4]\nOutput: 2\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"1 <= nums.length <= 10^4"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"0 <= nums[i] <= 1000"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"approach-1-bfs",children:"Approach 1: BFS"}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsxs)(o,{value:"cpp",label:"C++",children:[(0,i.jsx)(t,{name:"@wingkwong"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"// intuition:\n// we can image the input as graph.\n// in example 1, starting from the root, we can reach the 2nd node and 3rd node\n// from the 2nd node, we can reach 3rd, 4th, and 5th\n// from the 3rd node, we can reach 4th\n// from the 4th node, we can reach 5th\n// from the 5th node, it is the desination, we don't need to jump\n// here we can put those on different level, i.e.\n// lv1: 2 \n// lv2: 1 3\n// lv3: 1 4\n// each level can be reachable from the previous level starting from 2nd level\n// each level contains the possible length of jump\n// the minimum number of jumps is the jump required to make from level 1\n\nclass Solution {\npublic:\n    int jump(vector<int>& nums) {\n        // cur_end: the ending index of the current level\n        // nxt_end: the ending index of the next level\n        int n = nums.size(), cur_end = 0, nxt_end = 0, steps = 0;\n        for (int i = 0; i < n; i++) {\n            // if the current index is out of the current level, \n            // we add 1 step because we are going to the next level\n            if (i > cur_end) steps += 1, cur_end = nxt_end;\n            // update nxt_end - take the max index\n            nxt_end = max(nxt_end, i + nums[i]);\n        }\n        return steps;\n    }\n};\n"})})]}),(0,i.jsxs)(o,{value:"py",label:"Python",children:[(0,i.jsx)(t,{name:"@wingkwong"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"# intuition:\n# we can image the input as graph.\n# in example 1, starting from the root, we can reach the 2nd node and 3rd node\n# from the 2nd node, we can reach 3rd, 4th, and 5th\n# from the 3rd node, we can reach 4th\n# from the 4th node, we can reach 5th\n# from the 5th node, it is the desination, we don't need to jump\n# here we can put those on different level, i.e.\n# lv1: 2 \n# lv2: 1 3\n# lv3: 1 4\n# each level can be reachable from the previous level starting from 2nd level\n# each level contains the possible length of jump\n# the minimum number of jumps is the jump required to make from level 1\n\n\nclass Solution:\n    def jump(self, nums: List[int]) -> int:\n        n = len(nums)\n\t\t# cur_end: the ending index of the current level\n\t\t# nxt_end: the ending index of the next level\n        cur_end, nxt_end = 0, 0\n        steps = 0\n        for i in range(n):\n\t\t\t# if the current index is out of the current level, \n\t\t\t# we add 1 step because we are going to the next level\n            if i > cur_end:\n                steps += 1\n                cur_end = nxt_end\n            # update nxt_end - take the max index\n            nxt_end = max(nxt_end, i + nums[i])\n        return steps\n"})})]}),(0,i.jsxs)(o,{value:"js",label:"JavaScript",children:[(0,i.jsx)(t,{name:"@radojicic23"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"/**\n * @param {number[]} nums\n * @return {number}\n */\nvar jump = function(nums) {\n    let steps = 0;\n    let currEnd = 0, maxEnd = 0;\n    for (let i = 0; i < nums.length; i++) {\n        if (i > currEnd) {\n            steps++;\n            currEnd = maxEnd;\n        }\n        maxEnd = Math.max(maxEnd, i + nums[i]);\n    }\n    return steps;\n};\n"})})]})]})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(67294);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);