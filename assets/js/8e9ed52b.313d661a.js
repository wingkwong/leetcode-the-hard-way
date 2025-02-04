"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[60969],{16502:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"0900-0999/satisfiability-of-equality-equations-medium","title":"0990 - Satisfiability of Equality Equations (Medium)","description":"Author: @wkw | https://leetcode.com/problems/satisfiability-of-equality-equations/","source":"@site/solutions/0900-0999/0990-satisfiability-of-equality-equations-medium.md","sourceDirName":"0900-0999","slug":"/0900-0999/satisfiability-of-equality-equations-medium","permalink":"/solutions/0900-0999/satisfiability-of-equality-equations-medium","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0900-0999/0990-satisfiability-of-equality-equations-medium.md","tags":[{"inline":true,"label":"Array","permalink":"/solutions/tags/array"},{"inline":true,"label":"String","permalink":"/solutions/tags/string"},{"inline":true,"label":"Union Find","permalink":"/solutions/tags/union-find"},{"inline":true,"label":"Graph","permalink":"/solutions/tags/graph"}],"version":"current","sidebarPosition":990,"frontMatter":{"description":"Author: @wkw | https://leetcode.com/problems/satisfiability-of-equality-equations/","tags":["Array","String","Union Find","Graph"]},"sidebar":"tutorialSidebar","previous":{"title":"0987 - Vertical Order Traversal of a Binary Tree (Hard)","permalink":"/solutions/0900-0999/vertical-order-traversal-of-a-binary-tree-hard"},"next":{"title":"0991 - Broken Calculator (Medium)","permalink":"/solutions/0900-0999/broken-calculator-medium"}}');var a=t(86070),o=t(32790);const r={description:"Author: @wkw | https://leetcode.com/problems/satisfiability-of-equality-equations/",tags:["Array","String","Union Find","Graph"]},s="0990 - Satisfiability of Equality Equations (Medium)",h={},l=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Union Find",id:"approach-1-union-find",level:2}];function u(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{SolutionAuthor:t,TabItem:i,Tabs:r}=n;return t||c("SolutionAuthor",!0),i||c("TabItem",!0),r||c("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"0990---satisfiability-of-equality-equations-medium",children:"0990 - Satisfiability of Equality Equations (Medium)"})}),"\n",(0,a.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://leetcode.com/problems/satisfiability-of-equality-equations/",children:"https://leetcode.com/problems/satisfiability-of-equality-equations/"})}),"\n",(0,a.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(n.p,{children:["You are given an array of strings ",(0,a.jsx)(n.code,{children:"equations"})," that represent relationships between variables where each string ",(0,a.jsx)(n.code,{children:"equations[i]"})," is of length ",(0,a.jsx)(n.code,{children:"4"})," and takes one of two different forms: ",(0,a.jsx)(n.code,{children:'"xi==yi"'})," or ",(0,a.jsx)(n.code,{children:'"xi!=yi"'}),".Here, ",(0,a.jsx)(n.code,{children:"xi"})," and ",(0,a.jsx)(n.code,{children:"yi"})," are lowercase letters (not necessarily different) that represent one-letter variable names."]}),"\n",(0,a.jsxs)(n.p,{children:["Return ",(0,a.jsx)(n.code,{children:"true"}),(0,a.jsx)(n.em,{children:"if it is possible to assign integers to variable names so as to satisfy all the given equations, or"}),(0,a.jsx)(n.code,{children:"false"}),(0,a.jsx)(n.em,{children:"otherwise"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'Input: equations = ["a==b","b!=a"]\nOutput: false\nExplanation: If we assign say, a = 1 and b = 1, then the first equation is satisfied, but not the second.\nThere is no way to assign the variables to satisfy both equations.\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'Input: equations = ["b==a","a==b"]\nOutput: true\nExplanation: We could assign a = 1 and b = 1 to satisfy both equations.\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"1 <= equations.length <= 500"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"equations[i].length == 4"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"equations[i][0]"})," is a lowercase letter."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"equations[i][1]"})," is either ",(0,a.jsx)(n.code,{children:"'='"})," or ",(0,a.jsx)(n.code,{children:"'!'"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"equations[i][2]"})," is ",(0,a.jsx)(n.code,{children:"'='"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"equations[i][3]"})," is a lowercase letter."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"approach-1-union-find",children:"Approach 1: Union Find"}),"\n",(0,a.jsxs)(n.p,{children:["Based on the property of ",(0,a.jsx)(n.code,{children:"=="}),". If you see ",(0,a.jsx)(n.code,{children:"=="})," in the equation, then we can put those numbers under the same group due to the following properties."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"if a == b, then b == a"}),"\n",(0,a.jsx)(n.li,{children:"if a == b, b == c, then a == c"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"In other word, x != y means x is not in the same group as y."}),"\n",(0,a.jsxs)(n.p,{children:["So we need a data structure to handle the connected relationship and use contradiction to find out the false cases. Then DSU comes to mind. If we can see them as a graph. For the case ",(0,a.jsx)(n.code,{children:"a == b, b == c"}),", we may first think of a -> b -> c which may lead us to think about a DFS solution. However, we can compress the path like a -> b and a -> c where a is the root. By doing so, we compress b and c into the same level so that we don't need to walk all the nodes between the root and the source to achieve O(logN) per call on average."]}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsxs)(i,{value:"cpp",label:"C++",children:[(0,a.jsx)(t,{name:"@wkw"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    int parent[26];\n    // find the root of node x.\n    // here we are not using parent[x],\n    // because it may not contain the updated value of the connected component that x belongs to.\n    // therefore, we walk the ancestors of the vertex until we reach the root.\n    int find(int x) {\n        // with path compression\n        if (parent[x] == x) return x;\n        return parent[x] = find(parent[x]);\n        // without path compression\n        // return parent[x] == x ? x : find(parent[x]);\n    }\n    // the idea is to put all characters in the same group if they are equal\n    // in order to do that, we can use Disjoint Set Union (dsu) aka Union Find\n    // for dsu tutorial, please check out https://wingkwong.github.io/leetcode-the-hard-way/tutorials/graph-theory/disjoint-set-union\n    bool equationsPossible(vector<string>& equations) {\n        int n = (int) equations.size();\n        // at the beginning, put each character index in its own group\n        // so we will have 26 groups with one character each\n        // i.e. 'a' in group 0, 'b' in group 1, ..., 'z' in group 25\n        for (int i = 0; i < 26; i++) parent[i] = i;\n        for (auto e : equations) {\n            // if two character is equal,\n            if (e[1] == '=') {\n                // e.g. a == b\n                // then we group them together\n                // how? we use `find` function to find out the parent group of the target character index\n                // then update parent. a & b would be in group 1 (i.e. a merged into the group where b belongs to)\n                // or you can also do `parent[find(e[3]- 'a')] = find(e[0] - 'a');` (i.e. b merged into the group where a belongs to)\n                parent[find(e[0]- 'a')] = find(e[3] - 'a');\n            }\n        }\n        // handle != case\n        for (auto e : equations) {\n            // if two characters are not equal\n            // then which means their parent must not be equal\n            if (e[1] == '!' && find(e[0] - 'a') == find(e[3] - 'a')) {\n                return false;\n            }\n        }\n        return true;\n    }\n};\n"})})]}),(0,a.jsxs)(i,{value:"py",label:"Python",children:[(0,a.jsx)(t,{name:"@wkw"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"class Solution:\n    # the idea is to put all characters in the same group if they are equal\n    # in order to do that, we can use Disjoint Set Union (dsu) aka Union Find\n    # for dsu tutorial, please check out https://wingkwong.github.io/leetcode-the-hard-way/tutorials/graph-theory/disjoint-set-union\n    def equationsPossible(self, equations: List[str]) -> bool:\n        # find the root of node x.\n        # here we are not using parent[x]\n        # because it may not contain the updated value of the connected component that x belongs to.\n        # Therefore, we walk the ancestors of the vertex until we reach the root.\n        def find(x):\n            # with path compress\n            if parent[x] == x:\n                return x\n            parent[x] = find(parent[x])\n            return parent[x]\n            # without path compression\n            #return x if parent[x] == x else find(parent[x])\n        # at the beginning, put each character in its own group\n        # so we will have 26 groups with one character each\n        # i.e. 'a' in group 0, 'b' in group 1, ..., 'z' in group 25\n        parent = [i for i in range(26)]\n        for e in equations:\n            if e[1] == '=':\n                # e.g. a == b\n                # then we group them together\n                # how? we use `find` function to find out the parent group of the target character index\n                # then update parent. a & b would be in group 1 (i.e. a merged into the group where b belongs to)\n                # or you can also do `parent[find(ord(e[3]) - ord('a'))] = find(ord(e[0]) - ord('a'))`\n                # i.e. b merged into the group where a belongs to\n                parent[find(ord(e[0]) - ord('a'))] = find(ord(e[3]) - ord('a'))\n        # handle != case\n        for e in equations:\n            # if two characters are not equal\n            # then which means their parent must not be equal\n            if e[1] == '!' and find(ord(e[0]) - ord('a')) == find(ord(e[3]) - ord('a')):\n                return False\n        return True\n"})})]}),(0,a.jsxs)(i,{value:"go",label:"Go",children:[(0,a.jsx)(t,{name:"@wkw"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"// find the root of node x.\n// here we are not using parent[x],\n// because it may not contain the updated value of the connected component that x belongs to.\n// therefore, we walk the ancestors of the vertex until we reach the root.\nfunc find(parent []int, x int) int{\n    if parent[x] == x {\n        return x\n    }\n    parent[x] = find(parent, parent[x])\n    return parent[x]\n    // without path compression\n    // if parent[x] == x {\n    //     return x\n    // }\n    // return find(parent, parent[x])\n}\n\n// the idea is to put all characters in the same group if they are equal\n// in order to do that, we can use Disjoint Set Union (dsu) aka Union Find\n// for dsu tutorial, please check out https://wingkwong.github.io/leetcode-the-hard-way/tutorials/graph-theory/disjoint-set-union\nfunc equationsPossible(equations []string) bool {\n    // at the beginning, put each character index in its own group\n    // so we will have 26 groups with one character each\n    // i.e. 'a' in group 0, 'b' in group 1, ..., 'z' in group 25\n    parent := make([]int, 26)\n    for i := range parent {\n        parent[i] = i\n    }\n    for _, e := range equations {\n        if e[1] == '=' {\n            // e.g. a == b\n            // then we group them together\n            // how? we use `find` function to find out the parent group of the target character index\n            // then update parent. a & b would be in group 1 (i.e. a merged into the group where b belongs to)\n            // or you can also do `find(parent, int(e[3] - 'a')) = find(parent, int(e[0] - 'a'))`\n            // i.e. b merged into the group where a belongs to\n            parent[find(parent, int(e[0] - 'a'))] = find(parent, int(e[3] - 'a'))\n        }\n    }\n    // handle != case\n    for _, e := range equations {\n        // if two characters are not equal\n        // then which means their parent must not be equal\n        if e[1] == '!' && find(parent, int(e[0] - 'a')) == find(parent, int(e[3] - 'a')) {\n            return false\n        }\n    }\n    return true\n}\n"})})]}),(0,a.jsxs)(i,{value:"java",label:"Java",children:[(0,a.jsx)(t,{name:"@wkw"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"class Solution {\n    int[] parent = new int[26];\n    public int find(int x) {\n        // with path compression\n        if (parent[x] == x) return x;\n        return parent[x] = find(parent[x]);\n        // without path compression\n        // return parent[x] == x ? x : find(parent[x]);\n    }\n    // the idea is to put all characters in the same group if they are equal\n    // in order to do that, we can use Disjoint Set Union (dsu) aka Union Find\n    // for dsu tutorial, please check out https://wingkwong.github.io/leetcode-the-hard-way/tutorials/graph-theory/disjoint-set-union\n    public boolean equationsPossible(String[] equations) {\n        int n = equations.length;\n        // at the beginning, put each character index in its own group\n        // so we will have 26 groups with one character each\n        // i.e. 'a' in group 0, 'b' in group 1, ..., 'z' in group 25\n        for (int i = 0; i < 26; i++) parent[i] = i;\n        for (String e : equations) {\n            // if two character is equal,\n            if (e.charAt(1) == '=') {\n                // e.g. a = b\n                // then we group them together\n                // how? we use `find` function to find out the parent group of the target character index\n                // then update parent. a & b would be in group 1 (i.e. a merged into the group where b belongs to)\n                // or you can also do `parent[find(e.charAt(3)- 'a')] = find(e.charAt(0) - 'a');` (i.e. b merged into the group where a belongs to)\n                parent[find(e.charAt(0)- 'a')] = find(e.charAt(3) - 'a');\n            }\n        }\n        // handle != case\n        for (String e : equations) {\n            // if two characters are not equal\n            // then which means their parent must not be equal\n            if (e.charAt(1) == '!' && find(e.charAt(0) - 'a') == find(e.charAt(3) - 'a')) {\n                return false;\n            }\n        }\n        return true;\n    }\n}\n"})})]})]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32790:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(30758);const a={},o=i.createContext(a);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);