"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[43339],{63867:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"2200-2299/find-players-with-zero-or-one-losses-medium","title":"2225 - Find Players With Zero or One Losses (Medium)","description":"Author: @wingkwong, @heder | https://leetcode.com/problems/find-players-with-zero-or-one-losses/","source":"@site/solutions/2200-2299/2225-find-players-with-zero-or-one-losses-medium.md","sourceDirName":"2200-2299","slug":"/2200-2299/find-players-with-zero-or-one-losses-medium","permalink":"/solutions/2200-2299/find-players-with-zero-or-one-losses-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/2200-2299/2225-find-players-with-zero-or-one-losses-medium.md","tags":[{"inline":true,"label":"Array","permalink":"/solutions/tags/array"},{"inline":true,"label":"Hash Table","permalink":"/solutions/tags/hash-table"},{"inline":true,"label":"Sorting","permalink":"/solutions/tags/sorting"},{"inline":true,"label":"Counting","permalink":"/solutions/tags/counting"}],"version":"current","sidebarPosition":2225,"frontMatter":{"description":"Author: @wingkwong, @heder | https://leetcode.com/problems/find-players-with-zero-or-one-losses/","tags":["Array","Hash Table","Sorting","Counting"]},"sidebar":"tutorialSidebar","previous":{"title":"2224 - Minimum Number of Operations to Convert Time (Easy)","permalink":"/solutions/2200-2299/minimum-number-of-operations-to-convert-time-easy"},"next":{"title":"2226 - Maximum Candies Allocated to K Children (Medium)","permalink":"/solutions/2200-2299/maximum-candies-allocated-to-k-children-medium"}}');var l=n(74848),t=n(28453);const i={description:"Author: @wingkwong, @heder | https://leetcode.com/problems/find-players-with-zero-or-one-losses/",tags:["Array","Hash Table","Sorting","Counting"]},r="2225 - Find Players With Zero or One Losses (Medium)",c={},h=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Hash Map (1062ms)",id:"approach-1-hash-map-1062ms",level:2},{value:"Approach 2: Set (1249 ms)",id:"approach-2-set-1249-ms",level:2},{value:"Variant with a single map (1069ms)",id:"variant-with-a-single-map-1069ms",level:3},{value:"Approach 3: Arrays (749ms)",id:"approach-3-arrays-749ms",level:2}];function m(s){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.R)(),...s.components},{SolutionAuthor:n,TabItem:a,Tabs:i}=e;return n||d("SolutionAuthor",!0),a||d("TabItem",!0),i||d("Tabs",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"2225---find-players-with-zero-or-one-losses-medium",children:"2225 - Find Players With Zero or One Losses (Medium)"})}),"\n",(0,l.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://leetcode.com/problems/find-players-with-zero-or-one-losses/",children:"https://leetcode.com/problems/find-players-with-zero-or-one-losses/"})}),"\n",(0,l.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,l.jsxs)(e.p,{children:["You are given an integer array ",(0,l.jsx)(e.code,{children:"matches"})," where ",(0,l.jsx)(e.code,{children:"matches[i] = [winneri, loseri]"})," indicates that the player ",(0,l.jsx)(e.code,{children:"winneri"})," defeated player ",(0,l.jsx)(e.code,{children:"loseri"})," in a match."]}),"\n",(0,l.jsxs)(e.p,{children:["Return ",(0,l.jsx)(e.em,{children:"a list"})," ",(0,l.jsx)(e.code,{children:"answer"})," ",(0,l.jsx)(e.em,{children:"of size"})," ",(0,l.jsx)(e.code,{children:"2"})," ",(0,l.jsx)(e.em,{children:"where:"})]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"answer[0]"})," is a list of all players that have ",(0,l.jsx)(e.strong,{children:"not"})," lost any matches."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"answer[1]"})," is a list of all players that have lost exactly ",(0,l.jsx)(e.strong,{children:"one"})," match."]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["The values in the two lists should be returned in ",(0,l.jsx)(e.strong,{children:"increasing"})," order."]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Note:"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["You should only consider the players that have played ",(0,l.jsx)(e.strong,{children:"at least one"})," match."]}),"\n",(0,l.jsxs)(e.li,{children:["The testcases will be generated such that ",(0,l.jsx)(e.strong,{children:"no"})," two matches will have the ",(0,l.jsx)(e.strong,{children:"same"})," outcome."]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]\nOutput: [[1,2,10],[4,5,7,8]]\nExplanation:\nPlayers 1, 2, and 10 have not lost any matches.\nPlayers 4, 5, 7, and 8 each have lost one match.\nPlayers 3, 6, and 9 each have lost two matches.\nThus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"Input: matches = [[2,3],[1,3],[5,4],[6,4]]\nOutput: [[1,2,5,6],[]]\nExplanation:\nPlayers 1, 2, 5, and 6 have not lost any matches.\nPlayers 3 and 4 each have lost two matches.\nThus, answer[0] = [1,2,5,6] and answer[1] = [].\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"1 <= matches.length <= 10^5"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"matches[i].length == 2"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"1 <= winneri, loseri <= 10^5"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"winneri != loseri"})}),"\n",(0,l.jsxs)(e.li,{children:["All ",(0,l.jsx)(e.code,{children:"matches[i]"})," are ",(0,l.jsx)(e.strong,{children:"unique"}),"."]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"approach-1-hash-map-1062ms",children:"Approach 1: Hash Map (1062ms)"}),"\n",(0,l.jsxs)(e.p,{children:["Check the number of times to lose for each player. If it is ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mn,{children:"0"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"0"})]})})]}),", then this player belongs to ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"a"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mi,{children:"s"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mn,{children:"0"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"ans[0]"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"an"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord",children:"0"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"})]})})]}),". If it is ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mn,{children:"1"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"})]})})]}),", then it belongs to ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"a"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mi,{children:"s"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"["}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"ans[1]"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"an"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,l.jsx)(e.span,{className:"mopen",children:"["}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mclose",children:"]"})]})})]}),"."]}),"\n",(0,l.jsxs)(e.p,{children:["Let ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"n"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]})," be the number of matches then the"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Time complexity is ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"O"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mi,{children:"log"}),(0,l.jsx)(e.mo,{children:"\u2061"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n \\log n)"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsxs)(e.span,{className:"mop",children:["lo",(0,l.jsx)(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})})]})," we need to look at all the matches which would be ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"O"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})})]})," but the sort at the end is ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"O"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mi,{children:"log"}),(0,l.jsx)(e.mo,{children:"\u2061"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n \\log n)"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsxs)(e.span,{className:"mop",children:["lo",(0,l.jsx)(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})})]})," (kudos @learner_9 for spotting and pointing out the mistake) and the"]}),"\n",(0,l.jsxs)(e.li,{children:["Space complexity is ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"O"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})})]}),"."]}),"\n"]}),"\n",(0,l.jsx)(i,{children:(0,l.jsxs)(a,{value:"cpp",label:"C++",children:[(0,l.jsx)(n,{name:"@wingkwong"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    vector<vector<int>> findWinners(vector<vector<int>>& matches) {\n        vector<vector<int>> ans(2);\n        unordered_map<int, int> lost;\n        // calculate lost matches\n        for (auto x : matches) {\n            if (!lost.count(x[0])) lost[x[0]] = 0;\n            if (!lost.count(x[1])) lost[x[1]] = 0;\n            lost[x[1]]++;\n        }\n        // categorise players\n        for (auto x : lost) {\n            int who = x.first, lostMatches = x.second;\n            if (lostMatches == 0) ans[0].push_back(who);\n            else if (lostMatches == 1) ans[1].push_back(who);\n        }\n        // the values in the two lists should be returned in increasing order \n        sort(ans[0].begin(), ans[0].end());\n        sort(ans[1].begin(), ans[1].end());\n        return ans;\n    }\n};\n"})})]})}),"\n",(0,l.jsx)(e.h2,{id:"approach-2-set-1249-ms",children:"Approach 2: Set (1249 ms)"}),"\n",(0,l.jsxs)(e.p,{children:["Let ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"n"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]})," be the number of matches then the"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Time complexity is ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"O"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mi,{children:"log"}),(0,l.jsx)(e.mo,{children:"\u2061"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n \\log n)"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsxs)(e.span,{className:"mop",children:["lo",(0,l.jsx)(e.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})})]})," because of the insertion into the set / map and the"]}),"\n",(0,l.jsxs)(e.li,{children:["Space complexity is ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"O"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})})]}),"."]}),"\n"]}),"\n",(0,l.jsx)(i,{children:(0,l.jsxs)(a,{value:"cpp",label:"C++",children:[(0,l.jsx)(n,{name:"@heder"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"static vector<vector<int>> findWinners(const vector<vector<int>>& matches) noexcept {\n    vector<vector<int>> ans(2);\n\n    set<int> win;\n    map<int, int> loss;\n    \n    for (const vector<int>& match : matches) {\n        win.insert(match[0]);\n        ++loss[match[1]];\n    }\n    \n    for (int p : win)\n        if (loss.find(p) == end(loss)) ans[0].push_back(p);\n    \n    for (auto [p, l] : loss)\n        if (l == 1) ans[1].push_back(p);\n    \n    return ans;\n}\n"})})]})}),"\n",(0,l.jsx)(e.h3,{id:"variant-with-a-single-map-1069ms",children:"Variant with a single map (1069ms)"}),"\n",(0,l.jsx)(e.p,{children:"Picking up on a idea from @stanislav-iablokov we can turn this into a solution with only one map. This is as fast as the solution with the hash set / map."}),"\n",(0,l.jsx)(i,{children:(0,l.jsxs)(a,{value:"cpp",label:"C++",children:[(0,l.jsx)(n,{name:"@heder"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"static vector<vector<int>> findWinners(const vector<vector<int>>& matches) noexcept {\n    vector<vector<int>> ans(2);\n    \n    map<int, int> loss;\n    \n    for (const vector<int>& match : matches) {\n        loss[match[0]] += 0;  // make sure the winners are in the map too., just  loss[match[0]]; would work as well\n        ++loss[match[1]];\n    }\n    \n    for (auto [p, l] : loss) {\n        if (l == 0) {\n            ans[0].push_back(p);\n        } else if (l == 1) {\n            ans[1].push_back(p);\n        }\n    }\n    \n    return ans;\n}\n"})})]})}),"\n",(0,l.jsx)(e.h2,{id:"approach-3-arrays-749ms",children:"Approach 3: Arrays (749ms)"}),"\n",(0,l.jsx)(e.p,{children:"The range of the play number is limited enough that we can just use arrays instead of a hash map / set."}),"\n",(0,l.jsx)(i,{children:(0,l.jsxs)(a,{value:"cpp",label:"C++",children:[(0,l.jsx)(n,{name:"@heder"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-cpp",children:"static vector<vector<int>> findWinners(const vector<vector<int>>& matches) noexcept {\n    array<bool, 100001> played = {};\n    array<int, 100001> losses = {};\n    \n    for (const vector<int>& match : matches) {\n        played[match[0]] = true;\n        played[match[1]] = true;\n        ++losses[match[1]];\n    }\n    \n    vector<vector<int>> ans(2);\n\n    for (int i = 0; i < size(played); ++i) {\n        if (played[i]) {\n            if (losses[i] == 0) {\n                ans[0].push_back(i);\n            } else if (losses[i] == 1) {\n                ans[1].push_back(i);\n            }\n        }\n    }\n\n    return ans;\n}\n"})})]})}),"\n",(0,l.jsxs)(e.p,{children:["Let ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"n"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]})," be the number of matches then the"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Time complexity is ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"O"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mi,{children:"c"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n + c)"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})]})]})," we need to look at all the matches, but there is a significat constant factor ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"c"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"c"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"c"})]})})]})," as we need look over the entier arrays and the"]}),"\n",(0,l.jsxs)(e.li,{children:["Space complexity is ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"O"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"c"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(c)"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})})]}),", which means it's constant, but it's a large constant."]}),"\n"]})]})}function o(s={}){const{wrapper:e}={...(0,t.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(m,{...s})}):m(s)}function d(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(s,e,n)=>{n.d(e,{R:()=>i,x:()=>r});var a=n(96540);const l={},t=a.createContext(l);function i(s){const e=a.useContext(t);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:i(s.components),a.createElement(t.Provider,{value:e},s.children)}}}]);