import Jk from './Jk'

// preventing the compile error for typescript
import { } from '@types/chrome'

// see deleted default context menus https://gitlab.com/pushmestudio/simple-copy-link/issues/4

class ChromeContext {
  constructor() {
    // Set up context menu tree at install time.
    chrome.contextMenus.create({ 'title': 'Copy as Markdown', 'id': 'slink_md', 'contexts': ['all'] })
    chrome.contextMenus.create({ 'title': 'Copy as Plaintext', 'id': 'slink_txt', 'contexts': ['all'] })
    chrome.contextMenus.onClicked.addListener(this.onClickHandler)
  }

  // The onClicked callback function.
  public onClickHandler(info, tab) {
    const jk = new Jk()
    jk.reportProgress(64)

    if (info.menuItemId === 'slink_md') {
      if(info.selectionText == null) {
        const titleAndUrl = '[' + tab.title + '](' + tab.url + ')'
        // send text to browser content message listener
        chrome.tabs.sendMessage(tab.id, {text: titleAndUrl})
      } else {
        const titleAndUrl = '[' + info.selectionText + '](' + tab.url + ')'
        chrome.tabs.sendMessage(tab.id, {text: titleAndUrl})
      }

    } else if (info.menuItemId === 'slink_txt') {
      if(info.selectionText == null) {
        const titleAndUrl = tab.title + ' ' + tab.url
        // send text to browser content message listener
        chrome.tabs.sendMessage(tab.id, {text: titleAndUrl})
      } else {
        const titleAndUrl = info.selectionText + ' ' + tab.url
        chrome.tabs.sendMessage(tab.id, {text: titleAndUrl})
      }
    }
  }
}

export default ChromeContext
