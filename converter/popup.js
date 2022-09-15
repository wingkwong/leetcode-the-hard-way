let meta

chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
  if (tabs.length > 0 && tabs[0].id) {
    chrome.tabs.sendMessage(tabs[0].id, { type: 'extract' }, data => {
      meta = data
      renderMarkdown()
    })
  }
})

const tabs = document.querySelectorAll('.btn-tab')
const $btnMD = document.querySelector('.btn-md')
const $btnJSON = document.querySelector('.btn-json')
const $textarea = document.querySelector('.txt')

$btnMD.onclick = renderMarkdown
$btnJSON.onclick = renderJSON


function renderMarkdown () {
  tabs.forEach($tab => $tab.classList.remove('active'))
  $btnMD.classList.add('active')

  if (!meta) {
    $textarea.value = ''
    return
  }

  /* -------------------------------------------------------- *\
     Front Matter
  \* -------------------------------------------------------- */

  let frontMatter = ''

  frontMatter += `description: 'Author: @TBC | ${meta.href}'\n`
  frontMatter += `draft: 'true'\n`

  if (meta.topics.length > 0) {
    frontMatter += `tags: [`
    meta.topics.forEach(t => frontMatter += `${t.title}, `)
    frontMatter = frontMatter.slice(0, -2)
    frontMatter += `]\n`
  }

  if (frontMatter) {
    frontMatter = `---\n${frontMatter}---\n\n`
  }

  /* -------------------------------------------------------- *\
     Markdown Content
  \* -------------------------------------------------------- */

  let content = ''
  
  content += `# ${meta.title.replace('.', ' -')} (${meta.difficulty}) \n\n`

  if (meta.problem) {
    content += `## Problem Link\n\n`
    content += `${meta.href}\n\n`
    content += `## Problem Statement\n\n`
    content += `${meta.problem}\n\n`
    content += `## Approach 1: TBC\n\n`
    content += `<Tabs>\n`
    content += `<TabItem value="cpp" label="C++">\n`
    content += `<SolutionAuthor name="@wingkwong"/>\n\n`
    content += "```cpp\n"
    content += "\n"
    content += "```\n\n"
    content += `</TabItem>\n`
    content += `</Tabs>`
  }


  $textarea.value = frontMatter + content
  $textarea.focus()
  $textarea.select()
}

function renderJSON () {
  tabs.forEach($tab => $tab.classList.remove('active'))
  $btnJSON.classList.add('active')

  if (!meta) {
    $textarea.value = ''
    return
  }

  try {
    $textarea.value = JSON.stringify(meta, null, '  ')
    $textarea.focus()
    $textarea.select()
  } catch (e) {
    console.warn(e)
  }
}