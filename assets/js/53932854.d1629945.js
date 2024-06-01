"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[54393],{30671:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=s(85893),a=s(11151);const r={description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/",tags:["String","Stack"]},i="1047 - Remove All Adjacent Duplicates In String (Easy)",l={id:"1000-1099/remove-all-adjacent-duplicates-in-string-easy",title:"1047 - Remove All Adjacent Duplicates In String (Easy)",description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/",source:"@site/solutions/1000-1099/1047-remove-all-adjacent-duplicates-in-string-easy.md",sourceDirName:"1000-1099",slug:"/1000-1099/remove-all-adjacent-duplicates-in-string-easy",permalink:"/solutions/1000-1099/remove-all-adjacent-duplicates-in-string-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/1000-1099/1047-remove-all-adjacent-duplicates-in-string-easy.md",tags:[{inline:!0,label:"String",permalink:"/solutions/tags/string"},{inline:!0,label:"Stack",permalink:"/solutions/tags/stack"}],version:"current",sidebarPosition:1047,frontMatter:{description:"Author: @wingkwong, @radojicic23 | https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/",tags:["String","Stack"]},sidebar:"tutorialSidebar",previous:{title:"1046 - Last Stone Weight (Easy)",permalink:"/solutions/1000-1099/last-stone-weight-easy"},next:{title:"1061 - Lexicographically Smallest Equivalent String (Medium)",permalink:"/solutions/1000-1099/lexicographically-smallest-equivalent-string-medium"}},c={},o=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Stack",id:"approach-1-stack",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{SolutionAuthor:s,TabItem:r,Tabs:i}=n;return s||u("SolutionAuthor",!0),r||u("TabItem",!0),i||u("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"1047---remove-all-adjacent-duplicates-in-string-easy",children:"1047 - Remove All Adjacent Duplicates In String (Easy)"}),"\n",(0,t.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/",children:"https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/"})}),"\n",(0,t.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,t.jsxs)(n.p,{children:["You are given a string ",(0,t.jsx)(n.code,{children:"s"})," consisting of lowercase English letters. A ",(0,t.jsx)(n.strong,{children:"duplicate removal"})," consists of choosing two ",(0,t.jsx)(n.strong,{children:"adjacent"})," and ",(0,t.jsx)(n.strong,{children:"equal"})," letters and removing them."]}),"\n",(0,t.jsxs)(n.p,{children:["We repeatedly make ",(0,t.jsx)(n.strong,{children:"duplicate removals"})," on ",(0,t.jsx)(n.code,{children:"s"})," until we no longer can."]}),"\n",(0,t.jsxs)(n.p,{children:["Return ",(0,t.jsx)(n.em,{children:"the final string after all such duplicate removals have been made"}),". It can be proven that the answer is ",(0,t.jsx)(n.strong,{children:"unique"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Input: s = "abbaca"\nOutput: "ca"\nExplanation: \nFor example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Input: s = "azxxzy"\nOutput: "ay"\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"1 <= s.length <= 105"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"s"})," consists of lowercase English letters."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"approach-1-stack",children:"Approach 1: Stack"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsxs)(r,{value:"cpp",label:"C++",children:[(0,t.jsx)(s,{name:"@wingkwong"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    string removeDuplicates(string s) {\n        // use string here instead of Stack<char>\n        // so that we don't need to build the final string again\n        string ans;\n        for (auto c : s) {\n            // if the current character is same as the last one in `ans`\n            // then we cannot push it to `ans`\n            // we remove the one in `ans`\n            if (ans.size() && ans.back() == c) ans.pop_back();\n            // otherwise, add the current character to `ans`\n            else ans.push_back(c);\n        }\n        return ans;\n    }\n};\n"})})]}),(0,t.jsxs)(r,{value:"java",label:"Java",children:[(0,t.jsx)(s,{name:"@wingkwong"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"class Solution {\n    public String removeDuplicates(String s) {\n        StringBuilder sb = new StringBuilder();\n        for (char c : s.toCharArray()) {\n            // if the current character is same as the last one in `sb`\n            // then we cannot push it to `sb`\n            // we remove the one in `sb`\n            if (sb.length() > 0 && sb.charAt(sb.length() - 1) == c) sb.deleteCharAt(sb.length() - 1);\n            // otherwise, add the current character to `sb`\n            else sb.append(c);\n        }\n        return sb.toString();\n    }\n}\n"})})]}),(0,t.jsxs)(r,{value:"go",label:"Go",children:[(0,t.jsx)(s,{name:"@wingkwong"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func removeDuplicates(s string) string {\n    ans := make([]rune, 0, len(s))\n    for _, c := range s {\n        if len(ans) > 0 && ans[len(ans) - 1] == c {\n            // if the current character is same as the last one in `ans`\n            // then we cannot push it to `ans`\n            // we remove the one in `ans`\n            ans = ans[:len(ans) - 1]\n        } else {\n            // otherwise, add the current character to `ans`\n            ans = append(ans, c)\n        }\n    }\n    return string(ans)\n}\n"})})]}),(0,t.jsxs)(r,{value:"py",label:"Python",children:[(0,t.jsx)(s,{name:"@wingkwong"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"class Solution:\n    def removeDuplicates(self, s: str) -> str:\n        ans = []\n        for c in s:\n            # if the current character is same as the last one in `ans`\n            # then we cannot push it to `ans`\n            # we remove the one in `ans`\n            if ans and ans[-1] == c: ans.pop()\n            # otherwise, add the current character to `ans`\n            else: ans.append(c)\n        return ''.join(ans)\n"})})]}),(0,t.jsxs)(r,{value:"kt",label:"Kotlin",children:[(0,t.jsx)(s,{name:"@wingkwong"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kt",children:"class Solution {\n    fun removeDuplicates(s: String): String {\n        val sb = StringBuilder()\n        for (c in s) {\n            if (sb.length > 0 && sb.last() == c) {\n                // if the current character is same as the last one in `sb`\n                // then we cannot push it to `sb`\n                // we remove the one in `sb`\n                sb.deleteCharAt(sb.length - 1)\n            } else {\n                // otherwise, add the current character to `sb`\n                sb.append(c)\n            }\n        }\n        return sb.toString()\n    }\n}\n"})})]}),(0,t.jsxs)(r,{value:"rs",label:"Rust",children:[(0,t.jsx)(s,{name:"@wingkwong"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rs",children:"impl Solution {\n    pub fn remove_duplicates(s: String) -> String {\n        let mut ans = String::new();\n        for c in s.chars() {\n            if (ans.len() > 0 && ans.chars().last() == Some(c)) {\n                // if the current character is same as the last one in `ans`\n                // then we cannot push it to `ans`\n                // we remove the one in `ans`\n                ans.pop();\n            } else {\n                // otherwise, add the current character to `ans`\n                ans.push(c);\n            }\n        }\n        return ans;\n    }\n}\n"})})]}),(0,t.jsxs)(r,{value:"js",label:"JavaScript",children:[(0,t.jsx)(s,{name:"@radojicic23"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'/**\n * @param {string} s\n * @return {string}\n */\nvar removeDuplicates = function(s) {\n    let stack = [];\n    for (let c = 0; c < s.length; c++) {\n        if (stack.length > 0 && stack[stack.length - 1] == s[c]) {\n            stack.pop();\n        } else {\n            stack.push(s[c]);\n        }\n    }\n    return stack.join("");\n};\n'})})]})]})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>i});var t=s(67294);const a={},r=t.createContext(a);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);