// Context Menus API: https://developer.chrome.com/docs/extensions/reference/contextMenus/
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "slink_md",
    title: "Copy as Markdown (Alt+M)",
    contexts: ["all"]
  });
  chrome.contextMenus.create({
    id: "slink_txt",
    title: "Copy as Plaintext (Alt+P)",
    contexts: ["all"]
  });
});

// Click event listener for context menu
chrome.contextMenus.onClicked.addListener((info, tab) => {
  handleCopy(info.menuItemId, tab);
});

// Command event listener for keyboard shortcuts
chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      const tab = tabs[0];
      let menuItemId = '';
      if (command === "copy_as_markdown") {
        menuItemId = "slink_md";
      } else if (command === "copy_as_plaintext") {
        menuItemId = "slink_txt";
      }
      handleCopy(menuItemId, tab);
    }
  });
});

// Function to handle copying text to clipboard
function handleCopy(menuItemId, tab) {
  let textToCopy = '';
  if (menuItemId === "slink_md" && tab) {
    textToCopy = `[${tab.title}](${tab.url})`;
  } else if (menuItemId === "slink_txt" && tab) {
    textToCopy = `${tab.title} ${tab.url}`;
  }
  // workaround for clipboard copying in Chrome extensions
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: copyToClipboard,
    args: [textToCopy]
  });
}

// Function to copy text to clipboard
function copyToClipboard(text) {
  if (!document.hasFocus()) {
    window.focus();
  }

  navigator.clipboard.writeText(text).then(() => {
    console.debug('Text copied to clipboard');
  }).catch(e => {
    console.error('Could not copy text: ', e);
  });
}
