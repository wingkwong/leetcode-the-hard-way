"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[92045],{74061:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=r(85893),t=r(11151);const s={description:"Author: @wingkwong, @vigneshshiv, @radojicic23, @jit | https://leetcode.com/problems/valid-anagram/",tags:["Hash Table","String","Sorting"]},i="0242 - Valid Anagram (Easy)",o={id:"0200-0299/valid-anagram-easy",title:"0242 - Valid Anagram (Easy)",description:"Author: @wingkwong, @vigneshshiv, @radojicic23, @jit | https://leetcode.com/problems/valid-anagram/",source:"@site/solutions/0200-0299/0242-valid-anagram-easy.md",sourceDirName:"0200-0299",slug:"/0200-0299/valid-anagram-easy",permalink:"/solutions/0200-0299/valid-anagram-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0200-0299/0242-valid-anagram-easy.md",tags:[{inline:!0,label:"Hash Table",permalink:"/solutions/tags/hash-table"},{inline:!0,label:"String",permalink:"/solutions/tags/string"},{inline:!0,label:"Sorting",permalink:"/solutions/tags/sorting"}],version:"current",sidebarPosition:242,frontMatter:{description:"Author: @wingkwong, @vigneshshiv, @radojicic23, @jit | https://leetcode.com/problems/valid-anagram/",tags:["Hash Table","String","Sorting"]},sidebar:"tutorialSidebar",previous:{title:"0239 - Sliding Window Maximum (Hard)",permalink:"/solutions/0200-0299/sliding-maximum-window-hard"},next:{title:"0246 - Strobogrammatic Number (Easy)",permalink:"/solutions/0200-0299/strobogrammatic-number-easy"}},l={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sort",id:"approach-1-sort",level:2},{value:"Approach 2: Counting",id:"approach-2-counting",level:2}];function d(n){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...n.components},{SolutionAuthor:r,TabItem:s,Tabs:i}=e;return r||u("SolutionAuthor",!0),s||u("TabItem",!0),i||u("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"0242---valid-anagram-easy",children:"0242 - Valid Anagram (Easy)"}),"\n",(0,a.jsx)(e.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.a,{href:"https://leetcode.com/problems/valid-anagram/",children:"https://leetcode.com/problems/valid-anagram/"})}),"\n",(0,a.jsx)(e.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,a.jsxs)(e.p,{children:["Given two strings ",(0,a.jsx)(e.code,{children:"s"})," and ",(0,a.jsx)(e.code,{children:"t"}),", return ",(0,a.jsx)(e.code,{children:"true"})," ",(0,a.jsx)(e.em,{children:"if"})," ",(0,a.jsx)(e.code,{children:"t"})," ",(0,a.jsx)(e.em,{children:"is an anagram of"})," ",(0,a.jsx)(e.code,{children:"s"}),(0,a.jsx)(e.em,{children:", and"})," ",(0,a.jsx)(e.code,{children:"false"})," ",(0,a.jsx)(e.em,{children:"otherwise"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["An ",(0,a.jsx)(e.strong,{children:"Anagram"})," is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example 1:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'Input: s = "anagram", t = "nagaram"\nOutput: true\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example 2:"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'Input: s = "rat", t = "car"\nOutput: false\n'})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Constraints:"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:"1 <= s.length, t.length <= 5 * 10^4"})}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"s"})," and ",(0,a.jsx)(e.code,{children:"t"})," consist of lowercase English letters."]}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Follow up:"})," What if the inputs contain Unicode characters? How would you adapt your solution to such a case?"]}),"\n",(0,a.jsx)(e.h2,{id:"approach-1-sort",children:"Approach 1: Sort"}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsxs)(s,{value:"cpp",label:"C++",children:[(0,a.jsx)(r,{name:"@wingkwong"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        // s and t are anagrams\n        // if they are same after being sorted\n        sort(begin(s), end(s));\n        sort(begin(t), end(t));\n        return s == t;\n    }\n};\n"})})]}),(0,a.jsxs)(s,{value:"java",label:"Java",children:[(0,a.jsx)(r,{name:"@vigneshshiv"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"class Solution {\n    public boolean isAnagram(String s, String t) {\n        char[] s_chars = s.toCharArray();\n        char[] t_chars = t.toCharArray();\n        // Sorting with char array\n        Arrays.sort(s_chars);\n        Arrays.sort(t_chars);\n        // Convert to string\n        s = new String(s_chars);\n        t = new String(t_chars);\n        return s.equals(t);\n    }\n}\n"})})]}),(0,a.jsxs)(s,{value:"python",label:"Python",children:[(0,a.jsx)(r,{name:"@radojicic23"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        # if they are same after sorting they are anagrams\n        return sorted(t) == sorted(s)\n"})})]}),(0,a.jsxs)(s,{value:"javascript",label:"JavaScript",children:[(0,a.jsx)(r,{name:"@radojicic23"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"/**\n * @param {string} s\n * @param {string} t\n * @return {boolean}\n */\nvar isAnagram = function(s, t) {\n    // sort strings \n    const sorted_s = s.split('').sort().join('');\n    const sorted_t = t.split('').sort().join('');\n    // if they are same after sorting they are anagrams\n    return sorted_s == sorted_t;\n};\n"})})]})]}),"\n",(0,a.jsx)(e.h2,{id:"approach-2-counting",children:"Approach 2: Counting"}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsxs)(s,{value:"cpp",label:"C++",children:[(0,a.jsx)(r,{name:"@wingkwong"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool isAnagram(string s, string t) {\n        // if s and t are anagram, \n        // then the frequency of each character would be same\n        int cnt[26] = {0};\n        for (auto x : s) cnt[x - 'a']++;\n        for (auto x : t) cnt[x - 'a']--;\n        for (int i = 0; i < 26; i++) {\n            if (cnt[i]) {\n                return false;\n            }\n        }\n        return true;\n    }\n};\n"})})]}),(0,a.jsxs)(s,{value:"java",label:"Java",children:[(0,a.jsx)(r,{name:"@vigneshshiv"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"class Solution {\n    public boolean isAnagram(String s, String t) {\n        int[] chars = new int[26];\n        for (char c : s.toCharArray()) {\n            chars[c - 'a']++;\n        }\n        for (char c : t.toCharArray()) {\n            chars[c - 'a']--;\n            // If any char is occurred more than \"s string\" char, then immediately return false. \n            if (chars[c - 'a'] < 0) return false;\n        }\n        for (int num : chars) {\n            if (num != 0) return false;\n        }\n        return true;\n    }\n}\n"})})]}),(0,a.jsxs)(s,{value:"go",label:"Go",children:[(0,a.jsx)(r,{name:"@wingkwong"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:"// if s and t are anagram, \n// then the frequency of each character would be same\nfunc isAnagram(s string, t string) bool {\n    cnt := [26]int{}\n\tfor _, x := range s { cnt[x -'a']++ }\n    for _, x := range t { cnt[x -'a']-- }\n\tfor _, c := range cnt {\n\t\tif c != 0 {\n\t\t\treturn false\n\t\t}\n\t}\n\treturn true\n}\n"})})]}),(0,a.jsxs)(s,{value:"rs",label:"Rust",children:[(0,a.jsx)(r,{name:"@jit"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-rs",children:"impl Solution {\n    // Frequency counting:\n    pub fn is_anagram(s: String, t: String) -> bool {\n        let mut cnts = [0; u8::MAX as usize];\n        for a in s.bytes() { cnts[a as usize] += 1; }\n        for b in t.bytes() { cnts[b as usize] -= 1; }\n        cnts.iter().all(|&ct| ct == 0)\n    }\n}\n"})})]})]})]})}function h(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}function u(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(n,e,r)=>{r.d(e,{Z:()=>o,a:()=>i});var a=r(67294);const t={},s=a.createContext(t);function i(n){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);