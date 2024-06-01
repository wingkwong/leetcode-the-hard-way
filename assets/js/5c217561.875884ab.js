"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[22710],{36269:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(85893),s=t(11151);const o={description:"Author: @wingkwong | https://leetcode.com/problems/reverse-vowels-of-a-string/",tags:["Two Pointers","String"]},l="0345 - Reverse Vowels of a String (Easy)",i={id:"0300-0399/reverse-vowels-of-a-string-easy",title:"0345 - Reverse Vowels of a String (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/reverse-vowels-of-a-string/",source:"@site/solutions/0300-0399/0345-reverse-vowels-of-a-string-easy.md",sourceDirName:"0300-0399",slug:"/0300-0399/reverse-vowels-of-a-string-easy",permalink:"/solutions/0300-0399/reverse-vowels-of-a-string-easy",draft:!1,unlisted:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0300-0399/0345-reverse-vowels-of-a-string-easy.md",tags:[{inline:!0,label:"Two Pointers",permalink:"/solutions/tags/two-pointers"},{inline:!0,label:"String",permalink:"/solutions/tags/string"}],version:"current",sidebarPosition:345,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/reverse-vowels-of-a-string/",tags:["Two Pointers","String"]},sidebar:"tutorialSidebar",previous:{title:"0344 - Reverse String (Easy)",permalink:"/solutions/0300-0399/reverse-string-easy"},next:{title:"0346 - Moving Average from Data Stream (Easy)",permalink:"/solutions/0300-0399/moving-average-from-data-stream-easy"}},a={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Two Pointers",id:"approach-1-two-pointers",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{SolutionAuthor:t,TabItem:o,Tabs:l}=n;return t||w("SolutionAuthor",!0),o||w("TabItem",!0),l||w("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"0345---reverse-vowels-of-a-string-easy",children:"0345 - Reverse Vowels of a String (Easy)"}),"\n",(0,r.jsx)(n.h2,{id:"problem-link",children:"Problem Link"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/reverse-vowels-of-a-string/",children:"https://leetcode.com/problems/reverse-vowels-of-a-string/"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-statement",children:"Problem Statement"}),"\n",(0,r.jsxs)(n.p,{children:["Given a string ",(0,r.jsx)(n.code,{children:"s"}),", reverse only all the vowels in the string and return it."]}),"\n",(0,r.jsxs)(n.p,{children:["The vowels are ",(0,r.jsx)(n.code,{children:"'a'"}),", ",(0,r.jsx)(n.code,{children:"'e'"}),", ",(0,r.jsx)(n.code,{children:"'i'"}),", ",(0,r.jsx)(n.code,{children:"'o'"}),", and ",(0,r.jsx)(n.code,{children:"'u'"}),", and they can appear in both lower and upper cases, more than once."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'Input: s = "hello"\nOutput: "holle"\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'Input: s = "leetcode"\nOutput: "leotcede"\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"1 <= s.length <= 3 * 105"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"s"})," consist of ",(0,r.jsx)(n.strong,{children:"printable ASCII"})," characters."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"approach-1-two-pointers",children:"Approach 1: Two Pointers"}),"\n",(0,r.jsxs)(l,{children:[(0,r.jsxs)(o,{value:"cpp",label:"C++",children:[(0,r.jsx)(t,{name:"@wingkwong"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"// Time Complexity: O(N)\n// Space Complexity: O(1)\nclass Solution {\npublic:\n    // fun fact: \n    // `Y` and `y` can be a vowel as well. \n    // glad the problem statement defines it well\n    bool isVowel(char c) {\n        // alternatively, we can just check \n        // return c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U' || \n        //        c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'\n        c = tolower(c);\n        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';\n    }\n    \n    string reverseVowels(string s) {\n        // `l` is the left pointer to track the vowel character\n        // `r` is the right pointer to track the vowel character\n        int n = s.size(), l = 0, r = n - 1;\n        while (l < r) {\n            // find the index of the first vowel in the given range\n            // alternatively, we can use STL library `find_first_of` in c++\n            while (l < r && !isVowel(s[l])) l++;\n            // find the index of last vowel in the given range\n            // alternatively, we can use STL library `find_last_of` in c++\n            while (r > l && !isVowel(s[r])) r--;\n            // we can swap two vowels only when l < r\n            swap(s[l], s[r]);\n            // since we've processed the character s[l],\n            // we move the left pointer to the right\n            l += 1;\n            // since we've processed the character s[r],\n            // we move the right pointer to the left\n            r -= 1;\n        }\n        return s;\n    }\n};\n"})})]}),(0,r.jsxs)(o,{value:"py",label:"Python",children:[(0,r.jsx)(t,{name:"@wingkwong"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'# Time Complexity: O(N)\n# Space Complexity: O(N)\nclass Solution:\n    # fun fact: \n    # `Y` and `y` can be a vowel as well. \n    # glad the problem statement defines it well\n    def reverseVowels(self, s: str) -> str:\n        n = len(s)\n        l, r = 0, n - 1\n        s = list(s)\n        vowels = list("aeiouAEIOU")\n        # `l` is the left pointer to track the vowel character\n        # `r` is the right pointer to track the vowel character\n        while l < r:\n            # find the index of the first vowel in the given range\n            while l < r and s[l] not in vowels:\n                l += 1\n            # find the index of last vowel in the given range\n            while r > l and s[r] not in vowels:\n                r -= 1\n            # swap s[l] and s[r]\n            s[l], s[r] = s[r], s[l]\n            # since we\'ve processed the character s[l],\n            # we move the left pointer to the right\n            l += 1\n            # since we\'ve processed the character s[r],\n            # we move the right pointer to the left\n            r -= 1\n            \n        return "".join(s)\n'})})]}),(0,r.jsxs)(o,{value:"java",label:"Java",children:[(0,r.jsx)(t,{name:"@wingkwong"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// Time Complexity: O(N)\n// Space Complexity: O(N) due to s.toCharArray()\nclass Solution {\n    // fun fact: \n    // `Y` and `y` can be a vowel as well. \n    // glad the problem statement defines it well\n    boolean isVowel(char c) {\n        // alternatively, we can just check \n        // return c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U' || \n        //        c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'\n        c = Character.toLowerCase(c);\n        return switch (c) {\n            case 'a', 'e', 'i', 'o', 'u' -> true;\n            default -> false;\n        };\n    }\n    \n    public String reverseVowels(String s) {\n        // `l` is the left pointer to track the vowel character\n        // `r` is the right pointer to track the vowel character\n        int n = s.length(), l = 0, r = n - 1;\n        char[] ca = s.toCharArray();\n        while (l < r) {\n            // find the index of the first vowel in the given range\n            while (l < r && !isVowel(ca[l])) l++;\n            // find the index of last vowel in the given range\n            while (r > l && !isVowel(ca[r])) r--;\n            // swap ca[l] and ca[r]\n            {\n                char tmp = ca[l];\n                ca[l] = ca[r];\n                ca[r] = tmp;\n            }\n            // since we've processed the character s[l],\n            // we move the left pointer to the right\n            l += 1;\n            // since we've processed the character s[r],\n            // we move the right pointer to the left\n            r -= 1;\n        }\n        return new String(ca);\n    }\n}\n"})})]}),(0,r.jsxs)(o,{value:"go",label:"Go",children:[(0,r.jsx)(t,{name:"@wingkwong"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"// Time Complexity: O(N)\n// Space Complexity: O(N)\n\n// fun fact: \n// `Y` and `y` can be a vowel as well sometimes. \n// glad the problem statement defines it well\nfunc isVowel(c rune) bool {\n    // alternatively, we can just check \n    // return c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U' || \n    //        c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'\n    c = unicode.ToLower(c)\n\treturn c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'\n}\n\nfunc reverseVowels(s string) string {\n    ss := []rune(s)\n    n := len(ss)\n    l, r := 0, n - 1\n    for l < r {\n        // find the index of the first vowel in the given range\n        for l < r && !isVowel(ss[l]) {\n            l += 1\n        }\n        // find the index of last vowel in the given range\n        for r > l && !isVowel(ss[r]) {\n            r -= 1\n        }\n        // swap ss[l] and ss[r]\n        ss[l], ss[r] = ss[r], ss[l]\n        // since we've processed the character ss[l],\n        // we move the left pointer to the right\n        l += 1\n        // since we've processed the character ss[r],\n        // we move the right pointer to the left\n        r -= 1\n    }\n    return string(ss)\n}\n"})})]})]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function w(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var r=t(67294);const s={},o=r.createContext(s);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);