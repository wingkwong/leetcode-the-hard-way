"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[1516],{53542:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>r,default:()=>o,frontMatter:()=>t,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"0400-0499/Frog-Jump","title":"0403 - Frog Jump (Hard)","description":"Author: @Kavita613 | https://leetcode.com/problems/frog-jump/","source":"@site/solutions/0400-0499/0403-Frog-Jump.md","sourceDirName":"0400-0499","slug":"/0400-0499/Frog-Jump","permalink":"/solutions/0400-0499/Frog-Jump","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0400-0499/0403-Frog-Jump.md","tags":[{"inline":true,"label":"Array","permalink":"/solutions/tags/array"},{"inline":true,"label":"Dynamic Programming","permalink":"/solutions/tags/dynamic-programming"}],"version":"current","sidebarPosition":403,"frontMatter":{"description":"Author: @Kavita613 | https://leetcode.com/problems/frog-jump/","tags":["Array","Dynamic Programming"]},"sidebar":"tutorialSidebar","previous":{"title":"0402 - Remove K Digits (Medium)","permalink":"/solutions/0400-0499/remove-k-digits-medium"},"next":{"title":"0404 - Sum of Left Leaves (Easy)","permalink":"/solutions/0400-0499/sum-of-left-leaves-easy"}}');var i=a(74848),l=a(28453);const t={description:"Author: @Kavita613 | https://leetcode.com/problems/frog-jump/",tags:["Array","Dynamic Programming"]},r="0403 - Frog Jump (Hard)",m={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: HashMap",id:"approach-1-hashmap",level:2},{value:"Approach 2: Dynamic Programming",id:"approach-2-dynamic-programming",level:2}];function h(s){const e={a:"a",annotation:"annotation",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.R)(),...s.components},{SolutionAuthor:a,TabItem:n,Tabs:t}=e;return a||d("SolutionAuthor",!0),n||d("TabItem",!0),t||d("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"0403---frog-jump-hard",children:"0403 - Frog Jump (Hard)"})}),"\n",(0,i.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://leetcode.com/problems/frog-jump/",children:"https://leetcode.com/problems/frog-jump/"})}),"\n",(0,i.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,i.jsxs)(e.p,{children:["A frog is crossing a river. The river is divided into some number of units, and at each unit, there may or may not exist a stone. The frog",(0,i.jsx)(e.br,{}),"\n","can jump on a stone, but it must not jump into the water. Given a list of stones' positions (in units) in sorted ascending order, determine if the",(0,i.jsx)(e.br,{}),"\n","frog can cross the river by landing on the last stone. Initially, the frog is on the first stone and assumes the first jump must be 1 unit. If the",(0,i.jsx)(e.br,{}),"\n","frog's last jump was k units, its next jump must be either k - 1, k, or k + 1 units. The frog can only jump in the forward direction."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: stones = [0,1,3,5,6,8,12,17]\nOutput: true  \nExplanation: The frog can jump to the last stone by jumping $1$ unit to the $2nd$ stone, then $2$ units to the $3rd$ stone, then  \n$2$ units to the $4th$ stone, then $3$ units to the $6th$ stone, $4$ units to the $7th$ stone, and $5$ units to the $8th$ stone.\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"Input: stones = [0,1,2,3,4,8,9,11]\nOutput: false  \nExplanation: There is no way to jump to the last stone as the gap between the $5th$ and $6th$ stone is too large.\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"2 <= stones.length <= 2000"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"0 <= stones[i] <= 231 - 1"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"stones[0] == 0"})}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"stones"})," is sorted in a strictly increasing order."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"approach-1-hashmap",children:"Approach 1: HashMap"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"First, we make hashmap of each stone, which would contain a set(stores viable moves that can be made)"}),"\n",(0,i.jsxs)(e.li,{children:["Traversing the ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"o"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"s"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"stones"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6151em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"es"})]})})]})," array from index ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mn,{children:"0"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"0"})]})})]})," which is our 0th positions(only one move at 0th position made by frog)"]}),"\n",(0,i.jsxs)(e.li,{children:["Populate the sets of stones that can be reached from current position using a viable move which are ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"k"}),(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mn,{children:"1"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"k-1"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"})]})]})]}),", ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"k"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]})," and ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"k"}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsx)(e.mn,{children:"1"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"k+1"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"})]})]})]}),". And also we will calculate next viable move using previous move"]}),"\n",(0,i.jsxs)(e.li,{children:["At the end we will return true if we reach at the end of posiions which is ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"o"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"["}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"]"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"stones[n-1]"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"es"}),(0,i.jsx)(e.span,{className:"mopen",children:"["}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsx)(e.span,{className:"mclose",children:"]"})]})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["Time Complexity is ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"O"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mo,{children:"\u2217"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n * n)"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mclose",children:")"})]})]})]}),", where ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"n"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]})," is the length of ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"o"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"s"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"stones"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6151em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"es"})]})})]})," array."]}),"\n",(0,i.jsxs)(e.p,{children:["Space Complexity is ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"O"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mclose",children:")"})]})})]}),"."]}),"\n",(0,i.jsx)(t,{children:(0,i.jsxs)(n,{value:"cpp",label:"C++",children:[(0,i.jsx)(a,{name:"@Kavita613"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n  bool canCross(vector<int>& stones) {\n    int n = stones.size();\n\n    // create map <stone positions, set<moves we can make at this stone position>>\n    unordered_map<int, set<int>> map;\n\n    // intializing map\n    for (int i = 0; i < n; i++) {\n      map[stones[i]] = {};\n    }\n\n    // when we are at zero position, there is only one move which is equal to 1\n    map[0].insert(1);\n\n    // iterating every stone positions through $stones$ array\n    for (int i = 0; i < n; i++) {\n      int currstone = stones[i];\n\n      // iterating each moves\n      set<int> st = map[currstone];\n\n      for (auto x : st) {\n        // pos is stone's positon after applying move x\n        int pos = currstone + x;\n\n        // if position of stone is equal to final position then frog will win\n        if (pos == stones[stones.size() - 1]) {\n          return true;\n        }\n\n        // first we will check pos is available in our stones array\n        if (map.find(pos) != map.end()) {\n          // if the frog's last jump was x units, its next jump must be either x - 1, x, or x + 1 units\n          if (x - 1 > 0) {\n            map[pos].insert(x - 1);\n          }\n          map[pos].insert(x);\n          map[pos].insert(x + 1);\n        }\n      }\n    }\n\n    return false;\n  }\n};\n"})})]})}),"\n",(0,i.jsx)(e.h2,{id:"approach-2-dynamic-programming",children:"Approach 2: Dynamic Programming"}),"\n",(0,i.jsxs)(e.p,{children:["We apply Recursion + Memoization to find out the solution. There are three possible recursion call for ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"k"}),(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mn,{children:"1"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"k-1"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"})]})]})]}),", ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"k"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]}),", ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"k"}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsx)(e.mn,{children:"1"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"k+1"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"})]})]})]})," moves.",(0,i.jsx)(e.br,{}),"\n","There are some base condtions, we have to facus on"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"if move k is less then zero, then we can not make a jump at that position."}),"\n",(0,i.jsxs)(e.li,{children:["Now, we have to find that whatever ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"m"}),(0,i.jsx)(e.mi,{children:"o"}),(0,i.jsx)(e.mi,{children:"v"}),(0,i.jsx)(e.mi,{children:"e"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"move"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"e"})]})})]})," ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"o"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"["}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"d"}),(0,i.jsx)(e.mi,{children:"x"}),(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsx)(e.mi,{children:"k"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"(stones[idx-1] + k)"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"es"}),(0,i.jsx)(e.span,{className:"mopen",children:"["}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsx)(e.span,{className:"mclose",children:"]"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,i.jsx)(e.span,{className:"mclose",children:")"})]})]})]})," that has been made is present in our ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"o"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"s"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"stones"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6151em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"es"})]})})]})," array or not"]}),"\n",(0,i.jsxs)(e.li,{children:["Also we are answer in our dp and if ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"d"}),(0,i.jsx)(e.mi,{children:"p"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"["}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mi,{children:"d"}),(0,i.jsx)(e.mi,{children:"x"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"["}),(0,i.jsx)(e.mi,{children:"k"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"!"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mn,{children:"1"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"dp[idx][k]!=-1"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,i.jsx)(e.span,{className:"mopen",children:"["}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,i.jsx)(e.span,{className:"mclose",children:"]"}),(0,i.jsx)(e.span,{className:"mopen",children:"["}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,i.jsx)(e.span,{className:"mclose",children:"]!"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(e.span,{className:"mord",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mord",children:"1"})]})]})]}),", it means our answer is already present in dp"]}),"\n",(0,i.jsx)(e.li,{children:"Now, final base condition will check if we reach last position or not"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["Time Complexity is ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"O"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mo,{children:"\u2217"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n * n)"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mclose",children:")"})]})]})]}),", where ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"n"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]})," is the length of the ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"s"}),(0,i.jsx)(e.mi,{children:"t"}),(0,i.jsx)(e.mi,{children:"o"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mi,{children:"e"}),(0,i.jsx)(e.mi,{children:"s"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"stones"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6151em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"es"})]})})]})," array.",(0,i.jsx)(e.br,{}),"\n","Space Complexity is ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"O"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mo,{children:"\u2217"}),(0,i.jsx)(e.mi,{children:"n"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(n * n)"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,i.jsx)(e.span,{className:"mclose",children:")"})]})]})]})]}),"\n",(0,i.jsx)(t,{children:(0,i.jsxs)(n,{value:"cpp",label:"C++",children:[(0,i.jsx)(a,{name:"@Kavita613"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"class Solution {\n public:\n  // Create Globally 2d dp array\n  int dp[2002][2002];\n\n  bool solve(int idx, int k, vector<int>& stones, unordered_map<int, int>& m) {\n    // k is number of moves\n    if (k <= 0) return false;\n\n    // checking k + stones[idx - 1] is available position in our stones array or not\n    if (m.find(k + stones[idx - 1]) == m.end()) {\n      return false;\n    } else {\n      idx = m[k + stones[idx - 1]];\n    }\n\n    if (dp[idx][k] != -1) {\n      return dp[idx][k];\n    }\n\n    // when we reach at end of the positions we will return true\n    if (idx == stones.size() - 1) {\n      return true;\n    }\n    // calling recursive function for k-1, k, k+1 moves\n    dp[idx][k] = solve(idx + 1, k - 1, stones, m) ||\n                 solve(idx + 1, k, stones, m) ||\n                 solve(idx + 1, k + 1, stones, m);\n\n    return dp[idx][k];\n  }\n\n  bool canCross(vector<int>& stones) {\n    // create unordered_map to store position of stone and index\n    unordered_map<int, int> m;\n\n    // intializing dp\n    memset(dp, -1, sizeof(dp));\n\n    // intializing map\n    for (int i = 0; i < stones.size(); i++) {\n      m.insert({stones[i], i});\n    }\n    // stones[1] must be 1 because at position zero we one move which is one\n    if (stones[1] != 1) {\n      return false;\n    }\n    // calling recursive function, passing index 1 and at index privous move is\n    // one\n    return solve(1, 1, stones, m);\n  }\n};\n"})})]})})]})}function o(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(h,{...s})}):h(s)}function d(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(s,e,a)=>{a.d(e,{R:()=>t,x:()=>r});var n=a(96540);const i={},l=n.createContext(i);function t(s){const e=n.useContext(l);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:t(s.components),n.createElement(l.Provider,{value:e},s.children)}}}]);