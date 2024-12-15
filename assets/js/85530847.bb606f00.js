"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[88137],{68381:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>n,suggestedProblems:()=>m,toc:()=>u});const n=JSON.parse('{"id":"math/number-theory/sieve-of-eratosthenes","title":"Sieve of Eratosthenes","description":"Sieve of Eratosthenes is a way of finding all prime numbers up to N (inclusive).","source":"@site/tutorials/math/number-theory/sieve-of-eratosthenes.md","sourceDirName":"math/number-theory","slug":"/math/number-theory/sieve-of-eratosthenes","permalink":"/tutorials/math/number-theory/sieve-of-eratosthenes","draft":false,"unlisted":false,"editUrl":"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/tutorials/math/number-theory/sieve-of-eratosthenes.md","tags":[],"version":"current","frontMatter":{"title":"Sieve of Eratosthenes","description":"Sieve of Eratosthenes is a way of finding all prime numbers up to N (inclusive).","hide_table_of_contents":true,"keywords":["leetcode","tutorial","sieve of eratosthenes","algorithm"]},"sidebar":"tutorialSidebar","previous":{"title":"Binary Exponentiation","permalink":"/tutorials/math/number-theory/binary-exponentiation"},"next":{"title":"Bit Manipulation","permalink":"/tutorials/math/bit-manipulation"}}');var o=i(74848),r=i(28453);const s={title:"Sieve of Eratosthenes",description:"Sieve of Eratosthenes is a way of finding all prime numbers up to N (inclusive).",hide_table_of_contents:!0,keywords:["leetcode","tutorial","sieve of eratosthenes","algorithm"]},a=void 0,l={},m=[{problemName:"0204 - Count Primes",difficulty:"Medium",leetCodeLink:"https://leetcode.com/problems/count-primes/",solutionLink:"../../../solutions/0200-0299/count-primes"}],u=[{value:"Overview",id:"overview",level:2},{value:"Implementation",id:"implementation",level:2}];function h(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{SolutionAuthor:i,TabItem:n,Table:s,Tabs:a,TutorialAuthors:l}=t;return i||p("SolutionAuthor",!0),n||p("TabItem",!0),s||p("Table",!0),a||p("Tabs",!0),l||p("TutorialAuthors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l,{names:"@wingkwong"}),"\n",(0,o.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(t.p,{children:"The Sieve of Eratosthenes is an algorithm used to find all prime numbers up to a given limit. It works by iteratively marking as composite (i.e., not prime) the multiples of each prime, starting with 2. The algorithm starts by creating a list of all integers from 2 to the limit. It then marks the first number, 2, as prime and removes all multiples of 2 from the list. The next unmarked number in the list is 3, which is also prime, so it marks it and removes all multiples of 3 from the list. This process continues until all numbers in the list have been marked as prime or composite. The remaining unmarked numbers are the prime numbers up to the given limit."}),"\n",(0,o.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(a,{children:(0,o.jsxs)(n,{value:"cpp",label:"C++",children:[(0,o.jsx)(i,{name:"@wingkwong"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cpp",children:"vector<bool> sieveOfEratosthenes(const int n) {\n  vector<bool> isPrime(n + 1, true);\n  isPrime[0] = isPrime[1] = false;\n  for (int i = 2; i * i <= n; i++) {\n    if (isPrime[i]) {\n      for (int j = i * i; j <= n; j += i) {\n        isPrime[j] = false;\n      }\n    }\n  }\n  return isPrime;\n}\n"})})]})}),"\n","\n",(0,o.jsx)(s,{title:"Suggested Problems",data:m})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(96540);const o={},r=n.createContext(o);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);