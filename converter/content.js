chrome.runtime.sendMessage({ type: 'page_action_show' });

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  switch (msg.type) {
    case 'extract':
      sendResponse(extract());
      return;
  }
});

function extract() {
  return {
    title: extractTitle(),
    href: window.location.href,
    problem: extractProblem(),
    difficulty: extractDifficulty(),
    topics: extractTags('[class^=topic-tag__]'),
    questions: extractTags('[class^=question__] [class^=title__]'),
  };
}

/**
 * @return {string}
 */
function extractTitle() {
  const $title = document.querySelector("[data-cy='question-title']");
  if (!$title) {
    return '';
  }
  return ($title.textContent || '').trim();
}

/**
 * @return {string}
 */
function extractProblem() {
  const $desp = document.querySelector(
    '[data-key=description-content] [class^=content__]',
  );
  if (!$desp) {
    return '';
  }

  const $problem = document.createElement('div');
  $problem.innerHTML = $desp.innerHTML;

  // pre first. clean any tag inside pre.
  $problem.querySelectorAll('pre').forEach(($el) => {
    const content = ($el.textContent || '').trim();
    $el.outerHTML = content ? `\n\n\`\`\`\n${content}\n\`\`\`\n\n` : '';
  });
  [
    ...$problem.querySelectorAll('strong'),
    ...$problem.querySelectorAll('b'),
  ].forEach(($el) => {
    const content = ($el.textContent || '').trim();
    $el.outerHTML = content ? `**${content}**` : '';
  });
  [
    ...$problem.querySelectorAll('em'),
    ...$problem.querySelectorAll('i'),
  ].forEach(($el) => {
    const content = ($el.textContent || '').trim();
    $el.outerHTML = content ? `*${content}*` : '';
  });

  $problem.querySelectorAll('code').forEach(($el) => {
    const content = ($el.textContent || '').trim();
    $el.outerHTML = content ? `\`${content}\`` : '';
  });

  $problem.querySelectorAll('a').forEach(($el) => {
    const content = ($el.textContent || '').trim();
    const href = ($el.getAttribute('href') || '').replace(
      /^\//,
      'https://leetcode.com/',
    );
    $el.outerHTML = `[${content}](${href})`;
  });

  $problem.querySelectorAll('ul').forEach(($ul) => {
    let content = '';
    $ul.querySelectorAll(':scope > li').forEach(($li) => {
      const liContent = ($li.textContent || '').trim();
      if (liContent) {
        content += `- ${liContent}\n`;
      }
    });
    $ul.outerHTML = content;
  });

  $problem.querySelectorAll('ol').forEach(($ol) => {
    let content = '';
    $ol.querySelectorAll(':scope > li').forEach(($li, i) => {
      const liContent = ($li.textContent || '').trim();
      if (liContent) {
        content += `${i + 1}. ${liContent}\n`;
      }
    });
    $ol.outerHTML = content;
  });

  $problem.querySelectorAll('p').forEach(($el) => {
    const content = ($el.textContent || '').trim();
    $el.outerHTML = content ? `\n\n${content}\n\n` : '';
  });

  $problem.querySelectorAll('div').forEach(($el) => {
    const content = ($el.textContent || '').trim();
    $el.outerHTML = content ? `\n\n${content}\n\n` : '';
  });

  return ($problem.textContent || '').replace(/\n\s*\n/g, '\n\n').trim();
}

/**
 * @return {string}
 */
function extractDifficulty() {
  const $difficulty = document.querySelector('[diff]');
  if (!$difficulty) {
    return '';
  }
  return ($difficulty.textContent || '').trim();
}

/**
 * @param {string} selector
 * @return {Array.<{{ title: string, href: string }}>}
 */
function extractTags(selector) {
  return [...document.querySelectorAll(selector)]
    .map(($a) => {
      const title = ($a.textContent || '').trim();
      const href = ($a.getAttribute('href') || '').replace(
        /^\//,
        'https://leetcode.com/',
      );
      return title && href ? { title, href } : null;
    })
    .filter(Boolean);
}
