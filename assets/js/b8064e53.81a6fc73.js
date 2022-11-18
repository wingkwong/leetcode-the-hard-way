"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[21488],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),k=r,d=m["".concat(l,".").concat(k)]||m[k]||u[k]||a;return t?o.createElement(d,s(s({ref:n},c),{},{components:t})):o.createElement(d,s({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},89820:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),s=["components"],i={description:"Author: @wingkwong, @iraycd | https://leetcode.com/problems/bag-of-tokens/",tags:["Array","Two Pointers","Greedy","Sorting"]},l="0948 - Bag of Tokens (Medium)",p={unversionedId:"0900-0999/bag-of-tokens-medium",id:"0900-0999/bag-of-tokens-medium",title:"0948 - Bag of Tokens (Medium)",description:"Author: @wingkwong, @iraycd | https://leetcode.com/problems/bag-of-tokens/",source:"@site/solutions/0900-0999/0948-bag-of-tokens-medium.md",sourceDirName:"0900-0999",slug:"/0900-0999/bag-of-tokens-medium",permalink:"/leetcode-the-hard-way/solutions/0900-0999/bag-of-tokens-medium",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0900-0999/0948-bag-of-tokens-medium.md",tags:[{label:"Array",permalink:"/leetcode-the-hard-way/solutions/tags/array"},{label:"Two Pointers",permalink:"/leetcode-the-hard-way/solutions/tags/two-pointers"},{label:"Greedy",permalink:"/leetcode-the-hard-way/solutions/tags/greedy"},{label:"Sorting",permalink:"/leetcode-the-hard-way/solutions/tags/sorting"}],version:"current",sidebarPosition:948,frontMatter:{description:"Author: @wingkwong, @iraycd | https://leetcode.com/problems/bag-of-tokens/",tags:["Array","Two Pointers","Greedy","Sorting"]},sidebar:"tutorialSidebar",previous:{title:"0947 - Most Stones Removed with Same Row or Column (Medium)",permalink:"/leetcode-the-hard-way/solutions/0900-0999/most-stones-removed-with-same-row-or-column-medium"},next:{title:"0952 - Largest Component Size by Common Factor (Hard)",permalink:"/leetcode-the-hard-way/solutions/0900-0999/largest-component-size-by-common-factor-hard"}},c={},u=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Greedy + Two Pointers",id:"approach-1-greedy--two-pointers",level:2}],m=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)}},k=m("Tabs"),d=m("TabItem"),h=m("SolutionAuthor"),g={toc:u};function f(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0948---bag-of-tokens-medium"},"0948 - Bag of Tokens (Medium)"),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"You have an initial ",(0,a.kt)("strong",{parentName:"p"},"power")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"power"),", an initial ",(0,a.kt)("strong",{parentName:"p"},"score")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),", and a bag of ",(0,a.kt)("inlineCode",{parentName:"p"},"tokens")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"tokens[i]")," is the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ith")," token (0-indexed)."),(0,a.kt)("p",null,"Your goal is to maximize your total ",(0,a.kt)("strong",{parentName:"p"},"score")," by potentially playing each token in one of two ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If your current ",(0,a.kt)("strong",{parentName:"li"},"power")," is at least ",(0,a.kt)("inlineCode",{parentName:"li"},"tokens[i]"),", you may play the ",(0,a.kt)("inlineCode",{parentName:"li"},"ith")," token face up, losing ",(0,a.kt)("inlineCode",{parentName:"li"},"tokens[i]")," ",(0,a.kt)("strong",{parentName:"li"},"power")," and gaining ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," ",(0,a.kt)("strong",{parentName:"li"},"score"),"."),(0,a.kt)("li",{parentName:"ul"},"If your current ",(0,a.kt)("strong",{parentName:"li"},"score")," is at least ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),", you may play the ",(0,a.kt)("inlineCode",{parentName:"li"},"ith")," token face down, gaining ",(0,a.kt)("inlineCode",{parentName:"li"},"tokens[i]")," ",(0,a.kt)("strong",{parentName:"li"},"power")," and losing ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," ",(0,a.kt)("strong",{parentName:"li"},"score"),".")),(0,a.kt)("p",null,"Each token may be played ",(0,a.kt)("strong",{parentName:"p"},"at most")," once and ",(0,a.kt)("strong",{parentName:"p"},"in any order"),". You do ",(0,a.kt)("strong",{parentName:"p"},"not")," have to play all the tokens."),(0,a.kt)("p",null,"Return ",(0,a.kt)("em",{parentName:"p"},"the largest possible ",(0,a.kt)("strong",{parentName:"em"},"score")," you can achieve after playing any number of tokens"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: tokens = [100], power = 50\nOutput: 0\nExplanation: Playing the only token in the bag is impossible because you either have too little power or too little score.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: tokens = [100,200], power = 150\nOutput: 1\nExplanation: Play the 0th token (100) face up, your power becomes 50 and score becomes 1.\nThere is no need to play the 1st token since you cannot play it face up to add to your score.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: tokens = [100,200,300,400], power = 200\nOutput: 2\nExplanation: Play the tokens in this order to get a score of 2:\n1. Play the 0th token (100) face up, your power becomes 100 and score becomes 1.\n2. Play the 3rd token (400) face down, your power becomes 500 and score becomes 0.\n3. Play the 1st token (200) face up, your power becomes 300 and score becomes 1.\n4. Play the 2nd token (300) face up, your power becomes 0 and score becomes 2.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= tokens.length <= 1000")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0 <= tokens[i],\xa0power < 10^4"))),(0,a.kt)("h2",{id:"approach-1-greedy--two-pointers"},"Approach 1: Greedy + Two Pointers"),(0,a.kt)(k,{mdxType:"Tabs"},(0,a.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// Time Complexity: O(NlogN) (O(NlogN) for sorting & O(N) for two pointers.)\n// Space Complexity: O(logN)\n// where N is the number of tokens\nclass Solution {\npublic:\n    int bagOfTokensScore(vector<int>& tokens, int power) {\n        // play i-th token face up -> lose tokens[i] power -> choose the smallest one\n        // play i-th token face down -> gain tokens[i] power -> choose the largest one\n        // hence, sort tokens first\n        sort(tokens.begin(), tokens.end());\n        // two pointes - l for tracking face up & r for tracking face down\n        int l = 0, r = tokens.size() - 1;\n        int cur_score = 0, mx_score = 0;\n        while (l <= r) {\n            // there are 3 cases\n            if (tokens[l] <= power) {\n                // case 1. play l-th tokens face up if its power <= the current power\n                // ---\n                // losing tokens[l] power\n                power -= tokens[l];\n                // and gaining 1 score\n                cur_score += 1;\n                // cur_score can be mx_score potentially\n                mx_score = max(mx_score, cur_score);\n                // move the pointer to the right\n                l += 1;\n            } else if (cur_score >= 1) {\n                // case 2. play r-th tokens face down if the current score is at least 1\n                // ---\n                // gaining tokens[r] power\n                power += tokens[r];\n                // and losing 1 score\n                cur_score -= 1;\n                // move the pointer to the left\n                r -= 1;\n            } else {\n                // case 3. impossible to play\n                // ---\n                // either you don't enough power or enough score\n                break;\n            }\n        }\n        return mx_score;\n    }\n};\n"))),(0,a.kt)(d,{value:"py",label:"Python",mdxType:"TabItem"},(0,a.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# Time Complexity: O(NlogN) (O(NlogN) for sorting & O(N) for two pointers.)\n# Space Complexity: O(N) - python's inbuilt sort uses TimSort\n# where N is the number of tokens\nclass Solution:\n    def bagOfTokensScore(self, tokens: List[int], power: int) -> int:\n        # play i-th token face up -> lose tokens[i] power -> choose the smallest one\n        # play i-th token face down -> gain tokens[i] power -> choose the largest one\n        # hence, sort tokens first\n        tokens.sort()\n        # two pointes - l for tracking face up & r for tracking face down\n        l, r = 0, len(tokens) - 1\n        cur_score = mx_score = 0\n        while l <= r:\n            # there are 3 cases\n            if tokens[l] <= power:\n                # case 1. play l-th tokens face up if its power <= the current power\n                # ---\n                # losing tokens[l] power\n                power -= tokens[l]\n                # and gaining 1 score\n                cur_score += 1\n                # cur_score can be mx_score potentially\n                mx_score = max(mx_score, cur_score)\n                # move the pointer to the right\n                l += 1\n            elif cur_score >= 1:\n                # case 2. play r-th tokens face down if the current score is at least 1\n                # ---\n                # gaining tokens[r] power\n                power += tokens[r]\n                # and losing 1 score\n                cur_score -= 1\n                # move the pointer to the left\n                r -= 1\n            else:\n                # case 3. impossible to play\n                # ---\n                # either you don't enough power or enough score\n                break\n        return mx_score\n"))),(0,a.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(h,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Time Complexity: O(NlogN) (O(NlogN) for sorting & O(N) for two pointers.)\n// Space Complexity: O(logN)\n// where N is the number of tokens\nclass Solution {\n    public int bagOfTokensScore(int[] tokens, int power) {\n        // play i-th token face up -> lose tokens[i] power -> choose the smallest one\n        // play i-th token face down -> gain tokens[i] power -> choose the largest one\n        // hence, sort tokens first\n        Arrays.sort(tokens);\n        // two pointes - l for tracking face up & r for tracking face down\n        int l = 0, r = tokens.length - 1;\n        int cur_score = 0, mx_score = 0;\n        while (l <= r) {\n            // there are 3 cases\n            if (tokens[l] <= power) {\n                // case 1. play l-th tokens face up if its power <= the current power\n                // ---\n                // losing tokens[l] power\n                power -= tokens[l];\n                // and gaining 1 score\n                cur_score += 1;\n                // cur_score can be mx_score potentially\n                mx_score = Math.max(mx_score, cur_score);\n                // move the pointer to the right\n                l += 1;\n            } else if (cur_score >= 1) {\n                // case 2. play r-th tokens face down if the current score is at least 1\n                // ---\n                // gaining tokens[r] power\n                power += tokens[r];\n                // and losing 1 score\n                cur_score -= 1;\n                // move the pointer to the left\n                r -= 1;\n            } else {\n                // case 3. impossible to play\n                // ---\n                // either you don't enough power or enough score\n                break;\n            }\n        }\n        return mx_score;\n    }\n}\n"))),(0,a.kt)(d,{value:"go",label:"Go",mdxType:"TabItem"},(0,a.kt)(h,{name:"@iraycd",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"// Idea\n// ------------------\n// Sorting:\n// Why sorting?\n// We need max power when we consume score\n// Both lowest power or greatest power gives us same score of 1\n// But 1 score can maximize power, so we have to consume the power in order of descending from score consumed.\n// ------------------\n// 2 Pointer Method:\n// left uses power, right uses score\n// Since there is a chance of consuming score even after maxScore is achieved we record max score.\n// we still append left if it doesn't match the both power and score cases.\n\nfunc bagOfTokensScore(tokens []int, power int) int {\n    sort.Ints(tokens)\n    score := 0\n    left := 0\n    maxScore := 0\n    right := len(tokens) - 1\n    for left <= right { // Left can be right in the case of [100,200] with power 150\n        if power >= tokens[left] {\n            power = power - tokens[left]\n            score++\n            left++\n        } else if score >= 1 {\n            power = power + tokens[right]\n            right--\n            score--\n        } else { // Needed in the case of [100] with power 50, else it will result in infinite loop\n            break\n        }\n        maxScore = max(maxScore, score)\n    }\n    return maxScore\n}\n\nfunc max(a, b int) int {\n    if a > b {\n        return a\n    }\n    return b\n}\n")))))}f.isMDXComponent=!0}}]);