<h2><a href="https://leetcode.com/problems/substring-with-concatenation-of-all-words/">30. Substring with Concatenation of All Words</a></h2><h3>Hard</h3><hr><div><p>You are given a string <code>s</code> and an array of strings <code>words</code> of <strong>the same length</strong>. Return&nbsp;all starting indices of substring(s) in <code>s</code>&nbsp;that is a concatenation of each word in <code>words</code> <strong>exactly once</strong>, <strong>in any order</strong>,&nbsp;and <strong>without any intervening characters</strong>.</p>

<p>You can return the answer in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> s = "barfoothefoobarman", words = ["foo","bar"]
<strong>Output:</strong> [0,9]
<strong>Explanation:</strong> Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
<strong>Output:</strong> []
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
<strong>Output:</strong> [6,9,12]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>
	<li><code>1 &lt;= words.length &lt;= 5000</code></li>
	<li><code>1 &lt;= words[i].length &lt;= 30</code></li>
	<li><code>s</code> and <code>words[i]</code> consist of lowercase English letters.</li>
</ul>
</div>