chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  switch (msg.type) {
    case 'page_action_show':
      if (sender.tab && sender.tab.id) chrome.pageAction.show(sender.tab.id);
      sendResponse();
      return;
  }
});
